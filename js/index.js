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
const btnLogin = document.getElementById('js-btn-login');

const form = {
  username: '',
  password: '',
  disabled() {
    if (+this.username.length > 0 && +this.password.length >= 6) {
      return false;
    } else {
      return true;
    }
  }
};

function startWriteInput(e, elementSpan, elementInput) {
  changeDisabledBtn();
  if (e.target.value.length > 0) {
    elementSpan.classList.add('focus');
    elementInput.style.paddingTop = '14px';
    if (elementInput === inputPass) {
      showPass.classList.add('show');
    }
  } else {
    elementSpan.classList.remove('focus');
    elementInput.style.paddingTop = '0px';
    if (elementInput === inputPass) {
      showPass.classList.remove('show');
    }
  }
}

inputText.addEventListener('input', (e) => {
  form.username = e.target.value;
  startWriteInput(e, spanText, inputText);
});
inputPass.addEventListener('input', (e) => {
  form.password = e.target.value;
  startWriteInput(e, spanPass, inputPass);
});

showPass.addEventListener('click', () => {
  if (showPass.textContent.trim() === 'Показати') {
    inputPass.type = 'text';
    showPass.textContent = 'Сховати';
  } else if (showPass.textContent.trim() === 'Сховати') {
    inputPass.type = 'password';
    showPass.textContent = 'Показати';
  }
});

function changeDisabledBtn() {
  if (form.disabled()) {
    btnLogin.disabled = true;
    btnLogin.classList.add('disabled');
  } else {
    btnLogin.disabled = false;
    btnLogin.classList.remove('disabled');
  }
}

changeDisabledBtn();
