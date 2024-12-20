function switchTab(tabIndex) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // Remove active class from all buttons
    var tabButtons = document.getElementsByClassName('tab-button');
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove('active');
    }

    // Show the selected tab content
    document.getElementById('tab-content-' + tabIndex).style.display = 'block';

    // Add active class to the clicked button
    tabButtons[tabIndex].classList.add('active');
}

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('.faq-toggle');
    
    if (answer.style.display === "block") {
        answer.style.display = "none";
        element.classList.remove('active');
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    } else {
        answer.style.display = "block";
        element.classList.add('active');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    }

    // Add animation effect to the icon
    // icon.style.transition = "transform 0.3s ease";
    //  if (icon.classList.contains('fa-chevron-down')) {
    //      icon.style.transform = "rotate(90deg)";
     
    // } else {
    //     icon.style.transform = "rotate(0deg)";
    // }
}

function toggleAllAnswers() {
    const button = document.querySelector('.expand-collapse-button');
    const allAnswers = document.querySelectorAll('.faq-answer');
    const allToggles = document.querySelectorAll('.faq-toggle');

    if (button.innerText === "Expand all") {
        allAnswers.forEach(answer => {
            answer.style.display = "block";
        });
        allToggles.forEach(toggle => {
            toggle.classList.remove('fa-chevron-down');
            toggle.classList.add('fa-chevron-up');
        });
        button.innerText = "Collapse all";
    } else {
        allAnswers.forEach(answer => {
            answer.style.display = "none";
        });
        allToggles.forEach(toggle => {
            toggle.classList.remove('fa-chevron-up');
            toggle.classList.add('fa-chevron-down');
        });
        button.innerText = "Expand all";
    }
}