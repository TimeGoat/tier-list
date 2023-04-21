const toggleParagraphs = document.querySelectorAll('.toggle-paragraph');

toggleParagraphs.forEach(paragraph => {
  paragraph.addEventListener('click', () => {
    const content = paragraph.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});
