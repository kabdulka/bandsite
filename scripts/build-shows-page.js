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


//     <a href="www.google.com" class="shows__btn">
//     <!-- TODO  make the button clickable anywhere -->
//     <div class="btn" > BUY TICKETS </div>
// </a>

    const btn = document.createElement("a");
    const btnContainer = document.createElement("div");
    btn.classList.add("shows__btn");
    listItem.appendChild(btn);


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

    //hover events

    // const showItems = document.querySelectorAll(".shows__item");
    // console.log(showItems)
    // showItems.forEach (item => {
    //     item.addEventListener("mouseenter", (event) => {
    //         event.stopPropagation()
    //         console.log("hover");
    //         item.style.color = "red";
    //     })
    
    //     // item.addEventListener("")
    // }) 
    

});


// const title = document.querySelector(".shows__title");
// title.addEventListener("mouseover", (e) => {
//     console.log(e)
// })



////// WORK ON clicking show items



const showItems = document.querySelectorAll(".shows__item");


// console.log(showItems);


// showItems.addEventListener("click", (event) => {
//     //remove the class from all items
//     // then add it
//     console.log("click click")
//     showItems.froEach( show => {

//         show.classList.removed("shows__item--clicked");
//     });
    
//     event.target.classList.add("shows__item--clicked");

// })



// addEventListener("click", (event) => {

// } )

console.log(showItems)
showItems.forEach (item => {
    item.addEventListener("mouseover", (event) => {
        event.stopPropagation()
        console.log("hover");
        item.classList.toggle("shows__item--hover");
        // item.style.color = "red";
    })

    // item.addEventListener("")
}) 

showItems.forEach( item => {
    item.addEventListener("mouseout", () => {
        console.log("mouse out ")
        // item.style.color = "black"; 
        item.classList.toggle("shows__item--hover");
    })
})




// let tabletBreakpoint = window.matchMedia("(max-width: 700px)");
// console.log(tabletBreakpoint);
// if 

// console.log(window.innerWidth);

// if (window.innerWidth <= 768) {
//     console.log("true");
//     const dateItems = document.querySelectorAll(".shows__date-dateTitle");
//     console.log(dateItems);
//     dateItems.forEach (item => {
//         item.style.display = "none";
//     });
    
    // const 
// }

// const dateItem = document.querySelectorAll(".shows__date-dateTitle");
// dateItem[0].style.display = "none";

// function replaceUpper (sentence) {
//     let temp = "";
//     words = sentence.split(" ");
//     console.log(words);
    
//     for (let i = 0; i<words.length; i++) {
//         temp = words[i];

//         // firstChar = temp.charAt(0) + "";
//         // console.log(temp.charAt(0));
//         temp = temp.charAt(0).toUpperCase() + "" + temp.substring(1, temp.length);
//         // console.log(words[i].charAt(0));
//         words[i] = temp;

//     }

//     let result = words.join(" ");
//     console.log(result);
//     return result;
// }

// let ans = replaceUpper("brainstation is fun");
// console.log(ans);



