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

const render = () => {
	taskRow.innerHTML = ''
	tasksArr.forEach(task => {
		const taskDom = createTaskDom(task)
		taskRow.prepend(taskDom)
	});
}

const onCheck = (event) => {
	const idCheckMark = Number(event.target.id)
	const index = tasksArr.findIndex((obj) => obj.id == idCheckMark)
	const newItem = tasksArr[index]
	newItem.done = !tasksArr[index].done
	tasksArr.splice(index, 1, newItem)
	render()
}


// ! Создаем дом элемент====================================================
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
	inputCheckMark.addEventListener('change', onCheck)
	inputCheckMark.checked = task.done
	if (task.done == true) {
		h6Title.classList.add('check')
	}
	divTaskBottom.classList.add('task__bottom')
	divTask.prepend(h6Title, divText, inputCheckMark, divTaskBottom)
	buttonTaskTrash.setAttribute('class', 'task__trash')
	buttonTaskTrash.setAttribute('type', 'button')
	iTrash.classList.add('fas', 'fa-trash')
	buttonChangeTask.setAttribute('type', 'button')
	buttonChangeTask.setAttribute('class', 'task__change')
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


// !================================================================


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