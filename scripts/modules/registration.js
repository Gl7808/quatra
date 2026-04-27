class RegistrationV2 {
    constructor() {
        this.key = 'teamRegData_v2';
        this.data = this.load();
        this.currentFormType = null;
        this.editIndex = null;
        this.init();
    }

    load() {
        const def = { game: 'cs2', teamName: '', logo: '', captain: null, players: [] };
        try { return { ...def, ...JSON.parse(localStorage.getItem(this.key)) }; }
        catch { return def; }
    }

    save() { localStorage.setItem(this.key, JSON.stringify(this.data)); }

    init() {
        // Восстановление состояния
        this.renderGameSwitcher();
        document.getElementById('teamNameInput').value = this.data.teamName;
        if (this.data.logo) this.updateLogoUI();
        this.renderCaptain();
        this.renderPlayers();
        this.checkSubmit();

        // Листенеры
        document.getElementById('teamNameInput').addEventListener('input', e => {
            this.data.teamName = e.target.value.trim(); this.save(); this.checkSubmit();
        });

        document.querySelectorAll('.game-switcher__btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.game-switcher__btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.data.game = btn.dataset.game; this.save();
            });
        });

        document.getElementById('logoField').addEventListener('click', () => document.getElementById('logoInput').click());
        document.getElementById('logoInput').addEventListener('change', this.handleLogo.bind(this));

        document.getElementById('captainSlot').addEventListener('click', () => this.openModal('captain'));
        document.getElementById('addPlayerBtn').addEventListener('click', () => this.openModal('player'));
        document.getElementById('submitBtn').addEventListener('click', this.submit.bind(this));

        // Модалка
        document.getElementById('modalClose').addEventListener('click', this.closeModal.bind(this));
        document.getElementById('modalOverlay').addEventListener('click', e => {
            if (e.target.id === 'modalOverlay') this.closeModal();
        });
    }

    renderGameSwitcher() {
        document.querySelectorAll('.game-switcher__btn').forEach(b => {
            b.classList.toggle('active', b.dataset.game === this.data.game);
        });
    }

    handleLogo(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
            this.data.logo = ev.target.result;
            this.save(); this.updateLogoUI(); this.checkSubmit();
        };
        reader.readAsDataURL(file);
    }

    updateLogoUI() {
        const field = document.getElementById('logoField');
        const img = field.querySelector('.team-logo-field__img');
        img.src = this.data.logo;
        field.classList.add('has-logo');
    }

    renderCaptain() {
        const slot = document.getElementById('captainSlot');
        if (this.data.captain) {
            slot.innerHTML = `
        <div class="player-card" onclick="app.openModal('captain')">
          <span class="player-card__nick">
<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z" fill="#000000"></path> </g></svg>
${this.data.captain.nickname || 'Капитан'}</span>
          <span style="color:var(--color-dark-40)">редактировать</span>
        </div>`;
        } else {
            slot.innerHTML = `<button class="slot-btn" data-type="captain">+ Добавить капитана</button>`;
        }
    }

    renderPlayers() {
        const list = document.getElementById('playersList');
        list.innerHTML = '';
        this.data.players.forEach((p, i) => {
            const card = document.createElement('div');
            card.className = 'player-card';
            card.innerHTML = `
        <span class="player-card__nick">${p.nickname || `Игрок ${i+1}`}</span>
        <button class="player-card__remove" data-idx="${i}">удалить</button>
      `;
            card.addEventListener('click', e => {
                if (!e.target.classList.contains('player-card__remove')) this.openModal('player', i);
            });
            card.querySelector('.player-card__remove').addEventListener('click', e => {
                e.stopPropagation();
                this.data.players.splice(i, 1); this.save(); this.renderPlayers(); this.checkSubmit();
            });
            list.appendChild(card);
            // GSAP анимация появления
            gsap.from(card, { opacity: 0, y: 10, duration: 0.25, ease: 'power2.out' });
        });
    }

    checkSubmit() {
        const btn = document.getElementById('submitBtn');
        const valid = this.data.teamName && this.data.logo && this.data.captain && this.data.players.length > 0;
        btn.style.display = valid ? 'block' : 'none';
    }

    openModal(type, editIdx = null) {
        this.currentFormType = type;
        this.editIndex = editIdx;
        const modal = document.getElementById('modalOverlay');
        const title = document.getElementById('modalTitle');
        const form = document.getElementById('modalForm');

        title.textContent = type === 'captain' ? (this.data.captain ? 'Редактировать капитана' : 'Данные капитана') : (editIdx !== null ? 'Редактировать игрока' : 'Данные игрока');

        const fields = type === 'captain'
            ? ['name','surname','nickname','dob','phone','faceit','steam','social']
            : ['nickname','name','dob','faceit','steam'];

        const labels = { name:'Имя', surname:'Фамилия', nickname:'Никнейм', dob:'Дата рождения', phone:'Телефон', faceit:'Faceit', steam:'Steam', social:'VK / TG' };
        const data = type === 'captain' ? this.data.captain : (editIdx !== null ? this.data.players[editIdx] : null);

        form.innerHTML = fields.map(f => `
      <input type="${f==='dob'?'date':f==='phone'?'tel':'text'}" name="${f}" 
             placeholder="${labels[f]}" required value="${data?.[f] || ''}">
    `).join('') + '<button type="submit">Сохранить</button>';

        form.onsubmit = (e) => { e.preventDefault(); this.saveModal(form); };

        modal.classList.add('active');
        gsap.fromTo('#modalBox', { opacity: 0, scale: 0.95, y: 10 }, { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: 'power2.out' });
    }

    saveModal(form) {
        const fd = new FormData(form);
        const obj = Object.fromEntries(fd);

        if (this.currentFormType === 'captain') {
            this.data.captain = obj;
            this.renderCaptain();
        } else {
            if (this.editIndex !== null) this.data.players[this.editIndex] = obj;
            else this.data.players.push(obj);
            this.renderPlayers();
        }
        this.save(); this.closeModal(); this.checkSubmit();
    }

    closeModal() {
        gsap.to('#modalBox', {
            opacity: 0, scale: 0.95, y: 10, duration: 0.25, ease: 'power2.in',
            onComplete: () => document.getElementById('modalOverlay').classList.remove('active')
        });
    }

    async submit() {
        const btn = document.getElementById('submitBtn');
        btn.disabled = true; btn.textContent = 'Отправка...';

        try {
            const res = await fetch('send_registration.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.data)
            });
            const json = await res.json();
            if (json.success) {
                alert('Заявка отправлена!');
                localStorage.removeItem(this.key);
                location.reload();
            } else throw new Error(json.message);
        } catch (e) {
            alert('Ошибка: ' + e.message);
        } finally {
            btn.disabled = false; btn.textContent = 'Отправить заявку';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => window.app = new RegistrationV2());