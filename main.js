const mobileToggle = document.getElementById("mobile-toggle");
const mobileNav = document.getElementById("mobile-nav");
const body = document.querySelector('body');



document.getElementById('close-mobile-toggle').addEventListener('click', () => {
  mobileNav.style.visibility = 'hidden';
  body.style.overflow = 'scroll'
})



mobileToggle.addEventListener('click', () => {
   mobileNav.style.visibility = 'visible';
    body.style.overflow = 'hidden';
})



