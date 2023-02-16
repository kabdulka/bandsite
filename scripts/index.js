// are we going to get the name as a single string or will it be 2 different strings or properties

let comments = [

    {
        name: "Connor Walton",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        date: "02/17/2021",
        src: ""
    },

    {
        name: "Emilie Beach",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        date: "01/09/2021"
    },

    {
        name: "Miles Acosta",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date: "12/20/2020"
    }

];

// get the ul element
const commentList = document.querySelector(".comment__list");

//You must have a function called displayComment() that takes 
// in one comment object as a parameter and displays it on the page using JavaScript DOM manipulation.
function displayComment(comment) {

    // comments.forEach( (comment) => {

        // console.log(comment.date);
        //create a list item
        const commentItem = document.createElement("li");
        commentItem.classList.add("comment__item");
        commentList.appendChild(commentItem);

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("comment__image-container");
        const image = document.createElement("img");
        image.classList.add("comment__image");
        commentItem.appendChild(imageContainer);
        imageContainer.appendChild(image);

        const commentInfo = document.createElement("div");
        const commentInfoRow1 = document.createElement("div");
        const commentInfoRow2 = document.createElement("div");
        const name = document.createElement("p");
        const date = document.createElement("p");
        const commentText = document.createElement("p");

        commentInfo.classList.add("comment__info");
        commentInfoRow1.classList.add("comment__info__row-1");
        commentInfoRow2.classList.add("comment__info__row-2");
        name.classList.add("comment__name");
        date.classList.add("comment__date");
        commentText.classList.add("comment__value");

        commentItem.appendChild(commentInfo);
        commentInfo.append(commentInfoRow1, commentInfoRow2);
        commentInfoRow1.append(name, date);
        commentInfoRow2.appendChild(commentText);

        name.innerText = comment.name;
        date.innerText = comment.date;
        commentText.innerText = comment.comment;
        
    // <li class="comment__item">
    //     <div class="comment__image-container">
    //         <img class="comment__image" src="" alt="">
    //     </div>
    //     <div class="comment__info">
    //         <div class="comment__info__row-1">
    //             <p class="comment__name"> Connor Walton </p>
    //             <p class="comment__date"> 02/17/2021 </p>
    //         </div>
    //         <div class="comment__info__row-2">
    //             <p class="comment__value"> 
    //                 This is art. This is inexplicable magic expressed in the purest way, 
    //                 everything that makes up this majestic work deserves reverence. Let us appreciate 
    //                 this for what it is and what it contains.
    //             </p>
    //         </div>

    //     </div>
    // </li>

} // end function

// displayComment(    {
//     name: "Miles Acosta",
//     comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//     date: "12/20/2020"
// });

comments.forEach( (comment) => {
    displayComment(comment);
});





// You must have an array in JavaScript with 3 default comment objects to start. Comments must have a name, a timestamp, and the comment text.
// You must have a function called displayComment() that takes in one comment object as a parameter and displays it on the page using JavaScript DOM manipulation.
// All dynamic HTML should be added to DOM via DOM Methods for individual elements. Avoid bulk assigning stringified HTML using innerHTML
// You must use an HTML Form with the following functionality:
// That submits using the addEventListener
// Prevents the page from reloading when submitting a new comment
// Constructs a new comment object
// Pushes a new comment object to an array of comments
// Clears all comments from the page
// Re-renders to the page all comments from the comment array
// Clears the input fields after submitting a new commen
