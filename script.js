// Block'hood Website JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functions
    initNavigation();
    initBubbleAnimations();
    initBlockInteractions();
    initScrollEffects();
    initTooltips();
    initFadeInAnimations();
    
    console.log('Block\'hood Research Hub initialized successfully!');
});

// Navigation Functions
function initNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav item
                updateActiveNavItem(this);
            }
        });
    });
}

function updateActiveNavItem(activeLink) {
    // Remove active class from all nav items
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked item
    activeLink.classList.add('active');
}

// Bubble Animation Functions
function initBubbleAnimations() {
    const bubbles = document.querySelectorAll('.bubble');
    bubbles.forEach((bubble, index) => {
        // Add random floating animation
        const randomDelay = Math.random() * 2000;
        const randomDuration = 3000 + Math.random() * 2000;
        setTimeout(() => {
            bubble.style.animation = `float ${randomDuration}ms ease-in-out infinite`;
        }, randomDelay);
        // Add click interaction
        bubble.addEventListener('click', function() {
            this.style.transform = 'scale(1.15)';
            setTimeout(() => {
                this.style.transform = '';
            }, 300);
        });
    });
}

// Game Block Interactions
function initBlockInteractions() {
    const blocks = document.querySelectorAll('.game-blocks .block');
    blocks.forEach(block => {
        block.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        block.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
        block.addEventListener('click', function() {
            this.classList.add('clicked');
            setTimeout(() => this.classList.remove('clicked'), 400);
        });
    });
}

// Scroll Effects (e.g., sticky header)
function initScrollEffects() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Fade In Animations
function initFadeInAnimations() {
    const fadeEls = document.querySelectorAll('.fade-in');
    const onScroll = () => {
        fadeEls.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); // Trigger on load
}

// Tooltip Logic for Bubbles
function initTooltips() {
    const tooltip = document.getElementById('tooltip');
    if (!tooltip) return;
    document.querySelectorAll('.bubble').forEach(bubble => {
        bubble.addEventListener('mouseenter', function(e) {
            const title = this.getAttribute('data-title') || '';
            const desc = this.getAttribute('data-description') || '';
            tooltip.innerHTML = `<strong>${title}</strong><br>${desc}`;
            tooltip.style.left = (e.pageX + 15) + 'px';
            tooltip.style.top = (e.pageY - 10) + 'px';
            tooltip.classList.add('show');
        });
        bubble.addEventListener('mousemove', function(e) {
            tooltip.style.left = (e.pageX + 15) + 'px';
            tooltip.style.top = (e.pageY - 10) + 'px';
        });
        bubble.addEventListener('mouseleave', function() {
            tooltip.classList.remove('show');
        });
    });
}