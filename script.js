var elem = document.getElementById("changeText");

function change(text) {
    elem.classList.add('hide');
    setTimeout(function () {
        elem.innerHTML = text;
        elem.classList.remove('hide');
    }, 500);
}

const sections = [
    {
        name: "home",
        title: "Glen & Bea Cecilie",
        subtitle: "Invite you to thier wedding day!"
    },
    {
        name: "location",
        title: "Melville Castle",
        subtitle: "Edinburgh, Scotland"
    },
    {
        name: "schedule",
        title: "On The Day",
        subtitle: "A comprihensive run-down of the day - Times may change down the road but arrival of guests are set in stone!"
    },
    {
        name:"hotels",
        title: "Hotels Nearby",
        subtitle: "Some hotels that are near the castle - There are many more hotels close that are not listed here"
    }
]

const activeSection = () => {
    return document.querySelector('.active-section').id;
}

const setActiveSection = (x) => {
    for (let element of sections) {
        document.getElementById(element.name).style.display = 'none';
        var elems = document.querySelectorAll(`.nav-${element.name}`);
        [].forEach.call(elems, function(el) {
            el.classList.remove("selected");
        });
    }

    document.getElementsByClassName('invite-text')[0].innerHTML = sections[x].subtitle;

    document.querySelector(".nav-container input").checked = false;
    document.getElementById(sections[x].name).style.display = 'block'
    var elems = document.querySelectorAll(`.nav-${sections[x].name}`);
    [].forEach.call(elems, function(el) {
        el.classList.add("selected");
    });

    document.getElementsByClassName('glen-bea')[0].innerHTML = sections[x].title;
}

