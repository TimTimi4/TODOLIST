//=====================================<Open Modal>============================================
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
//=====================================<Open Modal>===========================================
//================================================================================
const saveBtn = document.querySelector('.saveBtn')
const taskRow = document.querySelector('.header-todolist__row')
const input = document.querySelector('.popup-form__titleField')
const textarea = document.querySelector('.popup-form__descField')
const tasksArr = [{
	id: 1,
	title: '1 title',
	text: '1 textarea',
	done: false,
},
{
	id: 2,
	title: '2 title',
	text: '2 textarea',
	done: false,
}
]
// ! Функция получения значений из localstorage
// function getInitialTasks() {
//  const save = JSON.parse(localStorage.getItem('task'))
//  if (save) {
//    return save
//  } else {
//    return []
//  }
// }
// const tasksArr = getInitialTasks()

// ! Функция удаляющая все старые заметки и записывающая измененную заметку
const render = () => {
	taskRow.innerHTML = ''
	tasksArr.forEach(task => {
		const taskDom = createTaskDom(task)
		taskRow.prepend(taskDom)
	});
}

// ! Функция изменяющая своство done на противоположное и рендер
const onCheck = (event) => {
	const idCheckMark = Number(event.target.id)
	const index = tasksArr.findIndex((obj) => obj.id == idCheckMark)
	const newItem = tasksArr[index]
	newItem.done = !tasksArr[index].done
	tasksArr.splice(index, 1, newItem)
	render()
}



// !=============================   Изменение заметки   ====================================
const changePopup = document.querySelector('.popupChangeTask')
const changePopupClose = document.querySelector('.close-popupChangeTask')
const changeBgClose = document.querySelector('.popupChangeTask__bg')
const changeCloseModalBtn = document.querySelector('.popupChangeTask-form__closeModalBtn')
const saveChangeBtn = document.querySelector('.saveChangeBtn')
const titleChangePopupField = document.querySelector('.popupChangeTask-form__titleField')
const textChangePopupField = document.querySelector('.popupChangeTask-form__descField')

let indexTask = null

const onClick = (event) => {
	changePopup.classList.add('open')
	const idchangePopup = Number(event.target.id)
	indexTask = tasksArr.findIndex((task) => task.id == idchangePopup)
	titleChangePopupField.value = tasksArr[indexTask].title
	textChangePopupField.value = tasksArr[indexTask].text
}

saveChangeBtn.addEventListener('click', () => {
	const newElems = tasksArr[indexTask]
	console.log(newElems)
	newElems.title = titleChangePopupField.value
	newElems.text = textChangePopupField.value
	tasksArr.splice(indexTask, 1, newElems)
	render()
	changePopup.classList.remove('open')
})

changePopupClose.addEventListener('click', () => {
	changePopup.classList.remove('open')
})
changeBgClose.addEventListener('click', () => {
	changePopup.classList.remove('open')
})
changeCloseModalBtn.addEventListener('click', () => {
	changePopup.classList.remove('open')
})
// !=============================   Изменение заметки   ====================================


// !=============================   Удаление заметки   ====================================
const deletePopup = document.querySelector('.popupDeleteTask')
const deletePopupClose = document.querySelector('.close-popupDeleteTask')
const deleteBgClose = document.querySelector('.popupDeleteTask__bg')
const deleteBtn = document.querySelector('.popupDeleteTask__btn')

let indexDeleteTask = null


const onDelete = (event) => {
	deletePopup.classList.add('open')
	const idDeletePopup = Number(event.target.id)
	indexDeleteTask = tasksArr.findIndex((task) => task.id == idDeletePopup)
}

deleteBtn.addEventListener('click', () => {
	tasksArr.splice(indexDeleteTask, 1)
	console.log(tasksArr)
	render()
	deletePopup.classList.remove('open')
})


