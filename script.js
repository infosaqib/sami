document.addEventListener('DOMContentLoaded', () => {
  const animate = (el, target, duration = 3000) => {
    const start = performance.now();
    const step = (timestamp) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const value = Math.floor(progress * target);
      el.textContent = value; // Without comma
      // el.textContent = value.toLocaleString(); // With comma
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  document.querySelectorAll('.num-count').forEach(el => 
    animate(el, Number(el.textContent))
  );
});