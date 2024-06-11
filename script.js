// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Testimonial slider functionality
    const testimonialSlider = document.querySelector('.testimonial-slider');
    let isDown = false;
    let startX;
    let scrollLeft;

    testimonialSlider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - testimonialSlider.offsetLeft;
        scrollLeft = testimonialSlider.scrollLeft;
    });

    testimonialSlider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    testimonialSlider.addEventListener('mouseup', () => {
        isDown = false;
    });

    testimonialSlider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - testimonialSlider.offsetLeft;
        const walk = (x - startX) * 2;
        testimonialSlider.scrollLeft = scrollLeft - walk;
    });
});

// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Hackathon Team Finder
    const joinButtons = document.querySelectorAll('.join-button');
    joinButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const teamPost = this.closest('.hackathon-post');
            const teamTitle = teamPost.querySelector('h3').textContent;
            alert(`You have requested to join the team: ${teamTitle}`);
        });
    });

    // Lost and Found
    const lostFoundPosts = document.querySelectorAll('.lost-found-post');
    lostFoundPosts.forEach(post => {
        post.addEventListener('click', function() {
            const itemTitle = this.querySelector('h3').textContent;
            const contactInfo = this.querySelector('.contact-info').textContent;
            alert(`You have selected the item: ${itemTitle}\n${contactInfo}`);
        });
    });

});