const changePopup = document.querySelector('.popupChangeTask')
const changePopupClose = document.querySelector('.close-popupChangeTask')
const changePopupBg = document.querySelector('.popupChangeTask__bg')
const changePopupCloseBtn = document.querySelector('.popupChangeTask-form__closeModalBtn')
const saveChangeBtn = document.querySelector('.saveChangeBtn')
const changePopupTitle = document.querySelector('.popupChangeTask-form__titleField')
const changePopupText = document.querySelector('.popupChangeTask-form__descField')
const changePopupTitleError = document.querySelector('.popupChangeTask__titleError')

import { tasks, indexChangeTask, render } from '/main.js';

function saveChange() {
	saveChangeBtn.addEventListener('click', () => {
		const newValues = tasks[indexChangeTask]
		if (changePopupTitle.value != '') {
			newValues.title = changePopupTitle.value
			newValues.text = changePopupText.value
			tasks.splice(indexChangeTask, 1, newValues)
			render()
			changePopup.classList.remove('open')
			changePopupTitleError.classList.remove('open')
		} 
		else {
			console.log('говно')
			changePopupTitleError.classList.add('open')
		}
	})

	changePopupClose.addEventListener('click', () => {
		changePopup.classList.remove('open')
	})
	changePopupBg.addEventListener('click', () => {
		changePopup.classList.remove('open')
	})
	changePopupCloseBtn.addEventListener('click', () => {
		changePopup.classList.remove('open')
	})
}

export { changePopup, changePopupTitle, changePopupText, saveChange }