function renderHotels() {
    const data = {
        hotels : [
            {
                name:               'Premier Inn',
                link:               'https://www.premierinn.com/gb/en/hotels/scotland/lothian/edinburgh/edinburgh-a7-dalkeith.html?INNID=EDIESK&ARRdd=23&ARRmm=09&ARRyyyy=2023&NIGHTS=2&ROOMS=1&ADULT1=2&CHILD1=0&COT1=0&INTTYP1=DB&SID=4&ISH=true&BRAND=PI&CID=GHF_GB_GoogleSearch_desktop_selected+EDIESK&gclid=Cj0KCQiA6LyfBhC3ARIsAG4gkF-icjFrIAoAGPG4yhEDb_rKPGxEJRRjliGBzXA3e2MFGCDpLBIIpPAaApZvEALw_wcB',
                pricePerNight:      '£88',
                distance:           '5 mins',
                directionLink:      'https://www.google.com/maps/dir/Premier+Inn+Edinburgh+A7+(Dalkeith)+hotel,+Melville+Dykes+Rd,+Edinburgh+EH18+1AN/Melville+Castle+Hotel,+Gilmerton+Rd,+Edinburgh+EH18+1AP/@55.8915849,-3.1018257,15z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x4887becfc608f315:0x9a557c162d885b94!2m2!1d-3.0956315!2d55.8877182!1m5!1m1!1s0x4887becc84d0aec9:0xd875e77214e6794f!2m2!1d-3.1040782!2d55.8911094'
            },
            {
                name:               'The Melville Inn',
                link:               'https://www.premierinn.com/gb/en/hotels/scotland/lothian/edinburgh/edinburgh-a7-dalkeith.html?INNID=EDIESK&ARRdd=23&ARRmm=09&ARRyyyy=2023&NIGHTS=2&ROOMS=1&ADULT1=2&CHILD1=0&COT1=0&INTTYP1=DB&SID=4&ISH=true&BRAND=PI&CID=GHF_GB_GoogleSearch_desktop_selected+EDIESK&gclid=Cj0KCQiA6LyfBhC3ARIsAG4gkF-icjFrIAoAGPG4yhEDb_rKPGxEJRRjliGBzXA3e2MFGCDpLBIIpPAaApZvEALw_wcB',
                pricePerNight:      '£84',
                distance:           '5 mins',
                directionLink:      'https://www.google.com/maps/dir/The+Melville+Inn,+Melville+Nurseries,+Lasswade+EH18+1AR/Melville+Castle+Hotel,+Gilmerton+Road,+Edinburgh/@55.8938823,-3.1024138,16z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4887becd5e8c30df:0x644b6e4b7947c747!2m2!1d-3.0963907!2d55.8951061!1m5!1m1!1s0x4887becc84d0aec9:0xd875e77214e6794f!2m2!1d-3.1040782!2d55.8911094!3e0'
            },
            {
                name:               'Travelodge',
                link:               'https://www.travelodge.co.uk/hotels/207/Edinburgh-Dreghorn-hotel?checkIn=24/09/2023&checkOut=25/09/2023&rooms[0][adults]=2&rooms[0][children]=0',
                pricePerNight:      '£49.99',
                distance:           '11 mins',
                directionLink:      'https://www.google.com/maps/dir/46+Dreghorn+Link,+Edinburgh+EH13+9QR/Melville+Castle+Hotel,+Gilmerton+Road,+Edinburgh/@55.896638,-3.2317033,12z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4887c6d65ebe79f7:0x43e871f837760716!2m2!1d-3.2317913!2d55.9008879!1m5!1m1!1s0x4887becc84d0aec9:0xd875e77214e6794f!2m2!1d-3.1040782!2d55.8911094!3e0'
            },
            {
                name:               'The Sun Inn',
                link:               'https://www.booking.com/hotel/gb/the-sun-inn-dalkeith.en-gb.html?aid=356930&label=metagha-link-LUGB-hotel-5808860_dev-desktop_los-2_bw-218_dow-Saturday_defdate-0_room-0_gstadt-2_rateid-public_aud-0_gacid-6623578758_mcid-50_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20230923__lp-1007293_r-762314483332077779&all_sr_blocks=580886004_226879934_2_1_0;checkin=2023-09-24;checkout=2023-09-25;dest_id=-2594021;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=580886004_226879934_2_1_0;hpos=1;matching_block_id=580886004_226879934_2_1_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=580886004_226879934_2_1_0__11688;srepoch=1676645960;srpvid=95896963d01f0059;type=total;ucfs=1&#hotelTmpl',
                pricePerNight:      '£117',
                distance:           '6 mins',
                directionLink:      'https://www.google.com/maps/dir/Lothian+Bridge,+Dalkeith+EH22+4TR/Melville+Castle+Hotel,+Gilmerton+Road,+Edinburgh/@55.88419,-3.1084847,14z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4887be951cbaecd7:0x8a10fa5d521b3524!2m2!1d-3.0780416!2d55.8726267!1m5!1m1!1s0x4887becc84d0aec9:0xd875e77214e6794f!2m2!1d-3.1040782!2d55.8911094!3e0'
            },
            {
                name:               'The Dalkeith Hotel',
                link:               'https://www.booking.com/hotel/gb/dalkeith-apart.en-gb.html?aid=356930&label=metagha-link-LUGB-hotel-5808860_dev-desktop_los-2_bw-218_dow-Saturday_defdate-0_room-0_gstadt-2_rateid-public_aud-0_gacid-6623578758_mcid-50_ppa-0_clrid-0_ad-1_gstkid-0_checkin-20230923__lp-1007293_r-762314483332077779&all_sr_blocks=562305222_363574960_2_0_0;checkin=2023-09-24;checkout=2023-09-25;dest_id=-2594021;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=562305222_363574960_2_0_0;hpos=1;matching_block_id=562305222_363574960_2_0_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=562305222_363574960_2_0_0__11800;srepoch=1676646057;srpvid=96836993431d019a;type=total;ucfs=1&#hotelTmpl',
                pricePerNight:      '£119',
                distance:           '6 mins',
                directionLink:      ''
            },
            {
                name:               'Premier Inn',
                link:               'https://www.premierinn.com/gb/en/hotels/scotland/lothian/edinburgh/edinburgh-a1-musselburgh.html?INNID=EDISWE&ARRdd=24&ARRmm=09&ARRyyyy=2023&NIGHTS=1&ROOMS=1&ADULT1=2&CHILD1=0&COT1=0&INTTYP1=DB&SID=4&ISH=true&BRAND=PI&CID=GHF_GB_GoogleSearch_desktop_selected+EDISWE&gclid=Cj0KCQiA6LyfBhC3ARIsAG4gkF-icP6OEP0nx6fJdV7MERsfFJv2CyKZPIYhAPnuAf9ZkGPaB3q6_W8aAgcgEALw_wcB',
                pricePerNight:      '£53',
                distance:           '15 mins',
                directionLink:      'https://www.google.com/maps/dir/EH21+8PT,+Inveresk,+Musselburgh/Melville+Castle+Hotel,+Gilmerton+Road,+Edinburgh/@55.9097756,-3.0978781,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4887bbc1460a8e85:0x27d2d79a227d8f87!2m2!1d-3.0347784!2d55.9255798!1m5!1m1!1s0x4887becc84d0aec9:0xd875e77214e6794f!2m2!1d-3.1040782!2d55.8911094!3e0'
            },
            {
                name:               'Premier Inn',
                link:               '',
                pricePerNight:      '£56',
                distance:           '15 mins',
                directionLink:      'https://www.google.com/maps/dir/Premier+Inn+Edinburgh+A1+(Newcraighall)+hotel,+91+Newcraighall+Rd,+Edinburgh+EH21+8RX/Melville+Castle+Hotel,+Gilmerton+Road,+Edinburgh/@55.912923,-3.126803,12.5z/data=!4m18!4m17!1m5!1m1!1s0x4887b90c19c4928d:0x30f19cfa176e1ad3!2m2!1d-3.0949274!2d55.9350649!1m5!1m1!1s0x4887becc84d0aec9:0xd875e77214e6794f!2m2!1d-3.1040782!2d55.8911094!2m3!6e0!7e2!8j1676628600!3e0"'
            },
            {
                name:               'Dalhousie Castle',
                link:               'https://booking.profitroom.com/en/dalhousiecastle/pricelist/offers/262804/?check-in=2023-09-24&check-out=2023-09-25&r1_adults=2&source=GoogleHPA&currency=GBP&utm_source=googleHPA&utm_medium=adsHPA&utm_campaign=HPA',
                pricePerNight:      '£193',
                distance:           '9 mins',
                directionLink:      'https://www.google.com/maps/dir/Dalhousie+Castle+Hotel+And+Aqueous+Spa,+Bonnyrigg/Melville+Castle+Hotel,+Gilmerton+Rd,+Edinburgh+EH18+1AP/@55.8782623,-3.1035145,14z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x4887bef3047c3641:0x485b477d2aa1be3b!2m2!1d-3.0824715!2d55.8607713!1m5!1m1!1s0x4887becc84d0aec9:0xd875e77214e6794f!2m2!1d-3.1040782!2d55.8911094'
            }
        ]
    };

    const template = document.getElementById('template-hotel-table').innerHTML;
    const rendered = Mustache.render(template, data);
    document.getElementById('hotel-view').innerHTML = rendered;
}

