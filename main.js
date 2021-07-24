// Модалка
const popupOpen = document.querySelector('.todolist__btn')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.close-popup')
const bgClose = document.querySelector('.popup__bg')

popupOpen.addEventListener('click', () => {
	popup.classList.add('open')
})

popupClose.addEventListener('click', () => {
	popup.classList.remove('open')
})

bgClose.addEventListener('click', () => {
	popup.classList.remove('open')
})
// Модалка

const taskTitleArr = document.querySelectorAll('.task__title')
const taskCheckMarkArr = document.querySelectorAll('.task__checkMark')

taskCheckMarkArr[0].addEventListener('click', () => {
	taskTitleArr[0].classList.toggle('check')
})
taskCheckMarkArr[1].addEventListener('click', () => {
	taskTitleArr[1].classList.toggle('check')
})
taskCheckMarkArr[2].addEventListener('click', () => {
	taskTitleArr[2].classList.toggle('check')
})
taskCheckMarkArr[3].addEventListener('click', () => {
	taskTitleArr[3].classList.toggle('check')
})
taskCheckMarkArr[4].addEventListener('click', () => {
	taskTitleArr[4].classList.toggle('check')
})
taskCheckMarkArr[5].addEventListener('click', () => {
	taskTitleArr[5].classList.toggle('check')
})








