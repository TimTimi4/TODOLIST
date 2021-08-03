//=====================================<Open Modal>=======================================================
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
//=====================================<Open Modal>=======================================================


//======================================================================================================
const saveBtn = document.querySelector('.saveBtn')
const taskRow = document.querySelector('.header-todolist__row')
const input = document.querySelector('.popup-form__titleField')
const textarea = document.querySelector('.popup-form__descField')

const tasksArr = [{
	id: 1,
	title: '1 title',
	text: '1 textarea',
},
{
	id: 2,
	title: '2 title',
	text: '2 textarea',
}
]



// // ! Функция получения значений из localstorage
// function getInitialTasks() {
// 	const save = JSON.parse(localStorage.getItem('task'))
// 	if (save) {
// 		return save
// 	} else {
// 		return []
// 	}
// }
// const tasksArr = getInitialTasks()


// ! Рендерим в HTML заметку
const createTaskDom = (task) => {
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
	divTask.setAttribute('id', task.id)
	h6Title.classList.add('task__title')
	divText.classList.add('task__text')
	inputCheckMark.classList.add('task__checkMark')
	inputCheckMark.setAttribute('type', 'checkbox')
	inputCheckMark.setAttribute('name', 'checkMark')
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

// !

const taskTitleDOMArr = document.querySelectorAll('.task__title')
console.log(taskTitleDOMArr)
const taskCheckMarkDOMArr = document.querySelectorAll('.task__checkMark')
console.log(taskCheckMarkDOMArr)

for (let i = 0; i < taskCheckMarkDOMArr.lenght; i++) {
	for (let j = 0; j < taskTitleDOMArr.length; j++) {
		if (taskCheckMarkDOMArr[i] == taskTitleDOMArr[j]) {
			taskCheckMarkDOMArr[i].addEventListener('click', () => {
				taskTitleDOMArr[j].classList.toggle('check')
			})
		}
	}
}









saveBtn.addEventListener('click', () => {
	if (input.value != '') {
		const newTask = {
			id: String(tasksArr.length + 1),
			title: input.value,
			text: textarea.value,
		}
		tasksArr.push(newTask)
		taskRow.innerHTML = ''

		tasksArr.forEach(task => {
			taskRow.prepend(createTaskDom(task))
		});













		// localStorage.setItem('task', JSON.stringify(tasksArr))
		input.value = ''
		textarea.value = ''
		popup.classList.remove('open')
	}
	else {
		alert('Заполните поле заголовка')
	}
})


//======================================================================================================

