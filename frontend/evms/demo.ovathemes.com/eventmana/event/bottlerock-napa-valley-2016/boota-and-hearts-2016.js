let baseurl = "http://localhost:8000";

let getEvent = async (eventId) => {
    let options ={
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    try{
        let response = await fetch(baseurl + '/event/getEvent?eventId=' +eventId,options);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse;
    }
    catch (e) {
        console.log(e);
        return null;
    }
};

let getOrg = async (eventId) => {
    let options = {
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    try{
        let response = await fetch(baseurl + '/event/organisation?eventId=' + eventId,options);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse;
    }
    catch (e) {
        console.log(e);
        return null;
    }
};

let displayEvent = async ($,eventId) => {
    let event = await getEvent($,eventId);
    console.log(event);
    var date = event.event_date.split('-');
    //$('#venue').text(event)
    $('#date').text(date[0]+":"+ date[1]+":"+date[2]);
    $('#time').text(event.time);
    $('para1').text(event.description);                                                                     //check
};
let displayOrg = async ($,eventId) => {
    let org = await getOrg($,eventId);
    console.log(org);
    $('#orgName').text(org.org_name);
    $('#orgEmail').text(org.email);
};

jQuery(document).ready(function ($) {
    // Your code here
    let url = window.location.href;
    let eventId = url.split('?eventid=')[1];
    displayEvent($,eventId);
    displayOrg($,eventId);

});