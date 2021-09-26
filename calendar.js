function Calendar2(id, year, month) {
    var Dlast = new Date(year, month + 1, 0).getDate(),
        D = new Date(year, month, Dlast),
        DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
        DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
        calendar = '<tr>',
        month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (DNfirst != 0) {
        for (var i = 1; i < DNfirst; i++) calendar += '<td>';
    } else {
        for (var i = 0; i < 6; i++) calendar += '<td>';
    }
    for (var i = 1; i <= Dlast; i++) {
        if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
            calendar += '<td class="today selectedDate">' + i;
        } else {
            calendar += '<td>' + i;
        }
        if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
            calendar += '<tr>';
        }
    }
    for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
    document.querySelector('#' + id + ' tbody').innerHTML = calendar;
    document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
    if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {
        document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
    }
}

Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
getDatesFromCalendar()
// -month
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) - 1);
    getDatesFromCalendar()
}
// +month
document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) + 1);
    getDatesFromCalendar()
}

///////////////
const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
///////////////////////
datesArray = []
dateFromFunc = 0
const dateOfToday = new Date();
let today = dateOfToday.getDate()
const weeksStart = document.querySelectorAll('#calendar2 tbody tr')
for (let i = 0; i < weeksStart.length; i++) {
    let weekDates = weeksStart[i].querySelectorAll('td')
    weekDates.forEach((val) => {
        let dataFromList = parseFloat(val.innerHTML)
        if (dataFromList === today) {
            dateFromFunc = i
        }

    })
}

let weekDates = weeksStart[dateFromFunc].querySelectorAll('td')
weekDates.forEach((val) => {
    let dataFromList = parseFloat(val.innerHTML)
    if (isNaN(dataFromList)) {
        dataFromList = ''
    }
    datesArray.push(dataFromList)
})

/////////////////////////
putCurrentWeek()

function getDatesFromCalendar() {
    calendarMonth = parseFloat(document.getElementById('calendar2').querySelector('.getMonth').dataset.month) + 1
    calendarYear = document.getElementById('calendar2').querySelector('.getMonth').dataset.year
    dates = document.querySelectorAll('#calendar2 tbody td')
    dates.forEach((data) => {
        data.addEventListener('click', (e) => {
            calendarData = parseFloat(data.innerHTML)
            if (!isNaN(calendarData)) {
                let cont = document.querySelector('.selectedDate')
                if (cont) {
                    document.querySelector('.selectedDate').classList.remove('selectedDate')
                }
                data.classList.add('selectedDate')
                let fullDate = calendarData + "." + calendarMonth + "." + calendarYear
                console.log(fullDate)
                getAll()
            }
        })
    })
}

function getAll() {
    const weeks = document.querySelectorAll('#calendar2 tbody tr')
    for (let i = 0; i < weeks.length; i++) {
        weeks[i].addEventListener('click', (e) => {
            datesArray = []
            // console.log('current week is ' + i)
            let weekDates = weeks[i].querySelectorAll('td')
            weekDates.forEach((val) => {
                let dataFromList = parseFloat(val.innerHTML)
                if (isNaN(dataFromList)) {
                    dataFromList = ''

                }
                datesArray.push(dataFromList)
            })
            let selectedDate = document.querySelector('.selectedDate').innerHTML
            for (let q = 0; q < datesArray.length; q++) {
                if (datesArray[q] !== '') {
                    firstDate = datesArray[q];
                    break
                }
            }
            for (let q = datesArray.length; q--;) {
                if (datesArray[q] !== '') {
                    lastDate = datesArray[q];
                    break
                }
            }
            //// change week header
            if (!isNaN(calendarData)) {
                document.querySelector('.current-week').innerHTML = monthList[calendarMonth - 1] + " " + firstDate + "-" + lastDate + ", " + calendarYear
                let headC = document.querySelector('.header-of-calendar')
                let headerOfCalendar = headC.querySelectorAll('p')
                for (let x = 0; x < headerOfCalendar.length; x++) {
                    headerOfCalendar[x].classList.remove('active-date-on-week')
                    if (datesArray[x] === '') {
                        headerOfCalendar[x].innerHTML = daysOfWeek[x] + " " + datesArray[x]
                    } else {
                        headerOfCalendar[x].innerHTML = daysOfWeek[x] + ", " + datesArray[x]
                    }
                    if (parseFloat(datesArray[x]) === parseFloat(selectedDate)) {
                        headerOfCalendar[x].classList.add('active-date-on-week')
                    }
                    //selectedDate
                }
            }
            //console.log(datesArray + ' selected date is ' + selectedDate + "  " + monthList[calendarMonth - 1] + "  " + calendarYear)
        })
    }
}

