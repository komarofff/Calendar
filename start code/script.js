// calendar start
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
                createDateMeeting()
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
    createDateMeeting()
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
    createDateMeeting()
}




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
function createDateMeeting() {
    console.log('datesArray = ' + datesArray)
    const meeting = document.querySelector('.daily-calendar')
    let dayBlock = ''
    let hourBlock = ''
// meeting data
// in array title, time, link, candidate and ect.
    const meetingArray = [] // data about every meeting
//
//
    for (let i = 0; i < 24; i++) {
        if (i < 10) {
            time = `0${i}`
        } else {
            time = `${i}`
        }
        for (let d = 0; d < datesArray.length; d++) {
            // каждый div отдельная дата и один и тот-же час
            // надо из массива выбрать  для КАЖДОЙ ДАТЫ ПО ОДИНАКОВОМУ времени
            // возможно стоит переписать сетку для вывода данных по каждому дню отдельно
            hourBlock += `    
                        <div class="relative"><p
                                class="week-grid text-center bg-white border  border-gray-200 p-2  ">
                                <span class="week-meeting week-meeting-top p-1 text-sm">00:00-00:30 Daily Zoom,Meeting Super</span>
                                <span class="week-meeting week-meeting-end p-1 text-sm">00:30-01:00 Daily Zoom</span>
                        </p></div>                                            

    `

        }
        hourBlock+=`<div class="absolute  top-0 time"> ${time}:00</div>`
        dayBlock += `<div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">${hourBlock}</div>`
        hourBlock = ''

    }
    meeting.innerHTML = dayBlock
    script()
}

