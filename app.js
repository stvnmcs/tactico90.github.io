const bottomSlab = document.querySelector('.bottom-slab');

// Bottom slab scroll animation
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY + window.innerHeight;
  const pageHeight = document.body.scrollHeight;

  // Show bottom slab when user is 300px from bottom
  if (scrollPosition >= pageHeight - 300) {
    bottomSlab.classList.add('visible');
  } else {
    bottomSlab.classList.remove('visible');
  }
});

// Add smooth scrolling behavior
document.addEventListener('DOMContentLoaded', function() {
  // Add loading animation
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.5s ease';
  
  setTimeout(() => {
    document.body.style.opacity = '1';
  }, 100);

  // Add intersection observer for portfolio items
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Initialize portfolio items with fade-in effect
  portfolioItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
  });
});