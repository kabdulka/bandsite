// are we going to get the name as a single string or will it be 2 different strings or properties

let comments = [

    {
        name: "Connor Walton",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
        date: "02/17/2021",
        timestanp: 1613537398000
    },

    {
        name: "Emilie Beach",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
        date: "01/09/2021",
        timestanp: 1610167798000
    },

    {
        name: "Miles Acosta",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date: "12/20/2020",
        timestanp: 1639959847000
    }

];

// const a = document.querySelector(".at");
// a.addEventListener('click', () => {
//     console.log("Clicked a");
//     alert("Somethin");
// });

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



// const commentForm = document.querySelector("#form__comment");
const commentForm = document.querySelector(".form__comment");
commentForm.addEventListener("submit", (event) => {

    event.preventDefault();
    // commentForm.reset();
    // console.log(event.target.comment.value);
    commentObj = {};

    let error = false;

    let isNameProvided = event.target.name.value === "";
    let isNCommentProvided = event.target.comment.value === "";

    // check the state of the placeholder. It will tell us whether or not the last submit request had produced an error
    if (event.target.name.placeholder === "Please enter a name" || event.target.comment.placeholder === "Please enter a comment") {
        error = true;
        console.log('error is here now');
        // add the error class 
        event.target.name.classList.add("form__comment-name--error");
    }

    if (error === false ) {
        event.target.name.placeholder = "Enter your name";
        // event.target.name.classList.toggle("form__comment-name--error");
        event.target.comment.placeholder = "Add a new comment";
        event.target.name.classList.remove("form__comment-name--error");
    }
   
    console.log("name provided " + isNameProvided);
    console.log("comment provided " + isNCommentProvided);

    if (!isNameProvided && !isNCommentProvided) {
        commentObj.name = event.target.name.value;
        commentObj.comment = event.target.comment.value;
        const postedDate = new Date(Date.now());
        console.log(`timestamp is ${postedDate}`);
        postedDate.toLocaleDateString('en-US');

        // commentObj.date = Date.now();
        // console.log(`${postedDate.getMonth()}/${postedDate.getDate()}/${postedDate.getFullYear()}`);
        let day = postedDate.getDate() + "";
        let month = postedDate.getMonth() + "";
        let year = postedDate.getFullYear() + "";
        let hoursInSeconds = postedDate.getHours()*3600;
        let minutesInSeconds = postedDate.getMinutes()*60;
        let seconds = postedDate.getSeconds();
        let totalTimeInSec = hoursInSeconds + minutesInSeconds + seconds;
   
        // console.log(date.getDate() + '/' +  date.getMonth() + '/' + date.getFullYear());
        // console.log(typeof(postedDate.getMonth()));
        // console.log((postedDate.getMonth()/10 < 1));
        if (postedDate.getMonth()/10 < 1 ) {
            // the day is a single number
            //TODO
            console.log("month less than 10");
            month = "0" + month;
            console.log(month);
        }
        if (postedDate.getDate()/10 < 1 ) {
            // the day is a single number
            //TODO
            console.log("month less than 10");
            day = "0" + day;
            console.log(day);
        }

        commentObj.date = `${month}/${day}/${year}`;
        commentObj.timestanp = Date.parse(commentObj.date) + totalTimeInSec;
        console.log(`Total timestamp is ${commentObj.timestanp}`);
        // console.log(commentObj.date.getTime());
        console.log("hererere")
        console.log(Date.parse(commentObj.date));
        // const date = new Date(1666632563517);
        // console.log(date.toLocaleDateString('en-US'));

        event.target.name.placeholder = "Please enter your name";
        event.target.comment.placeholder = "Add a new comment";
        error = false;
        // convert date object to a string
        // commentObj.
        comments.push(commentObj);
        // sort the array here


        // sorts the array in decending order
        // another way to solve this problem is to only display the last 3 elements of an array

        comments.sort ( (a,b) => {
            // return Date.parse(b.date)-Date.parse(a.date);
            return b.timestanp - a.timestanp;
        }) 

        console.log(comments);

        // comments.forEach ((e) => {
        //     console.log(e.name);
        // })

        // convert 
    } else {
        // display error
        console.log("errorrrr");
        // event.target.name.placeholder.style.color = "red";
        event.target.name.placeholder = "Please enter a name";
        event.target.name.classList.add("form__comment-name--error");
        event.target.comment.placeholder = "Please enter a comment";
        event.target.name.classList.add("form__comment-text--error");

        // event.target.name.style
        error = true;
    }


    console.log(commentObj.name + " " + commentObj.comment + " " + commentObj.date);

    // console.log(comments[comments.length-1].name);

    // if (event.target.comment.value !== "") {
    //     commentObj.comment = event.target.comment.value;
    // }

    // displayComment(commentObj);

    clearComments(commentList);

    commentForm.reset();

    // comments.forEach( (comment) => {
    //     displayComment(comment);
    // });
    for (let i = 0; i<3; i++) {
        displayComment(comments[i]);
        console.log(Date.parse(comments[i].date));
    }
    // const nameValue = document.querySelector(".form__comment-name");
    // console.log(nameValue.value);
});


// comments.forEach( (comment) => {
//     displayComment(comment);
// });

for (let i = 0; i<3; i++) {
    displayComment(comments[i]);
}



function clearComments (parent) {

    // While there is a child 
    while (parent.firstChild) {
        console.log("here")
        parent.removeChild(parent.firstChild);
    }

}

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


// let arr = [1,2,3,145,5]

// let sum = 0;


// for (let i = 0; i<arr.length; i++) {
//     sum += arr[i]
    
//     if (sum >= 150) {
//         console.log(i);
//         break;
//     }
// }

// console.log(i)

