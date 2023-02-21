// are we going to get the name as a single string or will it be 2 different strings or properties
// comment objects
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

const commentList = document.querySelector(".comment__list");


function displayComment(comment) {

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

} // end displayComment function


const commentForm = document.querySelector(".form__comment");
commentForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const commentObj = {};

    let isNameProvided = event.target.name.value === "";
    let isNCommentProvided = event.target.comment.value === "";


    // if both fields are NOT empty
    if (!isNameProvided && !isNCommentProvided) {
        const nameInput = document.querySelector(".form__comment-name");
        event.target.name.classList.remove("form__comment-name--error");
        event.target.comment.classList.remove("form__comment-text--error");
        commentObj.name = event.target.name.value;
        commentObj.comment = event.target.comment.value;
        const postedDate = new Date(Date.now());
        postedDate.toLocaleDateString('en-US');
        
     
        let day = postedDate.getDate() + "";
        let month = postedDate.getMonth() + "";
        let year = postedDate.getFullYear() + "";
        let hoursInSeconds = postedDate.getHours()*3600;
        let minutesInSeconds = postedDate.getMinutes()*60;
        let seconds = postedDate.getSeconds();
        let totalTimeInSec = hoursInSeconds + minutesInSeconds + seconds;
   

        if (postedDate.getMonth()/10 < 1 ) {

            month = "0" + month;
        }
        if (postedDate.getDate()/10 < 1 ) {
            day = "0" + day;
        }

        commentObj.date = `${month}/${day}/${year}`;
        commentObj.timestanp = Date.parse(commentObj.date) + totalTimeInSec;


        event.target.name.placeholder = "Please enter your name";
        event.target.comment.placeholder = "Add a new comment";
        error = false;

        comments.push(commentObj);


        // sorts the array in decending order
        // another way to solve this problem is to only display the last 3 elements of an array
        comments.sort ( (a,b) => {
            return b.timestanp - a.timestanp;
        }) 


    } else {
        // one or both of the fields are empty
        event.target.name.placeholder = "Please enter a name";
        event.target.name.classList.add("form__comment-name--error");
        event.target.comment.placeholder = "Please enter a comment";
        event.target.comment.classList.add("form__comment-text--error");
    }


    clearComments(commentList);

    event.target.reset();

    for (let i = 0; i<3; i++) {
        displayComment(comments[i]);
        // console.log(Date.parse(comments[i].date));
    }

});


for (let i = 0; i<3; i++) {
    displayComment(comments[i]);
}



function clearComments (parent) {

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

}



function timeSince(date) {
    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = Math.floor(seconds / 31536000);
  
    if (interval >= 1) {
      return interval + " year" + (interval === 1 ? "" : "s") + " ago";
    }
  
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      return interval + " month" + (interval === 1 ? "" : "s") + " ago";
    }
  
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
      return interval + " day" + (interval === 1 ? "" : "s") + " ago";
    }
  
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
      return interval + " hour" + (interval === 1 ? "" : "s") + " ago";
    }
  
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return interval + " minute" + (interval === 1 ? "" : "s") + " ago";
    }
  
    return Math.floor(seconds) + " second" + (Math.floor(seconds) === 1 ? "" : "s") + " ago";
  };


