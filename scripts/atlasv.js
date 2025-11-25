(function() {
  const modeButtons = document.querySelectorAll('[data-mode]');
  const modePanels = document.querySelectorAll('[data-mode-panel]');
  const constraintButtons = document.querySelectorAll('[data-constraint]');
  const constraintDetails = document.querySelectorAll('[data-constraint-detail]');
  const playbackButton = document.querySelector('[data-flowsim-play]');
  const diagram = document.querySelector('.mf-diagram-frame');

  function setMode(mode) {
    modeButtons.forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.mode === mode);
    });
    modePanels.forEach((panel) => {
      panel.hidden = panel.dataset.modePanel !== mode;
    });
  }

  function setConstraint(key) {
    constraintButtons.forEach((btn) => btn.classList.toggle('is-active', btn.dataset.constraint === key));
    constraintDetails.forEach((item) => item.hidden = item.dataset.constraintDetail !== key);
  }

  modeButtons.forEach((btn) => {
    btn.addEventListener('click', () => setMode(btn.dataset.mode));
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setMode(btn.dataset.mode);
      }
    });
  });

  constraintButtons.forEach((btn) => {
    btn.addEventListener('click', () => setConstraint(btn.dataset.constraint));
  });

  if (playbackButton && diagram) {
    playbackButton.addEventListener('click', () => {
      diagram.classList.add('is-playing');
      playbackButton.setAttribute('aria-pressed', 'true');
      setTimeout(() => {
        diagram.classList.remove('is-playing');
        playbackButton.setAttribute('aria-pressed', 'false');
      }, 2400);
    });
  }

  // defaults
  if (modeButtons.length) setMode(modeButtons[0].dataset.mode);
  if (constraintButtons.length) setConstraint(constraintButtons[0].dataset.constraint);
})();
