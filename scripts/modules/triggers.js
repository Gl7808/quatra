ScrollTrigger.create({
    onUpdate: (self) => {
        const blur = Math.min(Math.abs(self.getVelocity()) / 200, 8);
        gsap.to(".text", { filter: `blur(${blur}px)`, duration: 0.1 });
    }
});


gsap.from(".grid-item", {
    scale: 0, opacity: 0,
    duration: 1.4,
    stagger: { amount: 0.6, from: "center" },
    ease: "back.out(1.7)",
    scrollTrigger: ".grid"
});

gsap.to(".gsap__img", {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
    duration: 1.2,
    ease: "power3.inOut",
    scrollTrigger: ".gsap__img"
});

const path = document.querySelector("path");
const len = path.getTotalLength();
gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
gsap.to(path, {
    strokeDashoffset: 0,
    duration: 1.5,
    scrollTrigger: path
});


