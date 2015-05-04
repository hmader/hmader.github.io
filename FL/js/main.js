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
    "abbr" : "H.R. 3 (2015)",
        "title": "H.R. 3, Keystone XL Pipeline Act",
        "summary": "<p>Authorizes TransCanada Keystone Pipeline, L.P. to construct, connect, operate, and maintain the pipeline and cross-border facilities specified in an application filed by TransCanada Corporation to the Department of State on May 4, 2012. (Congress.gov)</p><p><strong>A vote FOR this legislation supports the Keystone Pipeline, which will lead to mass transfer of oil through North America and expansion of tar sands development. This will further promote the high use of fossil fuels and carbon pollution, contributing to the speed of climate change, warming ocean water, ice melt, and sea level rise.</strong></p>"

},
    {
        "key": "161",
         "abbr" : "H.R. 161 (2015)",
        "title": "Natural Gas Pipeline Permitting Reform Act",
        "summary": "Amends the Natural Gas Act to direct the Federal Energy Regulatory Commission (FERC) to approve or deny a certificate of public convenience and necessity for a prefiled project within 12 months after receiving a complete application that is ready to be processed. (Congress.gov)"

}, {
        "key": "48",
     "abbr" : "H.Res 48 (2015)",
        "title": "Providing for consideration of the bill (H.R. 351)",
        "summary": "<p>To provide for expedited approval of exportation of natural gas. (Congress.gov)</p><p><strong></strong></p>"

},
    {
        "key": "2231",
         "abbr" : "H.R. 2231 (2013)",
        "title": "H.R. 2231, the Offshore Energy and Jobs Act",
        "summary": "<p>Amends the Outer Continental Shelf Lands Act (OCSLA) to direct the Secretary of the Interior to implement a leasing program that includes at least 50% of the available unleased acreage within each outer Continental Shelf (OCS) planning area considered to have the largest undiscovered, technically recoverable oil and gas resources, with an emphasis on offering the most geologically prospective parts of the planning area. Instructs the Secretary, in developing a five-year oil and gas leasing program, to determine a specified domestic strategic production goal for the development of oil and natural gas as a result of that program. Requires the Secretary to: (1) develop and submit to Congress a new five-year oil and gas leasing program. (2) conduct offshore oil and gas Lease Sale 220 within one year after enactment of this Act, and (3) make replacement lease blocks available in the Virginia lease sale planning area that are acceptable for oil and gas exploration and production if the Secretary of Defense proposes deferral from a lease offering due to defense-related activities irreconcilable with mineral exploration and development. (Congress.gov)</p><p><strong>A vote FOR this legislation supports expanding offshore drilling off the coasts of South Carolina, Virginia, California, and in Alaska’s Bristol Bay. The use of fossil fuels contributes to pollution and increased quantities of greenhouse gasses in the atmosphere, contributing to the speed of climate change, ice melt, and sea level rise.</strong></p>"

},
    {
        "key": "2728",
         "abbr" : "H.Amdt 507 (2013)",
        "title": "Amendment to H.R. 2728, the Protecting States’ Rights to Promote American Energy Security Act",
        "summary": "<p>Amendment sought to allow the Secretary of the Interior to issue regulations to reduce methane emissions from oil and gas drilling operations on public lands. (Congress.gov)</p><p><strong>A vote FOR this amendment is a vote against the regulation of methane, a greenhouse gas and pollutant that has over 20 times the effect of carbon dioxide. Large quantities of methane in the atmosphere contributes to increased warming, which leads to ice melt and sea level rise, as well as contributing to smog. This amendment failed to pass the House on November 20.</strong></p>"

},
    {
        "key": "3826a",
         "abbr" : "H.Amdt 581 (2014)",
        "title": "Amendment to H.R. 3826, the Electricity Security and Affordability Act",
        "summary": "<p>An amendment numbered 6 printed in House Report 113-373 to accept the scientific finding of the EPA that greenhouse gas pollution is 'contributing to long-lasting changes in our climate that can have a range of negative effects.' (Congress.gov)</p><p><strong>A vote AGAINST this amendment suggests the denial that greenhouse gasses impact climate change and the negative results of climate change.</p> <p>It has been scientifically shown that green house gasses trap heat in our atmosphere, which in turn increases global average temperature. In addition to effects such as drought and forest fires, this leads to warmer ocean water and melting ice sheets, which causes sea level rise. This amendment failed to pass the House on March 6.<strong></p> "

},
    {
        "key": "3826",
         "abbr" : "H.R. 3826 (2014)",
        "title": "H.R. 3826, the Electricity Security and Affordability Act",
        "summary": "<p>Prohibits the Administrator of the Environmental Protection Agency (EPA) from issuing, implementing, or enforcing any proposed or final rule under the Clean Air Act that establishes a performance standard for greenhouse gas emissions from any new source that is a fossil fuel-fired electric utility generating unit unless the rule meets specified requirements of this Act. (Congress.gov)</p><p><strong>A vote FOR this legislation is a vote to prevent the EPA from limiting carbon emissions from power plants, the nation’s largest source of the pollution driving climate change. The devastating impacts of climate change include more frequent and severe weather events like droughts, wildfires, floods, and storms. Climate change also threatens public health by increasing smog, which triggers asthma attacks and is especially dangerous for children and those with heart or lung disease. The U.S. already places limits on mercury, arsenic, particulate matter, lead and other pollution from power plants, but this extreme legislation would ensure that power plants remain free to release unlimited amounts of carbon pollution into our air. On March 6, the House approved this Bill.**</strong></p>"

},
    {
        "key": "2397a",
        "abbr" : "H.Amdt 380 (2013)",
        "title": "Amendment to H.R. 2397, the Department of Defense Appropriations Act, 2014",
        "summary": "<p>Amendment prohibits the use of funds in the bill to enforce section 526 of the Energy Independence and Security Act, which prohibits federal agencies from entering into contracts for the procurement of an alternative fuel unless its lifecycle greenhouse gas emissions are less than or equal to emissions from an equivalent conventional fuel produced from conventional petroleum sources. (Congress.gov)</p><p><strong>A vote FOR this amendment supports the defunding of the federal government’s prohibition on using unconventional transportation fuels that emit more greenhouse gases than traditional fuels. The amendment would prohibit the use of funds in the bill to enforce Section 526 of the Energy Independence and Security Act of 2007, which specifically prohibits federal agencies from buying transportation fuels from unconventional sources like coal-to-liquid, oil sands, and oil shale, unless the contract specifies that the lifecycle greenhouse gas emissions do not exceed those produced by conventional petroleum. On July 23, the House approved this amendment.**</strong></p>"

},
    {
        "key": "1582a",
        "abbr" : "H.Amdt 447 (2013)",
        "title": "Amendment to H.R. 1582, the Energy Consumers Relief Act of 2013",
        "summary": "<p>Amendment prohibits the EPA from using the 'social cost of carbon' valuation for any energy-related rule that costs more than $1 billion unless and until a Federal law is enacted authorizing such use. (Congress.gov)</p><strong>A vote FOR this amendment would support forcing the federal government to ignore the economic costs of climate change. Climate change is already costing communities billions of dollars each year across the country, and this amendment would prevent the government from weighing the costs of extreme weather and other climate change impacts or the savings from any government actions to improve energy efficiency and clean up carbon pollution. On August 1, the House approved this amendment.**</strong></p>"

},
    {
        "key": "3590a",
        "abbr" : "H.Amdt 541 (2014)",
        "title": "Amendment to H.R. 3590, the Sportsmen’s Heritage and Recreational Enhancement (SHARE) Act of 2013",
        "summary": "An amendment numbered 10 printed in House Report 113-339 to promote the Secretary of the Interior's authority to consider climate change when making decisions related to recreation and conservation on public lands. (Congress.gov)"

},
    {
        "key": "4923a",
        "abbr" : "H.Amdt 1040 (2014)",
        "title": "Amendment to H.R. 4923, the Energy and Water Development and Related Agencies Appropriations Act, 2015",
        "summary": "Amendment prohibits the use of funds to design, implement, administer or carry out specified assessments regarding climate change. (Congress.gov)"

},
    {
        "key": "4660a",
        "abbr" : "H.Amdt 771 (2014)",
        "title": "Amendment to H.R. 4660, the Commerce, Justice, Science, and Related Agencies Appropriations Act, 2015",
        "summary": "Amendment prohibits the use of funds to negotiate or enter into a trade agreement that establishes a limit on greenhouse gas emissions. The limitation described in the section shall not apply in the case of the administration of a tax or tariff. (Congress.gov)"

},
    {
        "key": "4923b",
        "abbr" : "H.Amdt 1015 (2014)",
        "title": "Amendment to H.R. 4923, the Energy and Water Development and Related Agencies Appropriations Act, 2015",
        "summary": "<p>Amendment adds a new section prohibiting the use of funds to prepare, propose, or promulgate any regulation or guidance that references or relies on the analysis contained in specified documents on the subject of the Social Cost of Carbon. (Congress.gov)</p><p><strong>A vote FOR this amendment supports federal agencies' ignoring the economic costs of climate change. It prevents the government from considering the potential costs of the effects of climate change, including extreme weather and flooding due to sea level rise. This amendment was approved by the House on July 10, although it was not included in the final bill that was signed into law on December 16.</strong></p>"

},

                  ];

