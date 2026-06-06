import { useEffect, useState } from 'react';

export function useScrollSpy(ids, enabled = true, resetKey = '') {
  const [activeId, setActiveId] = useState(ids[0]);

  useEffect(() => {
    if (!enabled) {
      setActiveId(ids[0]);
      return undefined;
    }

    let frameId = 0;

    const updateActiveId = () => {
      const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
      if (!sections.length) return;

      const headerOffset = document.querySelector('.site-header')?.offsetHeight || 80;
      const scrollPosition = window.scrollY + headerOffset + 32;
      const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
      let currentId = sections[0].id;

      if (pageBottom) {
        currentId = sections[sections.length - 1].id;
      } else {
        sections.forEach((section) => {
          if (section.offsetTop <= scrollPosition) currentId = section.id;
        });
      }

      setActiveId(currentId);
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveId);
    };

    scheduleUpdate();
    const timeoutId = window.setTimeout(scheduleUpdate, 100);

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, [ids, enabled, resetKey]);

  return activeId;
}
