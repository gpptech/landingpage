// Particles.js Configuration
particlesJS('particles-js', {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: getComputedStyle(document.documentElement).getPropertyValue('--js-gold').trim()
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: getComputedStyle(document.documentElement).getPropertyValue('--js-black').trim()
            }
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: getComputedStyle(document.documentElement).getPropertyValue('--js-gold').trim(),
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'repulse'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.4
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(255, 215, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .step-item, .contact-item, .about-content, .methodology-content');
    animateElements.forEach(el => observer.observe(el));
});

// Enhanced Hover Effects for Service Cards
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(255, 215, 0, 0.2)';
        
        // Animate icon
        const icon = this.querySelector('.service-icon');
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        
        // Animate feature tags
        const tags = this.querySelectorAll('.feature-tag');
        tags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.transform = 'scale(1.05)';
                            tag.style.background = getComputedStyle(document.documentElement).getPropertyValue('--js-gold').trim();
            tag.style.color = getComputedStyle(document.documentElement).getPropertyValue('--js-black').trim();
            }, index * 100);
        });
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        
        // Reset icon
        const icon = this.querySelector('.service-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
        
        // Reset feature tags
        const tags = this.querySelectorAll('.feature-tag');
        tags.forEach(tag => {
            tag.style.transform = 'scale(1)';
            tag.style.background = getComputedStyle(document.documentElement).getPropertyValue('--js-dark-gray').trim();
            tag.style.color = getComputedStyle(document.documentElement).getPropertyValue('--js-gold').trim();
        });
    });
});

// Enhanced Hover Effects for Contact Items
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) translateX(10px)';
        this.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--js-gold').trim();
        this.style.boxShadow = '0 0 20px rgba(255, 215, 0, 0.3)';
        
        const icon = this.querySelector('.contact-icon');
        icon.style.transform = 'scale(1.1) rotate(10deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) translateX(0)';
        this.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--js-dark-gray').trim();
        this.style.boxShadow = 'none';
        
        const icon = this.querySelector('.contact-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Enhanced Hover Effects for Step Items
document.querySelectorAll('.step-item').forEach(step => {
    step.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(15px) scale(1.02)';
        this.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--js-gold').trim();
        this.style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.3)';
        
        const number = this.querySelector('.step-number');
        number.style.transform = 'scale(1.1) rotate(5deg)';
        number.style.boxShadow = '0 0 15px rgba(255, 215, 0, 0.5)';
    });
    
    step.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0) scale(1)';
        this.style.borderColor = 'transparent';
        this.style.boxShadow = 'none';
        
        const number = this.querySelector('.step-number');
        number.style.transform = 'scale(1) rotate(0deg)';
        number.style.boxShadow = 'none';
    });
});

// Button Ripple Effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Floating Cards Animation Enhancement
document.querySelectorAll('.floating-card').forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-20px) scale(1.05) rotate(5deg)';
        this.style.boxShadow = '0 0 30px rgba(255, 215, 0, 0.4)';
        this.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--js-gold').trim();
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        this.style.boxShadow = 'none';
        this.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--js-dark-gray').trim();
    });
});

// Typing Effect for Hero Title - Multiple Words Cycle
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Add blinking cursor after typing
            element.innerHTML += '<span class="typing-cursor">|</span>';
        }
    }
    type();
}

// Erase text effect
function eraseText(element, speed = 50) {
    return new Promise((resolve) => {
        // Remove cursor first
        element.innerHTML = element.textContent;
        const text = element.textContent;
        let i = text.length;
        
        function erase() {
            if (i > 0) {
                element.textContent = text.substring(0, i - 1);
                i--;
                setTimeout(erase, speed);
            } else {
                resolve();
            }
        }
        erase();
    });
}

// Cycle through multiple words with typing effect
async function cycleTypingEffect(element, words, typeSpeed = 150, eraseSpeed = 50, pauseTime = 2000) {
    let currentIndex = 0;
    
    async function cycle() {
        // Type the current word
        typeWriter(element, words[currentIndex], typeSpeed);
        
        // Wait for typing to complete + pause
        await new Promise(resolve => {
            setTimeout(resolve, (words[currentIndex].length * typeSpeed) + pauseTime);
        });
        
        // Erase the word
        await eraseText(element, eraseSpeed);
        
        // Wait a bit before next word
        await new Promise(resolve => {
            setTimeout(resolve, 500);
        });
        
        // Move to next word (cycle back to first)
        currentIndex = (currentIndex + 1) % words.length;
        
        // Continue the cycle
        cycle();
    }
    
    cycle();
}

// Initialize cycling typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title .gradient-text');
    if (heroTitle) {
        // Define your words here - you can change these as needed
        const words = [
            "GP Tech",
            "Inovação",
            "Dados",
            "Tecnologia",
            "Soluções",
            "Analytics",
            "Desenvolvimento",
            "Consultoria"
        ];
        
        // Start the cycling effect
        cycleTypingEffect(heroTitle, words, 150, 50, 2000);
    }
});

// Parallax Effect for Hero Section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.floating-card');
    
    parallaxElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform += ` translateY(${scrolled * speed}px)`;
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .fade-in-up {
        animation: fadeInUp 0.8s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Active Navigation Link
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add active link styles
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-link.active {
        color: ${getComputedStyle(document.documentElement).getPropertyValue('--js-gold').trim()} !important;
    }
    
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(activeStyle);

