// global declarations

const showsList = document.querySelector(".shows__list");

function displayShow (show) {
    // create an li element
    const listItem = document.createElement("li");

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

}// end displayShow function


// formats the data 
function parseDate (showDate) {
    const date = new Date(showDate);

    const formatedDate = date.toDateString();
    return formatedDate;
} 

console.log(parseDate(Date.now()));

const showItems = document.querySelectorAll(".shows__item");

const apiKey = `fc20d90b-f207-490e-9533-e30b46cf95fc`;
const getRequest = 'showdates';
const showsUrl = `https://project-1-api.herokuapp.com/${getRequest}?api_key=${apiKey}`;

function getAPIShowssData (url) {
    let data;
    axios
    .get(url)
    .then((response) => {
        console.log(response.data);
   
        const showsDataApi = response.data;

        // traverse all shows returned from the API request
        showsDataApi.forEach ( show => {
            const showObj = {};
            showObj.date = parseDate(show.date);
            showObj.venue = show.place;
            showObj.location = show.location;
            showObj.id = show.id;

            displayShow(showObj);
            
        })
    })
}


getAPIShowssData(showsUrl);

function populateShowsUI (shows) {
    shows.forEach (show => {
        displayShow(show);
    }) 
}


