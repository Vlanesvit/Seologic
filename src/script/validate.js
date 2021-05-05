document.addEventListener('DOMContentLoaded', function() {
  "use string"
  
  const form = document.querySelector('#form');
  const city = form.querySelector('#city');
  const password = form.querySelector('#password');
  const passwordConfirmation = form.querySelector('#passwordConfirmation');
  const email = form.querySelector('#email');

  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate();
    
    if(error === 0) {
      onTime();
    }
  };

  function formValidate() {
    let error = 0;
    const cityValue = city.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;
    const emailValue = email.value;
    
    if(cityValue === '') {
      setError(city, 'Укажите город');
      error++;
    } else{
      setSuccess(city);
    }
    
    if(passwordValue === '') {
      setError(password, 'Укажите пароль');
      error++;
    } else if(passwordValue.length !== 5) {
      setError(password, 'Используйте не менее 5 символов');
      error++;
    } else{
      setSuccess(password);
    }
    
    if(passwordConfirmationValue === '') {
      setError(passwordConfirmation, 'Укажите пароль');
      error++;
    } else if(passwordValue !== passwordConfirmationValue) {
      setError(passwordConfirmation, 'Пароли не совпадают');
      error++;
    } else{
      setSuccess(passwordConfirmation);
    }

    if(emailValue === '') {
      setError(email, 'Укажите E-mail');
      error++;
    } else if (!testEmail(emailValue)) {
      setError(email, 'Неверный E-mail');
      error++;
    } else{
      setSuccess(email);
    }
    return error;
  }

  function setError(input, message) {
    const inputBlock = input.parentElement;
    const errors = inputBlock.querySelector('.errors');
    inputBlock.classList.add('error');
    errors.innerText = message;
  }

  function setSuccess(input) {
    const inputBlock = input.parentElement;
    inputBlock.classList.remove('error');
  }
    
  function testEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
  }

  // Change date function
  function onTime() {
    const changes = document.querySelector('.changes');
    const Data = new Date();
    const Year = Data.getFullYear();
    const Month = Data.getMonth();
    const Day = Data.getDate();
    const Hour = Data.getHours();
    const Minutes = Data.getMinutes();
    const Seconds = Data.getSeconds();

    switch (Month) {
    case 0: fMonth="января"; break;
    case 1: fMonth="февраля"; break;
    case 2: fMonth="марта"; break;
    case 3: fMonth="апреля"; break;
    case 4: fMonth="мая"; break;
    case 5: fMonth="июня"; break;
    case 6: fMonth="июля"; break;
    case 7: fMonth="августа"; break;
    case 8: fMonth="сентября"; break;
    case 9: fMonth="октября"; break;
    case 10: fMonth="ноября"; break;
    case 11: fMonth="декабря"; break;
    }

    changes.textContent = 'последние изменения ' + Day + ' ' + fMonth + ' ' + Year + ' в ' + Hour + ':' + Minutes + ':' + Seconds;
  }
});
