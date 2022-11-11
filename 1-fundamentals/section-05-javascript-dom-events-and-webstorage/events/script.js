const createDaysOfTheWeek = () => {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  
const createDaysOfTheMonth = () => {
    const monthDays = document.querySelector('#days')
    const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    for (let monthIndex = 0; monthIndex < decemberDaysList.length; monthIndex++) {
        const calendarDays = decemberDaysList[monthIndex];
        const monthDaysItem = document.createElement('li');
        monthDaysItem.innerHTML = calendarDays;
        monthDaysItem.className = 'day'

        if (calendarDays == 24 || calendarDays == 25 || calendarDays == 31) {
            monthDaysItem.classList.add('holiday')
        }
        
        if (calendarDays == 4 || calendarDays == 11 || calendarDays == 18 || calendarDays == 25) {
            monthDaysItem.classList.add('friday')
        }

        monthDays.appendChild(monthDaysItem)
    };
}

createDaysOfTheMonth()

const holidayButton = (string = 'Feriados') => {
    const buttonContainer = document.querySelector('.buttons-container')
    const newButton = document.createElement('button')
    newButton.setAttribute('id', 'btn-holiday')
    newButton.innerText = string
    buttonContainer.appendChild(newButton)
}

holidayButton()

const clickingHolidayButton = document.getElementById('btn-holiday')
clickingHolidayButton.addEventListener('click', holidayButtonClick = (event) => {
    const holidaysArray = document.getElementsByClassName('holiday')
    for (eachDay in holidaysArray) {
        holidaysArray[eachDay].style.backgroundColor = 'blue'
        holidaysArray[eachDay].style.color = 'white'
    }
})

clickingHolidayButton.onclick()