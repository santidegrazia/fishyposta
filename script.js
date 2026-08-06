// ============================================================
// FISHY CS2 â€” ULTRA PREMIUM SCRIPTS v6.0
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // ðŸŒ TRADUCCIONES / MULTI-LANGUAGE (ES / EN)
  // ============================================================
  const translations = {
    es: {
      nav_planes: "Productos",
      nav_funciones: "Catálogo",
      nav_stats: "Reseñas",
      nav_faq: "FAQ",
      nav_badge: "✓ Secure",
      nav_discord: "Unirse al Discord",
      hero_eyebrow: "Confiado por +50 clientes",
      hero_title_1: "Todo lo que necesitás,",
      hero_glow: "entregado al instante.",
      hero_desc: "Fishy entrega productos digitales premium para CS2 en el momento que tu pago se acredita. Configs, presets y herramientas — todo en un solo lugar.",
      check_1: "Entrega inmediata",
      check_2: "Compra segura",
      check_3: "Soporte real 24/7",
      btn_buy_discord: "Ver productos",
      btn_see_plans: "Leer reseñas",
      trust_1: "Entrega inmediata",
      trust_2: "Compra segura",
      trust_3: "Soporte real",
      product_more: "// Más productos en desarrollo — estate atento.",
      pricing_eyebrow: "Productos",
      pricing_title: "Elegí tu producto.<br>Recibilo al instante.",
      pricing_sub: "Todos los productos incluyen acceso completo, actualizaciones automáticas y soporte 24/7 por Discord.",
      plan_weekly_title: "Semanal",
      plan_weekly_period: "7 días de acceso",
      plan_monthly_popular: "✨ Más Popular",
      plan_monthly_title: "Mensual",
      plan_monthly_period: "30 días de acceso",
      plan_lifetime_title: "Lifetime",
      plan_lifetime_period: "Acceso de por vida",
      feature_all_modules: "Todos los productos incluidos",
      feature_wall_esp: "Configs completas",
      feature_aim_trigger: "Presets premium",
      feature_updates: "Updates automáticos",
      feature_discord_sup: "Soporte por Discord",
      feature_radar_bhop: "Catálogo completo",
      feature_priority_sup: "Soporte prioritario",
      feature_unlimited: "Acceso ilimitado",
      feature_all_updates: "Todas las actualizaciones",
      feature_vip_sup: "Soporte VIP prioritario",
      feature_betas: "Early access a nuevos productos",
      feature_role: "Rol exclusivo en Discord",
      pricing_note: "// Todas las compras se realizan a través de nuestro Discord — hablás con un vendedor y te entregamos al instante.",
      stat_users: "Clientes activos",
      stat_bans: "Entregas exitosas",
      stat_update: "Tiempo de actualización",
      stat_satisfaction: "Satisfacción",
      strip_users: "clientes satisfechos",
      strip_bans: "entregas exitosas",
      strip_headshot: "valoración promedio",
      strip_kd: "entrega instantánea",
      strip_winrate: "soporte disponible",
      strip_updatetime: "actualizaciones de producto",
      strip_satisfaction: "compra 100% segura",
      strip_instant: "Todos los métodos de pago",
      features_eyebrow: "Catálogo",
      features_title: "Nuestros productos.<br>Tu ventaja.",
      features_sub: "Entrega inmediata después del pago. Cada producto incluye actualizaciones y soporte.",
      f1_title: "Visión Avanzada / ESP",
      f1_desc: "Visualizá toda la información de los jugadores en tiempo real. Cajas ESP, esqueletos, líneas de visión, vida, nombre y arma — todo configurable.",
      f2_title: "Aim Assist",
      f2_desc: "Asistencia de puntería inteligente al enemigo más cercano a tu crosshair. FOV, smoothing y target ajustables para un movimiento completamente natural.",
      f3_title: "Auto Response",
      f3_desc: "Respuesta automática cuando tu mira pasa sobre un enemigo. Delay configurable para un timing de reacción natural y preciso.",
      f4_title: "Radar Mejorado",
      f4_desc: "Información de posición completa en el minimap en tiempo real, sin importar las condiciones de la partida.",
      f5_title: "Optimización de Movimiento",
      f5_desc: "Movimiento optimizado con strafe asistido. Desplazate por el mapa a máxima velocidad sin perder precisión de disparo.",
      f6_title: "Protección Integrada",
      f6_desc: "Capa de seguridad avanzada para compatibilidad total. Se actualiza automáticamente después de cada parche de CS2 en menos de 24 horas.",
      stats_eyebrow: "Resultados",
      stats_title: "Lo que dicen nuestros clientes.",
      stats_sub: "Resultados promedio reportados por nuestros clientes activos usando los productos de Fishy.",
      bench_without: "Sin Fishy",
      bench_with: "Con Fishy",
      bench_disclaimer: "Resultados promedio reportados por clientes activos con los productos predeterminados de Fishy. Los resultados individuales pueden variar.",
      trust_eyebrow: "Garantías",
      trust_title: "Comprá tranquilo.<br>Nosotros te cubrimos.",
      t1_title: "Compra 100% segura",
      t1_desc: "Todas las transacciones se procesan de forma segura. Tu información está protegida y la entrega es inmediata.<br><strong style=\"color:var(--teal); display: inline-block; margin-top: 0.4rem; white-space: nowrap;\">+50 clientes satisfechos en 2026.</strong>",
      t2_title: "Productos siempre actualizados",
      t2_desc: "Nuestro equipo actualiza todos los productos en menos de 24 horas tras cada actualización del juego. Recibís todo automáticamente.",
      t3_title: "Garantía de reemplazo",
      t3_desc: "Si tenés algún problema con tu producto, te damos un reemplazo sin costo. Tu inversión siempre está protegida.",
      req_eyebrow: "Cómo funciona",
      req_title: "Listo en menos<br>de dos minutos.",
      r1_title: "Contactanos en Discord",
      r1_desc: "Entrá a nuestro Discord, elegí tu producto, hablás con un vendedor y te lo entregamos al instante.",
      r2_title: "Descargá tu producto",
      r2_desc: "Descargá y ejecutá Fishy <em>antes</em> de abrir CS2. Todo se inicializa automáticamente — sin pasos extras.",
      r3_title: "Activá en partida",
      r3_desc: "Entrá a una partida y presioná <strong style=\"color:var(--teal);font-family:var(--font-mono)\">INSERT</strong> para abrir el menú. Activá los productos que quieras.",
      req_specs: "// Requiere Windows 10 / 11 (64 bits) · CS2 instalado · Desactivar antivirus durante la instalación",
      faq_eyebrow: "Preguntas frecuentes",
      faq_title: "Todo lo que preguntás<br>antes de comprar.",
      q1_summary: "¿Es seguro comprar acá?",
      q1_desc: "Sí. Fishy lleva operando desde 2026 con <strong style=\"color:var(--teal)\">cero problemas reportados</strong> entre nuestros clientes. Todas las transacciones son seguras y la entrega es inmediata.",
      q2_summary: "¿Puedo personalizar los productos?",
      q2_desc: "Sí. Todos los productos son altamente configurables. Podés ajustar FOV, smoothing, targets y muchos más parámetros. Tenemos presets <em>\"Natural\"</em> y <em>\"Agresivo\"</em> listos para usar.",
      q3_summary: "¿Se actualizan los productos?",
      q3_desc: "Sí. Nuestro equipo actualiza todos los productos en menos de 24 horas después de cada update de CS2. Las actualizaciones se descargan automáticamente.",
      q4_summary: "¿Tengo que desactivar el antivirus?",
      q4_desc: "Sí, Windows Defender y cualquier antivirus de terceros deben estar desactivados durante la instalación. Esto es estándar para este tipo de productos digitales.",
      q5_summary: "¿Qué pasa si tengo un problema?",
      q5_desc: "Contactanos por Discord con tu comprobante de pago y te damos un reemplazo sin costo adicional. Tu inversión está protegida.",
      q6_summary: "¿Funciona en todos los modos de CS2?",
      q6_desc: "Sí, nuestros productos funcionan en Competitivo, Deathmatch, Premier y todos los demás modos de CS2.",
      q7_summary: "¿Cómo compro?",
      q7_desc: "Todas las compras se realizan a través de nuestro <strong style=\"color:var(--teal)\">servidor de Discord</strong>. Entrás al servidor, elegís tu producto (Semanal, Mensual o Lifetime), hablás con un vendedor y te lo entregamos al instante.",
      banner_title: "¿Listo para mejorar tu experiencia?<br>Unite a la comunidad.",
      banner_desc: "+50 clientes confían en Fishy. Comprá tu producto, recibí soporte 24/7 y empezá hoy — todo desde nuestro Discord.",
      banner_btn: "Unirse al Discord — discord.gg/fishycs",
      footer_support: "Discord Support",
      footer_legal_1: "Fishy es un servicio independiente de productos digitales. No está afiliado a Valve Corporation ni a Counter-Strike 2.",
      footer_legal_2: "© 2026 Fishy. Todos los derechos reservados."
    },
    en: {
      nav_planes: "Products",
      nav_funciones: "Catalog",
      nav_stats: "Reviews",
      nav_faq: "FAQ",
      nav_badge: "✓ Secure",
      nav_discord: "Join Discord",
      hero_eyebrow: "Trusted by +50 customers",
      hero_title_1: "Everything you need,",
      hero_glow: "delivered instantly.",
      hero_desc: "Fishy delivers premium digital products for CS2 the moment your payment clears. Configs, presets and tools — all in one place.",
      check_1: "Instant delivery",
      check_2: "Secure checkout",
      check_3: "Real support 24/7",
      btn_buy_discord: "Browse products",
      btn_see_plans: "Read reviews",
      trust_1: "Instant delivery",
      trust_2: "Secure checkout",
      trust_3: "Real support",
      product_more: "// More products in development — stay tuned.",
      pricing_eyebrow: "Products",
      pricing_title: "Choose your product.<br>Get it instantly.",
      pricing_sub: "All products include full access, automatic updates, and 24/7 Discord support.",
      plan_weekly_title: "Weekly",
      plan_weekly_period: "7 days access",
      plan_monthly_popular: "✨ Most Popular",
      plan_monthly_title: "Monthly",
      plan_monthly_period: "30 days access",
      plan_lifetime_title: "Lifetime",
      plan_lifetime_period: "Lifetime access",
      feature_all_modules: "All products included",
      feature_wall_esp: "Complete configs",
      feature_aim_trigger: "Premium presets",
      feature_updates: "Auto updates",
      feature_discord_sup: "Discord support",
      feature_radar_bhop: "Full catalog",
      feature_priority_sup: "Priority support",
      feature_unlimited: "Unlimited access",
      feature_all_updates: "All updates",
      feature_vip_sup: "Priority VIP support",
      feature_betas: "Early access to new products",
      feature_role: "Exclusive Discord role",
      pricing_note: "// All purchases are completed through our Discord — speak with a seller and receive instant delivery.",
      stat_users: "Active customers",
      stat_bans: "Successful deliveries",
      stat_update: "Update time",
      stat_satisfaction: "Satisfaction",
      strip_users: "satisfied customers",
      strip_bans: "successful deliveries",
      strip_headshot: "average rating",
      strip_kd: "instant delivery",
      strip_winrate: "support available",
      strip_updatetime: "product updates",
      strip_satisfaction: "100% secure checkout",
      strip_instant: "All payment methods",
      features_eyebrow: "Catalog",
      features_title: "Our products.<br>Your advantage.",
      features_sub: "Instant delivery after payment. Every product includes updates and support.",
      f1_title: "Enhanced Awareness / ESP",
      f1_desc: "Full player information in real time. ESP boxes, skeletons, snaplines, health, name, and weapon — all fully configurable.",
      f2_title: "Aim Assist",
      f2_desc: "Intelligent aim assistance to the enemy closest to your crosshair. Adjustable FOV, smoothing, and target for completely natural movement.",
      f3_title: "Auto Response",
      f3_desc: "Automatic response when your crosshair passes over an enemy. Configurable delay for natural and precise reaction timing.",
      f4_title: "Enhanced Radar",
      f4_desc: "Complete position information on the minimap in real time, regardless of match conditions.",
      f5_title: "Movement Optimization",
      f5_desc: "Optimized movement with assisted strafe. Move across the map at top speed without losing shooting precision.",
      f6_title: "Integrated Protection",
      f6_desc: "Advanced security layer for total compatibility. Updates automatically after every CS2 patch in under 24 hours.",
      stats_eyebrow: "Results",
      stats_title: "What our customers say.",
      stats_sub: "Average results reported by active customers using Fishy products.",
      bench_without: "Without Fishy",
      bench_with: "With Fishy",
      bench_disclaimer: "Average results reported by active customers with default Fishy products. Individual results may vary.",
      trust_eyebrow: "Guarantees",
      trust_title: "Buy with confidence.<br>We've got you covered.",
      t1_title: "100% secure checkout",
      t1_desc: "All transactions are processed securely. Your information is protected and delivery is instant.<br><strong style=\"color:var(--teal); display: inline-block; margin-top: 0.4rem; white-space: nowrap;\">+50 satisfied customers in 2026.</strong>",
      t2_title: "Products always updated",
      t2_desc: "Our team updates all products in under 24 hours after every game update. You receive everything automatically.",
      t3_title: "Replacement guarantee",
      t3_desc: "If you have any issue with your product, we provide a replacement at no cost. Your investment is always protected.",
      req_eyebrow: "How it works",
      req_title: "Ready in under<br>two minutes.",
      r1_title: "Contact us on Discord",
      r1_desc: "Join our Discord, choose your product, speak with a seller, and get it delivered instantly.",
      r2_title: "Download your product",
      r2_desc: "Download and run Fishy <em>before</em> launching CS2. Everything initializes automatically — no extra steps.",
      r3_title: "Activate in game",
      r3_desc: "Join a match and press <strong style=\"color:var(--teal);font-family:var(--font-mono)\">INSERT</strong> to open the menu. Activate the products you want.",
      req_specs: "// Requires Windows 10 / 11 (64-bit) · CS2 installed · Disable antivirus during installation",
      faq_eyebrow: "Frequently Asked Questions",
      faq_title: "Everything you ask<br>before buying.",
      q1_summary: "Is it safe to buy here?",
      q1_desc: "Yes. Fishy has been operating since 2026 with <strong style=\"color:var(--teal)\">zero reported issues</strong> among our customers. All transactions are secure and delivery is instant.",
      q2_summary: "Can I customize the products?",
      q2_desc: "Yes. All products are highly configurable. You can adjust FOV, smoothing, targets, and many more parameters. We have <em>\"Natural\"</em> and <em>\"Aggressive\"</em> presets ready to use.",
      q3_summary: "Are products updated?",
      q3_desc: "Yes. Our team updates all products in under 24 hours after each CS2 update. Updates download automatically.",
      q4_summary: "Do I have to disable my antivirus?",
      q4_desc: "Yes, Windows Defender and third-party antivirus must be disabled during installation. This is standard for this type of digital product.",
      q5_summary: "What if I have an issue?",
      q5_desc: "Contact us via Discord with your proof of payment and we'll provide a replacement at no extra cost. Your investment is protected.",
      q6_summary: "Does it work in all CS2 modes?",
      q6_desc: "Yes, our products work in Competitive, Deathmatch, Premier, and all other CS2 modes.",
      q7_summary: "How do I buy?",
      q7_desc: "All purchases are made through our <strong style=\"color:var(--teal)\">Discord server</strong>. Join, choose your product (Weekly, Monthly, Lifetime), chat with a seller, and get it instantly.",
      banner_title: "Ready to improve your experience?<br>Join the community.",
      banner_desc: "+50 customers trust Fishy. Buy your product, get 24/7 support, and start today — all from our Discord.",
      banner_btn: "Join Discord — discord.gg/fishycs",
      footer_support: "Discord Support",
      footer_legal_1: "Fishy is an independent digital products service. Not affiliated with Valve Corporation or Counter-Strike 2.",
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
  // 3D Tilt â€” disabled on touch devices (no mouse cursor)
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
  // 3. BOTONES MAGNÃ‰TICOS
  // ============================================================
  // Magnetic buttons â€” disabled on touch devices
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