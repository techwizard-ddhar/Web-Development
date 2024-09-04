type EventType = 'click' | 'scroll' | 'mousemove'

type EventExclude = Exclude<EventType, 'scroll'>

function EventHandler(event:EventExclude){
    console.log(`Handling event : ${event}`);
}

EventHandler('click');