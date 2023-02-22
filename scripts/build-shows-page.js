// global declarations

let shows = [
    // {
    //     date: "Mon Sept 06 2021",
    //     venue: "Ronald Lane",
    //     location: "San Francisco, CA"
    // },

    // {
    //     date: "Tue Sept 21 2021",
    //     venue: "Pier 3 East",
    //     location: "San Francisco, CA"
    // },

    // {
    //     date: "Fri Oct 15 2021",
    //     venue: "View Lounge",
    //     location: "San Francisco, CA"
    // },
    
    // {
    //     date: "Sat Nov 06 2021",
    //     venue: "Hyatt Agency",
    //     location: "San Francisco, CA"
    // },

    // {
    //     date: "Fri Nov 26 2021",
    //     venue: "Moscow Center",
    //     location: "San Francisco, CA"
    // },

    // {
    //     date: "Wed Dec 15 2021",
    //     venue: "Press Club",
    //     location: "San Francisco, CA"
    // }

];

const showsList = document.querySelector(".shows__list");

//loop through the array
// for each index, append a chile for each one and add a class

// TODO Make this into a function called display...
// shows.forEach(show => {


function displayShow (show) {
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

}
// });

// formats the data 
function parseDate (showDate) {
    const date = new Date(showDate);
    // console.log(showDate.toLocaleDateString('en-US'));
    // date = new Date(Date.now());
    // const formatedDate = date.toLocaleDateString('en-US');
    const formatedDate = date.toDateString();
    return formatedDate;
} 
// console.log(Date.now());

// const date = new Date(Date.now());
// console.log(date)
console.log(parseDate(Date.now()));
// console.log(parseDate())



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
        // console.log(response.data);
        // return response.data;

        
        const showsDataApi = response.data;

        // traverse all shows returned from the API request
        // and use them to populate the comments array.
        // Lastly, push the new show object into the shows Array
        showsDataApi.forEach ( show => {
            const showObj = {};
            // parseDate(show.date)
            // Why is the parsed date a day before?
            showObj.date = parseDate(show.date);
            showObj.venue = show.location;
            showObj.location = show.place;
            showObj.id = show.id;

            shows.push(showObj);
        })
       
        // const date = response.data ;

        shows.forEach (show => {
            console.log(show.venue);
            console.log(show.date);
        }) 

        populateShowsUI();

      })
  }

  console.log(getAPIShowssData(showsUrl))
//   const showsApiData = getAPIShowssData(showsUrl);

//   console.log(showsApiData[0].place)



function populateShowsUI () {
    shows.forEach (show => {
        displayShow(show);
    }) 
}


