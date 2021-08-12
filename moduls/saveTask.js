const saveBtn = document.querySelector('.saveBtn')
const input = document.querySelector('.popup-form__titleField')
const textarea = document.querySelector('.popup-form__descField')
const titleError = document.querySelector('.popup-form__titleError')

import { tasks, render } from '/main.js'
import { popup } from './openTaskModal.js'


function saveTask() {
	saveBtn.addEventListener('click', () => {
		if (input.value != '') {
			const newTask = {
				id: String(tasks.length + 1),
				title: input.value,
				text: textarea.value,
			}
			tasks.push(newTask)
			render()
			localStorage.setItem('task', JSON.stringify(tasks))

			input.value = ''
			textarea.value = ''

			popup.classList.remove('open')
			titleError.classList.remove('open')
		}
		else {
			titleError.classList.add('open')
		}
	})
}

export { saveTask }