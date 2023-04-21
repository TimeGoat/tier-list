

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


