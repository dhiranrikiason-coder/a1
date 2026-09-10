/* WindBreakGear Technical Outerwear Client Engine */
document.addEventListener('DOMContentLoaded', () => {
    // Mobile Drawer Toggle
    const menuToggle = document.getElementById('menuToggle');
    const drawerClose = document.getElementById('drawerClose');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerBackdrop = document.getElementById('drawerBackdrop');

    function openDrawer() {
        if (mobileDrawer) mobileDrawer.classList.add('open');
        if (drawerBackdrop) drawerBackdrop.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        if (mobileDrawer) mobileDrawer.classList.remove('open');
        if (drawerBackdrop) drawerBackdrop.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (menuToggle) menuToggle.addEventListener('click', openDrawer);
    if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

    // Close on link click
    document.querySelectorAll('.drawer-link').forEach(link => {
        link.addEventListener('click', closeDrawer);
    });

    // Contact Form Async Handler
    const contactForm = document.getElementById('contactForm');
    const formFeedback = document.getElementById('formFeedback');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            if (btn) btn.innerText = 'Dispatching to Mercer Atelier...';
            setTimeout(() => {
                contactForm.reset();
                if (btn) btn.innerText = 'Transmission Received';
                if (formFeedback) {
                    formFeedback.style.display = 'block';
                    formFeedback.innerHTML = '<p style="color: #00A896; font-weight: bold; margin-top: 1rem;">Thank you. Your inquiry has been routed to our Mercer Street alpine outerwear team. A technical specialist will reply within 24 business hours.</p>';
                }
            }, 800);
        });
    }
});
