const meetings = document.querySelectorAll(".week-meeting")
meetings.forEach((val)=>{
    val.addEventListener("click",(e)=>{
           document.querySelector('.modal-daily-calendar').classList.remove('hidden')
    })

})
document.querySelector('.close-modal-daily-calendar').addEventListener('click',()=>{
    document.querySelector('.modal-daily-calendar').classList.add('hidden')
})