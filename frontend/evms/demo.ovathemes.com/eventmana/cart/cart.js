let baseurl = "http://localhost:8000";

const registeredEvents = async (data) => {
    let options = {
        headers: {'Content-Type': 'application/json'},
        method: 'POST',
        body: JSON.stringify(data)
    };

    try {
        let response = await fetch(baseurl + '/event/getRegisteredEvents/', options);                    // give api url
        let jsonResponse = await response.json();
        console.log(jsonResponse);

        return jsonResponse;
    } catch (e) {
        console.log(e);
        return null;
    }
};

let displayRegisteredEvents = async ($) => {
    let userId = localStorage.getItem("userId");
    let data = {
        userId
    };

    let response = await registeredEvents(data);

    console.log(response);
    if (response) {

        response.map((element,index) => {
            let eventElem = ' <div class="col-md-4 col-sm-6">\n' +
                '                                            <div class="thumbnail no-border no-padding">\n' +
                '                                                <div class="media_img">\n' +
                '                                                     <img src = "../wp-content/uploads/2015/09/' + element.event_type + '.jpeg" alt="Boots and Hearts 2016" id="img1" style="width: 282px; height: 282px"/>\n' +
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

    } else {
        iziToast.show({
            title:"Error",
            message:"Please retry",
            titleColor:'red',
            backgroundColor: 'yellow',
            onClosing: function(){
                // window.location.reload();
            }
        });
    }

    // $('#eventContainer').empty()
};

jQuery(document).ready(function ($) {
    // Your code here
    // displaySlide($);
    //generateCategoryMenu($);
    displayRegisteredEvents($);
    // displayMostRecentEvent($);
    // displayMostRecentEventCountdown($);
});