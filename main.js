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
		// ! Добавить блок задачи
		const divTask = document.createElement('div')
		const h6TaskTitle = document.createElement('h6')
		const divTaskText = document.createElement('div')
		const inputTaskCheckMark = document.createElement('input')
		const buttonTaskTrash = document.createElement('button')
		const iTrash = document.createElement('i')
		const divTaskBottom = document.createElement('div')
		const buttonChangeTask = document.createElement('button')
		const iPen = document.createElement('i')
		divTask.classList.add('task', 'row__task')
		rowTask.prepend(divTask)
		h6TaskTitle.classList.add('task__title')
		divTaskText.classList.add('task__text')
		inputTaskCheckMark.classList.add('task__checkMark')
		inputTaskCheckMark.setAttribute('type', 'checkbox')
		inputTaskCheckMark.setAttribute('name', 'checkMark')
		buttonTaskTrash.setAttribute('class', 'task__trash')
		buttonTaskTrash.setAttribute('type', 'button')
		divTaskBottom.classList.add('task__bottom')
		buttonChangeTask.setAttribute('type', 'button')
		buttonChangeTask.setAttribute('class', 'task__change')
		iPen.classList.add('fas', 'fa-pen')
		divTask.prepend(h6TaskTitle, divTaskText, inputTaskCheckMark, divTaskBottom)
		iTrash.classList.add('fas', 'fa-trash')
		buttonTaskTrash.prepend(iTrash)
		divTaskBottom.prepend(buttonChangeTask, buttonTaskTrash)
		buttonChangeTask.append('изменить')
		buttonChangeTask.prepend(iPen)
		// ! Добавить блок задачи



		// ! Передать значение из поля формы в блок задачи
		const taskTitleArr = document.querySelectorAll('.task__title')
		const taskTextArr = document.querySelectorAll('.task__text')
		const taskCheckMarkArr = document.querySelectorAll('.task__checkMark')
		const inputValue = input.value
		const textareaValue = textarea.value
		taskTitleArr[0].innerHTML = inputValue
		taskTextArr[0].innerHTML = textareaValue
		// !======================Галочку на чекбокс====================
		taskCheckMarkArr[0].addEventListener('click', () => {
			taskTitleArr[0].classList.toggle('check')
		})
		// ! Передать значение из поля формы в блок задачи



		// ! Удаление задачи
		const trashArr = document.querySelectorAll('.task__trash')
		const taskArr = document.querySelectorAll('.task')
		const popupDeleteTask = document.querySelector('.popupDeleteTask')
		const acceptDelete = document.querySelector('.popupDeleteTask__btn')
		const deniedDelete = document.querySelector('.popupDeleteTask__close')
		const popupDeleteBg = document.querySelector('.popupDeleteTask__bg')

		for (let i = 0; i < trashArr.length; i++) {
			trashArr[0].addEventListener('click', () => {
				popupDeleteTask.classList.add('openDeleteModal')
				acceptDelete.addEventListener('click', () => {
					taskArr[0].remove()
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
		// ! Удаление задачи

		// ! Изменение задачи
		const ChangeTaskArr = document.querySelectorAll('.task__change')
		const popupChangeTask = document.querySelector('.popupChangeTask')
		const popupCloseChange = document.querySelector('.close-popupChangeTask')
		const popupChangeBg = document.querySelector('.popupChangeTask__bg')
		const closeChabgeModalBtn = document.querySelector('.popupChangeTask-form__closeModalBtn')
		const saveChangeBtn = document.querySelector('.saveChangeBtn')


		for (let i = 0; i < ChangeTaskArr.length; i++) {
			ChangeTaskArr[0].addEventListener('click', () => {
				const changeTitleField = document.querySelector('.popupChangeTask-form__titleField')
				const changeTextField = document.querySelector('.popupChangeTask-form__descField')
				popupChangeTask.classList.add('openChangeModal')
				changeTitleField.value = inputValue
				changeTextField.value = textareaValue
				saveChangeBtn.addEventListener('click', () => {
					taskTitleArr[0].innerHTML = changeTitleField.value
					taskTextArr[0].innerHTML = changeTextField.value
					popupChangeTask.classList.remove('openChangeModal')
				})
			})
			popupCloseChange.addEventListener('click', () => {
				popupChangeTask.classList.remove('openChangeModal')
			})

			popupChangeBg.addEventListener('click', () => {
				popupChangeTask.classList.remove('openChangeModal')
			})

			closeChabgeModalBtn.addEventListener('click', () => {
				popupChangeTask.classList.remove('openChangeModal')
			})
		}






		input.value = ''
		textarea.value = ''
		popup.classList.remove('open')


		localStorage.setItem('taskArr', JSON.stringify(taskArr))
		localStorage.getItem('taskArr')





	}
	else {
		alert('Заполните поле заголовка')
	}
})





//======================================================================================================

//======================================================================================================


//======================================================================================================
