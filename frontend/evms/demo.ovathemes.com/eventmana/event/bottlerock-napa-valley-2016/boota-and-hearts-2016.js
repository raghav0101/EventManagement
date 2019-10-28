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

const registerEvent = async (data) => {
    let options = {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(data)
    };

    try {
        let response = await fetch(baseurl + '/event/register/', options);                    // give api url
        if(response.status === 409){
            return null;
        }

        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse;
    } catch (e) {
        console.log(e);
        return null;
    }
};



const registerEventComplete = async ($,eventId) => {

    let userId = localStorage.getItem("userId");
    let data = {
        eventId,
        userId
    };

    let response = await registerEvent(data);

    console.log(response);
    if (response) {
        iziToast.show({
            title:"Success",
            message:"Registered successfully",
            titleColor:'red',
            backgroundColor: 'yellow',
            onClosing: function(){
                window.location.reload();
            }
        });
        //window.location.replace('http://localhost:63342/EventManagement/frontend/evms/demo.ovathemes.com/eventmana/index.html');
    } else {
        iziToast.show({
            title:"Message",
            message:"Already Registered",
            titleColor:'red',
            backgroundColor: 'yellow',
            onClosing: function(){
               // window.location.reload();
            }
        });
    }

};

const displayPicture = async ($,eventId) => {

    let event = await getEvent($,eventId);
    console.log(event);
    //let element = '<img src = "../../wp-content/uploads/2015/09/' + event.event_type + '.jpeg" alt="Boots and Hearts 2016" id="img1" style="width: 282px; height: 282px"/>\n'
    $('#akhri').attr(   "src",'../../wp-content/uploads/2015/09/' + event.event_type + '.jpeg');

};

let displayLogoutButton = async ($) => {
    let otherEvents = [1];
    //console.log(otherEvents);
    $('#rm1').empty();
    otherEvents.map((element,index) => {
        let eventElem = '<li><a href="wp-loginc94b.html?action=login"><i class="fa fa-user"></i> Logout</a></li>';
        let create = '<a data-animation="fadeInUp" data-animation-delay="100" href="wp-login989a.html" target="" class="btn btn-theme btn-theme-grey-dark btn-theme-md"><i class="fa fa-file-text-o"></i> Create Event</a>';
        $('#rm1').append(eventElem);
        $('#createEvent').append(create);
    });
};

let  getUpComingEvents = async() => {
    let options ={
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    try{
        let response = await fetch(baseurl + '/event/getRecentEvents/',options);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse;
    }
    catch (err) {
        console.log(err);
        return null;
    }

};

let displayUpComingEvents = async ($) => {
    let allEvents = await getUpComingEvents();
    console.log(allEvents);
    // $('#eventContainer').empty();
    allEvents.map((element,index) => {
        let eventElem = ' <div> '+ element.event_name +' on '+element.event_date+'</div> ';
        $('#rotate').append(eventElem);
    });
};

jQuery(document).ready(function ($) {
    // Your code here
    let url = window.location.href;
    console.log(url);
    let eventId = url.split('?eventId=')[1];
    console.log(eventId);
    displayEvent($,eventId);
    displayOrg($,eventId);
    $('#reg').click( ( ) => {
       registerEventComplete($,eventId);
    }) ;
    displayPicture($,eventId);
    displayUpComingEvents($);
    if(localStorage.getItem("userId")===null || localStorage.getItem("userId")===undefined){

    }
    else{
        /*   $('#rm1').empty();
           $('#rm1').append()*/
        displayLogoutButton($);
    }

});