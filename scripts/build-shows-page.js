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

    // create an li element
    const listItem = document.createElement("li");

 

    // give it a class name of shows__item
    listItem.classList.add("shows__item");
    showsList.appendChild(listItem);

    const showsInfoDiv = document.createElement("div");
    showsInfoDiv.classList.add("shows__info");
    listItem.appendChild(showsInfoDiv);

    const dateItem = document.createElement("div");
    dateItem.classList.add("shows__date");
    showsInfoDiv.appendChild(dateItem);
    const dateTitle = document.createElement("p");
    
    dateTitle.classList.add("shows__date-title");
    dateTitle.innerText = "DATE";
    const date = document.createElement("p");
        
    date.classList.add("shows__date-value");
    date.innerText = show.date;
    dateItem.appendChild(dateTitle);
    dateItem.appendChild(date);

    const venueItem = document.createElement("div");
    venueItem.classList.add("shows__venue");
    showsInfoDiv.appendChild(venueItem);

    const venueTitle = document.createElement("p");
    venueTitle.classList.add("shows__venue-title");
    venueTitle.innerText = "VENUE";
        
    const venue = document.createElement("p");
    venue.classList.add("shows__venue-value");
    venue.innerText = show.venue;

    venueItem.appendChild(venueTitle);
    venueItem.appendChild(venue);

    const locationItem = document.createElement("div");
    locationItem.classList.add("shows__location");
    showsInfoDiv.appendChild(locationItem);

    const locationTitle = document.createElement("p");
    locationTitle.classList.add("shows__location-title");
    locationTitle.innerText = "LOCATION";
        
    const location = document.createElement("p");
    location.classList.add("shows__location-value");
    location.innerText = show.location;

    locationItem.appendChild(locationTitle);
    locationItem.appendChild(location);


    const btn = document.createElement("a");
    const btnContainer = document.createElement("div");
    btn.classList.add("shows__btn");
    listItem.appendChild(btn);
    btn.href = "#";

    btnContainer.classList.add("btn");
    btnContainer.innerText = "BUY TICKETS";
    btn.appendChild(btnContainer);


    listItem.addEventListener("click", (event) => {

        const listItems = document.querySelectorAll(".shows__item");
        listItems.forEach(item => {
            item.classList.remove("shows__item--clicked");
        })

        event.currentTarget.classList.add("shows__item--clicked");
    } );


});


const showItems = document.querySelectorAll(".shows__item");






