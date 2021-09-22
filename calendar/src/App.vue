<template>
  <div class="app-block  box-border " id="app">
    <div class="w-12/12 bg-white h-24"> header</div>
  <Calendar_week></Calendar_week>
  </div>
</template>

<script>
import Calendar_week from "./components/Calendar_week";
import Range from "./components/Range";
import Create_availability from "./components/Create_availability";
import Book_meeting from "./components/Book_meeting";

export default {
  computed: {
    user() {
      return this.$store.getters.user
    }
  },
  components: {
    Calendar_week,
    Range,
    Create_availability,
    Book_meeting
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Questrial&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&family=Questrial&display=swap');

html {
  font-family: Lato, Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 130%;
  color: #2A3E4F;
}

.bg-gray-2000 {
  background: #F4F8FB;
}

.border-gray-2000 {
  border-color: #F4F8FB;
}

.lato {
  font-family: Lato;
}

.questrial {
  font-family: Questrial;
}

.big-text {
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 130%;
  color: #051B2E;
}

.active-tab-link {
  color: #EE795C;
  border-bottom: 2px solid #EE795C;
}

* {
  box-sizing: border-box;
}

*::before, *::after {
  margin: 0;
  padding: 0;

}

.left-calendar {
  min-height: 100%;
  /*max-height: 40vh;*/
}

.app-block {
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
}

.daily-calendar {
  max-height: 67vh;
  overflow-y: scroll;
}

.modal-daily-calendar {
  z-index: 3;
  position: absolute;
  margin-top: 40px;
  left: 44%;
  width: 320px;
  height: 550px;
  max-height: 520px;
  /*overflow: hidden;*/
  background: #fff;
  padding: 20px 5px 20px 20px;
  /*overflow-y: scroll;*/
  -webkit-transform: translate(-50%, 0);
  -moz-transform: translate(-50%, 0);
  -ms-transform: translate(-50%, 0);
  -o-transform: translate(-50%, 0);
  transform: translate(-50%, 0);
  box-shadow: 0px 0px 50px rgba(15, 63, 35, 0.15);
  border-radius: 8px;

}

.modal-daily-calendar-inner {
  overflow: hidden;
  overflow-y: scroll;
  height: 448px;
}

.calendar-block, .availability_page {
  min-height: 75vh;
  max-height: 75vh;
  overflow: hidden;
}

.daily-calendar::-webkit-scrollbar, .availability_page::-webkit-scrollbar, .modal-daily-calendar-inner::-webkit-scrollbar {
  width: 0px;
}

.daily-calendar::-webkit-scrollbar-track, .availability_page::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
}

.daily-calendar::-webkit-scrollbar-thumb, .availability_page::-webkit-scrollbar-thumb {
  background-color: #d9d7d7;
}

.calendar-week-dates {
  margin-left: 5vw;
}

.active-date-on-week {
  background: rgba(17, 24, 39, 1);
  border: 1px solid rgba(17, 24, 39, 1);
  color: #fff;
}

.week-grid-top {
  width: 11vw;

}

.week-grid {
  width: 11vw;
  min-height: 65px;
  overflow-x: hidden;
  z-index: 2;

  position: relative;
}

.week-meeting {
  cursor: pointer;
  white-space: nowrap;
  background: #EAF0FF;
  border-left: 4px solid #004BFF;
  border-radius: 5px;
}

.week-meeting-top {
  position: absolute;
  top: 2px;
  left: 5px;
  z-index: 1;
}

.week-meeting-end {
  position: absolute;
  bottom: 2px;
  left: 5px;
  z-index: 1;

}

.time {
  left: -4vw;
}

/*  MODAL week daily meeting */
.modal-daily-calendar-inner {

}

.candidate-title {
  padding-left: 20px;
  position: relative;
  font-family: Lato;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 130%;
  color: #051B2E;
}

.candidate-date::before {
  margin-left: -20px;
  margin-right: 10px;
  position: absolute;

  content: url("/images/date.svg");
}

.candidate-user::before {
  margin-left: -20px;
  margin-right: 10px;
  position: absolute;

  content: url("/images/user.svg");
}

.candidate-time::before {
  margin-left: -20px;
  margin-right: 10px;
  position: absolute;

  content: url("/images/time.svg");
}

.candidate-email::before {
  margin-left: -25px;
  margin-right: 10px;
  position: absolute;

  content: url("/images/email.svg");
}

.candidate-folder::before {
  margin-left: -20px;
  margin-right: 10px;
  position: absolute;

  content: url("/images/folder.svg");
}

.candidate-link::before {
  margin-left: -20px;
  margin-right: 10px;
  position: absolute;

  content: url("/images/link.svg");
}

.candidate-text {
  padding-left: 25px;
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 130%;
  color: #051B2E;
}

.candidate-text a {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 130%;
  color: #004BFF;
  text-decoration: underline;
}

@media (max-width: 1280px) {
  .time {
    left: -5vw;
  }
}

</style>
