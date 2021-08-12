const deletePopup = document.querySelector('.popupDeleteTask')
const deletePopupClose = document.querySelector('.close-popupDeleteTask')
const deletePopupBg = document.querySelector('.popupDeleteTask__bg')
const deletePopupBtn = document.querySelector('.popupDeleteTask__btn')

import { tasks, indexDeleteTask, render } from '/main.js';

function deleteTask() {
	deletePopupBtn.addEventListener('click', () => {
		tasks.splice(indexDeleteTask, 1)
		localStorage.setItem('task', JSON.stringify(tasks))
		render()
		deletePopup.classList.remove('open')
	})

	deletePopupClose.addEventListener('click', () => {
		deletePopup.classList.remove('open')
	})

	deletePopupBg.addEventListener('click', () => {
		deletePopup.classList.remove('open')
	})
}

export { deletePopup, deleteTask }