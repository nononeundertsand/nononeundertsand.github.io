// Homepage typewriter effect.
const textElement = document.getElementById('typewriter-text');
if (textElement) {
    const texts = [
        "Researching in AI & Distributed Systems...",
        "Coding with Passion & Logic...",
        "Exploring the Future of Technology..."
    ];
    let count = 0;
    let index = 0;

    (function type() {
        if (count === texts.length) count = 0;

        const currentText = texts[count];
        const letter = currentText.slice(0, ++index);
        textElement.textContent = letter;

        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000);
        } else {
            setTimeout(type, 80);
        }
    })();
}

// Star particles and mouse connection effect.
const canvas = document.getElementById('bg-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width;
    let height;
    let particles = [];
    const mouse = { x: null, y: null };

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
    }

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2;
            this.color = `rgba(170, 170, 170, ${Math.random() * 0.5 + 0.2})`;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        const particleCount = Math.min(300, Math.floor(width * height / 15000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    });
    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((particle) => {
            particle.update();
            particle.draw();

            if (mouse.x == null) return;

            const dx = mouse.x - particle.x;
            const dy = mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(0, 173, 181, ${1 - distance / 150})`;
                ctx.lineWidth = 1;
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.stroke();
            }
        });

        requestAnimationFrame(animate);
    }

    resize();
    animate();
}

// Replace this URL with the final official PDF link when available.
const pdfLink = document.getElementById('paper1-pdf-link');
if (pdfLink) {
    // pdfLink.href = "https://example.com/papers/FedPDR_IWQoS2026.pdf";
}
