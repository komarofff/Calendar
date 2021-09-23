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
let userScreen = document.documentElement.clientWidth
const meetings = document.querySelectorAll(".week-meeting")
meetings.forEach((val) => {
    val.addEventListener("click", (e) => {
        let newModal = document.createElement('div')
        newModal.classList.add('modal-daily-calendar')
        newModal.draggable = true

        newModal.innerHTML = modal
        let valPositionRight =  val.getBoundingClientRect().right
        val.classList.add('selected-week-meeting')
        val.parentNode.after(newModal)
        let modalWidth = newModal.getBoundingClientRect().width
        let difference = userScreen-valPositionRight
        if(difference<modalWidth){
            val.parentNode.parentNode.querySelector('.modal-daily-calendar').style.cssText = `left:-${modalWidth }px`
        }
         closeModal(val)

    })

})
function closeModal(valTarger) {
    const modalList = document.querySelectorAll('.modal-daily-calendar')
    modalList.forEach((value) => {
        value.querySelector('.close-modal-daily-calendar').addEventListener('click', (e) => {
            // e.target.parentNode.parentNode.remove()
            value.remove()
            valTarger.classList.remove('selected-week-meeting')
            console.log(valTarger)
        })
////////////////////////////////////////////////////////////////////////
        value.onmousedown = function(event) { // (1) отследить нажатие


            value.ondragstart = function() {
                return false;
            };
            // (2) подготовить к перемещению:
            // разместить поверх остального содержимого и в абсолютных координатах
            value.style.position = 'fixed';
            value.style.zIndex = 1000;
            // переместим в body, чтобы мяч был точно не внутри position:relative
            document.body.append(value);
            // и установим абсолютно спозиционированный мяч под курсор

            moveAt(event.pageX, event.pageY);

            // передвинуть мяч под координаты курсора
            // и сдвинуть на половину ширины/высоты для центрирования
            function moveAt(pageX, pageY) {
                value.style.left = pageX - value.offsetWidth / 2 + 'px';
                value.style.top = pageY - value.offsetHeight / 2 + 'px';
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            // (3) перемещать по экрану
            document.addEventListener('mousemove', onMouseMove);

            // (4) положить мяч, удалить более ненужные обработчики событий
            value.onmouseup = function() {
                document.removeEventListener('mousemove', onMouseMove);
                value.onmouseup = null;
            };

        };

    })

}
// document.querySelector('.close-modal-daily-calendar').addEventListener('click', () => {
//     document.querySelector('.modal-daily-calendar').classList.add('hidden')
// })