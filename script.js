// Form validation and user interaction for Bloom Essence

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const signUpForm = document.getElementById('signupForm');

  // Contact form submission
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields before submitting.");
        return;
      }

      alert(`Thank you, ${name}! Your message has been received. We'll be in touch soon.`);
      contactForm.reset();
    });
  }

  // Sign-up form submission
  if (signUpForm) {
    signUpForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const interests = document.getElementById('interests').value;

      if (!fullName || !email || !interests) {
        alert("Please complete all fields to sign up for Bloom Essence updates.");
        return;
      }

      alert(`Welcome, ${fullName}! Thank you for joining Bloom Essence. You'll now receive our floral inspirations and special offers.`);
      signUpForm.reset();
    });
  }
});
