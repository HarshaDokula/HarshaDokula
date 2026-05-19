// ============================================================
// Monolith Portfolio — Theme Management & UI Interactions
// ============================================================

// ---------- Theme Management ----------
(function() {
  const html = document.documentElement;
  const metaTheme = document.getElementById('theme-meta');
  const toggleLabel = document.getElementById('theme-toggle');
  const toggleInput = toggleLabel.querySelector('input[type="checkbox"]');

  // Determine initial theme
  const stored = localStorage.getItem('theme');
  let theme;
  if (stored) {
    theme = stored;
  } else {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(t) {
    if (t === 'dark') {
      html.classList.add('dark');
      metaTheme.setAttribute('content', '#141313');
      toggleInput.checked = true;
    } else {
      html.classList.remove('dark');
      metaTheme.setAttribute('content', '#f9f9f9');
      toggleInput.checked = false;
    }
    localStorage.setItem('theme', t);
  }

  applyTheme(theme);

  toggleInput.addEventListener('change', function() {
    const goingDark = this.checked;
    if (goingDark) {
      // Light → Dark: sudden and harsh, just switch
      applyTheme('dark');
    } else {
      // Dark → Light: create overlay, switch theme underneath, fade overlay out
      const overlay = document.createElement('div');
      overlay.className = 'theme-overlay';
      document.body.appendChild(overlay);
      applyTheme('light');
      setTimeout(function() {
        overlay.remove();
      }, 1200);
    }
  });
})();

// ---------- Scroll Handling for Header Shadow ----------
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 20) {
    header.classList.add('shadow-scroll');
  } else {
    header.classList.remove('shadow-scroll');
  }
});

// ---------- Nav Link Highlighting on Scroll ----------
(function() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(function(section) {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(function(link) {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
})();
