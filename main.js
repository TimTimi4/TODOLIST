import { openTaskModal, popup } from './moduls/openTaskModal.js';
openTaskModal()

function getTasksFromLocalStorage() {
	const save = JSON.parse(localStorage.getItem('task'))
	return save || []
}
const tasks = getTasksFromLocalStorage()

const taskRow = document.querySelector('.header-todolist__row')

const render = () => {
	taskRow.innerHTML = ''
	tasks.forEach(task => {
		const taskDom = createTaskDom(task)
		taskRow.prepend(taskDom)
	});
}



const onCheck = (event) => {
	const idCheckMark = Number(event.target.id)
	const indexTask = tasks.findIndex((obj) => obj.id == idCheckMark)
	const newItem = tasks[indexTask]
	newItem.done = !tasks[indexTask].done
	tasks.splice(indexTask, 1, newItem)
	render()
}


import { saveChange, changePopup, changePopupTitle, changePopupText } from './moduls/changeTaskModal.js';
saveChange()
let indexChangeTask = null
const onClick = (event) => {
	changePopup.classList.add('open')
	const idchangePopup = Number(event.target.id)
	indexChangeTask = tasks.findIndex((task) => task.id == idchangePopup)
	changePopupTitle.value = tasks[indexChangeTask].title
	changePopupText.value = tasks[indexChangeTask].text
}
export { indexChangeTask, render, tasks, indexDeleteTask }



import { deleteTask, deletePopup } from './moduls/deleteTaskModal.js';
deleteTask()
let indexDeleteTask = null
const onDelete = (event) => {
	deletePopup.classList.add('open')
	const idDeletePopup = Number(event.target.id)
	indexDeleteTask = tasks.findIndex((task) => task.id == idDeletePopup)
}



const createEl = (options) => {
	const { tag, classNameArr, textContent, type, name, id } = options
	const domElem = document.createElement(tag)
	classNameArr.forEach(className => domElem.classList.add(className))
	if (textContent) domElem.append(textContent)
	if (type) domElem.setAttribute(Object.keys(type)[0], type.type)
	if (name) domElem.setAttribute(Object.keys(name)[0], name.name)
	if (id) domElem.setAttribute(Object.keys(id)[0], id.id)
	return domElem
}

function createTaskDom(task) {
	const divTask = createEl({ tag: 'div', classNameArr: ['task', 'row__task'] })
	const h6Title = createEl({ tag: 'h6', classNameArr: ['task__title'], textContent: task.title })
	const divText = createEl({ tag: 'div', classNameArr: ['task__text'], textContent: task.text })

	const inputCheckMark = createEl(
		{
			tag: 'input',
			classNameArr: ['task__checkMark'],
			type: { type: 'checkbox' },
			name: { name: 'checkMark' },
			id: { id: Number(task.id) }
		}
	)
	inputCheckMark.addEventListener('change', onCheck)
	inputCheckMark.checked = task.done
	if (task.done == true) {
		h6Title.classList.add('check')
	}

	const divTaskBottom = createEl({ tag: 'div', classNameArr: ['task__bottom'] })
	const buttonTaskTrash = createEl({ tag: 'button', classNameArr: ['task__trash'], type: { type: 'button' } })

	const iTrash = createEl({ tag: 'i', classNameArr: ['fas', 'fa-trash'], id: { id: Number(task.id) } })
	iTrash.addEventListener('click', onDelete)
	buttonTaskTrash.prepend(iTrash)

	const buttonChangeTask = createEl(
		{
			tag: 'button',
			classNameArr: ['task__change'],
			type: { type: 'button' },
			id: { id: Number(task.id) },
			textContent: 'изменить'
		}
	)
	buttonChangeTask.addEventListener('click', onClick)

	const iPen = createEl({ tag: 'i', classNameArr: ['fas', 'fa-pen'] })
	buttonChangeTask.prepend(iPen)


	divTask.prepend(h6Title, divText, inputCheckMark, divTaskBottom)
	divTaskBottom.prepend(buttonChangeTask, buttonTaskTrash)

	return divTask
}
tasks.forEach(task => {
	const taskDom = createTaskDom(task)
	taskRow.prepend(taskDom)
})


import { saveTask } from './moduls/saveTask.js';
saveTask()

