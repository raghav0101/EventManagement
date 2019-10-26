let baseurl = "http://localhost:8000";

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
    let allEvents = [1,2,3,4,5];
    console.log(allEvents);
    $('#eventContainer').empty();
    allEvents.map((element,index) => {
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
            '\t\t\t\t                                    <h3 class="caption-title"><a href="event/boots-and-hearts-2016/index.html">Boots and Hearts 2016</a></h3>\n' +
            '\t\t\t\t                                    <p class="caption-category"><i class="fa fa-file-text-o"></i> 08/23/2016 at 20:00 - 22:00 on Manhattan / New York</p>\n' +
            '\t\t\t\t                                    <p class="caption-price">Tickets from $52</p>\n' +
            '\t\t\t\t                                    <p class="caption-text">Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi.</p>\n' +
            '\t\t\t\t                                    <p class="caption-more"><a href="event/boots-and-hearts-2016/index.html" class="btn btn-theme">Tickets & Details</a></p>\n' +
            '\t\t\t\t                                </div>\n' +
            '\t\t\t\t                            </div>\n' +
            '\t\t\t\t                        </div>\n' +
            '\t\t\t\t                    </div>\n' +
            '\t\t\t\t                </div>';
        $('#eventContainer').append(eventElem);
    });
};
let displayTechnicalEvent =async ($) => {
    let technicalEvents = [1,2,3,4];
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
           '\t\t\t\t                                    <h3 class="caption-title"><a href="event/boots-and-hearts-2016/index.html">Boots and Hearts 2016</a></h3>\n' +
           '\t\t\t\t                                    <p class="caption-category"><i class="fa fa-file-text-o"></i> 08/23/2016 at 20:00 - 22:00 on Manhattan / New York</p>\n' +
           '\t\t\t\t                                    <p class="caption-price">Tickets from $52</p>\n' +
           '\t\t\t\t                                    <p class="caption-text">Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi.</p>\n' +
           '\t\t\t\t                                    <p class="caption-more"><a href="event/boots-and-hearts-2016/index.html" class="btn btn-theme">Tickets & Details</a></p>\n' +
           '\t\t\t\t                                </div>\n' +
           '\t\t\t\t                            </div>\n' +
           '\t\t\t\t                        </div>\n' +
           '\t\t\t\t                    </div>\n' +
           '\t\t\t\t                </div>';
       $('#eventContainer').append(eventElem);
    });
};

let displayGamingEvent = async ($) => {
    let gamingEvents = [1,2,3];
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
            '\t\t\t\t                                    <h3 class="caption-title"><a href="event/boots-and-hearts-2016/index.html">Boots and Hearts 2016</a></h3>\n' +
            '\t\t\t\t                                    <p class="caption-category"><i class="fa fa-file-text-o"></i> 08/23/2016 at 20:00 - 22:00 on Manhattan / New York</p>\n' +
            '\t\t\t\t                                    <p class="caption-price">Tickets from $52</p>\n' +
            '\t\t\t\t                                    <p class="caption-text">Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi.</p>\n' +
            '\t\t\t\t                                    <p class="caption-more"><a href="event/boots-and-hearts-2016/index.html" class="btn btn-theme">Tickets & Details</a></p>\n' +
            '\t\t\t\t                                </div>\n' +
            '\t\t\t\t                            </div>\n' +
            '\t\t\t\t                        </div>\n' +
            '\t\t\t\t                    </div>\n' +
            '\t\t\t\t                </div>';
        $('#eventContainer').append(eventElem);
    });
};

let displayCulturalEvent = async ($) => {
    let culturalEvents = [1,2];
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
            '\t\t\t\t                                    <h3 class="caption-title"><a href="event/boots-and-hearts-2016/index.html">Boots and Hearts 2016</a></h3>\n' +
            '\t\t\t\t                                    <p class="caption-category"><i class="fa fa-file-text-o"></i> 08/23/2016 at 20:00 - 22:00 on Manhattan / New York</p>\n' +
            '\t\t\t\t                                    <p class="caption-price">Tickets from $52</p>\n' +
            '\t\t\t\t                                    <p class="caption-text">Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi.</p>\n' +
            '\t\t\t\t                                    <p class="caption-more"><a href="event/boots-and-hearts-2016/index.html" class="btn btn-theme">Tickets & Details</a></p>\n' +
            '\t\t\t\t                                </div>\n' +
            '\t\t\t\t                            </div>\n' +
            '\t\t\t\t                        </div>\n' +
            '\t\t\t\t                    </div>\n' +
            '\t\t\t\t                </div>';
        $('#eventContainer').append(eventElem);
    });
};

let displayOtherEvent = async ($) => {
    let otherEvents = [1];
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
            '\t\t\t\t                                    <h3 class="caption-title"><a href="event/boots-and-hearts-2016/index.html">Boots and Hearts 2016</a></h3>\n' +
            '\t\t\t\t                                    <p class="caption-category"><i class="fa fa-file-text-o"></i> 08/23/2016 at 20:00 - 22:00 on Manhattan / New York</p>\n' +
            '\t\t\t\t                                    <p class="caption-price">Tickets from $52</p>\n' +
            '\t\t\t\t                                    <p class="caption-text">Fusce pellentesque velvitae tincidunt egestas. Pellentesque habitant morbi.</p>\n' +
            '\t\t\t\t                                    <p class="caption-more"><a href="event/boots-and-hearts-2016/index.html" class="btn btn-theme">Tickets & Details</a></p>\n' +
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
    generateCategoryMenu($);
    displayAllEvents($);
});