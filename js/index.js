console.log('App started...');

const phones = document.querySelectorAll('.phones__screen');

function clearClassesForAllImagesWithPhones() {
  phones.forEach((item) => {
    item.classList.remove('visible');
  });
}

function addClassForElementImageWithPhone(index) {
  phones[index].classList.add('visible');
}

let indexElement = 0;

clearClassesForAllImagesWithPhones();
function animationElemnts() {
  if (indexElement >= phones.length) {
    indexElement = 0;
    clearClassesForAllImagesWithPhones();
  }
  addClassForElementImageWithPhone(indexElement);

  indexElement++;
}
animationElemnts();

setInterval(() => {
  animationElemnts();
}, 5000);

const showPass = document.getElementById('js-show-pass');

const inputText = document.getElementById('js-input-text');
const inputPass = document.getElementById('js-input-pass');
const spanText = document.getElementById('js-span-text');
const spanPass = document.getElementById('js-span-pass');

function startWriteInput(e, elementSpan, elementInput) {
  if (e.target.value.length > 0) {
    elementSpan.classList.add('focus');
    elementInput.style.paddingTop = '16px';
    if (elementInput === inputPass) {
      showPass.classList.add('show');
    }
  } else {
    elementSpan.classList.remove('focus');
    elementInput.style.paddingTop = '9px';
    if (elementInput === inputPass) {
      showPass.classList.remove('show');
    }
  }
}

inputText.addEventListener('input', (e) =>
  startWriteInput(e, spanText, inputText)
);
inputPass.addEventListener('input', (e) =>
  startWriteInput(e, spanPass, inputPass)
);

showPass.addEventListener('click', () => {
  if (showPass.textContent === 'Показати') {
    inputPass.type = 'text';
    showPass.textContent = 'Сховати';
  } else if (showPass.textContent === 'Сховати') {
    inputPass.type = 'password';
    showPass.textContent = 'Показати';
  }
});
