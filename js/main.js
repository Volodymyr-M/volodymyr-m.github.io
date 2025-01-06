// Theme toggler
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    icon.classList.toggle('fa-sun');
    icon.classList.toggle('fa-adjust');
});

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
        icon.classList.toggle('fa-chevron-up');
        icon.classList.toggle('fa-chevron-down');
        
        // Close other answers
        document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
            if (otherAnswer !== answer && otherAnswer.style.maxHeight) {
                otherAnswer.style.maxHeight = null;
                otherAnswer.previousElementSibling.querySelector('i').classList.remove('fa-chevron-up');
                otherAnswer.previousElementSibling.querySelector('i').classList.add('fa-chevron-down');
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
        showMoreBtn.classList.toggle('active');
        showMoreBtn.innerHTML = isHidden ? 
            'Show less <i class="fas fa-chevron-up"></i>' : 
            'Show more <i class="fas fa-chevron-down"></i>';
    });
}
