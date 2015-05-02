/*
jQuery('img.svg').each(function () {
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});

$('path').each(function () {
    $(this).on("click", function() {
    this.path.css({ fill: "red" });
    });
});
*/

// Legislation Info
var legislation = [{
        "key": "3",
        "title": "Keystone XL Pipeline Act",
        "summary": "Authorizes TransCanada Keystone Pipeline, L.P. to construct, connect, operate, and maintain the pipeline and cross-border facilities specified in an application filed by TransCanada Corporation to the Department of State on May 4, 2012."

},
    {
        "key": "161",
        "title": "Natural Gas Pipeline Permitting Reform Act",
        "summary": "Amends the Natural Gas Act to direct the Federal Energy Regulatory Commission (FERC) to approve or deny a certificate of public convenience and necessity for a prefiled project within 12 months after receiving a complete application that is ready to be processed."

}, {
        "key": "48",
        "title": "Providing for consideration of the bill (H.R. 351)",
        "summary": "To provide for expedited approval of exportation of natural gas."

},
    {
        "key": "2231",
        "title": "H.R. 2231, the Offshore Energy and Jobs Act",
        "summary": "Amends the Outer Continental Shelf Lands Act (OCSLA) to direct the Secretary of the Interior to implement a leasing program that includes at least 50% of the available unleased acreage within each outer Continental Shelf (OCS) planning area considered to have the largest undiscovered, technically recoverable oil and gas resources, with an emphasis on offering the most geologically prospective parts of the planning area. Instructs the Secretary, in developing a five-year oil and gas leasing program, to determine a specified domestic strategic production goal for the development of oil and natural gas as a result of that program. Requires the Secretary to: (1) develop and submit to Congress a new five-year oil and gas leasing program. (2) conduct offshore oil and gas Lease Sale 220 within one year after enactment of this Act, and (3) make replacement lease blocks available in the Virginia lease sale planning area that are acceptable for oil and gas exploration and production if the Secretary of Defense proposes deferral from a lease offering due to defense-related activities irreconcilable with mineral exploration and development."

},
    {
        "key": "2728",
        "title": "Amendment to H.R. 2728, the Protecting States’ Rights to Promote American Energy Security Act",
        "summary": "AMENDMENT DESCRIPTION - Amendment sought to allow the Secretary of the Interior to issue regulations to reduce methane emissions from oil and gas drilling operations on public lands."

},
    {
        "key": "3826a",
        "title": "Amendment to H.R. 3826, the Electricity Security and Affordability Act",
        "summary": "AMENDMENT DESCRIPTION - An amendment numbered 6 printed in House Report 113-373 to accept the scientific finding of the EPA that greenhouse gas pollution is 'contributing to long-lasting changes in our climate that can have a range of negative effects.'"

},
    {
        "key": "3826",
        "title": "H.R. 3826, the Electricity Security and Affordability Act",
        "summary": ""

},
    {
        "key": "2397a",
        "title": "Amendment to H.R. 2397, the Department of Defense Appropriations Act, 2014",
        "summary": "AMENDMENT DESCRIPTION - Amendment prohibits the use of funds in the bill to enforce section 526 of the Energy Independence and Security Act, which prohibits federal agencies from entering into contracts for the procurement of an alternative fuel unless its lifecycle greenhouse gas emissions are less than or equal to emissions from an equivalent conventional fuel produced from conventional petroleum sources."

},
    {
        "key": "1582a",
        "title": "Amendment to H.R. 1582, the Energy Consumers Relief Act of 2013",
        "summary": "AMENDMENT DESCRIPTION - Amendment prohibits the EPA from using the 'social cost of carbon' valuation for any energy-related rule that costs more than $1 billion unless and until a Federal law is enacted authorizing such use."

},
    {
        "key": "3590a",
        "title": "Amendment to H.R. 3590, the Sportsmen’s Heritage and Recreational Enhancement (SHARE) Act of 2013",
        "summary": "AMENDMENT DESCRIPTION - An amendment numbered 10 printed in House Report 113-339 to promote the Secretary of the Interior's authority to consider climate change when making decisions related to recreation and conservation on public lands."

},
    {
        "key": "4923a",
        "title": "Amendment to H.R. 4923, the Energy and Water Development and Related Agencies Appropriations Act, 2015",
        "summary": "AMENDMENT DESCRIPTION - Amendment prohibits the use of funds to design, implement, administer or carry out specified assessments regarding climate change."

},
    {
        "key": "4660a",
        "title": "Amendment to H.R. 4660, the Commerce, Justice, Science, and Related Agencies Appropriations Act, 2015",
        "summary": "AMENDMENT DESCRIPTION - Amendment prohibits the use of funds to negotiate or enter into a trade agreement that establishes a limit on greenhouse gas emissions. The limitation described in the section shall not apply in the case of the administration of a tax or tariff."

},
    {
        "key": "4923b",
        "title": "Amendment to H.R. 4923, the Energy and Water Development and Related Agencies Appropriations Act, 2015",
        "summary": "AMENDMENT DESCRIPTION - Amendment adds a new section prohibiting the use of funds to prepare, propose, or promulgate any regulation or guidance that references or relies on the analysis contained in specified documents on the subject of the Social Cost of Carbon."

},

                  ];

