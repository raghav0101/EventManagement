let baseurl = "http://localhost:8000";

let getEvent = async ($,eventId) => {
    let options ={
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    try{
        console.log("get event:" + eventId);
        let response = await fetch(baseurl + '/event/getEvent/?eventId=' +eventId +'',options);
        console.log(response);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse;
    }
    catch (e) {
        console.log(e);
        return null;
    }
};

let getEventVenue = async ($,eventId) => {
    let options ={
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    try{
        console.log("get event:" + eventId);
        let response = await fetch(baseurl + '/event/venue/?eventId=' +eventId +'',options);
        console.log(response);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse;
    }
    catch (e) {
        console.log(e);
        return null;
    }
};

let getOrg = async ($,eventId) => {
    let options = {
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    try{
        let response = await fetch(baseurl + '/event/getOrganisation/?eventId=' + eventId +'',options);
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
    let venue = await getEventVenue($,eventId);
    event = event[0];
    console.log(event);
    console.log(venue);
    var date = event.event_date.split('-');
    $('#venue').text(venue.building_name);
    $('#date').text(date[2]+":"+ date[1]+":"+date[0]);
    $('#time').text(event.time);
    $('#para1').text(event.desc);                                                                     //check
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
    console.log(url);
    let eventId = url.split('?eventId=')[1];
    console.log(eventId);
    displayEvent($,eventId);
    displayOrg($,eventId);

});