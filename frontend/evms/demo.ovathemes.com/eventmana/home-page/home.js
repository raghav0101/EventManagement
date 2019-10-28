let baseurl = "http://localhost:8000";

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

let getLatestEvent = async () => {
    let options ={
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    try{
        let response = await fetch(baseurl + '/event/getMostRecentEvents/',options);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse;
    }
    catch (e) {
        console.log(e);
        return null;
    }
};

let getLatestEventCountdown = async () => {
    let options ={
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    try{
        let response = await fetch(baseurl + '/event/getMostRecentEvents/',options);                    // give api url
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse;
    }
    catch (e) {
        console.log(e);
        return null;
    }
};

let getEventCategories = async () => {
    let options ={
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    try{
        let response = await fetch(baseurl + '/event/getCategories/',options);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse;
    }
    catch(err){
        console.log(err);
        return null;
    }
};
let getAllEvents = async() => {
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
let getTechnicalEvents = async() => {
    let options ={
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    try{
        let response = await fetch(baseurl + '/event/technicalEvents/',options);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse;
    }
    catch (err) {
        console.log(err);
        return null;
    }

};
let getGamingEvents = async() => {
    let options ={
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    try{
        let response = await fetch(baseurl + '/event/gamingEvents',options);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse;
    }
    catch (e) {
        console.log(e);
        return null;
    }

};
let getCulturalEvents = async() => {
    let options ={
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    try{
        let response = await fetch(baseurl + '/event/culturalEvents/',options);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse;
    }
    catch (err) {
        console.log(err);
        return null;
    }

};
let getOtherEvents = async() => {
    let options ={
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    try{
        let response = await fetch(baseurl + '/event/otherEvents/',options);
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
let displayUpComingEvents = async ($) => {
    let allEvents = await getUpComingEvents();
    console.log(allEvents);
    // $('#eventContainer').empty();
    allEvents.map((element,index) => {
        let eventElem = ' <div> '+ element.event_name +' on '+element.event_date+'</div> ';
        $('#rotate').append(eventElem);
    });
};
let displaySlide = async ($) =>{
  let event = await getLatestEvent();
  event = event[0];
  console.log(event);
      var date = event.event_date.split('-');
      $('#datetime').load(()=> {
          $('#datetime').text(date[2]+":"+ date[1]+":"+date[0]);
      });
     $('#descp').text(event.event_name);
     console.log(event.event_date);
     console.log(event.event_name);
};
let displayMostRecentEventCountdown = async ($) => {
    let eventCountdown = [1];
    console.log(eventCountdown);
    eventCountdown.map((element,index) => {
        let recevent = '<div class="wpb_column vc_column_container vc_col-sm-6 vc_col-lg-4 vc_col-md-4"><div class="vc_column-inner vc_custom_1443423721706"><div class="wpb_wrapper">\n' +
            '\t\t<div class="countdown-wrapper countdown-featured">\n' +
            '\t\t<div id="defaultCountdown2" class="defaultCountdown clearfix " \n' +
            '\t\t             data-years=years data-months=months data-weeks="weeks" data-days="days" data-hours="hours" data-minutes="minutes" data-seconds="seconds" \n' +
            '\t\t             data-year=year data-month=month data-week="week" data-day="day" data-hour="hour" data-minute="minute" data-second="second" \n' +
            '\t\t             data-end_date_y = "2020" data-end_date_m="7" data-end_date_d="17" data-end_date_h="" data-end_date_i="" \n' +
            '\t\t             data-timezone = "0" data-display_format="dHMS"\n' +
            '\t\t  ></div></div>\n' +
            '\t\t</div></div></div>';
        $('#mostRecentEvent').append(recevent);
    });
};
let displayMostRecentEvent = async ($) => {
    let event = await getLatestEvent();
    console.log(event);
    event.map((element,index) => {
        var date = element.event_date.split('-');
        $('#featuredEventDown').text(element.event_name);
        $('#defaultCountdown2').attr("data-years",date[0]);
        $('#defaultCountdown2').attr("data-months",date[1]);
        $('#defaultCountdown2').attr("data-days",date[2]);
    });
};
let generateCategoryMenu = async ($) => {
    let categories = JSON.parse(await getEventCategories());
    console.log(categories);
    categories.map((element,index) => {
        let El = '<li class="all current" id="'+ element + '">' + element + '</li>';
        $('#filtrable-events').append(El);
    });

    /*document.getElementById("Gaming").addEventListener("click", function() {
        displayGamingEvent($);
    });*/
    document.getElementById("All").addEventListener("click", function() {
        displayAllEvents($);
    });
    document.getElementById("Technical").addEventListener("click", function() {
        displayTechnicalEvent($);
    });
    document.getElementById("Gaming").addEventListener("click", function() {
        displayGamingEvent($);
    });
    document.getElementById("Cultural").addEventListener("click", function() {
        displayCulturalEvent($);
    });
    document.getElementById("Other").addEventListener("click", function() {
        displayOtherEvent($);
    });
};
let displayAllEvents = async ($) => {
    let allEvents = await getAllEvents();
    console.log(allEvents);
    $('#eventContainer').empty();
    allEvents.map(async (element,index) => {
        let venue = await getEventVenue($,element.event_id);
        console.log(venue);
        let eventElem = '<div class="col-md-6 col-sm-6 isotope-item  playground">\n' +
            '\t\t\t\t                    <div class="thumbnail no-border no-padding">\n' +
            '\t\t\t\t                        <div class="row">\n' +
            '\t\t\t\t                            <div class="col-md-4">\n' +
            '\t\t\t\t                                <div class="media_img">\n' +
            '\t\t\t\t                                    <img src = "wp-content/uploads/2015/09/' + element.event_type + '.jpeg" alt="Boots and Hearts 2016" id="img1"/>\n' +
            '\t\t\t\t                                </div>\n' +
            '\t\t\t\t                            </div>\n' +
            '\t\t\t\t                            <div class="col-md-8">\n' +
            '\t\t\t\t                                <div class="caption">\n' +
            '\t\t\t\t                                    <h3 class="caption-title">'+ element.event_name+'</h3>\n' +
            '\t\t\t\t                                    <p class="caption-category"><i class="fa fa-file-text-o"></i> ' + element.event_date + " at " + element.time + '  on '+ venue +'</p>\n' +
            //'\t\t\t\t                                    <p class="caption-price">Tickets from $52</p>\n' +
            //'\t\t\t\t                                    <p class="caption-text">Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi.</p>\n' +
            '\t\t\t\t                                    <p class="caption-more"><a href="event/boots-and-hearts-2016/index.html?eventId=' + element.event_id + '" class="btn btn-theme">Tickets & Details</a></p>\n' +
            '\t\t\t\t                                </div>\n' +
            '\t\t\t\t                            </div>\n' +
            '\t\t\t\t                        </div>\n' +
            '\t\t\t\t                    </div>\n' +
            '\t\t\t\t                </div>';
        $('#eventContainer').append(eventElem);
        /*$('#img1').src = "wp-content/uploads/2015/09/"+ element.event_type +".jpeg";*/
    });
};
let displayTechnicalEvent =async ($) => {
    let technicalEvents = await getTechnicalEvents();
    console.log(technicalEvents);
    $('#eventContainer').empty();
    technicalEvents.map((element,index) => {
       let eventElem = '<div class="col-md-6 col-sm-6 isotope-item  playground">\n' +
           '\t\t\t\t                    <div class="thumbnail no-border no-padding">\n' +
           '\t\t\t\t                        <div class="row">\n' +
           '\t\t\t\t                            <div class="col-md-4">\n' +
           '\t\t\t\t                                <div class="media_img">\n' +
           '\t\t\t\t                                    <img src="wp-content/uploads/2015/09/shutterstock_2564924741.jpg" alt="Boots and Hearts 2016"/>\n' +
           '\t\t\t\t                                </div>\n' +
           '\t\t\t\t                            </div>\n' +
           '\t\t\t\t                            <div class="col-md-8">\n' +
           '\t\t\t\t                                <div class="caption">\n' +
           '\t\t\t\t                                    <h3 class="caption-title">'+ element.event_name+'</h3>\n' +
           '\t\t\t\t                                    <p class="caption-category"><i class="fa fa-file-text-o"></i>' + element.event_date + " at " + element.time + '  on Manhattan / New York</p>\n' +
           //'\t\t\t\t                                    <p class="caption-price">Tickets from $52</p>\n' +
           //'\t\t\t\t                                    <p class="caption-text">Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi.</p>\n' +
           '\t\t\t\t                                    <p class="caption-more"><a href="event/boots-and-hearts-2016/index.html?eventId=' + element.event_id + '" class="btn btn-theme">Tickets & Details</a></p>\n' +
           '\t\t\t\t                                </div>\n' +
           '\t\t\t\t                            </div>\n' +
           '\t\t\t\t                        </div>\n' +
           '\t\t\t\t                    </div>\n' +
           '\t\t\t\t                </div>';
       $('#eventContainer').append(eventElem);
    });
};

let displayGamingEvent = async ($) => {
    let gamingEvents = await getGamingEvents();
    console.log(gamingEvents);
    $('#eventContainer').empty();
    gamingEvents.map((element,index) => {
        let eventElem = '<div class="col-md-6 col-sm-6 isotope-item  playground">\n' +
            '\t\t\t\t                    <div class="thumbnail no-border no-padding">\n' +
            '\t\t\t\t                        <div class="row">\n' +
            '\t\t\t\t                            <div class="col-md-4">\n' +
            '\t\t\t\t                                <div class="media_img">\n' +
            '\t\t\t\t                                    <img src="wp-content/uploads/2015/09/shutterstock_2564924741.jpg" alt="Boots and Hearts 2016"/>\n' +
            '\t\t\t\t                                </div>\n' +
            '\t\t\t\t                            </div>\n' +
            '\t\t\t\t                            <div class="col-md-8">\n' +
            '\t\t\t\t                                <div class="caption">\n' +
            '\t\t\t\t                                    <h3 class="caption-title"><a href="event/boots-and-hearts-2016/index.html">'+ element.event_name+'</a></h3>\n' +
            '\t\t\t\t                                    <p class="caption-category"><i class="fa fa-file-text-o"></i>' + element.event_date + " at " + element.time + '  on Manhattan / New York</p>\n' +
            //'\t\t\t\t                                    <p class="caption-price">Tickets from $52</p>\n' +
            //'\t\t\t\t                                    <p class="caption-text">Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi.</p>\n' +
            '\t\t\t\t                                    <p class="caption-more"><a href="event/boots-and-hearts-2016/index.html?eventId=' + element.event_id + '" class="btn btn-theme">Tickets & Details</a></p>\n' +
            '\t\t\t\t                                </div>\n' +
            '\t\t\t\t                            </div>\n' +
            '\t\t\t\t                        </div>\n' +
            '\t\t\t\t                    </div>\n' +
            '\t\t\t\t                </div>';
        $('#eventContainer').append(eventElem);
    });
};

let displayCulturalEvent = async ($) => {
    let culturalEvents = await getCulturalEvents();
    console.log(culturalEvents);
    $('#eventContainer').empty();
    culturalEvents.map((element,index) => {
        let eventElem = '<div class="col-md-6 col-sm-6 isotope-item  playground">\n' +
            '\t\t\t\t                    <div class="thumbnail no-border no-padding">\n' +
            '\t\t\t\t                        <div class="row">\n' +
            '\t\t\t\t                            <div class="col-md-4">\n' +
            '\t\t\t\t                                <div class="media_img">\n' +
            '\t\t\t\t                                    <img src="wp-content/uploads/2015/09/shutterstock_2564924741.jpg" alt="Boots and Hearts 2016"/>\n' +
            '\t\t\t\t                                </div>\n' +
            '\t\t\t\t                            </div>\n' +
            '\t\t\t\t                            <div class="col-md-8">\n' +
            '\t\t\t\t                                <div class="caption">\n' +
            '\t\t\t\t                                    <h3 class="caption-title"><a href="event/boots-and-hearts-2016/index.html">'+ element.event_name+'</a></h3>\n' +
            '\t\t\t\t                                    <p class="caption-category"><i class="fa fa-file-text-o"></i> ' + element.event_date + " at " + element.time + '  on Manhattan / New York</p>\n' +
            //'\t\t\t\t                                    <p class="caption-price">Tickets from $52</p>\n' +
            //'\t\t\t\t                                    <p class="caption-text">Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi.</p>\n' +
            '\t\t\t\t                                    <p class="caption-more"><a href="event/boots-and-hearts-2016/index.html?eventId=' + element.event_id + '" class="btn btn-theme">Tickets & Details</a></p>\n' +
            '\t\t\t\t                                </div>\n' +
            '\t\t\t\t                            </div>\n' +
            '\t\t\t\t                        </div>\n' +
            '\t\t\t\t                    </div>\n' +
            '\t\t\t\t                </div>';
        $('#eventContainer').append(eventElem);
    });
};

let displayOtherEvent = async ($) => {
    let otherEvents = await getOtherEvents();
    console.log(otherEvents);
    $('#eventContainer').empty();
    otherEvents.map((element,index) => {
        let eventElem = '<div class="col-md-6 col-sm-6 isotope-item  playground">\n' +
            '\t\t\t\t                    <div class="thumbnail no-border no-padding">\n' +
            '\t\t\t\t                        <div class="row">\n' +
            '\t\t\t\t                            <div class="col-md-4">\n' +
            '\t\t\t\t                                <div class="media_img">\n' +
            '\t\t\t\t                                    <img src="wp-content/uploads/2015/09/shutterstock_2564924741.jpg" alt="Boots and Hearts 2016"/>\n' +
            '\t\t\t\t                                </div>\n' +
            '\t\t\t\t                            </div>\n' +
            '\t\t\t\t                            <div class="col-md-8">\n' +
            '\t\t\t\t                                <div class="caption">\n' +
            '\t\t\t\t                                    <h3 class="caption-title"><a href="event/boots-and-hearts-2016/index.html">'+ element.event_name+'</a></h3>\n' +
            '\t\t\t\t                                    <p class="caption-category"><i class="fa fa-file-text-o"></i>' + element.event_date + " at " + element.time + '  on Manhattan / New York</p>\n' +
            //'\t\t\t\t                                    <p class="caption-price">Tickets from $52</p>\n' +
            //'\t\t\t\t                                    <p class="caption-text">Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi.</p>\n' +
                '\t\t\t\t                                    <p class="caption-more"><a href="event/boots-and-hearts-2016/index.html?eventId=' + element.event_id + '" class="btn btn-theme">Tickets & Details</a></p>\n' +
            '\t\t\t\t                                </div>\n' +
            '\t\t\t\t                            </div>\n' +
            '\t\t\t\t                        </div>\n' +
            '\t\t\t\t                    </div>\n' +
            '\t\t\t\t                </div>';
        $('#eventContainer').append(eventElem);
    });
};

jQuery(document).ready(function ($) {
    // Your code here
    displaySlide($);
    generateCategoryMenu($);
    displayAllEvents($);
    displayMostRecentEvent($);
    displayUpComingEvents($);
   // displayMostRecentEventCountdown($);
});