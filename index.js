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

const headings = document.querySelectorAll('.toggle-paragraph');
headings.forEach(heading => {
  heading.addEventListener('click', () => {
    const paragraph = heading.nextElementSibling;
    const row = heading.parentElement;
    row.classList.toggle('show');
  });
});
