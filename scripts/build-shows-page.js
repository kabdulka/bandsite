// global declarations

let shows = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },

    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisco, CA"
    },

    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },

    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },

    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }

];

const showsList = document.querySelector(".shows__list");

//loop through the array
// for each index, append a chile for each one and add a class

// TODO Make this into a function called display...
shows.forEach(show => {

    createShowItem(showsList, show.date, show.venue, show.location);

});

function createShowItem (parentElement, dateValue, venueValue, locationValue) {
    // create an li element
    const listItem = document.createElement("li");
    // give it a class name of shows__item
    listItem.classList.add("shows__item");
    //make it a chile of showList (ul)
    parentElement.appendChild(listItem);
    createDateContainer(listItem, dateValue);
    createVenueContainer(listItem, venueValue);
    createLocationContainer(listItem, locationValue);
    createButton(listItem);
}

// create div container with a class of shows__date
function createDateContainer (parentElement, dateValue) {
    const dateItem = document.createElement("div");
    dateItem.classList.add("shows__date");
    parentElement.appendChild(dateItem);
    createDateContent(dateItem, dateValue);
}

function createDateContent (parentElement, dateValue) {
    const title = document.createElement("p");
   
    title.classList.add("shows__date-title");
    title.innerText = "DATE";
    const date = document.createElement("p");
    
    date.classList.add("shows__date-value");
    date.innerText = dateValue;
    parentElement.appendChild(title);
    parentElement.appendChild(date);

}//end create date function

function createVenueContainer (parentElement, venueValue) {
    const venueItem = document.createElement("div");
    venueItem.classList.add("shows__venue");
    parentElement.appendChild(venueItem);
    createVenueContent(venueItem, venueValue);
}

function createVenueContent (parentElement, venueValue) {
    const title = document.createElement("p");
    title.classList.add("shows__venue-title");
    title.innerText = "VENUE";
    
    const venue = document.createElement("p");
    venue.classList.add("shows__venue-value");
    venue.innerText = venueValue;

    parentElement.appendChild(title);
    parentElement.appendChild(venue);
}

function createLocationContainer (parentElement, locationValue) {
    const locationItem = document.createElement("div");
    locationItem.classList.add("shows__location");
    parentElement.appendChild(locationItem);
    createLocationContent(locationItem, locationValue);
}

function createLocationContent (parentElement, locationValue) {
    const title = document.createElement("p");
    title.classList.add("shows__location-title");
    title.innerText = "LOCATION";
    
    const location = document.createElement("p");
    location.classList.add("shows__location-value");
    location.innerText = locationValue;

    parentElement.appendChild(title);
    parentElement.appendChild(location);
}

function createButton (parentElement) {
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("shows__btn");
    parentElement.appendChild(btnContainer);

    const btn = document.createElement("a");
    btn.classList.add("btn");
    btn.innerText = "BUY TICKET";
    btnContainer.appendChild(btn);
}









{/* <div class="shows__date">
<p class="shows__date-title"> DATE </p>
<p class="shows__date-value"> Mon Sept 06 2021 </p>
</div>

<div class="shows__venue">
<p class="shows__venue-title"> VENUE </p>
<p class="shows__venue-value"> Ronald Lane </p>
</div>

<div class="shows__location">
<p class="shows__location-title"> LOCATION </p>
<p class="shows__location-value"> San Francisco, CA </p>
</div>
<div class="shows__btn">
<a class="btn" href="#"> BUY TICKET </a>
</div> */}