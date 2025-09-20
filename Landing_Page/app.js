let listBg = document.querySelectorAll('.bg');
let listTab = document.querySelectorAll('.tab');
let titleBanner = document.querySelector('.banner h1');

window.addEventListener("scroll", (event) => {
    let top = window.scrollY;
    listBg.forEach((bg, index) => {
        if (index != 0 && index != 8) {
            bg.style.transform = `translateY(${top * index / 2}px)`;
        } else if (index == 0) {
            bg.style.transform = `translateY(${top / 3}px)`;
        }
    });
    if (titleBanner) {
        titleBanner.style.transform = `translateY(${top * 4 / 2}px)`;
    }
    listTab.forEach(tab => {
        if (tab.offsetTop - top < 550) {
            tab.classList.add('active');
        } else {
            tab.classList.remove('active');
        }
    });
});

// Toggle description expansion
document.querySelectorAll('.library .show-more').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const description = button.parentElement;
        description.classList.toggle('expanded');
    });
});

function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        // For sections that don't exist yet, scroll to intro
        document.getElementById('about').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}
function scrollToSection(sectionId) {
    // Map 'services' to 'tour' section
    if (sectionId === 'services' || sectionId === 'tour') {
        sectionId = 'tour';
    }
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    } else {
        // Fallback to 'about' section if the target section doesn't exist
        document.getElementById('about').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}