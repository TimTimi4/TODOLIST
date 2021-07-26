//======================================================================================================
const popupOpen = document.querySelector('.todolist__btn')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.close-popup')
const bgClose = document.querySelector('.popup__bg')
const closeModalBtn = document.querySelector('.closeModalBtn')


popupOpen.addEventListener('click', () => {
	popup.classList.add('open')
})

popupClose.addEventListener('click', () => {
	popup.classList.remove('open')
})

bgClose.addEventListener('click', () => {
	popup.classList.remove('open')
})

closeModalBtn.addEventListener('click', () => {
	popup.classList.remove('open')
})

//======================================================================================================

//======================================================================================================
const saveBtn = document.querySelector('.saveBtn')
const rowTask = document.querySelector('.header-todolist__row')
const input = document.querySelector('.popup-form__titleField')
const textarea = document.querySelector('.popup-form__descField')







saveBtn.addEventListener('click', () => {
	if (input.value != '') {

		const divTask = document.createElement('div')
		const h6TaskTitle = document.createElement('h6')
		const divTaskText = document.createElement('div')
		const inputTaskCheckMark = document.createElement('input')
		const buttonTaskTrash = document.createElement('button')
		const iTrash = document.createElement('i')
		divTask.classList.add('task', 'row__task')
		h6TaskTitle.classList.add('task__title')
		divTaskText.classList.add('task__text')
		inputTaskCheckMark.classList.add('task__checkMark')
		inputTaskCheckMark.setAttribute('type', 'checkbox')
		inputTaskCheckMark.setAttribute('name', 'checkMark')
		buttonTaskTrash.setAttribute('class', 'task__trash')
		buttonTaskTrash.setAttribute('type', 'button')
		divTask.prepend(h6TaskTitle, divTaskText, inputTaskCheckMark, buttonTaskTrash)
		iTrash.classList.add('fas', 'fa-trash')
		buttonTaskTrash.prepend(iTrash)

		rowTask.prepend(divTask)




		const taskTitleArr = document.querySelectorAll('.task__title')
		const taskTextArr = document.querySelectorAll('.task__text')
		const taskCheckMarkArr = document.querySelectorAll('.task__checkMark')
		const inputValue = input.value
		const textareaValue = textarea.value
		taskTitleArr[0].innerHTML = inputValue
		taskTextArr[0].innerHTML = textareaValue


		taskCheckMarkArr[0].addEventListener('click', () => {
			taskTitleArr[0].classList.toggle('check')
		})


		// ! Удаление задачи
		const trashArr = document.querySelectorAll('.task__trash')
		const divTaskArr = document.querySelectorAll('.task')
		console.log(divTaskArr)
		console.log(trashArr)


		const popupDeleteTask = document.querySelector('.popupDeleteTask')
		const acceptDelete = document.querySelector('.popupDeleteTask__btn')
		const deniedDelete = document.querySelector('.popupDeleteTask__close')
		const popupDeleteBg = document.querySelector('.popupDeleteTask__bg')

		for (let i = 0; i < trashArr.length; i++) {
			trashArr[0].addEventListener('click', () => {
				popupDeleteTask.classList.add('openDeleteModal')
				acceptDelete.addEventListener('click', () => {
					divTaskArr[0].remove()
					popupDeleteTask.classList.remove('openDeleteModal')
				})
				deniedDelete.addEventListener('click', () => {
					popupDeleteTask.classList.remove('openDeleteModal')
				})
				popupDeleteBg.addEventListener('click', () => {
					popupDeleteTask.classList.remove('openDeleteModal')
				})
			})
		}















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


//======================================================================================================
