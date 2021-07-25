//======================================================================================================
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
//======================================================================================================

//======================================================================================================
const saveBtn = document.querySelector('.saveBtn')
const column = document.querySelector('.column')
const input = document.querySelector('.popup-form__titleField')
const textarea = document.querySelector('.popup-form__descField')

saveBtn.addEventListener('click', () => {
	if (input.value != '') {

		const divTask = document.createElement('div')
		const h6TaskTitle = document.createElement('h6')
		const divTaskText = document.createElement('div')
		const inputTaskCheckMark = document.createElement('input')
		const divTaskTrash = document.createElement('div')
		const iTrash = document.createElement('i')
		divTask.classList.add('task', 'column__task')
		column.prepend(divTask)
		h6TaskTitle.classList.add('task__title')
		divTaskText.classList.add('task__text')
		inputTaskCheckMark.classList.add('task__checkMark')
		inputTaskCheckMark.setAttribute('type', 'checkbox')
		inputTaskCheckMark.setAttribute('name', 'checkMark')
		divTaskTrash.classList.add('task__trash')
		divTask.prepend(h6TaskTitle, divTaskText, inputTaskCheckMark, divTaskTrash)
		iTrash.classList.add('fas', 'fa-trash')
		divTaskTrash.prepend(iTrash)

		const taskTitleArr = document.querySelectorAll('.task__title')
		const taskTextArr = document.querySelectorAll('.task__text')
		const taskCheckMarkArr = document.querySelectorAll('.task__checkMark')
		const inputValue = input.value
		const textareaValue = textarea.value
		taskTitleArr[0].innerHTML = inputValue
		taskTextArr[0].innerHTML = textareaValue





		input.value = ''
		textarea.value = ''
		popup.classList.remove('open')
	}
	else {
		alert('Заполните поле заголовка')
	}
})
//======================================================================================================




//======================================================================================================

// const taskTitleArr = document.querySelectorAll('.task__title')
// const taskCheckMarkArr = document.querySelectorAll('.task__checkMark')

// taskCheckMarkArr[0].addEventListener('click', () => {
// 	taskTitleArr[0].classList.toggle('check')
// })

//======================================================================================================
