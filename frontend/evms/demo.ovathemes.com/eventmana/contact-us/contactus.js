let baseurl = "http://localhost:8000";

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
    // displaySlide($);
    //generateCategoryMenu($);
    displayUpComingEvents($);
    if(localStorage.getItem("userId")===null || localStorage.getItem("userId")===undefined){

    }
    else{
        /*   $('#rm1').empty();
           $('#rm1').append()*/
        displayLogoutButton($);

    }
    // displayMostRecentEvent($);
    // displayMostRecentEventCountdown($);
});