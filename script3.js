const back = document.getElementById('back');
const music = document.getElementById('bgMusic');
const btn = document.getElementById('musicBtn');
const gif = document.getElementById('gif'); // у гифки должен быть id="gif"

btn.addEventListener('click', function() {
    // Музыка
    if (music.paused) {
        music.play();
        this.textContent = '🔇 Выключить музыку';
    } else {
        music.pause();
        this.textContent = '🔊 Включить музыку';
    }

    // Гифка
    if (gif.style.display === 'none') {
        gif.style.display = 'block';  // показываем
    } else {
        gif.style.display = 'none';   // скрываем
    }
});
back.addEventListener('click', function(){
    window.location.href = 'homePage.html'; 
});