deletePopupClose.addEventListener('click', () => {
	deletePopup.classList.remove('open')
})
deleteBgClose.addEventListener('click', () => {
	deletePopup.classList.remove('open')
})


// !=============================  Создание заметки  ====================================
function createTaskDom(task) {
	const divTask = document.createElement('div')
	const h6Title = document.createElement('h6')
	const divText = document.createElement('div')
	const inputCheckMark = document.createElement('input')
	const divTaskBottom = document.createElement('div')
	const buttonTaskTrash = document.createElement('button')
	const iTrash = document.createElement('i')
	const buttonChangeTask = document.createElement('button')
	const iPen = document.createElement('i')
	divTask.classList.add('task', 'row__task')
	h6Title.classList.add('task__title')
	divText.classList.add('task__text')
	inputCheckMark.classList.add('task__checkMark')
	inputCheckMark.setAttribute('type', 'checkbox')
	inputCheckMark.setAttribute('name', 'checkMark')
	inputCheckMark.setAttribute('id', task.id)
	inputCheckMark.addEventListener('change', onCheck) // Вешаем на чекбокс событие изменения
	inputCheckMark.checked = task.done
	if (task.done == true) {
		h6Title.classList.add('check')
	}
	divTaskBottom.classList.add('task__bottom')
	divTask.prepend(h6Title, divText, inputCheckMark, divTaskBottom)
	buttonTaskTrash.setAttribute('class', 'task__trash')
	buttonTaskTrash.setAttribute('type', 'button')
	iTrash.classList.add('fas', 'fa-trash')
	iTrash.setAttribute('id', task.id)
	iTrash.addEventListener('click', onDelete)
	buttonChangeTask.setAttribute('type', 'button')
	buttonChangeTask.setAttribute('class', 'task__change')
	buttonChangeTask.setAttribute('id', task.id)
	buttonChangeTask.addEventListener('click', onClick)
	iPen.classList.add('fas', 'fa-pen')
	divTaskBottom.prepend(buttonChangeTask, buttonTaskTrash)
	buttonTaskTrash.prepend(iTrash)
	buttonChangeTask.append('изменить')
	buttonChangeTask.prepend(iPen)
	h6Title.textContent = task.title
	divText.textContent = task.text
	return divTask
}
tasksArr.forEach(task => {
	const taskDom = createTaskDom(task)
	taskRow.prepend(taskDom)
});
// !=============================  Создание заметки  ====================================









// changePopupOpenArr.forEach(changePopupOpen => {
//   changePopupOpen.addEventListener('click', () =>{
//     changePopup.classList.add('open')
//     const titleChangePopupField = document.querySelector('.popupChangeTask-form__titleField')
//     const textChangePopupField = document.querySelector('.popupChangeTask-form__descField')
//     const idchangePopupOpen = Number(changePopupOpen.id)
//     const indexTask = tasksArr.findIndex((task) => task.id == idchangePopupOpen)
//     titleChangePopupField.value = tasksArr[indexTask].title
//     textChangePopupField.value = tasksArr[indexTask].text
//     saveChangeBtn.addEventListener('click', () => {
//       const newElems = tasksArr[indexTask]
//       newElems.title = titleChangePopupField.value
//       newElems.text =  textChangePopupField.value
//       tasksArr.splice(indexTask, 1, newElems)
//       console.log(tasksArr)
//       render()
//       changePopup.classList.remove('open')
//     })
//   })
// })










// !=============================   Изменение заметки   ====================================







// ! При сохранении заметки
saveBtn.addEventListener('click', () => {
	if (input.value != '') {
		const newTask = {
			id: String(tasksArr.length + 1),
			title: input.value,
			text: textarea.value,
		}
		tasksArr.push(newTask)
		render()
		// localStorage.setItem('task', JSON.stringify(tasksArr))

		input.value = ''
		textarea.value = ''
		popup.classList.remove('open')
	}
	else {
		alert('Заполните поле заголовка')
	}
})
//========================================================================================