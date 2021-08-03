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


function getInitialTasks() {
	const save = JSON.parse(localStorage.getItem('task'))
	if (save) {
		return save
	} else {
		return []
	}
}
const tasksArr = getInitialTasks()


// ! Отображение
const createTaskDom = (task) => {
	const divTask = document.createElement('div')
	const h6Title = document.createElement('h6')
	const divText = document.createElement('div')
	divTask.classList.add('task', 'row__task')
	h6Title.classList.add('task__title')
	divText.classList.add('task__text')
	divTask.prepend(h6Title, divText)
	h6Title.textContent = task.title
	divText.textContent = task.text
	return divTask
}

tasksArr.forEach(task => {
	const taskDom = createTaskDom(task)
	taskRow.prepend(taskDom)
});




// tasksArr.push(task)

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

		localStorage.setItem('task', JSON.stringify(tasksArr))

		input.value = ''
		textarea.value = ''
		popup.classList.remove('open')
	}
	else {
		alert('Заполните поле заголовка')
	}
})


//======================================================================================================

