
 modal = `
 
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


