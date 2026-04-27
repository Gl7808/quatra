<?php
// send_registration.php

// 1. Заголовки ответа
header('Content-Type: application/json; charset=utf-8');

// 2. Чтение JSON
$rawInput = file_get_contents('php://input');
if (empty($rawInput)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Пустой запрос']);
    exit;
}

$data = json_decode($rawInput, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Некорректный формат JSON']);
    exit;
}

// 3. Валидация
$errors = [];
$teamName = trim($data['teamName'] ?? '');
$game     = trim($data['game'] ?? '');
$captain  = $data['captain'] ?? null;
$players  = $data['players'] ?? [];
$logo     = $data['logo'] ?? '';

if ($teamName === '')         $errors[] = 'Укажите название команды';
if ($game === '')             $errors[] = 'Выберите игру';
if (!$captain)                $errors[] = 'Данные капитана отсутствуют';
if (empty($captain['nickname'])) $errors[] = 'Укажите никнейм капитана';
if (empty($captain['steam']))    $errors[] = 'Укажите Steam капитана';
if (!is_array($players) || count($players) === 0) $errors[] = 'Добавьте хотя бы одного игрока';

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode('; ', $errors)]);
    exit;
}

// 4. Санитизация
function clean($val) {
    return htmlspecialchars(trim($val ?? ''), ENT_QUOTES, 'UTF-8');
}

// 5. Обработка логотипа (сохранение на сервер)
$logoUrl = 'Не загружен';
if (!empty($logo) && strpos($logo, 'data:image/') === 0) {
    try {
        $uploadDir = __DIR__ . '/uploads/logos/';
        if (!is_dir($uploadDir)) mkdir($uploadDir, 0755, true);

        $base64Data = substr($logo, strpos($logo, ',') + 1);
        $imageData = base64_decode($base64Data, true);

        if ($imageData !== false && is_writable($uploadDir)) {
            // Определяем расширение
            $ext = 'png';
            if (preg_match('/data:image\/(\w+);base64,/', $logo, $m)) $ext = $m[1];

            $fileName = 'team_' . uniqid() . '.' . $ext;
            $filePath = $uploadDir . $fileName;

            file_put_contents($filePath, $imageData);

            // ⚠️ ЗАМЕНИТЕ НА СВОЙ ДОМЕН ИЛИ ОТНОСИТЕЛЬНЫЙ ПУТЬ
            $logoUrl = '/uploads/logos/' . $fileName;
        }
    } catch (Exception $e) {
        $logoUrl = 'Ошибка сохранения логотипа: ' . clean($e->getMessage());
    }
}

// 6. Формирование письма
$to      = 'your@email.com'; // ⚠️ ЗАМЕНИТЬ НА СВОЮ ПОЧТУ
$subject = 'Регистрация: ' . clean($teamName) . ' | ' . clean($game);

$body  = "=== НОВАЯ РЕГИСТРАЦИЯ ===\n";
$body .= "📅 Дата: " . date('d.m.Y H:i:s') . "\n";
$body .= "🎮 Игра: " . clean($game) . "\n";
$body .= "🏆 Команда: " . clean($teamName) . "\n";
$body .= "🖼 Логотип: " . $logoUrl . "\n\n";

$body .= "👑 КАПИТАН:\n";
$body .= "• Имя: " . clean($captain['name'] ?? '-') . "\n";
$body .= "• Фамилия: " . clean($captain['surname'] ?? '-') . "\n";
$body .= "• Никнейм: " . clean($captain['nickname']) . "\n";
$body .= "• ДР: " . clean($captain['dob'] ?? '-') . "\n";
$body .= "• Телефон: " . clean($captain['phone'] ?? '-') . "\n";
$body .= "• Faceit: " . clean($captain['faceit'] ?? '-') . "\n";
$body .= "• Steam: " . clean($captain['steam']) . "\n";
$body .= "• Соцсети: " . clean($captain['social'] ?? '-') . "\n\n";

$body .= "🎮 ИГРОКИ (" . count($players) . "):\n";
foreach ($players as $i => $p) {
    $body .= ($i + 1) . ". " . clean($p['nickname'] ?? "Игрок") . "\n";
    $body .= "   Имя: " . clean($p['name'] ?? '-') . "\n";
    $body .= "   ДР: " . clean($p['dob'] ?? '-') . "\n";
    $body .= "   Faceit: " . clean($p['faceit'] ?? '-') . "\n";
    $body .= "   Steam: " . clean($p['steam'] ?? '-') . "\n\n";
}

// 7. Заголовки письма
$headers  = "From: noreply@yourdomain.com\r\n"; // ⚠️ ЗАМЕНИТЬ
$headers .= "Reply-To: noreply@yourdomain.com\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// 8. Отправка
if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Заявка успешно отправлена']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Ошибка отправки письма. Проверьте настройки mail() на сервере.']);
}