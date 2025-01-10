// Theme handling
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Function to set theme
function setTheme(isDark) {
    icon.classList.toggle('fa-sun', isDark);
    icon.classList.toggle('fa-adjust', !isDark);
    document.cookie = `theme=${isDark ? 'dark' : 'light'}; path=/; max-age=31536000`; // Cookie expires in 1 year
    if (isDark) {
        body.classList.add('dark-mode');
        body.classList.remove('light-mode');
    } else {
        body.classList.add('light-mode');
        body.classList.remove('dark-mode');
    }
}

// Function to get theme from cookie
function getThemeCookie() {
    const cookies = document.cookie.split(';');
    const themeCookie = cookies.find(cookie => cookie.trim().startsWith('theme='));
    return themeCookie ? themeCookie.split('=')[1].trim() : null;
}

// Initialize theme
function initializeTheme() {
    const savedTheme = getThemeCookie();
    if (savedTheme) {
        // Use saved preference if it exists
        setTheme(savedTheme === 'dark');
    } else {
        // Otherwise use system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark);
    }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getThemeCookie()) { // Only react to system changes if no cookie is set
        setTheme(e.matches);
    }
});

// Theme toggle click handler
themeToggle.addEventListener('click', () => {
    const isDark = !body.classList.contains('dark-mode');
    setTheme(isDark);
});

// Initialize theme on page load
initializeTheme();

// Position versions dropdown
const otherVersionsBtn = document.querySelector('.cta-group .nav-version');
const versionsDropdown = otherVersionsBtn?.querySelector('.language-dropdown');

if (otherVersionsBtn && versionsDropdown) {
    const updateDropdownPosition = () => {
        const btnRect = otherVersionsBtn.getBoundingClientRect();
        versionsDropdown.style.top = `${btnRect.bottom}px`;
        versionsDropdown.style.left = `${btnRect.left + (btnRect.width / 2)}px`;
    };

    // Update position on hover
    otherVersionsBtn.addEventListener('mouseenter', updateDropdownPosition);
    // Update position on scroll
    window.addEventListener('scroll', updateDropdownPosition);
    // Update position on resize
    window.addEventListener('resize', updateDropdownPosition);
}

// FAQ toggles
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');
        
        // Toggle this answer
        answer.style.maxHeight = answer.style.maxHeight ? null : answer.scrollHeight + 'px';
        question.classList.toggle('active');
        
        // Close other answers
        document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
            if (otherAnswer !== answer && otherAnswer.style.maxHeight) {
                otherAnswer.style.maxHeight = null;
                otherAnswer.previousElementSibling.classList.remove('active');
            }
        });
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Features tabs
const featureTabs = document.querySelectorAll('.feature-tab');
const featurePanels = document.querySelectorAll('.feature-panel');

featureTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and panels
        featureTabs.forEach(t => t.classList.remove('active'));
        featurePanels.forEach(p => p.classList.remove('active'));

        // Add active class to clicked tab and corresponding panel
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// Show more testimonials functionality
const showMoreBtn = document.querySelector('.show-more-button');
const hiddenTestimonials = document.querySelector('.hidden-testimonials');

if (showMoreBtn && hiddenTestimonials) {
    showMoreBtn.addEventListener('click', () => {
        const isHidden = hiddenTestimonials.style.display === 'none' || hiddenTestimonials.style.display === '';
        hiddenTestimonials.style.display = isHidden ? 'grid' : 'none';
        
        // Update text content
        const textSpan = showMoreBtn.querySelector('.button-text');
        textSpan.textContent = isHidden ? 
            showMoreBtn.getAttribute('data-show-less') : 
            showMoreBtn.getAttribute('data-show-more');
        
        // Toggle active state for animation
        showMoreBtn.classList.toggle('active');
    });
}
