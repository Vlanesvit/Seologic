const statusText = document.querySelector('.status-text');
const statusAdd = document.querySelector('.popup-input');
const popupBtnAddStatus = document.querySelector('.popup-add');

statusAdd.value = statusText.textContent;
popupBtnAddStatus.addEventListener('click', onInput);

function onInput(e) {
  e.preventDefault();
  if (statusText = null && statusAdd != null) {
    statusText.textContent = statusAdd.value;
    popup.classList.remove('open');
  }
}