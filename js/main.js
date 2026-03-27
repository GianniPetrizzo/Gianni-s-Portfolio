document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle (shared)
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      const navLinks = document.querySelector('.nav-links');
      if (navLinks) navLinks.classList.toggle('active');
      this.classList.toggle('active');
    });
  }

  // Portfolio filtering (only runs if filter buttons exist)
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length && projectCards.length) {
    const applyFilter = (filter) => {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      const activeBtn = Array.from(filterButtons).find(btn => btn.getAttribute('data-filter') === filter);
      if (activeBtn) activeBtn.classList.add('active');

      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    };

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        applyFilter(filter);
      });
    });

    applyFilter('all');
  }

  // Resume download button handler (if present)
  const printBtn = document.getElementById('print-resume');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = 'Resume.pdf';
      link.download = 'Resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});