function putCurrentWeek() {/// доделать . выбор текущей недели для большого календаря
    let selectedDate = document.querySelector('.selectedDate').innerHTML
    for (let q = 0; q < datesArray.length; q++) {
        if (datesArray[q] !== '') {
            firstDate = datesArray[q];
            break
        }
    }
    for (let q = datesArray.length; q--;) {
        if (datesArray[q] !== '') {
            lastDate = datesArray[q];
            break
        }
    }
    document.querySelector('.current-week').innerHTML = monthList[calendarMonth - 1] + " " + firstDate + "-" + lastDate + ", " + calendarYear
    let headC = document.querySelector('.header-of-calendar')
    let headerOfCalendar = headC.querySelectorAll('p')
    for (let x = 0; x < headerOfCalendar.length; x++) {
        headerOfCalendar[x].classList.remove('active-date-on-week')
        //console.log('datesArray[x]='+datesArray[x])
        if (datesArray[x] === '') {
            headerOfCalendar[x].innerHTML = daysOfWeek[x] + " " + datesArray[x]
        } else {
            headerOfCalendar[x].innerHTML = daysOfWeek[x] + ", " + datesArray[x]
        }
        if (parseFloat(datesArray[x]) === parseFloat(selectedDate)) {
            headerOfCalendar[x].classList.add('active-date-on-week')
        }
        //selectedDate
    }
}

//нужен массив всех недель для переключения на большом календаре


//
const dayListOnWeek = document.querySelector('.header-of-calendar').querySelectorAll('p')
dayListOnWeek.forEach((val) => {
    val.addEventListener("click", () => {
        for (let i = 0; i < dayListOnWeek.length; i++) {
            dayListOnWeek[i].classList.remove('active-date-on-week')
        }
        val.classList.add('active-date-on-week')
    })
})

//create date meeting
const meeting = document.querySelector('.daily-calendar')
let dayBlock = ''
let hourBlock = ''
// meeting data
// in array title, time, link, candidate and ect.
 meetingArray = [] // data about every meeting
//

for (let i = 0; i < 24; i++) {
    if (i < 10) {
        time = `0${i}`
    } else {
        time = `${i}`
    }
    hourBlock = `    
<div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                        <div class="relative"><p
                                class="week-grid text-center bg-white border  border-gray-200 p-2  ">
                                <span class="week-meeting week-meeting-end p-1 text-sm">00:30-01:00 Daily Zoom</span>
</p></div>
                        <div class="relative"><p
                                class="week-grid text-center bg-white border  border-gray-200 p-2  "></p></div>
                        <div class="relative"><p
                                class="week-grid text-center bg-white border  border-gray-200 p-2  "></p></div>
                        <div class="relative"><p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                            <span class="week-meeting week-meeting-top p-1 text-sm">00:00-00:30 Daily Zoom,Meeting Super</span>
                             
                        </p></div>
                        <div class="relative"><p
                                class="week-grid text-center bg-white border  border-gray-200 p-2  "></p></div>
                        <div class="relative"><p
                                class="week-grid text-center bg-white border  border-gray-200 p-2  "></p></div>
                        <div class="relative"><p
                                class="week-grid text-center bg-white border  border-gray-200 p-2  "></p></div>
                        <div class="absolute  top-0 time"> ${time}:00</div>
</div>
    `
    dayBlock += hourBlock
}
//meeting.innerHTML = dayBlock