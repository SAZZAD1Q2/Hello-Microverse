const mobileMenu = document.querySelectorAll('.mobile-menu-canvas li');
const mobileMenuCanvas = document.querySelector('.mobile-menu-canvas');

for (let i = 0; i < mobileMenu.length; i += 1) {
  mobileMenu[i].addEventListener('click', () => {
    mobileMenuCanvas.classList.toggle('show');
    // mobileMenuIcons[0].classList.toggle('hide');
  });
}

// for (let i = 0; i < mobileMenuIcons.length; i += 1) {
//   mobileMenuIcons[i].addEventListener('click', () => {
//     mobileMenuCanvas.classList.toggle('show');
//   });
// }

// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(event) {
//     console.log('The button was clicked!');
//     // event.stopPropagation();
// });

// document.body.addEventListener('click',function(event) {
//     console.log('The body was clicked!');
// });

// let monileManu = document.querySelector(".mobile_manu");

// mobileManu.addEventListener('click')

/* sei */