// District Representatives & District Info

var districts = [{
        "title": "FL-1",
        "counties": "Walton County, Santa Rosa County, Okaloosa County, Escambia County",
        "representative": {
            "name": "Jeff Miller",
            "photo": "portrait-1.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
            {"number": 3, "vote": "y", "result": "neg"},
            {"number": 161, "vote": "y", "result": "neg"},
            {"number": 48, "vote": "y", "result": "neg"},
            {"number": 2231, "vote": "y", "result": "neg"},
            {"number": 2728, "vote": "y", "result": "neg"}, 
            {"number": "3826a", "vote": "n", "result": "neg"}, 
            {"number": 3826, "vote": "y", "result": "neg"},
            {"number": "2397a", "vote": "y", "result": "neg"}, 
            {"number": "1582a", "vote": "nv", "result": "na"}, 
            {"number": "3590a", "vote": "n", "result": "neg"}, 
            {"number": "4923a", "vote": "y", "result": "neg"}, 
            {"number": "4660a", "vote": "y", "result": "neg"},  
            {"number": "4923b", "vote": "y", "result": "neg"} 
            ]
        }
},
    {
        "title": "FL-2",
        "counties": "Taylor County, Franklin County, Bay County, Jackson County, Liberty County, Gulf County, Wakulla County, Leon County",
        "representative": {
            "name": "Gwen Graham",
            "photo": "portrait-2.jpg",
            "party": "D",
            "quoted-stance": " ",
            "votingHistory": 
            [
                {"number": 3, "vote": "y", "result": "neg"},
                 {"number": 161, "vote": "y", "result": "neg"},
                 {"number": 48, "vote": "n", "result": "pos"}, 
                {"number": 2231, "vote": "na", "result": "na"},
                 {"number": 2728, "vote": "na", "result": "na"},
                 {"number": "3826a", "vote": "na", "result": "na"},
                 {"number": 3826, "vote": "na", "result": "na"},
                 {"number": "2397a", "vote": "na", "result": "na"},
                 {"number": "1582a", "vote": "na", "result": "na"},
                 {"number": "3590a", "vote": "na", "result": "na"},
                 {"number": "4923a", "vote": "na", "result": "na"},
                 {"number": "4660a", "vote": "na", "result": "na"},
                 {"number": "4923b", "vote": "na", "result": "na"}
            ]
        }
},
    {
        "title": "FL-3",
        "counties": "Levy County, Dixie County, Columbia County, Suwannee County, Lafayette County, Hamilton County, Gilchrist County, Bradford County and parts of Clay County, Alachua County, Madison County, Marion County",
        "representative": {
            "name": "Ted Yoho",
            "photo": "portrait-3.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
            {"number": 3, "vote": "y", "result": "neg"},                  
            {"number": 161, "vote": "y", "result": "neg"},
            {"number": 48, "vote": "y", "result": "neg"},
            {"number": 2231, "vote": "y", "result": "neg"},
            {"number": 2728, "vote": "y", "result": "neg"}, 
            {"number": "3826a", "vote": "n", "result": "neg"}, 
            {"number": 3826, "vote": "y", "result": "neg"},
            {"number": "2397a", "vote": "y", "result": "neg"},
            {"number": "1582a", "vote": "y", "result": "neg"}, 
            {"number": "3590a", "vote": "n", "result": "neg"}, 
            {"number": "4923a", "vote": "y", "result": "neg"},
            {"number": "4660a", "vote": "y", "result": "neg"}, 
            {"number": "4923b", "vote": "y", "result": "neg"} 
            ]
        }
},
    {
        "title": "FL-4",
        "counties": "Nassau County, Baker County",
        "representative": {
            "name": "Ander Crenshaw",
            "photo": "portrait-4.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
                {"number": 3, "vote": "y", "result": "neg"}, 
                {"number": 161, "vote": "y", "result": "neg"},
                {"number": 48, "vote": "y", "result": "neg"}, 
                {"number": 2231, "vote": "y", "result": "neg"},
                {"number": 2728, "vote": "y", "result": "neg"},
                {"number": "3826a", "vote": "n", "result": "neg"},
                {"number": 3826, "vote": "y", "result": "neg"},   
                {"number": "2397a", "vote": "y", "result": "neg"},
                {"number": "1582a", "vote": "y", "result": "neg"},
                {"number": "3590a", "vote": "n", "result": "neg"},
                {"number": "4923a", "vote": "y", "result": "neg"},
                {"number": "4660a", "vote": "y", "result": "neg"},
                {"number": "4923b", "vote": "y", "result": "neg"}
            ]
        }
},
    {
        "title": "FL-5",
        "counties": "Parts of Putnam County, Lake County, Alachua County, Orange County, Marion County, Jacksonville, Duval County, Clay County",
        "representative": {
            "name": "Corrine Brown",
            "photo": "portrait-5.jpg",
            "party": "D",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
                {"number": 3, "vote": "n", "result": "pos"}, 
                {"number": 161, "vote": "n", "result": "pos"},
                {"number": 48, "vote": "n", "result": "pos"}, 
                {"number": 2231, "vote": "n", "result": "pos"},
                {"number": 2728, "vote": "n", "result": "pos"},
                {"number": "3826a", "vote": "y", "result": "pos"}, 
                {"number": 3826, "vote": "n", "result": "pos"},  
                {"number": "2397a", "vote": "n", "result": "pos"}, 
                {"number": "1582a", "vote": "n", "result": "pos"}, 
                {"number": "3590a", "vote": "y", "result": "pos"},
                {"number": "4923a", "vote": "n", "result": "pos"},
                {"number": "4660a", "vote": "n", "result": "pos"},
                {"number": "4923b", "vote": "n", "result": "pos"}
            ]
        }
},
    {
        "title": "FL-6",
        "counties": "St. Johns County, Flagler County, Bunnell, Palm Coast",
        "representative": {
            "name": "Ron Desantis",
            "photo": "portrait-6.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
           [                 
                {"number": 3, "vote": "y", "result": "neg"}, 
                {"number": 161, "vote": "y", "result": "neg"},
                {"number": 48, "vote": "y", "result": "neg"}, 
                {"number": 2231, "vote": "y", "result": "neg"},
                {"number": 2728, "vote": "y", "result": "neg"},
                {"number": "3826a", "vote": "n", "result": "neg"},
                {"number": 3826, "vote": "y", "result": "neg"},   
                {"number": "2397a", "vote": "y", "result": "neg"},
                {"number": "1582a", "vote": "y", "result": "neg"},
                {"number": "3590a", "vote": "n", "result": "neg"},
                {"number": "4923a", "vote": "y", "result": "neg"},
                {"number": "4660a", "vote": "y", "result": "neg"},
                {"number": "4923b", "vote": "y", "result": "neg"}
            ]
        }
},
    {
        "title": "FL-7",
        "counties": "Deltona, DeBary, Oviedo, Winter Springs, Black Hammock, Geneva and parts of Seminole County, Sanford, Volusia County, Orange County",
        "representative": {
            "name": "John Mica",
            "photo": "portrait-7.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
                {"number": 3, "vote": "y", "result": "neg"},
                {"number": 161, "vote": "y", "result": "neg"}, 
                {"number": 48, "vote": "y", "result": "neg"}, 
                {"number": 2231, "vote": "y", "result": "neg"}, 
                {"number": 2728, "vote": "y", "result": "neg"}, 
                {"number": "3826a", "vote": "n", "result": "neg"},
                {"number": 3826, "vote": "y", "result": "neg"}, 
                {"number": "2397a", "vote": "y", "result": "neg"}, 
                {"number": "1582a", "vote": "y", "result": "neg"}, 
                {"number": "3590a", "vote": "n", "result": "neg"},
                {"number": "4923a", "vote": "y", "result": "neg"}, 
                {"number": "4660a", "vote": "y", "result": "neg"}, 
                {"number": "4923b", "vote": "y", "result": "neg"} 
            ]
        }
},
    {
        "title": "FL-8",
        "counties": "Brevard County, Indian River County, Palm Bay",
        "representative": {
            "name": "Bill Posey",
            "photo": "portrait-8.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
                {"number": 3, "vote": "y", "result": "neg"}, 
                {"number": 161, "vote": "y", "result": "neg"},
                {"number": 48, "vote": "y", "result": "neg"}, 
                {"number": 2231, "vote": "y", "result": "neg"},
                {"number": 2728, "vote": "y", "result": "neg"},
                {"number": "3826a", "vote": "n", "result": "neg"},
                {"number": 3826, "vote": "y", "result": "neg"},   
                {"number": "2397a", "vote": "y", "result": "neg"},
                {"number": "1582a", "vote": "y", "result": "neg"},
                {"number": "3590a", "vote": "n", "result": "neg"},
                {"number": "4923a", "vote": "y", "result": "neg"},
                {"number": "4660a", "vote": "y", "result": "neg"},
                {"number": "4923b", "vote": "y", "result": "neg"}
            ]
        }
},
    {
        "title": "FL-9",
        "counties": "Osceola County, Poinciana and parts of Orlando, Orange County, Polk County",
        "representative": {
            "name": "Alan Grayson",
            "photo": "portrait-9.jpg",
            "party": "D",
            "quoted-stance": " ",
             "votingHistory": 
           [                 
                {"number": 3, "vote": "n", "result": "pos"}, 
                {"number": 161, "vote": "n", "result": "pos"},
                {"number": 48, "vote": "n", "result": "pos"}, 
                {"number": 2231, "vote": "n", "result": "pos"},
                {"number": 2728, "vote": "n", "result": "pos"},
                {"number": "3826a", "vote": "y", "result": "pos"}, 
                {"number": 3826, "vote": "n", "result": "pos"},  
                {"number": "2397a", "vote": "n", "result": "pos"}, 
                {"number": "1582a", "vote": "n", "result": "pos"}, 
                {"number": "3590a", "vote": "y", "result": "pos"},
                {"number": "4923a", "vote": "n", "result": "pos"},
                {"number": "4660a", "vote": "y", "result": "neg"},
                {"number": "4923b", "vote": "n", "result": "pos"}
            ]
        }
},
    {
        "title": "FL-10",
        "counties": "Leesburg, Horizon West and parts of Lake County, Orange County, Polk County",
        "representative": {
            "name": "Daniel Webster",
            "photo": "portrait-10.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
                {"number": 3, "vote": "y", "result": "neg"}, 
                {"number": 161, "vote": "y", "result": "neg"},
                {"number": 48, "vote": "y", "result": "neg"}, 
                {"number": 2231, "vote": "y", "result": "neg"},
                {"number": 2728, "vote": "y", "result": "neg"},
                {"number": "3826a", "vote": "n", "result": "neg"},
                {"number": 3826, "vote": "y", "result": "neg"},   
                {"number": "2397a", "vote": "y", "result": "neg"},
                {"number": "1582a", "vote": "y", "result": "neg"},
                {"number": "3590a", "vote": "n", "result": "neg"},
                {"number": "4923a", "vote": "y", "result": "neg"},
                {"number": "4660a", "vote": "y", "result": "neg"},
                {"number": "4923b", "vote": "y", "result": "neg"}
            ]
        }
},
    {
        "title": "FL-11",
        "counties": "Citrus County, Hernando County, Sumter County, Spring Hill",
        "representative": {
            "name": "Richard Nugent",
            "photo": "portrait-11.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
           [                 
                {"number": 3, "vote": "y", "result": "neg"}, 
                {"number": 161, "vote": "y", "result": "neg"},
                {"number": 48, "vote": "y", "result": "neg"}, 
                {"number": 2231, "vote": "y", "result": "neg"},
                {"number": 2728, "vote": "y", "result": "neg"},
                {"number": "3826a", "vote": "n", "result": "neg"},
                {"number": 3826, "vote": "y", "result": "neg"},   
                {"number": "2397a", "vote": "y", "result": "neg"},
                {"number": "1582a", "vote": "y", "result": "neg"},
                {"number": "3590a", "vote": "n", "result": "neg"},
                {"number": "4923a", "vote": "y", "result": "neg"},
                {"number": "4660a", "vote": "y", "result": "neg"},
                {"number": "4923b", "vote": "y", "result": "neg"}
            ]
        }
},
    {
        "title": "FL-12",
        "counties": "Pasco County, Wesley Chapel, Keystone, East Lake, Pasadena Hills, Shady Hills, Palm Harbor, Land O' Lakes",
        "representative": {
            "name": "Gus Bilirakis",
            "photo": "portrait-12.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
                {"number": 3, "vote": "y", "result": "neg"}, 
                {"number": 161, "vote": "y", "result": "neg"},
                {"number": 48, "vote": "y", "result": "neg"}, 
                {"number": 2231, "vote": "y", "result": "neg"},
                {"number": 2728, "vote": "y", "result": "neg"},
                {"number": "3826a", "vote": "n", "result": "neg"},
                {"number": 3826, "vote": "y", "result": "neg"},   
                {"number": "2397a", "vote": "y", "result": "neg"},
                {"number": "1582a", "vote": "y", "result": "neg"},
                {"number": "3590a", "vote": "n", "result": "neg"},
                {"number": "4923a", "vote": "y", "result": "neg"},
                {"number": "4660a", "vote": "y", "result": "neg"},
                {"number": "4923b", "vote": "y", "result": "neg"}
            ]
        }
},
    {
        "title": "FL-13",
        "counties": "Clearwater, Denedin, St. Pete Beach, Largo, Pinellas Park and parts of Pinellas County, St. Petersburg",
        "representative": {
            "name": "David Jolly",
            "photo": "portrait-13.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
                {"number": 3, "vote": "y", "result": "neg"}, 
                {"number": 161, "vote": "y", "result": "neg"},
                {"number": 48, "vote": "y", "result": "neg"}, 
                {"number": 2231, "vote": "na", "result": "na"},
                {"number": 2728, "vote": "na", "result": "na"},
                {"number": "3826a", "vote": "na", "result": "na"},
                {"number": 3826, "vote": "na", "result": "na"},   
                {"number": "2397a", "vote": "na", "result": "na"},
                {"number": "1582a", "vote": "na", "result": "na"},
                {"number": "3590a", "vote": "na", "result": "na"},
                {"number": "4923a", "vote": "y", "result": "neg"},
                {"number": "4660a", "vote": "y", "result": "neg"},
                {"number": "4923b", "vote": "y", "result": "neg"}
            ]
        }
},
    {
        "title": "FL-14",
        "counties": " ",
        "representative": {
            "name": "Kathy Castor",
            "photo": "portrait-14.png",
            "party": "D",
            "quoted-stance": " ",
            "votingHistory": 
             [                 
                {"number": 3, "vote": "n", "result": "pos"}, 
                {"number": 161, "vote": "n", "result": "pos"},
                {"number": 48, "vote": "n", "result": "pos"}, 
                {"number": 2231, "vote": "n", "result": "pos"},
                {"number": 2728, "vote": "n", "result": "pos"},
                {"number": "3826a", "vote": "y", "result": "pos"}, 
                {"number": 3826, "vote": "n", "result": "pos"},  
                {"number": "2397a", "vote": "n", "result": "pos"}, 
                {"number": "1582a", "vote": "n", "result": "pos"}, 
                {"number": "3590a", "vote": "y", "result": "pos"},
                {"number": "4923a", "vote": "n", "result": "pos"},
                {"number": "4660a", "vote": "n", "result": "pos"},
                {"number": "4923b", "vote": "n", "result": "pos"}
            ]
        }
},
    {
        "title": "FL-15",
        "counties": " ",
        "representative": {
            "name": "Dennis Ross",
            "photo": "portrait-15.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
           [                 
                {"number": 3, "vote": "y", "result": "neg"}, 
                {"number": 161, "vote": "y", "result": "neg"},
                {"number": 48, "vote": "y", "result": "neg"}, 
                {"number": 2231, "vote": "y", "result": "neg"},
                {"number": 2728, "vote": "y", "result": "neg"},
                {"number": "3826a", "vote": "n", "result": "neg"},
                {"number": 3826, "vote": "y", "result": "neg"},   
                {"number": "2397a", "vote": "y", "result": "neg"},
                {"number": "1582a", "vote": "n", "result": "pos"},
                {"number": "3590a", "vote": "n", "result": "neg"},
                {"number": "4923a", "vote": "y", "result": "neg"},
                {"number": "4660a", "vote": "y", "result": "neg"},
                {"number": "4923b", "vote": "y", "result": "neg"}
            ]
        }
},
    {
        "title": "FL-16",
        "counties": " ",
        "representative": {
            "name": "Vern Buchanan",
            "photo": "portrait-16.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
           [                 
                {"number": 3, "vote": "y", "result": "neg"}, 
                {"number": 161, "vote": "y", "result": "neg"},
                {"number": 48, "vote": "nv", "result": "na"}, 
                {"number": 2231, "vote": "y", "result": "neg"},
                {"number": 2728, "vote": "y", "result": "neg"},
                {"number": "3826a", "vote": "n", "result": "neg"},
                {"number": 3826, "vote": "y", "result": "neg"},   
                {"number": "2397a", "vote": "y", "result": "neg"},
                {"number": "1582a", "vote": "y", "result": "neg"},
                {"number": "3590a", "vote": "n", "result": "neg"},
                {"number": "4923a", "vote": "y", "result": "neg"},
                {"number": "4660a", "vote": "y", "result": "neg"},
                {"number": "4923b", "vote": "y", "result": "neg"}
            ]
        }
},
    {
        "title": "FL-17",
        "counties": " ",
        "representative": {
            "name": "Thomas Rooney",
            "photo": "portrait-17.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
                {"number": 3, "vote": "y", "result": "neg"}, 
                {"number": 161, "vote": "y", "result": "neg"},
                {"number": 48, "vote": "y", "result": "neg"}, 
                {"number": 2231, "vote": "y", "result": "neg"},
                {"number": 2728, "vote": "y", "result": "neg"},
                {"number": "3826a", "vote": "n", "result": "neg"},
                {"number": 3826, "vote": "y", "result": "neg"},   
                {"number": "2397a", "vote": "y", "result": "neg"},
                {"number": "1582a", "vote": "y", "result": "neg"},
                {"number": "3590a", "vote": "n", "result": "neg"},
                {"number": "4923a", "vote": "y", "result": "neg"},
                {"number": "4660a", "vote": "y", "result": "neg"},
                {"number": "4923b", "vote": "y", "result": "neg"}
            ]
        }
},
    {
        "title": "FL-18",
        "counties": " ",
        "representative": {
            "name": "Patrick Murphy",
            "photo": "portrait-18.jpg",
            "party": "D",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
                {"number": 3, "vote": "y", "result": "neg"}, 
                {"number": 161, "vote": "y", "result": "neg"},
                {"number": 48, "vote": "n", "result": "pos"}, 
                {"number": 2231, "vote": "n", "result": "pos"},
                {"number": 2728, "vote": "n", "result": "pos"},
                {"number": "3826a", "vote": "y", "result": "pos"}, 
                {"number": 3826, "vote": "n", "result": "pos"},  
                {"number": "2397a", "vote": "n", "result": "pos"}, 
                {"number": "1582a", "vote": "n", "result": "pos"}, 
                {"number": "3590a", "vote": "y", "result": "pos"},
                {"number": "4923a", "vote": "n", "result": "pos"},
                {"number": "4660a", "vote": "n", "result": "pos"},
                {"number": "4923b", "vote": "n", "result": "pos"}
            ]
        }
},
    {
        "title": "FL-19",
        "counties": " ",
        "representative": {
            "name": "Curtis Clawson",
            "photo": "portrait-19.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
                {"number": 3, "vote": "y", "result": "neg"}, 
                {"number": 161, "vote": "y", "result": "neg"},
                {"number": 48, "vote": "y", "result": "neg"}, 
                {"number": 2231, "vote": "na", "result": "na"},
                {"number": 2728, "vote": "na", "result": "na"},
                {"number": "3826a", "vote": "na", "result": "na"},
                {"number": 3826, "vote": "na", "result": "na"},   
                {"number": "2397a", "vote": "na", "result": "na"},
                {"number": "1582a", "vote": "na", "result": "na"},
                {"number": "3590a", "vote": "na", "result": "na"},
                {"number": "4923a", "vote": "y", "result": "neg"},
                {"number": "4660a", "vote": "na", "result": "na"},
                {"number": "4923b", "vote": "y", "result": "neg"}
            ]
        }
},
    {
        "title": "FL-20",
        "counties": " ",
        "representative": {
            "name": "Alcee Hastings",
            "photo": "portrait-20.jpg",
            "party": "D",
            "quoted-stance": " ",
             "votingHistory": 
             [                 
                {"number": 3, "vote": "n", "result": "pos"}, 
                {"number": 161, "vote": "nv", "result": "na"},
                {"number": 48, "vote": "n", "result": "pos"}, 
                {"number": 2231, "vote": "n", "result": "pos"},
                {"number": 2728, "vote": "n", "result": "pos"},
                {"number": "3826a", "vote": "y", "result": "pos"}, 
                {"number": 3826, "vote": "n", "result": "pos"},  
                {"number": "2397a", "vote": "n", "result": "pos"}, 
                {"number": "1582a", "vote": "n", "result": "pos"}, 
                {"number": "3590a", "vote": "y", "result": "pos"},
                {"number": "4923a", "vote": "n", "result": "pos"},
                {"number": "4660a", "vote": "nv", "result": "na"},
                {"number": "4923b", "vote": "n", "result": "pos"}
            ]
        }
},
    {
        "title": "FL-21",
        "counties": " ",
        "representative": {
            "name": "Theodore Deutch",
            "photo": "portrait-21.jpg",
            "party": "D",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
                {"number": 3, "vote": "n", "result": "pos"}, 
                {"number": 161, "vote": "n", "result": "pos"},
                {"number": 48, "vote": "n", "result": "pos"}, 
                {"number": 2231, "vote": "n", "result": "pos"},
                {"number": 2728, "vote": "n", "result": "pos"},
                {"number": "3826a", "vote": "y", "result": "pos"}, 
                {"number": 3826, "vote": "n", "result": "pos"},  
                {"number": "2397a", "vote": "n", "result": "pos"}, 
                {"number": "1582a", "vote": "n", "result": "pos"}, 
                {"number": "3590a", "vote": "y", "result": "pos"},
                {"number": "4923a", "vote": "n", "result": "pos"},
                {"number": "4660a", "vote": "n", "result": "pos"},
                {"number": "4923b", "vote": "n", "result": "pos"}
            ]
        }
},
    {
        "title": "FL-22",
        "counties": " ",
        "representative": {
            "name": "Lois Frankel",
            "photo": "portrait-22.jpg",
            "party": "D",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
                {"number": 3, "vote": "n", "result": "pos"}, 
                {"number": 161, "vote": "n", "result": "pos"},
                {"number": 48, "vote": "n", "result": "pos"}, 
                {"number": 2231, "vote": "n", "result": "pos"},
                {"number": 2728, "vote": "n", "result": "pos"},
                {"number": "3826a", "vote": "y", "result": "pos"}, 
                {"number": 3826, "vote": "n", "result": "pos"},  
                {"number": "2397a", "vote": "n", "result": "pos"}, 
                {"number": "1582a", "vote": "n", "result": "pos"}, 
                {"number": "3590a", "vote": "y", "result": "pos"},
                {"number": "4923a", "vote": "n", "result": "pos"},
                {"number": "4660a", "vote": "n", "result": "pos"},
                {"number": "4923b", "vote": "n", "result": "pos"}
            ]
        }
},
    {
        "title": "FL-23",
        "counties": " ",
        "representative": {
            "name": "Debbie Wasserman Schultz",
            "photo": "portrait-23.jpg",
            "party": "D",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
                {"number": 3, "vote": "n", "result": "pos"}, 
                {"number": 161, "vote": "n", "result": "pos"},
                {"number": 48, "vote": "n", "result": "pos"}, 
                {"number": 2231, "vote": "n", "result": "pos"},
                {"number": 2728, "vote": "nv", "result": "na"},
                {"number": "3826a", "vote": "y", "result": "pos"}, 
                {"number": 3826, "vote": "n", "result": "pos"},  
                {"number": "2397a", "vote": "n", "result": "pos"}, 
                {"number": "1582a", "vote": "nv", "result": "na"}, 
                {"number": "3590a", "vote": "y", "result": "pos"},
                {"number": "4923a", "vote": "n", "result": "pos"},
                {"number": "4660a", "vote": "n", "result": "pos"},
                {"number": "4923b", "vote": "n", "result": "pos"}
            ]
        }
},
    {
        "title": "FL-24",
        "counties": " ",
        "representative": {
            "name": "Frederica Wilson",
            "photo": "portrait-24.jpg",
            "party": "D",
            "quoted-stance": " ",
             "votingHistory": 
           [                 
                {"number": 3, "vote": "n", "result": "pos"}, 
                {"number": 161, "vote": "n", "result": "pos"},
                {"number": 48, "vote": "n", "result": "pos"}, 
                {"number": 2231, "vote": "n", "result": "pos"},
                {"number": 2728, "vote": "n", "result": "pos"},
                {"number": "3826a", "vote": "y", "result": "pos"}, 
                {"number": 3826, "vote": "n", "result": "pos"},  
                {"number": "2397a", "vote": "n", "result": "pos"}, 
                {"number": "1582a", "vote": "n", "result": "pos"}, 
                {"number": "3590a", "vote": "y", "result": "pos"},
                {"number": "4923a", "vote": "nv", "result": "na"},
                {"number": "4660a", "vote": "n", "result": "pos"},
                {"number": "4923b", "vote": "n", "result": "pos"}
            ]
        }
},
    {
        "title": "FL-25",
        "counties": " ",
        "representative": {
            "name": "Mario Diaz-Balart",
            "photo": "portrait-25.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
                {"number": 3, "vote": "y", "result": "neg"}, 
                {"number": 161, "vote": "y", "result": "neg"},
                {"number": 48, "vote": "y", "result": "neg"}, 
                {"number": 2231, "vote": "y", "result": "neg"},
                {"number": 2728, "vote": "y", "result": "neg"},
                {"number": "3826a", "vote": "n", "result": "neg"},
                {"number": 3826, "vote": "y", "result": "neg"},   
                {"number": "2397a", "vote": "y", "result": "neg"},
                {"number": "1582a", "vote": "y", "result": "neg"},
                {"number": "3590a", "vote": "n", "result": "neg"},
                {"number": "4923a", "vote": "y", "result": "neg"},
                {"number": "4660a", "vote": "y", "result": "neg"},
                {"number": "4923b", "vote": "y", "result": "neg"}
            ]
        }
},
    {
        "title": "FL-26",
        "counties": " ",
        "representative": {
            "name": "Carlos Curbelo",
            "photo": "portrait-26.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
           [                 
                {"number": 3, "vote": "y", "result": "neg"}, 
                {"number": 161, "vote": "y", "result": "neg"},
                {"number": 48, "vote": "y", "result": "neg"}, 
                {"number": 2231, "vote": "na", "result": "na"},
                {"number": 2728, "vote": "na", "result": "na"},
                {"number": "3826a", "vote": "na", "result": "na"},
                {"number": 3826, "vote": "na", "result": "na"},   
                {"number": "2397a", "vote": "na", "result": "na"},
                {"number": "1582a", "vote": "na", "result": "na"},
                {"number": "3590a", "vote": "na", "result": "na"},
                {"number": "4923a", "vote": "na", "result": "na"},
                {"number": "4660a", "vote": "na", "result": "na"},
                {"number": "4923b", "vote": "na", "result": "na"}
            ]
        }
},
    {
        "title": "FL-27",
        "counties": " ",
        "representative": {
            "name": "Ileana Ros-Lehtinen",
            "photo": "portrait-27.jpg",
            "party": "R",
            "quoted-stance": " ",
             "votingHistory": 
            [                 
                {"number": 3, "vote": "y", "result": "neg"}, 
                {"number": 161, "vote": "y", "result": "neg"},
                {"number": 48, "vote": "y", "result": "neg"}, 
                {"number": 2231, "vote": "y", "result": "neg"},
                {"number": 2728, "vote": "y", "result": "neg"},
                {"number": "3826a", "vote": "n", "result": "neg"},
                {"number": 3826, "vote": "nv", "result": "na"},   
                {"number": "2397a", "vote": "y", "result": "neg"},
                {"number": "1582a", "vote": "y", "result": "neg"},
                {"number": "3590a", "vote": "n", "result": "neg"},
                {"number": "4923a", "vote": "y", "result": "neg"},
                {"number": "4660a", "vote": "nv", "result": "na"},
                {"number": "4923b", "vote": "y", "result": "neg"}
            ]
        }
}];