// District Representatives & District Info

var districts = [{
        "title": "FL-1",
        "counties": "Escambia, Holmes, Okaloosa, Santa Rosa, Walton",
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
        "counties": "Bay, Calhoun, Franklin, Gadsden, Gulf, Holmes, Jackson, Jefferson, Leon, Liberty, Madison, Taylor, Wakulla, Washington",
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
        "counties": "Alachua, Bradford, Clay, Columbia, Dixie, Gilchrist, Hamilton, Lafayette, Levy, Suwannee, Union",
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
        "counties": "Baker, Duval, Nassau",
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
        "counties": "Citrus, Hernando, Lake, Levy, Marion, Pasco, Polk, Sumter",
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
        "counties": "Alachua, Bradford, Clay, Duval, Gilchrist, Lake, Levy, Marion",
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
        "counties": "Flagler, Orange, Putnam, Seminole, St. Johns, Volusia",
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
        "counties": "Brevard, Indian River, Palm Bay**",
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
        "counties": "Osceola, Orange, Polk",
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
        "counties": "Lake, Orange, Polk",
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
        "counties": "Citrus, Hernando, Hillsborough, Marion, Sumter",
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
        "counties": "Hillsborough, Pasco, Pinellas",
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
        "counties": "Pinellas",
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
        "counties": "Hillsborough, Florida, Manatee",
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
        "counties": "Hillsborough, Florida, Polk",
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
        "counties": "Manatee, Florida, Sarasota",
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
        "counties": "Broward, Miami-Dade",
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
        "counties": "St. Lucie, Martin, Palm Beach",
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
        "counties": "Broward, Miami-Dade",
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
        "counties": "Broward, Miami-Dade",
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
        "counties": "Miami-Dade",
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
        "counties": "Broward, Palm Beach",
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
        "counties": "Broward, Palm Beach",
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
        "counties": "Brevard, Orange, Seminole, Volusia",
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
        "counties": "Collier, Hendry, Miami-Dade",
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
        "counties": "Miami-Dade, Monroe",
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
        "counties": "Miami-Dade",
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
        $("#hovers").css("visibility", "hidden");
        $("#hovered-district").empty();
        $("#hovered-counties").empty();
    });

$(".show").click(function() {
       $(this).css({opacity: 1}); 
     $(".hide").css({opacity: .5});
     $("#fl-districts").css("visibility", "visible");
     $("#hovers").css("visibility", "visible");
    });
    
    

    //---- showing district info div

    $("#fl-districts").click(function () {
        console.log("clicked");
        $("#district-wrapper").css("visibility", "visible");
        $("#district-wrapper").css("display", "flex");
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
            $("#district-counties").html(districts[districtNum - 1].counties + " Counties");
            
            
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
                    $("#leg").html(legislation[i].abbr);
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
                       $("#voted").html("Voted FOR");
                     } else if(selectedHistory[i].vote == "n") {
                       $("#voted").html("Voted AGAINST"); 
                     } else {
                       $("#voted").html("No recorded vote - Representative either not in office at time of legislation or chose not to vote"); 
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