// ============================================================
// FISHY CS2 — ULTRA PREMIUM SCRIPTS v8.0
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  // ============================================================
  // 1. PARTICLE NETWORK
  // ============================================================
  const canvas = document.getElementById('particles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    let mouse = { x: null, y: null, radius: 160 };

    function initCanvas() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    initCanvas();

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        initCanvas();
        initParticles();
      }, 200);
    });

    if (!isTouch) {
      window.addEventListener('mousemove', (e) => { mouse.x = e.x; mouse.y = e.y; });
      window.addEventListener('mouseout', () => { mouse.x = null; mouse.y = null; });
    }

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 1.4 + 0.4;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 25) + 1;
        this.vx = (Math.random() - 0.5) * 0.25;
        this.vy = (Math.random() - 0.5) * 0.25;
        this.opacity = Math.random() * 0.4 + 0.2;
      }
      draw() {
        ctx.fillStyle = `rgba(56, 152, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > W) this.vx = -this.vx;
        if (this.y < 0 || this.y > H) this.vy = -this.vy;

        if (mouse.x !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            let force = (mouse.radius - dist) / mouse.radius;
            this.x -= (dx / dist) * force * this.density * 0.6;
            this.y -= (dy / dist) * force * this.density * 0.6;
          } else {
            this.x += (this.baseX - this.x) * 0.02;
            this.y += (this.baseY - this.y) * 0.02;
          }
        }
      }
    }

    function connect() {
      const maxDist = isMobile ? 8000 : 18000;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let dist = dx * dx + dy * dy;
          if (dist < maxDist) {
            let opacity = (1 - dist / maxDist) * 0.12;
            ctx.strokeStyle = `rgba(56, 152, 255, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    function initParticles() {
      particles = [];
      let count = Math.min((W * H) / (isMobile ? 45000 : 18000), 150);
      for (let i = 0; i < count; i++) particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => { p.update(); p.draw(); });
      connect();
      requestAnimationFrame(animate);
    }

    initParticles();
    animate();
  }

  // ============================================================
  // 2. NAV
  // ============================================================
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks') || document.querySelector('.nav-links');

  // Scroll effect
  if (nav) {
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      lastScroll = window.scrollY;
    }, { passive: true });
  }

  // Mobile toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ============================================================
  // 3. SCROLL REVEAL
  // ============================================================
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => obs.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // ============================================================
  // 4. ANIMATED COUNTERS
  // ============================================================
  const counters = document.querySelectorAll('.stat-number[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const cObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.count);
          const prefix = el.dataset.prefix || '';
          const suffix = el.dataset.suffix || '';
          const duration = 2200;
          const start = performance.now();

          function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = Math.round(eased * target);
            el.textContent = prefix + current.toLocaleString('es-AR') + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          cObs.unobserve(el);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(c => cObs.observe(c));
  }

  // ============================================================
  // 5. SMOOTH SCROLL
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const id = this.getAttribute('href');
      if (id === '#' || id === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // ============================================================
  // 6. CURSOR GLOW
  // ============================================================
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && !isTouch) {
    let mx = 0, my = 0, gx = 0, gy = 0;
    document.addEventListener('mousemove', (e) => {
      mx = e.clientX; my = e.clientY;
      if (!cursorGlow.classList.contains('active')) cursorGlow.classList.add('active');
    });
    document.addEventListener('mouseleave', () => cursorGlow.classList.remove('active'));

    function glowLoop() {
      gx += (mx - gx) * 0.06;
      gy += (my - gy) * 0.06;
      cursorGlow.style.left = gx + 'px';
      cursorGlow.style.top = gy + 'px';
      requestAnimationFrame(glowLoop);
    }
    glowLoop();
  }

  // ============================================================
  // 7. TILT ON CARDS (Desktop only)
  // ============================================================
  if (!isTouch) {
    const tiltCards = document.querySelectorAll('.stat-box, .step-card, .review-card');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const tiltX = ((y - cy) / cy) * -3;
        const tiltY = ((x - cx) / cx) * 3;
        card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // ============================================================
  // 8. ACTIVE NAV HIGHLIGHT
  // ============================================================
  const sections = document.querySelectorAll('section[id], main[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  if (sections.length && navAnchors.length) {
    const navObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navAnchors.forEach(a => {
            a.style.color = '';
            if (a.getAttribute('href') === '#' + id) {
              a.style.color = 'var(--accent)';
            }
          });
        }
      });
    }, { threshold: 0.15, rootMargin: '-80px 0px -50% 0px' });
    sections.forEach(s => navObs.observe(s));
  }

});