// calendar end
//////////////////////////////////////////////////////////////////////////////////
//console.log("meetingArray="+meetingArray)
script()
function script() {

    let modal = `
 
                                        <div class="relative w-full">
                                            <p class="text-lg font-semibold ">Client's meetings</p>
                                            <img class="cursor-pointer absolute -top-2 right-1 close-modal-daily-calendar"
                                                 src="images/Close.svg" alt="close" title="Close">
                                        </div>

                                        <div class="modal-daily-calendar-inner mt-2 flex flex-col justify-start items-start">
                                          <div class="modal-daily-calendar-catch-block ">
                                            <div class="mb-3 w-full">
                                                <p class="icon-date candidate-title ">Date</p>
                                                <p class="candidate-text">14:30 - 15:00, July 13, 2021</p>
                                            </div>
                                            <div class="mb-3 w-full">
                                                <p class="icon-user candidate-title ">Candidate</p>
                                                <p class="candidate-text">Alexander Rozaria</p>
                                            </div>
                                            <div class="mb-3 w-full">
                                                <p class="icon-time candidate-title ">Candidate’s time zone</p>
                                                <p class="candidate-text">Central European time</p>
                                            </div>
                                            <div class="mb-3 w-full">
                                                <p class="icon-email candidate-title ">Candidate’s email</p>
                                                <p class="candidate-text">candidate_1@gmail.com</p>
                                            </div>
                                            <div class="mb-3 w-full">
                                                <p class="icon-folder candidate-title ">Emails of other participants</p>
                                                <p class="candidate-text">candidate_2@gmail.com</p>
                                                <p class="candidate-text">candidate_3@gmail.com</p>
                                            </div>
                                            
                                          </div>
                                           <div class=" mt-2 flex flex-col justify-start items-start"> 
                                           <div class="mb-3 w-full">
                                                <p class="icon-link candidate-title ">Link to a meeting</p>
                                                <p class="candidate-text"><a class="copy-to-buffer" href="#">Copy</a></p>
                                            </div>
                                            <div class="-ml-4 question-block">
                                                <div class="mt-3 mb-2">
                                                    <p class="candidate-title ">Why did you choose us?</p>
                                                </div>
                                                <p class="mb-2">
                                                    <label for="check1" class="candidate-text"><input type="checkbox" id="check1">
                                                        You are a big promising company</label>
                                                </p>
                                                <p class="mb-2">
                                                    <label for="check2" class="candidate-text"><input type="checkbox" id="check2"> I
                                                        like your product</label>
                                                </p>
                                                <p class="mb-2">
                                                    <label for="check3" class="candidate-text"><input type="checkbox" id="check3"> I
                                                        am attracted to the salary</label>
                                                </p>
                                            </div>
                                            <div class="-ml-4 question-block">
                                                <div class="mt-3 mb-2">
                                                    <p class="candidate-title ">Why did you choose us?</p>
                                                </div>
                                                <p class="mb-2">
                                                    <label for="check1" class="candidate-text"><input type="checkbox" id="check1">
                                                        You are a big promising company</label>
                                                </p>
                                                <p class="mb-2">
                                                    <label for="check2" class="candidate-text"><input type="checkbox" id="check2"> I
                                                        like your product</label>
                                                </p>
                                                <p class="mb-2">
                                                    <label for="check3" class="candidate-text"><input type="checkbox" id="check3"> I
                                                        am attracted to the salary</label>
                                                </p>
                                            </div>
                                          </div>
                                        </div
                                   
`
    let zIndex = 1000
    let countEr = 0
    let userScreen = document.documentElement.clientWidth
    const meetings = document.querySelectorAll(".week-meeting")
    meetings.forEach((val) => {
        val.addEventListener("click", (e) => {
            let contains = val.classList.contains('selected-week-meeting')
            if (contains === false) {
                let newModal = document.createElement('div')
                newModal.classList.add('modal-daily-calendar')
                newModal.draggable = true
                let meetingID = `meeting-${countEr}`
                countEr++
                val.id = meetingID
                newModal.setAttribute('data-index', meetingID)
                newModal.innerHTML = modal
                let valPositionRight = val.getBoundingClientRect().right
                val.classList.add('selected-week-meeting')
                val.parentNode.after(newModal)
                let leftCorner = newModal.getBoundingClientRect().left
                let topCorner = newModal.getBoundingClientRect().top
                let modalWidth = newModal.getBoundingClientRect().width
                let difference = userScreen - valPositionRight
               // zIndex++
                val.parentNode.parentNode.querySelector('.modal-daily-calendar').style.cssText = `position: fixed;z-index:${zIndex}; top:${topCorner}px; left: ${leftCorner}px`
                if (difference < modalWidth) {
                    val.parentNode.parentNode.querySelector('.modal-daily-calendar').style.cssText = `position: fixed;z-index:${zIndex}; top:${topCorner}px; left:${leftCorner - modalWidth - modalWidth / 1.6}px`
                }
                closeModal(val)
            }

        })

    })


    function closeModal(valTarger) {
        const modalList = document.querySelectorAll('.modal-daily-calendar')
        modalList.forEach((value) => {
            let idxMeeting = value.getAttribute('data-index')
            let popup = value.querySelector('.close-modal-daily-calendar')
            popup.addEventListener('click', (e) => {
                value.remove()
                document.getElementById(idxMeeting).classList.remove('selected-week-meeting')
            })
/////////////// drag && drop popup /////////////////////////////////////////////////////////
            value.querySelector('.modal-daily-calendar-catch-block').onmousedown = function (event) {

                value.ondragstart = function () {
                    return false;
                }
                value.style.position = 'fixed'
                value.style.zIndex = 1000
                document.body.append(value)
                moveAt(event.pageX, event.pageY)

                function moveAt(pageX, pageY) {
                    value.style.left = pageX - value.offsetWidth / 2 + 'px'
                    value.style.top = pageY - value.offsetHeight / 2 + 'px'
                }

                function onMouseMove(event) {
                    console.log("move")
                    moveAt(event.pageX, event.pageY)
                }

                document.addEventListener('mousemove', onMouseMove)
                value.onmouseup = function () {
                    document.removeEventListener('mousemove', onMouseMove)
                    value.onmouseup = null
                }
            }
//copy link to buffer
            const links = document.querySelectorAll('.copy-to-buffer')
            links.forEach((linkToBuffer) => {

                linkToBuffer.addEventListener('click', (e) => {
                    e.preventDefault()
                    //console.log(linkToBuffer.href)
                    //add link to buffer
                    navigator.clipboard.writeText(linkToBuffer.href)
                        .then(() => {
                            //success
                            let successPopup = document.createElement('div')
                            successPopup.classList.add('successPopup')
                            successPopup.innerHTML = `The link was copied to buffer successfully!`
                            linkToBuffer.append(successPopup)
                            setTimeout(() => {
                                successPopup.remove()
                            }, 2000)

                        })
                        .catch(err => {
                            //error
                            //console.log(err)
                            let successPopup = document.createElement('div')
                            successPopup.classList.add('errorPopup')
                            successPopup.innerHTML = `The link was not copied to buffer. Something wrong!`
                            linkToBuffer.append(successPopup)
                            setTimeout(() => {
                                successPopup.remove()
                            }, 2000)
                        });


                })
            })

        })

    }


}