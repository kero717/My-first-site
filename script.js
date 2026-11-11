const PressButton = document.getElementById('read');
const AlertSrc = document.getElementById('src');
const btn  = document.getElementById('Scroll');
const met  = document.getElementById('mouse');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300 ) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
});

btn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

AlertSrc.addEventListener('mouseover', function() {
    if (this.textContent === 'привет') {
    this.textContent = 'привет!';   // возвращаем исходный текст
  } 
  else AlertSrc.addEventListener('mouseout', function() {
    this.textContent = 'привет';    // меняем на новый
  });
});

PressButton.addEventListener('click', function() {
   window.location.href = 'homePage.html';
});

met.addEventListener('mouseover', function() {
  if (this.textContent === 'наведись на меня!') {
    alert('привет');
  }
});

