const dateElement = document.querySelector('.top__date')

const DayArray = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]
const MonthArray = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"]

const date = new Date()

dateElement.textContent = DayArray[date.getDay()] + " " + date.getDate() + " " + MonthArray[date.getMonth()]