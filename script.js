document.addEventListener('DOMContentLoaded',() {
    const emailLink = document.querySelector('.contact a[href^="mailto:"]');
    const linkedinLink = document.querySelector('.contact a[href^="https://www.linkedin.com"]');
    const contactDetails = document.getElementById('contact-details');

    emailLink.addEventListener('click', event) => {
        event.preventDefault();
        contactDetails.textContent = 'billnick@hotmail.gr';
        contactDetails.classList.toggle('hidden');
    });