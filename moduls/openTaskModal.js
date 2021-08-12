const popupOpenBtn = document.querySelector('.todolist__btn')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.close-popup')
const popupBg = document.querySelector('.popup__bg')
const popupCloseBtn = document.querySelector('.closeModalBtn')

function openTaskModal() {
	popupOpenBtn.addEventListener('click', () => {
		popup.classList.add('open')
	})
	popupClose.addEventListener('click', () => {
		popup.classList.remove('open')
	})
	popupBg.addEventListener('click', () => {
		popup.classList.remove('open')
	})
	popupCloseBtn.addEventListener('click', () => {
		popup.classList.remove('open')
	})
}
export { popup, openTaskModal }