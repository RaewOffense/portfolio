
// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
  this.querySelector('i').classList.toggle('fa-bars');
  this.querySelector('i').classList.toggle('fa-times');
});
// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Hide mobile menu if open
      const mobileMenu = document.getElementById('mobile-menu');
      mobileMenu.classList.add('hidden');
      
      // Update mobile menu button icon
      const menuButton = document.getElementById('mobile-menu-button');
      menuButton.querySelector('i').classList.remove('fa-times');
      menuButton.querySelector
      menuButton.querySelector('i').classList.add('fa-bars');
      
      // Scroll to target
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});
// Typewriter effect
document.addEventListener('DOMContentLoaded', function() {
  const texts = [
    "Full-Stack Developer",
    "Cybersecurity Enthusiast",
    "Problem Solver",
    "Tech Innovator"
  ];
  const element = document.querySelector('.typewriter');
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;
  function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
      element.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      element.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }
    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      typingSpeed = 1500; // Pause at end of text
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
      typingSpeed = 500; // Pause before typing next text
    }
    setTimeout(type, typingSpeed);
  }
  // Start the typewriter effect after 1s
  setTimeout(type, 1000);
});
// Animate elements when they come into view
function animateOnScroll() {
  const elements = document.querySelectorAll('.animate-in');
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
    
    if (elementPosition < screenPosition) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}
// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();
// Initialize animation on load
window.addEventListener('load', () => {
  animateOnScroll();
});
// Animate on scroll
window.addEventListener('scroll', animateOnScroll);
// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const submitButton = this.querySelector('button[type="submit"]');
    const formMessage = document.getElementById('form-message');
    
    // Show loading state
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission (replace with actual AJAX call)
    setTimeout(() => {
      // Reset form
      this.reset();
      
      // Show success message
      formMessage.classList.remove('hidden');
      formMessage.classList.remove('bg-red-500/20', 'text-red-400');
      formMessage.classList.add('bg-green-500/20', 'text-green-400');
      formMessage.innerHTML = '<i class="fas fa-check-circle mr-2"></i> Message sent successfully!';
      
      // Reset button
      submitButton.innerHTML = '<i class="fas fa-paper-plane mr-2"></i> Send Message';
      submitButton.disabled = false;
      
      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.classList.add('hidden');
      }, 5000);
    }, 1500);
  });
}
// Animate skill bars on scroll
function animateSkillBars() {
  const skillBars = document.querySelectorAll('.skill-progress');
  
  skillBars.forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}
// Initialize skill bar animation when skills section is in view
const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkillBars();
      skillsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
const skillsSection = document.getElementById('skills');
if (skillsSection) {
  skillsObserver.observe(skillsSection);
}
