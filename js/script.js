// --- Custom JavaScript for ScienceMM ---

// Example: Simple form submission handler
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // You can add form validation here before sending
            const name = document.getElementById('contactName').value;
            const email = document.getElementById('contactEmail').value;
            const message = document.getElementById('contactMessage').value;

            if (name && email && message) {
                // In a real scenario, you'd send this data to a server (e.g., using fetch API)
                // For a static GitHub Pages site, you might use a service like Formspree.io
                console.log('Form Submitted!');
                console.log('Name:', name);
                console.log('Email:', email);
                console.log('Message:', message);

                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset(); // Clear the form
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }

    // Example: Highlight active navigation link based on scroll position (optional advanced feature)
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100; // Adjust for fixed navbar height
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href.includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Example: Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
