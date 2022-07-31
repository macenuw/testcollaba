$(function () {
  $('.custom-checkbox, .castom-select').styler();
})
//modal
const modal = document.querySelector('.modal');
const modalCloseBtn = document.querySelector('.modal__close')
const detailsBtns = document.querySelectorAll('.form__category-btn');
detailsBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    openModal('Modal', 'Here can be your ad')
  })
})
modalCloseBtn.addEventListener('click', () => {
  closeModal()
})
modal.addEventListener('click', (e) => {
  if (e.target === modal || e.target.getAttribute('data-close') == '') {
    closeModal()
  }
})
window.addEventListener('keyup', (e) => {
  if (e.code === 'Escape' && modal.classList.contains('show')) {
    closeModal()
  }
})

function openModal(title, text, btn = false) {
  modal.classList.add('show');
  modal.classList.remove('hide')
  document.body.style.overflow = 'hidden';
  modal.querySelector('h4').textContent = title;
  modal.querySelector('p').textContent = text;
  if (btn == true) {
    modal.querySelector('.modal__btns-inner').style.display = 'flex';
  } else {
    modal.querySelector('.modal__btns-inner').style.display = 'none';
  }
}

function closeModal() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

//delete category
const categoryDeletebtn = document.querySelectorAll('.form__category-delete')
categoryDeletebtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.target.closest('.form__category-item').remove();
  })
})

//default settings
const resetBtn = document.querySelector('#resetBtn');
const allCheckboxOnPage = document.querySelectorAll('input[type="checkbox"]');
const allSelectOnPage = document.querySelectorAll('select')

resetBtn.addEventListener('click', () => {
  allCheckboxOnPage.forEach(checkbox => {
    checkbox.setAttribute('checked', true);
    checkbox.closest('.jq-checkbox').classList.add('checked');
  })
  allSelectOnPage.forEach(item => {
    item.querySelector('[selected]').selected = true
    item.closest('.jqselect').querySelector('.jq-selectbox__select-text').textContent = item.querySelector('[selected]').textContent
  })
})

//save settings

const saveSettingBtn = document.querySelector('#saveSettingBtn');
const saveBtn = document.querySelector('#saveBtn')
const closeBtn = document.querySelector('#closeBtn')
saveSettingBtn.addEventListener('click', () => {
  openModal('Вы уверены?', '', true)
})
saveBtn.addEventListener('click', () => {
  closeModal()
  openModal('Настройки успешно сохранены', 'Настройки вступят в силу через 10 минут', false)
  setTimeout(closeModal, 2000)
})
closeBtn.addEventListener('click', () => {
  closeModal()
})


//hide adCompany
const adCompany = document.querySelector('#adCompany');
adCompany.addEventListener('click', () => {
  adCompany.closest('.form__block').querySelectorAll('.form__row').forEach(row => {
    row.classList.toggle('hide')
  })
})