/*
 ***********************************************************************************************
 ***********************************************************************************************
 */

$(document).ready(function () {

    var firstClick = true;
    
    
    $(".hide").click(function() {
       $(this).css({opacity: 1}); 
     $(".show").css({opacity: .5});
     $("#fl-districts").css("visibility", "hidden");
    });

$(".show").click(function() {
       $(this).css({opacity: 1}); 
     $(".hide").css({opacity: .5});
     $("#fl-districts").css("visibility", "visible");
    });
    
    

    //---- showing district info div

    $("#fl-districts").click(function () {
        console.log("clicked");
        $("#district-wrapper").css("visibility", "visible");
        $('html,body').animate({
        scrollTop: $("#district-wrapper").offset().top},
        'slow');

    });

    //---- onclick, changing the content in the div
    
    $("path").hover(function(){
        $(this).css("fill", "#223CFF");
        var districtNum = $(this).attr("id");
        console.log(districtNum);
        $("#hovered-district").html("District: " + districts[districtNum - 1].title);
        $("#hovered-counties").html("Counties: " + districts[districtNum - 1].counties);
    
    });

    $("path").each(function () {
        $(this).click(function () {

            var districtNum = $(this).attr("id");
            console.log(jQuery(this).attr('id'));
            var photoPath = "assets/images/" + districts[districtNum - 1].representative.photo;
            console.log(photoPath);
            
            
            $("path").css({"fill": "#fff"});
            $("#district-rep").html(districts[districtNum - 1].representative.name + ", " + districts[districtNum - 1].title);
            $("#rep-photo > img").attr("src", photoPath);
            $("#district-counties").html(districts[districtNum - 1].counties);
            
            
            var selectedHistory = districts[districtNum - 1].representative.votingHistory;
            var votes = $("#votes>ul");
            
            votes.empty();
            $("#legislation-number").empty();
            $("#legislation-summary").empty();
            $("#voted").empty();
            firstClick = true;
            
            //-- loop through to find the "good votes"
            for(var i = 0; i < selectedHistory.length; i++) {
                
                switch(selectedHistory[i].result) {
                        case "pos" :
                        var legistlationNumber = selectedHistory[i].number;
                        votes.append("<li id='" + legistlationNumber + "' class='pos-vote'></li>");
                        break;
                        
                        default:
                        break;
                }
            }
            
            //-- loop through to find the "bad votes"
            for(var i = 0; i < selectedHistory.length; i++) {
                switch(selectedHistory[i].result) {
                        case "neg" :
                        var legistlationNumber = selectedHistory[i].number;
                        votes.append("<li id='" + legistlationNumber + "' class='neg-vote'></li>");
                        break;
                        
                        default:
                        break;
                }
            }
            
            //-- loop through to find the "na/nv votes"
            for(var i = 0; i < selectedHistory.length; i++) {
                switch(selectedHistory[i].result) {
                        case "na" :
                        var legistlationNumber = selectedHistory[i].number;
                        votes.append("<li id='" + legistlationNumber + "' class='na-vote'></li>");
                        break;
                        
                        default:
                        break;
                }
                
            }
            
            $("li").each(function () {
                
                $(this).mouseover(function () { 
                    var legislationNumber = $(this).attr("id");
                    var liposn = $(this).position();
                    $("#leg").css({
                        "visibility": "visible"
                                  });
                    
                    for (var i = 0; i < legislation.length; i++) {
                 if (legislation[i].key == legislationNumber) {
                    $("#leg").html(legislation[i].title);
                 }
            }
                });
                
                
                
        $(this).click(function () { 
            
            if(firstClick) {
              $('html,body').animate({
        scrollTop: $("#legislation").offset().top},
        'slow');
   
                firstClick = false;
            }
            
            var legislationNumber = $(this).attr("id");
            
            for (var i = 0; i < selectedHistory.length; i++) {
                 if (selectedHistory[i].number == legislationNumber) {
                     if(selectedHistory[i].vote == "y") {
                       $("#voted").html("Voted YES");
                     } else if(selectedHistory[i].vote == "n") {
                       $("#voted").html("Voted NO"); 
                     } else {
                       $("#voted").html("No recorded vote"); 
                     }
                 }
            }
            
            for (var i = 0; i < legislation.length; i++) {
                 if (legislation[i].key == legislationNumber) {
                     $("#legislation-number").html(legislation[i].title);
                     $("#legislation-summary").html("<p>" + legislation[i].summary + "</p>");
                 }
            }
            console.log(legislationNumber);

            
        });
                
    });
           // $(this).css({
             //   "fill": "#ff0000"
            //});
        });
    });
});

console.log(districts);
console.log(districts[0].representative.name);