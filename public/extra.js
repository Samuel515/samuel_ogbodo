document.addEventListener('DOMContentLoaded', () => {
    const fixedElement = document.querySelector('.fixed-element');
    const footer = document.querySelector('#footer');
        
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Footer is visible, add hidden class to the fixed element
          fixedElement.classList.add('hidden');
        } else {
          // Footer is not visible, remove hidden class
          fixedElement.classList.remove('hidden');
        }
      });
    }, { threshold: 0.1 });

    observer.observe(footer);
    });