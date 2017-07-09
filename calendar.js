// moment js is must so first import momentjs
var moment = Moment.load();
var GLOBAL = {
  formId : "1x3Zb55iNmW1w9ffFYGwih3D45iGkPRweRdNFeMjSWFA",
  calendarId : "330nkhuc1msdbkg27j5mfctrkk@group.calendar.google.com",
  formMap : {
    eventTitle: "Event Title",
    startTime : "Event Date and Start Time",
    endTime: "Event End Time",
    description: "Event Description"
  },
}
function onFormSubmit() {
  var eventObject = getFormResponse();
  var event = createCalendarEvent(eventObject);
}

function getFormResponse() {
  var form = FormApp.openById(GLOBAL.formId),
      responses = form.getResponses(),
      length = responses.length,
      lastResponse = responses[length-1],
      itemResponses = lastResponse.getItemResponses(),
      eventObject = {};
  for (var i = 0, x = itemResponses.length; i<x; i++) {
    var thisItem = itemResponses[i].getItem().getTitle(),
        thisResponse = itemResponses[i].getResponse();
    switch (thisItem) {
      case GLOBAL.formMap.eventTitle:
        eventObject.title = thisResponse;
        break;
      case GLOBAL.formMap.startTime:
        eventObject.startTime = thisResponse;
        break;
      case GLOBAL.formMap.endTime:
        eventObject.endTime = thisResponse;
        break;
      case GLOBAL.formMap.description:
        eventObject.description = thisResponse;
        break;
    }
  }
  return eventObject;
}

function createCalendarEvent(eventObject) {
  var calendar = CalendarApp.getCalendarById(GLOBAL.calendarId),
      title = eventObject.title,
      startTime = moment(eventObject.startTime).toDate(),
      endTime = moment(eventObject.endTime).toDate();
  var options = {
    description : eventObject.description
  };
  try {
    var event = calendar.createEvent(title, startTime,
                                     endTime, options)
    } catch (e) {
      delete options.guests
      var event = calendar.createEvent(title, startTime,
                                       endTime, options)
      }
  return event;
}
