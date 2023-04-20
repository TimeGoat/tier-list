const tiers = document.querySelectorAll('.tier');

tiers.forEach(tier => {
  const title = tier.querySelector('h3');
  const content = tier.querySelector('p');
  
  title.addEventListener('mouseover', () => {
    title.style.textShadow = '0 0 10px #ff7f7e';
  });
  
  title.addEventListener('mouseout', () => {
    title.style.textShadow = '';
  });
  
  title.addEventListener('click', () => {
    content.classList.toggle('show');
  });
});
