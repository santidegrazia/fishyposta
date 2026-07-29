// ============================================================
// FISHY CS2 — ULTRA PREMIUM SCRIPTS v6.0
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // 🌐 TRADUCCIONES / MULTI-LANGUAGE (ES / EN)
  // ============================================================
  const translations = {
    es: {
      nav_planes: "Planes",
      nav_funciones: "Funciones",
      nav_stats: "Stats",
      nav_faq: "FAQ",
      nav_badge: "Undetected",
      nav_discord: "Unirse al Discord",
      hero_eyebrow: "Cheat Privado · CS2 2026",
      hero_glow: "CS2 Cheat.",
      hero_desc: "Wallhack, Aimbot, ESP y Radar Hack para CS2. Mirá a través de las paredes, lockeá enemigos con precisión perfecta y dominá cada partida — todo sin riesgo de ban.",
      check_1: "Indetectable por VAC & Overwatch",
      check_2: "Actualizaciones automáticas post-parche",
      check_3: "Soporte técnico 24/7 por Discord",
      check_4: "Entrega inmediata al comprar",
      btn_buy_discord: "Comprar por Discord",
      btn_see_plans: "Ver planes y precios",
      trust_1: "0 bans en 2026",
      trust_2: "Soporte 24/7",
      trust_3: "Entrega inmediata",
      product_more: "// Más productos en desarrollo — estate atento.",
      pricing_eyebrow: "Planes",
      pricing_title: "Elegí tu plan.<br>Empezá a dominar.",
      pricing_sub: "Todos los planes incluyen acceso completo a todos los módulos, actualizaciones automáticas y soporte 24/7 por Discord.",
      plan_weekly_title: "Semanal",
      plan_weekly_period: "7 días de acceso",
      plan_monthly_popular: "✨ Más Popular",
      plan_monthly_title: "Mensual",
      plan_monthly_period: "30 días de acceso",
      plan_lifetime_title: "Lifetime",
      plan_lifetime_period: "Acceso de por vida",
      feature_all_modules: "Todos los módulos",
      feature_wall_esp: "Wallhack + ESP",
      feature_aim_trigger: "Aimbot + Triggerbot",
      feature_updates: "Actualizaciones incluidas",
      feature_discord_sup: "Soporte por Discord",
      feature_radar_bhop: "Radar Hack + Bhop",
      feature_priority_sup: "Soporte prioritario",
      feature_unlimited: "Acceso ilimitado",
      feature_all_updates: "Todas las actualizaciones",
      feature_vip_sup: "Soporte VIP prioritario",
      feature_betas: "Acceso a betas",
      feature_role: "Rol exclusivo en Discord",
      pricing_note: "// Todas las compras se realizan a través de nuestro Discord — hablás con un vendedor y te entregamos al instante.",
      stat_users: "Usuarios activos",
      stat_bans: "Bans en 2026",
      stat_update: "Update post-parche",
      stat_satisfaction: "Satisfacción",
      strip_users: "usuarios activos",
      strip_bans: "bans reportados en 2026",
      strip_headshot: "headshot promedio",
      strip_kd: "K/D promedio",
      strip_winrate: "win rate",
      strip_updatetime: "tiempo de actualización post-parche",
      strip_satisfaction: "satisfacción de usuarios",
      strip_instant: "Descarga inmediata tras el pago",
      features_eyebrow: "Funciones",
      features_title: "Seis módulos.<br>Ventaja total.",
      features_sub: "Cada módulo se activa con una tecla desde el menú in-game. Sin salir de la partida, sin complicaciones.",
      f1_title: "Wallhack / ESP",
      f1_desc: "Ves a todos los jugadores a través de paredes. Cajas ESP, esqueletos, líneas de visión, vida, nombre y arma — todo configurable en tiempo real.",
      f2_title: "Aimbot",
      f2_desc: "Lockeo automático al enemigo más cercano a tu crosshair. FOV, smoothing y hueso-target ajustables para que parezca completamente humano.",
      f3_title: "Triggerbot",
      f3_desc: "Dispara automáticamente cuando tu mira pasa sobre un enemigo. Delay configurable para simular reacción humana perfecta.",
      f4_title: "Radar Hack",
      f4_desc: "Muestra la posición de todos los enemigos en el minimap en tiempo real, incluso si no hacen ruido ni están visibles.",
      f5_title: "Bhop & Auto-Strafe",
      f5_desc: "Bunny hop perfecto con strafe automático. Moverse por el mapa a máxima velocidad sin perder precisión de disparo.",
      f6_title: "Anti-Detección",
      f6_desc: "Bypass de VAC y Overwatch integrado. Se actualiza automáticamente después de cada parche de CS2 en menos de 24 horas.",
      stats_eyebrow: "Estadísticas",
      stats_title: "Números, no promesas.",
      stats_sub: "Promedio real de nuestros usuarios activos en las últimas 48 horas de juego con Fishy activado.",
      bench_without: "Sin Fishy",
      bench_with: "Con Fishy",
      bench_disclaimer: "Estadísticas promedio de usuarios activos con configuración predeterminada de Fishy. Los resultados pueden variar según el nivel de las partidas y la configuración elegida.",
      trust_eyebrow: "Seguridad",
      trust_title: "Jugá tranquilo.<br>Nosotros te cubrimos.",
      t1_title: "Bypass de VAC integrado",
      t1_desc: "Nuestro loader usa técnicas de ofuscación avanzadas para evitar la detección por Valve Anti-Cheat.<br><strong style=\"color:var(--teal); display: inline-block; margin-top: 0.4rem; white-space: nowrap;\">0 bans reportados en 2026.</strong>",
      t2_title: "Actualizaciones en <24h",
      t2_desc: "Cuando Valve lanza un parche, nuestro equipo actualiza Fishy en menos de 24 horas. Recibís la update automáticamente sin hacer nada.",
      t3_title: "Modo \"Legit\" incluido",
      t3_desc: "Configuraciones prediseñadas que hacen que el cheat se vea completamente natural en Overwatch. Smoothing humano, FOV bajo y delays realistas.",
      req_eyebrow: "Instalación",
      req_title: "Listo en menos<br>de dos minutos.",
      r1_title: "Contactanos en Discord",
      r1_desc: "Entrá a nuestro Discord, elegí tu plan, hablás con un vendedor y te entregamos el loader al instante.",
      r2_title: "Abrí el loader",
      r2_desc: "Ejecutá Fishy <em>antes</em> de abrir CS2. El loader inyecta todo automáticamente — sin pasos extras.",
      r3_title: "Activá en partida",
      r3_desc: "Entrá a una partida y presioná <strong style=\"color:var(--teal);font-family:var(--font-mono)\">INSERT</strong> para abrir el menú. Activá los módulos que quieras.",
      req_specs: "// Requiere Windows 10 / 11 (64 bits) · CS2 instalado · Desactivar Windows Defender durante la inyección",
      faq_eyebrow: "Preguntas frecuentes",
      faq_title: "Todo lo que preguntás<br>antes de unirte.",
      q1_summary: "¿Es realmente indetectable?",
      q1_desc: "Sí. Fishy usa un sistema de inyección que evita la detección por VAC y Overwatch. Desde su lanzamiento en 2026, <strong style=\"color:var(--teal)\">no hubo un solo ban reportado</strong> entre nuestros usuarios con la configuración predeterminada.",
      q2_summary: "¿Puedo configurar el aimbot para que se vea legit?",
      q2_desc: "Sí. Podés ajustar el FOV (campo de visión del aimbot), el smoothing (suavidad del movimiento), el hueso objetivo y agregar un delay de reacción humano. Tenemos presets <em>\"Legit\"</em> y <em>\"Rage\"</em> listos para usar.",
      q3_summary: "¿Se actualiza después de cada parche de CS2?",
      q3_desc: "Sí. Nuestro equipo actualiza Fishy en menos de 24 horas después de cada update de CS2. La actualización se descarga automáticamente desde el loader — no tenés que hacer nada.",
      q4_summary: "¿Tengo que desactivar el antivirus?",
      q4_desc: "Sí, Windows Defender y cualquier antivirus de terceros deben estar desactivados durante la inyección. Esto es normal — el loader necesita acceder a la memoria del juego para funcionar.",
      q5_summary: "¿Qué pasa si me banean?",
      q5_desc: "En el caso extremadamente improbable de un ban, contactanos por Discord con tu comprobante de pago y te damos acceso a una nueva key sin costo adicional. Tu inversión está protegida.",
      q6_summary: "¿Funciona en todos los modos de CS2?",
      q6_desc: "Sí, Fishy funciona en Competitivo, Deathmatch, Premier y todos los demás modos. El Modo \"Legit\" está especialmente optimizado para partidas de Premier donde Overwatch es más activo.",
      q7_summary: "¿Cómo compro Fishy?",
      q7_desc: "Todas las compras se realizan a través de nuestro <strong style=\"color:var(--teal)\">servidor de Discord</strong>. Entrás al servidor, elegís tu plan (Semanal, Mensual o Lifetime), hablás con un vendedor y te entregamos el loader al instante. Es rápido, seguro y con soporte directo.",
      banner_title: "¿Listo para dominar CS2?<br>Unite a la comunidad.",
      banner_desc: "+50 usuarios activos confían en Fishy. Comprá tu plan, recibí soporte 24/7 y empezá a ganar — todo desde nuestro Discord.",
      banner_btn: "Unirse al Discord — discord.gg/fishycs",
      footer_support: "Discord Support",
      footer_legal_1: "Fishy es un producto único creado para la comunidad. No está afiliado a Valve Corporation ni a Counter-Strike 2.",
      footer_legal_2: "© 2026 Fishy. Todos los derechos reservados."
    },
    en: {
      nav_planes: "Plans",
      nav_funciones: "Features",
      nav_stats: "Stats",
      nav_faq: "FAQ",
      nav_badge: "Undetected",
      nav_discord: "Join Discord",
      hero_eyebrow: "Private Cheat · CS2 2026",
      hero_glow: "CS2 Cheat.",
      hero_desc: "Wallhack, Aimbot, ESP, and Radar Hack for CS2. See through walls, lock onto enemies with perfect precision, and dominate every match — all with zero ban risk.",
      check_1: "Undetectable by VAC & Overwatch",
      check_2: "Automatic post-patch updates",
      check_3: "24/7 technical support via Discord",
      check_4: "Instant delivery upon purchase",
      btn_buy_discord: "Buy via Discord",
      btn_see_plans: "View plans & pricing",
      trust_1: "0 bans in 2026",
      trust_2: "24/7 Support",
      trust_3: "Instant delivery",
      product_more: "// More products in development — stay tuned.",
      pricing_eyebrow: "Plans",
      pricing_title: "Choose your plan.<br>Start dominating.",
      pricing_sub: "All plans include full access to all modules, automatic updates, and 24/7 Discord support.",
      plan_weekly_title: "Weekly",
      plan_weekly_period: "7 days access",
      plan_monthly_popular: "✨ Most Popular",
      plan_monthly_title: "Monthly",
      plan_monthly_period: "30 days access",
      plan_lifetime_title: "Lifetime",
      plan_lifetime_period: "Lifetime access",
      feature_all_modules: "All modules",
      feature_wall_esp: "Wallhack + ESP",
      feature_aim_trigger: "Aimbot + Triggerbot",
      feature_updates: "Updates included",
      feature_discord_sup: "Discord support",
      feature_radar_bhop: "Radar Hack + Bhop",
      feature_priority_sup: "Priority support",
      feature_unlimited: "Unlimited access",
      feature_all_updates: "All updates",
      feature_vip_sup: "Priority VIP support",
      feature_betas: "Access to betas",
      feature_role: "Exclusive Discord role",
      pricing_note: "// All purchases are completed through our Discord — speak with a seller and receive instant delivery.",
      stat_users: "Active users",
      stat_bans: "Bans in 2026",
      stat_update: "Post-patch update",
      stat_satisfaction: "Satisfaction",
      strip_users: "active users",
      strip_bans: "reported bans in 2026",
      strip_headshot: "average headshot",
      strip_kd: "average K/D",
      strip_winrate: "win rate",
      strip_updatetime: "post-patch update time",
      strip_satisfaction: "user satisfaction",
      strip_instant: "Instant download after payment",
      features_eyebrow: "Features",
      features_title: "Six modules.<br>Total advantage.",
      features_sub: "Each module is toggled with a single key from the in-game menu. Without leaving the match, zero hassle.",
      f1_title: "Wallhack / ESP",
      f1_desc: "See all players through walls. ESP boxes, skeletons, snaplines, health, name, and weapon — all real-time configurable.",
      f2_title: "Aimbot",
      f2_desc: "Automatic lock-on to the enemy closest to your crosshair. Adjustable FOV, smoothing, and bone target to look 100% human.",
      f3_title: "Triggerbot",
      f3_desc: "Fires automatically when your crosshair passes over an enemy. Configurable delay to simulate perfect human reaction.",
      f4_title: "Radar Hack",
      f4_desc: "Shows the position of all enemies on the minimap in real time, even if they make no sound or aren't visible.",
      f5_title: "Bhop & Auto-Strafe",
      f5_desc: "Perfect bunny hop with automatic strafe. Move across the map at top speed without losing shooting precision.",
      f6_title: "Anti-Detection",
      f6_desc: "Integrated VAC & Overwatch bypass. Updates automatically after every CS2 patch in under 24 hours.",
      stats_eyebrow: "Statistics",
      stats_title: "Numbers, not promises.",
      stats_sub: "Real average of active users in the last 48 hours of gameplay with Fishy enabled.",
      bench_without: "Without Fishy",
      bench_with: "With Fishy",
      bench_disclaimer: "Average stats of active users with default Fishy settings. Results may vary depending on match level and configuration.",
      trust_eyebrow: "Security",
      trust_title: "Play with peace of mind.<br>We've got you covered.",
      t1_title: "Integrated VAC Bypass",
      t1_desc: "Our loader uses advanced obfuscation techniques to prevent detection by Valve Anti-Cheat.<br><strong style=\"color:var(--teal); display: inline-block; margin-top: 0.4rem; white-space: nowrap;\">0 reported bans in 2026.</strong>",
      t2_title: "Updates in <24h",
      t2_desc: "When Valve releases a patch, our team updates Fishy in under 24 hours. You receive the update automatically.",
      t3_title: "Integrated \"Legit\" Mode",
      t3_desc: "Preset configurations that make the cheat look completely natural in Overwatch. Human smoothing, low FOV, and realistic delays.",
      req_eyebrow: "Installation",
      req_title: "Ready in under<br>two minutes.",
      r1_title: "Contact us on Discord",
      r1_desc: "Join our Discord, choose your plan, speak with a seller, and get your loader delivered instantly.",
      r2_title: "Open the loader",
      r2_desc: "Run Fishy <em>before</em> launching CS2. The loader automatically injects everything — no extra steps.",
      r3_title: "Activate in game",
      r3_desc: "Join a match and press <strong style=\"color:var(--teal);font-family:var(--font-mono)\">INSERT</strong> to open the menu. Activate any modules you want.",
      req_specs: "// Requires Windows 10 / 11 (64-bit) · CS2 installed · Disable Windows Defender during injection",
      faq_eyebrow: "Frequently Asked Questions",
      faq_title: "Everything you ask<br>before joining.",
      q1_summary: "Is it really undetectable?",
      q1_desc: "Yes. Fishy uses an injection system that avoids detection by VAC and Overwatch. Since its launch in 2026, <strong style=\"color:var(--teal)\">there has not been a single reported ban</strong> among default users.",
      q2_summary: "Can I configure the aimbot to look legit?",
      q2_desc: "Yes. You can adjust FOV, smoothing, target bone, and add human reaction delays. We have <em>\"Legit\"</em> and <em>\"Rage\"</em> presets ready to use.",
      q3_summary: "Does it update after every CS2 patch?",
      q3_desc: "Yes. Our team updates Fishy in under 24 hours after each CS2 update. Updates download automatically via the loader — zero hassle.",
      q4_summary: "Do I have to disable my antivirus?",
      q4_desc: "Yes, Windows Defender and third-party antivirus must be disabled during injection. This is standard — the loader needs access to game memory.",
      q5_summary: "What happens if I get banned?",
      q5_desc: "In the extremely unlikely event of a ban, contact us via Discord with your proof of payment and we'll issue a new key at no extra cost. Your investment is protected.",
      q6_summary: "Does it work in all CS2 modes?",
      q6_desc: "Yes, Fishy works in Competitive, Deathmatch, Premier, and all other modes. \"Legit\" Mode is specifically optimized for Premier matches.",
      q7_summary: "How do I buy Fishy?",
      q7_desc: "All purchases are made through our <strong style=\"color:var(--teal)\">Discord server</strong>. Join, choose your plan (Weekly, Monthly, Lifetime), chat with a seller, and get your loader instantly.",
      banner_title: "Ready to dominate CS2?<br>Join the community.",
      banner_desc: "+50 active users trust Fishy. Buy your plan, get 24/7 support, and start winning — all from our Discord.",
      banner_btn: "Join Discord — discord.gg/fishycs",
      footer_support: "Discord Support",
      footer_legal_1: "Fishy is a unique product created for the community. Not affiliated with Valve Corporation or Counter-Strike 2.",
      footer_legal_2: "© 2026 Fishy. All rights reserved."
    }
  };

  let currentLang = localStorage.getItem('fishy_lang') || 'es';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('fishy_lang', lang);
    document.documentElement.lang = lang === 'es' ? 'es-AR' : 'en';

    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        // If string contains HTML tags, use innerHTML, else textContent
        if (translations[lang][key].includes('<')) {
          el.innerHTML = translations[lang][key];
        } else {
          el.textContent = translations[lang][key];
        }
      }
    });

    // Update active state on toggle button
    const optEs = document.querySelector('.lang-opt.lang-es');
    const optEn = document.querySelector('.lang-opt.lang-en');
    if (optEs && optEn) {
      if (lang === 'es') {
        optEs.classList.add('active');
        optEn.classList.remove('active');
      } else {
        optEn.classList.add('active');
        optEs.classList.remove('active');
      }
    }
  }

  // Language toggle listener
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const nextLang = currentLang === 'es' ? 'en' : 'es';
      setLanguage(nextLang);
    });
  }

  // Initialize saved language
  setLanguage(currentLang);

  // Mobile / Touch detection
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  const isTouch = window.matchMedia('(pointer: coarse)').matches;

  // ============================================================
  // 1. PARTICULAS NEURALES (CANVAS NETWORK)
  // ============================================================
  const canvas = document.getElementById('particles');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H, particles = [];
    let mouse = { x: null, y: null, radius: 150 };

    function initCanvas() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    initCanvas();
    window.addEventListener('resize', initCanvas);
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    class Particle {
      constructor() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 2 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }
      draw() {
        ctx.fillStyle = 'rgba(0, 255, 136, 0.5)';
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

        // Interaction
        if (mouse.x) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let forceDirectionX = dx / distance;
          let forceDirectionY = dy / distance;
          let maxDistance = mouse.radius;
          let force = (maxDistance - distance) / maxDistance;
          let directionX = forceDirectionX * force * this.density;
          let directionY = forceDirectionY * force * this.density;

          if (distance < mouse.radius) {
            this.x -= directionX;
            this.y -= directionY;
          } else {
            if (this.x !== this.baseX) {
              let dx = this.x - this.baseX;
              this.x -= dx / 10;
            }
            if (this.y !== this.baseY) {
              let dy = this.y - this.baseY;
              this.y -= dy / 10;
            }
          }
        }
      }
    }

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance = ((particles[a].x - particles[b].x) * (particles[a].x - particles[b].x))
            + ((particles[a].y - particles[b].y) * (particles[a].y - particles[b].y));
          const connectDist = isMobile
            ? (canvas.width / 12) * (canvas.height / 12)
            : (canvas.width / 7) * (canvas.height / 7);
          if (distance < connectDist) {
            opacityValue = 1 - (distance / 20000);
            ctx.strokeStyle = `rgba(0, 255, 136, ${opacityValue * 0.2})`;
            ctx.lineWidth = 1;
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
      let numberOfParticles = (canvas.height * canvas.width) / (isMobile ? 50000 : 15000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, W, H);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      connect();
      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();
  }

  // ============================================================
  // 2. EFECTO TILT 3D (TARJETAS)
  // ============================================================
  // 3D Tilt — disabled on touch devices (no mouse cursor)
  if (!isTouch) {
    const tiltEls = document.querySelectorAll('.pricing-card, .feature-card, .community-card');
    tiltEls.forEach(el => {
      el.addEventListener('mousemove', (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const tiltX = ((y - centerY) / centerY) * -5;
        const tiltY = ((x - centerX) / centerX) * 5;
        el.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      });
    });
  }

  // ============================================================
  // 3. BOTONES MAGNÉTICOS
  // ============================================================
  // Magnetic buttons — disabled on touch devices
  if (!isTouch) {
    const magnets = document.querySelectorAll('.magnetic-wrap');
    magnets.forEach(magnet => {
      magnet.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const h = rect.width / 2;
        const x = e.clientX - rect.left - h;
        const y = e.clientY - rect.top - rect.height / 2;
        this.children[0].style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
      });
      magnet.addEventListener('mouseleave', function() {
        this.children[0].style.transform = 'translate(0px, 0px)';
      });
    });
  }




  // ============================================================
  // 5. RESTO DE FUNCIONES (Mobile Menu, Scroll Reveal, Contadores, Cursor)
  // ============================================================
  
  // Mobile Menu
  const navToggle = document.getElementById('navToggle');
  const navLinksWrap = document.querySelector('.nav-links');
  if (navToggle && navLinksWrap) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinksWrap.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navLinksWrap.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinksWrap.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Nav Scroll Effect
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.style.background = 'rgba(5, 7, 9, 0.95)';
    } else {
      nav.style.background = 'rgba(5, 7, 9, 0.6)';
    }
  }, { passive: true });

  // Scroll Reveal
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  // Animated Counters
  const counterEls = document.querySelectorAll('.counter-value');
  if (counterEls.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target) || 0;
          const prefix = el.dataset.prefix || '';
          const suffix = el.dataset.suffix || '';
          const duration = 2000;
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);
            el.textContent = prefix + current.toLocaleString('es-AR') + suffix;

            if (progress < 1) requestAnimationFrame(updateCounter);
          }
          requestAnimationFrame(updateCounter);
          counterObserver.unobserve(el);
        }
      });
    }, { threshold: 0.3 });
    counterEls.forEach(el => counterObserver.observe(el));
  }

  // Active Nav Link Highlight
  const sections = document.querySelectorAll('section[id], div[id]');
  const navLinks = document.querySelectorAll('.nav-links a');
  if (sections.length && navLinks.length) {
    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === '#' + id) {
              link.style.color = 'var(--teal)';
            }
          });
        }
      });
    }, { threshold: 0.2, rootMargin: '-80px 0px -50% 0px' });
    sections.forEach(section => navObserver.observe(section));
  }

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#top') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Cursor Glow Follower
  const cursorGlow = document.getElementById('cursorGlow');
  if (cursorGlow && !window.matchMedia('(pointer: coarse)').matches) {
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!cursorGlow.classList.contains('active')) cursorGlow.classList.add('active');
    });
    document.addEventListener('mouseleave', () => cursorGlow.classList.remove('active'));
    function animateGlow() {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      cursorGlow.style.left = glowX + 'px';
      cursorGlow.style.top = glowY + 'px';
      requestAnimationFrame(animateGlow);
    }
    animateGlow();
  }
});
