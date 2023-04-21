

// Select all elements with the class 'toggle-paragraph' and store them in the 'headings' array
const headings = document.querySelectorAll('.toggle-paragraph');

// For each element in the 'headings' array, add a click event listener
headings.forEach(heading => {
  // When clicked, select the next element sibling of the clicked heading and store it in the 'paragraph' variable
  const paragraph = heading.nextElementSibling;
  // Select the parent element of the clicked heading and store it in the 'row' variable
  const row = heading.parentElement;
  // Toggle the 'show' class on the 'row' element
  row.classList.toggle('show');
});

// Select all elements with the class 'tier' and store them in the 'tiers' array
const tiers = document.querySelectorAll('.tier');

// For each element in the 'tiers' array, add mouseenter, mouseleave, and click event listeners to the 'title' element
tiers.forEach(tier => {
  // Select the 'h3' element within the 'tier' element and store it in the 'title' variable
  const title = tier.querySelector('h3');
  // Select the 'p' element within the 'tier' element and store it in the 'content' variable
  const content = tier.querySelector('p');
  
  // When the mouse enters the 'title' element, add a text shadow
  title.addEventListener('mouseenter', () => {
    title.style.textShadow = '0 0 10px #ff7f7e';
  });
  
  // When the mouse leaves the 'title' element, remove the text shadow
  title.addEventListener('mouseleave', () => {
    title.style.textShadow = '';
  });
  
  // When the 'title' element is clicked, toggle the 'show' class on the 'content' element
  title.addEventListener('click', () => {
    content.classList.toggle('show');
  });
});



























/*
const headings = document.querySelectorAll('.toggle-paragraph');
headings.forEach(heading => {
  heading.addEventListener('click', () => {
    const paragraph = heading.nextElementSibling;
    const row = heading.parentElement;
    row.classList.toggle('show');
  });
});





const tiers = document.querySelectorAll('.tier');

tiers.forEach(tier => {
  const title = tier.querySelector('h3');
  const content = tier.querySelector('p');
  
  title.addEventListener('mouseenter', () => {
    title.style.textShadow = '0 0 10px #ff7f7e';
  });
  
  title.addEventListener('mouseleave', () => {
    title.style.textShadow = '';
  });
  
  title.addEventListener('click', () => {
    content.classList.toggle('show');
  });
});
*/

