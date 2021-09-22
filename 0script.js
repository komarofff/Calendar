let modal = `
 
                                        <div class="relative w-full">
                                            <p class="text-lg font-semibold ">Client's meetings</p>
                                            <img class="cursor-pointer absolute -top-2 right-1 close-modal-daily-calendar"
                                                 src="images/Close.svg" alt="close" title="Close">
                                        </div>

                                        <div class="modal-daily-calendar-inner mt-2 flex flex-col justify-start items-start">
                                            <div class="mb-3">
                                                <p class="icon-date candidate-title ">Date</p>
                                                <p class="candidate-text">14:30 - 15:00, July 13, 2021</p>
                                            </div>
                                            <div class="mb-3">
                                                <p class="icon-user candidate-title ">Candidate</p>
                                                <p class="candidate-text">Alexander Rozaria</p>
                                            </div>
                                            <div class="mb-3">
                                                <p class="icon-time candidate-title ">Candidate’s time zone</p>
                                                <p class="candidate-text">Central European time</p>
                                            </div>
                                            <div class="mb-3">
                                                <p class="icon-email candidate-title ">Candidate’s email</p>
                                                <p class="candidate-text">candidate_1@gmail.com</p>
                                            </div>
                                            <div class="mb-3">
                                                <p class="icon-folder candidate-title ">Emails of other participants</p>
                                                <p class="candidate-text">candidate_2@gmail.com</p>
                                                <p class="candidate-text">candidate_3@gmail.com</p>
                                            </div>
                                            <div class="mb-3">
                                                <p class="icon-link candidate-title ">Link to a meeting</p>
                                                <p class="candidate-text"><a href="#">Copy</a></p>
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
                                   
`
let position = 20
let counter =0
const meetings = document.querySelectorAll(".week-meeting")
meetings.forEach((val) => {
    val.addEventListener("click", (e) => {
        counter++
        position +=20
        // document.querySelector('.modal-daily-calendar').classList.remove('hidden')
        let newModal = document.createElement('div')
        newModal.classList.add('modal-daily-calendar')
        newModal.style.cssText = `margin-top: ${position}px; margin-left: ${position}px`
        newModal.innerHTML = modal
        document.querySelector('.header-of-calendar').append(newModal)
        closeModal()
    })

})
function closeModal() {
    const modalList = document.querySelectorAll('.modal-daily-calendar')
    modalList.forEach((value) => {
        value.querySelector('.close-modal-daily-calendar').addEventListener('click', (e) => {
            e.target.parentNode.parentNode.remove()
            counter--
            if(counter<=0){position=20 ; counter =0 }
        })
    })

}
// document.querySelector('.close-modal-daily-calendar').addEventListener('click', () => {
//     document.querySelector('.modal-daily-calendar').classList.add('hidden')
// })