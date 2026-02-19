// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Navigation
const navbar = document.getElementById('navbar');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const dropdownToggle = document.querySelector('.navbar-dropdown-toggle');
const dropdownMenu = document.querySelector('.navbar-dropdown-menu');
const servicesDropdown = document.querySelector('.navbar-menu-dropdown');
const navMobileLinks = document.querySelectorAll('.navbar-mobile-link');
const navMobileSubmenus = document.querySelectorAll('.navbar-mobile-submenu-toggle');

// Scroll effect on navbar
window.addEventListener('scroll', () => {
    if (!navbar) return;
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
if (mobileMenuToggle && mobileMenu) {
    // expose aria relationship
    mobileMenuToggle.setAttribute('aria-controls', 'mobile-menu');
    mobileMenu.setAttribute('aria-hidden', 'true');

    mobileMenuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('show');
        // toggle visual state class for animated hamburger
        mobileMenuToggle.classList.toggle('open', isOpen);
        mobileMenuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
        document.body.classList.toggle('no-scroll', isOpen);
    });
}

// Close mobile menu when clicking outside or pressing Escape
document.addEventListener('click', (e) => {
    if (!mobileMenu || !mobileMenuToggle) return;
    const target = e.target;
    const isOpen = mobileMenu.classList.contains('show');
    if (!isOpen) return;
    if (!(target instanceof Node)) return;
    if (!mobileMenu.contains(target) && !mobileMenuToggle.contains(target)) {
        mobileMenu.classList.remove('show');
        mobileMenuToggle.classList.remove('open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
    }
});

document.addEventListener('keydown', (e) => {
    if (!mobileMenu || !mobileMenuToggle) return;
    if (e.key === 'Escape' && mobileMenu.classList.contains('show')) {
        mobileMenu.classList.remove('show');
        mobileMenuToggle.classList.remove('open');
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
        mobileMenuToggle.focus();
    }
});

// Close mobile menu when clicking on links
if (navMobileLinks && mobileMenuToggle && mobileMenu) {
    navMobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('show');
            mobileMenuToggle.classList.remove('open');
            mobileMenuToggle.setAttribute('aria-expanded', 'false');
            mobileMenu.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('no-scroll');
        });
    });
}

// Mobile submenu toggle
if (navMobileSubmenus) {
    navMobileSubmenus.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = toggle.closest('.navbar-mobile-submenu');
            if (parent) parent.classList.toggle('show');
        });
    });
}

// Desktop dropdown toggle
if (dropdownToggle && dropdownMenu) {
    // Toggle on click
    dropdownToggle.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = dropdownMenu.classList.toggle('show');
        dropdownToggle.classList.toggle('active', isOpen);
        dropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Keyboard support (Enter/Space to toggle, Escape to close)
    dropdownToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            dropdownToggle.click();
        } else if (e.key === 'Escape') {
            dropdownMenu.classList.remove('show');
            dropdownToggle.classList.remove('active');
            dropdownToggle.setAttribute('aria-expanded', 'false');
            dropdownToggle.focus();
        }
    });

    // Close dropdown on focusout when moving away
    dropdownMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            dropdownMenu.classList.remove('show');
            dropdownToggle.classList.remove('active');
            dropdownToggle.setAttribute('aria-expanded', 'false');
            dropdownToggle.focus();
        }
    });
}

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
    const target = e.target;
    if (!(target instanceof Node)) return;
    if (servicesDropdown && dropdownMenu && dropdownToggle && !servicesDropdown.contains(target)) {
        dropdownMenu.classList.remove('show');
        dropdownToggle.classList.remove('active');
    }
});

// Close dropdown items when clicked
const dropdownItems = document.querySelectorAll('.navbar-dropdown-item');
if (dropdownItems && dropdownMenu && dropdownToggle) {
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            dropdownMenu.classList.remove('show');
            dropdownToggle.classList.remove('active');
        });
    });
}

// Contact form submission — validate then allow native submission to FormSubmit
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Get form values (named inputs)
        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const subjectInput = contactForm.querySelector('input[name="subject"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');
        const honeyInput = contactForm.querySelector('input[name="_honey"]');

        const name = nameInput ? nameInput.value.trim() : '';
        const email = emailInput ? emailInput.value.trim() : '';
        const subject = subjectInput ? subjectInput.value.trim() : '';
        const message = messageInput ? messageInput.value.trim() : '';

        // Honeypot: if filled, silently block submission
        if (honeyInput && honeyInput.value) {
            e.preventDefault();
            return;
        }

        // Basic validation — prevent submit only when invalid
        if (!name || !email || !subject || !message) {
            e.preventDefault();
            alert('Please fill in all fields');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault();
            alert('Please enter a valid email address');
            return;
        }

        // Allow native form submission to FormSubmit (action handles delivering to provided email)
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#home') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const topOffset = 80; // Account for fixed navbar
                const targetPosition = target.offsetTop - topOffset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '-100px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe section headers and cards
document.querySelectorAll('.section-header, .values-card, .services-item, .management-item, .why-us-card').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Add staggered animation delay
document.querySelectorAll('.values-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

document.querySelectorAll('.services-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.05}s`;
});

document.querySelectorAll('.management-item').forEach((item, index) => {
    item.style.animationDelay = `${index * 0.08}s`;
});

// Dropdown menu keyboard navigation
const navMenuItems = document.querySelectorAll('.navbar-menu li');
navMenuItems.forEach((item, index) => {
    const link = item.querySelector('a, button');
    if (link) {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' && index < navMenuItems.length - 1) {
                e.preventDefault();
                navMenuItems[index + 1].querySelector('a, button').focus();
            } else if (e.key === 'ArrowLeft' && index > 0) {
                e.preventDefault();
                navMenuItems[index - 1].querySelector('a, button').focus();
            }
        });
    }
});

// Form input styling on focus
document.querySelectorAll('.contact-input').forEach(input => {
    input.addEventListener('focus', function() {
        this.style.backgroundColor = 'rgba(92, 198, 107, 0.1)';
    });
    
    input.addEventListener('blur', function() {
        this.style.backgroundColor = '#1a1a1a';
    });
});

// Add scroll-to-top button visibility on scroll
window.addEventListener('scroll', () => {
    // Could add scroll-to-top button functionality here
    if (window.scrollY > 300) {
        // Show button
    } else {
        // Hide button
    }
});

// Prevent layout shift on scroll
if (document.documentElement.scrollHeight > window.innerHeight) {
    document.documentElement.style.overflowY = 'scroll';
}

// Log initialization (optional)
console.log('Carri Time Website Initialized');
