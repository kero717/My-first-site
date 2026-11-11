const GetBack = document.getElementById('GetBack');
const Window = document.getElementById('Window');
const FormFox = document.getElementById('myForm');
const output = document.getElementById('outputMessage');
const fox = document.getElementById('Fox');
const frame = document.getElementById('frame');
const animation = document.getElementById('animation');
const sub = document.getElementById('sub');
const Time = document.getElementById('Time');
const counter = document.getElementById('counter');
const btnForField = document.getElementById('btnForField');
const Sp = document.getElementById('Sp');
const field = document.getElementById('field');





btnForField.addEventListener('click', function(){
    const film = field.value;
    if (film ==='')return;
    
});
animation.addEventListener('click', function(){
    window.location.href = 'animation.html';
});

fox.addEventListener('click', function(){
      if (frame.style.display === 'block') {
        frame.style.display = 'none';  // показать
    } else {
        frame.style.display = 'block';   // скрыть
    }
});

//переход назад.
GetBack.addEventListener('click', function(){ 
    window.location.href = 'Main.html';
});


FormFox.addEventListener('submit', function(event){
    event.preventDefault();//команда чтобы текст после отправки оставался в строке

    const name = document.getElementById('FoxName').value; 
    const el = document.createElement('div');
    el.textContent = name;
    output.appendChild(el);
     /*пояснение логики блока кода
   (15-18 строка кода)
    Строка 15: Берём input по id и читаем его текущее значение (то, что пользователь уже написал). Сохраняем в переменную.
    Строка 16: Создаём новый пустой HTML-элемент (например, <p> или <div>). Он пока нигде не находится — просто "висит в памяти". 
    При каждом новом вызове функции он создастся заново, потому что код внутри обработчика выполняется на каждую отправку.
    Строка 17: Кладём текст из переменной 1 в новый элемент (textContent). Теперь у нового элемента есть содержимое. 
    Строка 18: Добавляем новый элемент (с текстом) в конец контейнера output. Старые элементы не трогаются — новый встаёт снизу к ним 
    */ 
    document.getElementById('FoxName').value = ''; //очищает строчку после отправки
});

sub.addEventListener('click', function(){
    if(output.style.display === 'none'){
        output.style.display = 'block';
    }
});

function showTime() {
    let date = new Date();
    const day = date.getDate();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    Time.textContent = `${day}:${hours}:${minute}:${second}`;
}

setInterval(showTime, 1000);

let number = localStorage.getItem('counter');
if (number === null) {
    number = 0;
};
number = Number(number);                        
number = number + 1;                           
localStorage.setItem('counter', number);       
counter.textContent = number;  

let tasks = localStorage.getItem('tasks');
if (tasks === null ){
    tasks = [];
} else {
    tasks = JSON.parse(tasks);
}

const arr = ["images/лиса.jpg", "https://i.pinimg.com/originals/d4/c2/2a/d4c22a8a391eae52a96395a35bceca2e.jpg?nii=t", "https://i.pinimg.com/736x/cd/7b/cf/cd7bcf17aea4f3ca81e5aac911672dd0.jpg"];
let currentImage = 0;
fox.addEventListener('click', function(){
    currentImage = currentImage + 1;
    if(currentImage >= arr.length){
        currentImage = 0
    }
    fox.src = arr[currentImage]
});