function renderSchedule() {
    const data = {
        scehdules : [
            {
                title: 'Guests Arrival',
                description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
                time: '13:30',
                icon: 'local_taxi',
                side: 'left'
            },
            {
                title: 'Ceremony',
                description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
                time: '14:00',
                icon: 'church',
                side: 'right'
            },
            {
                title: 'Drinks Reception & Canapes',
                description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
                time: '14:40',
                icon: 'brunch_dining',
                side: 'left'
            },
            {
                title: 'Call To Dinner',
                description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
                time: '15:45',
                icon: 'notifications_active',
                side: 'right'
            },
            {
                title: 'Speeches',
                description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
                time: '16:00',
                icon: 'record_voice_over',
                side: 'left'
            },
            {
                title: 'Wedding Breakfast',
                description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
                time: '16:30',
                icon: 'restaurant',
                side: 'right'
            },
            {
                title: 'Comfort Break',
                description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
                time: '18:30',
                icon: 'chair',
                side: 'left'
            },
            {
                title: 'Evening Guests Arrival',
                description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
                time: '19:00',
                icon: 'emoji_people',
                side: 'right'
            },
            {
                title: 'Cake Cutting & First Dance',
                description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
                time: '19:30',
                icon: 'cake',
                side: 'left'
            },
            {
                title: 'Scottish Ceilidh Dancing',
                description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
                time: '19:45',
                icon: 'audiotrack',
                side: 'right'
            },
            {
                title: 'Evening Buffet',
                description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
                time: '21:30',
                icon: 'brunch_dining',
                side: 'left'
            },
            {
                title: 'End Of Wedding',
                description: 'Lorem ipsum dolor sit amet elit. Aliquam odio dolor, id luctus erat sagittis non.',
                time: '00:00',
                icon: 'bedtime',
                side: 'right'
            }
        ]  
    };

    const template = document.getElementById('template-schedule').innerHTML;
    const rendered = Mustache.render(template, data);
    document.getElementById('schedule-view').innerHTML = rendered;
}

renderHotels();
renderSchedule();
