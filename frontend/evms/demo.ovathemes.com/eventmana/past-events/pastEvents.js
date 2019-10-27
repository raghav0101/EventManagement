let baseurl = "http://localhost:8000";

let  getPastEvents = async() => {
    let options ={
        headers: {'Content-Type': 'application/json'},
        method: 'GET'
    };
    try{
        let response = await fetch(baseurl + '/event/getPastEvents/',options);
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse;
    }
    catch (err) {
        console.log(err);
        return null;
    }

};

let displayPastEvents = async ($) => {
    let pastEvents = await getPastEvents();
    console.log(pastEvents);
    // $('#eventContainer').empty();
    pastEvents.map((element,index) => {
        let eventElem = ' <div class="col-md-4 col-sm-6">\n' +
            '                                            <div class="thumbnail no-border no-padding">\n' +
            '                                                <div class="media_img">\n' +
            '                                                    <img src="../wp-content/uploads/2015/09/hotel-1.jpg" alt="The World&#8217;s Greatest Tribute Bands on AXS TV">\n' +
            '                                                </div>\n' +
            '                                                <div class="caption">\n' +
            '                                                    <h3 class="caption-title"><a href="../event/the-worlds-greatest-tribute-bands-on-axs-tv/index.html">'+element.event_name+'</a></h3>\n' +
            '                                                    <p class="caption-category"><i class="fa fa-file-text-o"></i> ' + element.event_date + " at " + element.time + '  on Manhattan / New York </p>\n' +
            /*  <p class="caption-price">Tickets from $45</p>\n' +*/
            /*'                                                    <p class="caption-text">Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi.</p>\n' +*/
            '                                                    <p class="caption-more"><a href="../event/boots-and-hearts-2016/index.html?eventId=' + element.event_id + '" class="btn btn-theme">Ticket &amp; Detail</a></p>\n' +
            '                                                </div>\n' +
            '                                            </div>\n' +
            '                                        </div>';
        $('#allEvents').append(eventElem);
    });
};

jQuery(document).ready(function ($) {
    // Your code here
    // displaySlide($);
    //generateCategoryMenu($);
    displayPastEvents($);
    // displayMostRecentEvent($);
    // displayMostRecentEventCountdown($);
});