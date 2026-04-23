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

// 10 Views Showcase — tile click swaps the big screenshot, "show more" expands extra tiles
const viewsShowcase = document.querySelector('.views-showcase');
if (viewsShowcase) {
    const tiles = viewsShowcase.querySelectorAll('.view-tile');
    const images = viewsShowcase.querySelectorAll('.view-image');
    tiles.forEach(tile => {
        tile.addEventListener('click', () => {
            const id = tile.getAttribute('data-view');
            tiles.forEach(t => t.classList.toggle('active', t === tile));
            images.forEach(img => img.classList.toggle('active', img.getAttribute('data-view-image') === id));
            viewsShowcase.setAttribute('data-active-view', id);
        });
    });
    const moreToggle = viewsShowcase.querySelector('.views-more-toggle');
    const moreGrid = viewsShowcase.querySelector('.views-tiles-more');
    if (moreToggle && moreGrid) {
        moreToggle.addEventListener('click', () => {
            const expanded = moreToggle.getAttribute('aria-expanded') === 'true';
            moreToggle.setAttribute('aria-expanded', (!expanded).toString());
            if (expanded) {
                moreGrid.hidden = true;
                moreToggle.querySelector('.views-more-text').textContent = moreToggle.getAttribute('data-original-label') || moreToggle.querySelector('.views-more-text').textContent;
            } else {
                if (!moreToggle.getAttribute('data-original-label')) {
                    moreToggle.setAttribute('data-original-label', moreToggle.querySelector('.views-more-text').textContent);
                }
                moreGrid.hidden = false;
                moreToggle.querySelector('.views-more-text').textContent = moreToggle.getAttribute('data-collapse-label') || 'Show fewer';
            }
        });
    }
}

// CTA click tracking (Google Analytics + Google Ads conversion)
if (typeof gtag === 'function') {
    const rawKey = (document.body.dataset.pageKey || 'unknown').replace(/^landing-/, '');
    // Cluster pages roll up to the Web landing for conversion tracking.
    const pageKey = document.body.classList.contains('page-cluster') ? 'web' : rawKey;
    const reportConversion = () => {
        gtag('event', 'conversion', {
            'send_to': 'AW-16857347186/4Pa5CIL-o5saEPLomuY-',
            'value': 1.0,
            'currency': 'UAH'
        });
    };
    document.querySelectorAll('.main-cta').forEach(element => {
        element.addEventListener('click', () => {
            const label = element.getAttribute('data-label') || 'Unknown';
            gtag('event', pageKey + '_cta_click', {
                'event_category': 'click',
                'event_label': label
            });
            reportConversion();
        });
    });
}

// Show more testimonials functionality
const showMoreBtn = document.querySelector('.show-more-button');
const hiddenTestimonials = document.querySelectorAll('.hidden-testimonials');

if (showMoreBtn && hiddenTestimonials) {
    showMoreBtn.addEventListener('click', () => {
        const isHidden = hiddenTestimonials[0].style.display === 'none' || hiddenTestimonials[0].style.display === '';
        hiddenTestimonials.forEach(t => t.style.display = isHidden ? 'grid' : 'none');
        
        // Update text content
        const textSpan = showMoreBtn.querySelector('.button-text');
        textSpan.textContent = isHidden ? 
            showMoreBtn.getAttribute('data-show-less') : 
            showMoreBtn.getAttribute('data-show-more');
        
        // Toggle active state for animation
        showMoreBtn.classList.toggle('active');
    });
}
