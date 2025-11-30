(() => {
  const STORAGE_KEY = 'atlasforge_logger_history';
  const listeners = [];
  const history = [];

  const persist = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('AtlasLogger persist failed', err);
    }
  };

  const notify = () => {
    listeners.forEach((fn) => {
      try {
        fn([...history]);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.warn('AtlasLogger listener failed', err);
      }
    });
  };

  const loadHistory = () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          history.push(...parsed);
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('AtlasLogger history restore failed', err);
    }
  };

  loadHistory();

  window.AtlasLogger = {
    log(eventType, payload = {}) {
      const entry = {
        eventType,
        ...payload,
        timestamp: payload.timestamp || Date.now()
      };
      history.push(entry);
      if (history.length > 300) {
        history.shift();
      }
      persist();
      notify();
      // eslint-disable-next-line no-console
      console.log(`[AtlasLogger] ${eventType}`, payload);
      return entry;
    },
    getHistory(filter = 'all') {
      if (filter && filter !== 'all') {
        return history.filter((item) => item.eventType === filter);
      }
      return [...history];
    },
    clearHistory() {
      history.splice(0, history.length);
      persist();
      notify();
    },
    subscribe(fn) {
      if (typeof fn !== 'function') return () => {};
      listeners.push(fn);
      fn([...history]);
      return () => {
        const idx = listeners.indexOf(fn);
        if (idx >= 0) listeners.splice(idx, 1);
      };
    }
  };
})();
