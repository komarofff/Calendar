<template>
  <div class="w-12/12 bg-gray-2000 min-h-screen p-4 lg:p-6 xl:p-10">
    <div class="text-base mb-6 pb-4 border-b border-gray-300">
      <span class="text-lg text-gray-300 pb-4 hover:text-red-400 border-b-2  border-gray-2000  hover:border-red-400 cursor-pointer mr-4 font-semibold">Availability range</span>
      <span class="text-lg active-tab-link pb-4 cursor-pointer font-semibold">Calendar</span>
    </div>
    <div id="calendar_page" class="flex justify-between nowrap w-full">
                  <div class="w-2/12 mr-8 left-calendar bg-white rounded-lg p-4">
                      <img class="w-full" src="../../images/calendar_small.png" alt="">
                  </div>
                  <div class="w-10/12 calendar-block bg-white rounded-xl py-4 pl-2 ">

                      <div class="mt-4 mx-auto w-full">
                          <div class="mb-3 ml-4 flex justify-start items-center calendar-week-dates">
                              <img class="cursor-pointer prev-week" src="../../images/arrow-left.svg" alt="arrow">
                              <span class="mx-8 text-lg text-black font-semibold">July 12 - 18, 2021</span>
                              <img class="cursor-pointer next-week" src="../../images/arrow-right.svg" alt="arrow">
                          </div>
                          <div class="header-of-calendar w-11/12  grid grid-cols-7 ml-auto  justify-items-center  mr-4 relative">
                              <p class="week-grid-top text-center bg-gray-2000 border border-gray-200 p-2  rounded-tl-xl">
                                  Monday,12</p>
                              <p class="week-grid-top text-center bg-gray-2000 border border-gray-200 p-2 active-date-on-week">
                                  Tuesday, 13</p>
                              <p class="week-grid-top text-center bg-gray-2000 border border-gray-200 p-2 ">Wednesday, 14</p>
                              <p class="week-grid-top text-center bg-gray-2000 border border-gray-200  p-2 ">Thursday, 15</p>
                              <p class="week-grid-top text-center bg-gray-2000 border border-gray-200 p-2 ">Friday, 16</p>
                              <p class="week-grid-top text-center bg-gray-2000 border border-gray-200 p-2 ">Saturday, 17</p>
                              <p class="week-grid-top text-center bg-gray-2000 border border-gray-200 p-2 rounded-tr-xl">
                                  Sunday, 18</p>
                              <div class="hidden modal-daily-calendar">
                                  <div class="relative w-full">
                                      <p class="text-lg font-semibold ">Client's meetings</p>
                                      <img class="cursor-pointer absolute -top-2 right-1 close-modal-daily-calendar"
                                           src="../../images/Close.svg" alt="close" title="Close">
                                  </div>

                                  <div class="modal-daily-calendar-inner mt-2 flex flex-col justify-start items-start">
                                      <div class="mb-3">
                                          <p class="candidate-date candidate-title ">Date</p>
                                          <p class="candidate-text">14:30 - 15:00, July 13, 2021</p>
                                      </div>
                                      <div class="mb-3">
                                          <p class="candidate-user candidate-title ">Candidate</p>
                                          <p class="candidate-text">Alexander Rozaria</p>
                                      </div>
                                      <div class="mb-3">
                                          <p class="candidate-time candidate-title ">Candidate’s time zone</p>
                                          <p class="candidate-text">Central European time</p>
                                      </div>
                                      <div class="mb-3">
                                          <p class="candidate-email candidate-title ">Candidate’s email</p>
                                          <p class="candidate-text">candidate_1@gmail.com</p>
                                      </div>
                                      <div class="mb-3">
                                          <p class="candidate-folder candidate-title ">Emails of other participants</p>
                                          <p class="candidate-text">candidate_2@gmail.com</p>
                                          <p class="candidate-text">candidate_3@gmail.com</p>
                                      </div>
                                      <div class="mb-3">
                                          <p class="candidate-link candidate-title ">Link to a meeting</p>
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
                              </div>
                          </div>
                      </div>
                      <div class="daily-calendar w-full pb-12">
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                                  <span class="week-meeting week-meeting-top p-1 text-sm">11:00-11:30 Daily Zoom,Meeting Super</span>
                              </p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 00:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 01:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                                  <span class="week-meeting week-meeting-top p-1 text-sm">11:00-11:30 Daily Zoom</span>
                              </p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 02:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  whitespace-nowrap "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                                  <span class="week-meeting week-meeting-top p-1 text-sm">03:00-03:30 Daily Zoom</span>
                                  <span class="week-meeting week-meeting-end p-1 text-sm">03:30-04:00 Lunch</span>
                              </p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 03:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                                  <span class="week-meeting week-meeting-end p-1 text-sm">04:30-05:00 Lunch</span>
                              </p>
                              <div class="absolute  top-0 time"> 04:00</div>
                          </div>

                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 00:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 01:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                                  <span class="week-meeting week-meeting-top p-1 text-sm">11:00-11:30 Daily Zoom</span>
                              </p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 02:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  whitespace-nowrap "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                                  <span class="week-meeting week-meeting-top p-1 text-sm">03:00-03:30 Daily Zoom</span>
                                  <span class="week-meeting week-meeting-end p-1 text-sm">03:30-04:00 Lunch</span>
                              </p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 03:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                                  <span class="week-meeting week-meeting-end p-1 text-sm">04:30-05:00 Lunch</span>
                              </p>
                              <div class="absolute  top-0 time"> 04:00</div>
                          </div>

                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 00:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 01:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                                  <span class="week-meeting week-meeting-top p-1 text-sm">11:00-11:30 Daily Zoom</span>
                              </p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 02:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  whitespace-nowrap "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                                  <span class="week-meeting week-meeting-top p-1 text-sm">03:00-03:30 Daily Zoom</span>
                                  <span class="week-meeting week-meeting-end p-1 text-sm">03:30-04:00 Lunch</span>
                              </p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 03:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                                  <span class="week-meeting week-meeting-end p-1 text-sm">04:30-05:00 Lunch</span>
                              </p>
                              <div class="absolute  top-0 time"> 04:00</div>
                          </div>

                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 00:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 01:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                                  <span class="week-meeting week-meeting-top p-1 text-sm">11:00-11:30 Daily Zoom</span>
                              </p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 02:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  whitespace-nowrap "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                                  <span class="week-meeting week-meeting-top p-1 text-sm">03:00-03:30 Daily Zoom</span>
                                  <span class="week-meeting week-meeting-end p-1 text-sm">03:30-04:00 Lunch</span>
                              </p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 03:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                                  <span class="week-meeting week-meeting-end p-1 text-sm">04:30-05:00 Lunch</span>
                              </p>
                              <div class="absolute  top-0 time"> 04:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 01:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                                  <span class="week-meeting week-meeting-top p-1 text-sm">11:00-11:30 Daily Zoom</span>
                              </p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 02:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  whitespace-nowrap "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                                  <span class="week-meeting week-meeting-top p-1 text-sm">03:00-03:30 Daily Zoom</span>
                                  <span class="week-meeting week-meeting-end p-1 text-sm">03:30-04:00 Lunch</span>
                              </p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <div class="absolute  top-0 time"> 03:00</div>
                          </div>
                          <div class="w-11/12  grid grid-cols-7 ml-auto  justify-items-center mr-4 relative">
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  "></p>
                              <p class="week-grid text-center bg-white border border-gray-200 p-2  ">
                                  <span class="week-meeting week-meeting-end p-1 text-sm">04:30-05:00 Lunch</span>
                              </p>
                              <div class="absolute  top-0 time"> 24:00</div>
                          </div>

                      </div>
                  </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Calendar_week"
}
</script>

<style scoped>

</style>
