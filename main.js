let a = '';    // Первое число
let b = '';    // Второе число
let sign = '';     // Знак операции
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'X', '/', '%', '+/-']

// Экран
const out = document.querySelector('.calc-screen p');

// Функция очистки
function clearAll() {
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
  // Нажата не кнопка
  if (!event.target.classList.contains('btn')) return;
  // Нажата копка AC
  if (event.target.classList.contains('ac')) return;

  out.textContent = '';
  // Получаю нажатую кнопку
  const key = event.target.textContent


  // Если нажата клавиша 0-9 или .
  if (digit.includes(key)) {
    if (b === '' && sign === '') {
    a += key;
    out.textContent = a;
  } else if (a !== '' && b !== '' && finish) {
    b = key;
    finish = false;
    out.textContent = b;
  } else {
    b += key;
    out.textContent = b;
  }
  return;
}


  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    return;
  }


  // Нажата кнопка =
  if (key === '=') {
    switch(sign) {
      case '+':
        a = (+a) + (+b);
        break;
       case '-':
         a = a - b;
       break;
       case 'X':
          a = a * b;
        break;
       case '/':
        a = a / b;
         break;
      case '%': 
        a = a / 100;
        b = b / 100;
        break;
      case '+/-':
        a = -a;
        b = -b;
    }
    finish = true;
    out.textContent = a;
    console.log(a, b, sign)
  }
}