let baseurl = "http://localhost:8000";

let  getAllEvents = async() => {
    let options ={
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    try{
        let response = await fetch(baseurl + '/event/getAllEvents/',options);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse;
    }
    catch (err) {
        console.log(err);
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
let displayAllEvents = async ($) => {
    let allEvents = await getAllEvents();
    console.log(allEvents);
   // $('#eventContainer').empty();
    allEvents.map(async (element,index) => {
        let venue = await getEventVenue($,element.event_id);
        let eventElem = ' <div class="col-md-4 col-sm-6">\n' +
            '                                            <div class="thumbnail no-border no-padding">\n' +
            '                                                <div class="media_img">\n' +
            '                                                    <img src = "../wp-content/uploads/2015/09/' + element.event_type + '.jpeg" alt="Boots and Hearts 2016" id="img1" style=" width: 282px; height: 282px;"/>\n' +
            '                                                </div>\n' +
            '                                                <div class="caption">\n' +
            '                                                    <h3 class="caption-title"><a href="../event/the-worlds-greatest-tribute-bands-on-axs-tv/index.html">'+element.event_name+'</a></h3>\n' +
            '                                                    <p class="caption-category"><i class="fa fa-file-text-o"></i> ' + element.event_date + " at " + element.time + '  on '+ venue.building_name+' </p>\n' +
                                                               /*  <p class="caption-price">Tickets from $45</p>\n' +*/
            /*'                                                    <p class="caption-text">Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi.</p>\n' +*/
            '                                                    <p class="caption-more"><a href="../event/boots-and-hearts-2016/index.html?eventId=' + element.event_id + '" class="btn btn-theme">Ticket &amp; Detail</a></p>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                        </div>';
        $('#allEvents').append(eventElem);
    });
};

let displayLogoutButton = async ($) => {
    let otherEvents = [1];
    //console.log(otherEvents);
    $('#rm1').empty();
    otherEvents.map((element,index) => {
        let eventElem = '<li><i class="fa fa-user" id="logo"></i> Logout</li>';
        let create = '<a data-animation="fadeInUp" data-animation-delay="100" href="wp-login989a.html" target="" class="btn btn-theme btn-theme-grey-dark btn-theme-md"><i class="fa fa-file-text-o"></i> Create Event</a>';
        $('#rm1').append(eventElem);
        $('#createEvent').append(create);
    });
    $('#logo').click(() =>{
        localStorage.clear();
        window.location = "http://localhost:63342/EventManagement/frontend/evms/demo.ovathemes.com/eventmana/index.html";
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
    // displaySlide($);
    //generateCategoryMenu($);
    displayAllEvents($);
    displayUpComingEvents($);
    if((localStorage.getItem("userId")===null || localStorage.getItem("userId")===undefined) && (localStorage.getItem("orgId")===null || localStorage.getItem("orgId")===undefined)){

    }
    else{
        /*   $('#rm1').empty();
           $('#rm1').append()*/
        displayLogoutButton($);

    }
   // displayMostRecentEvent($);
    // displayMostRecentEventCountdown($);
});