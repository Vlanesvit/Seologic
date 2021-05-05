const popupBtn = document.querySelector('.popup-btn');
const popupClose = document.querySelector('.popup-close');
const popup = document.querySelector('.popup');

popupBtn.addEventListener('click', function(event) { 
  event.preventDefault();
  popup.classList.add('open');
});

popupClose.addEventListener('click', function(event) { 
  event.preventDefault();
  popup.classList.remove('open');
});

popup.addEventListener('click', function(event) {
  event.preventDefault();
  e = event || window.event
  if(e.target == this) {
    popup.classList.remove('open');
  }
});
