const apiKey = `fc20d90b-f207-490e-9533-e30b46cf95fc`;
const getRequest = 'comments';
const apiUrl = `https://project-1-api.herokuapp.com/${getRequest}?api_key=${apiKey}`;

let comments = [

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
        date.innerText = getFormatedDate(comment.timestamp);
        commentText.innerText = comment.comment;

        const editCommentContainer = document.createElement("div");
        const likeCommentIcon = document.createElement("img");
 
        const deleteCommentIcon = document.createElement("img");
        likeCommentIcon.src = "./assets/Icons/SVG/icon-like.svg";
        deleteCommentIcon.src = "./assets/Icons/SVG/icon-delete.svg";
        commentInfo.appendChild(editCommentContainer);
        editCommentContainer.appendChild(likeCommentIcon);
        editCommentContainer.appendChild(deleteCommentIcon);
        editCommentContainer.classList.add("comment__edit");
        likeCommentIcon.classList.add("comment__like");
        deleteCommentIcon.classList.add("comment__delete");
        
        deleteCommentIcon.addEventListener("click", event => {
            deleteComment(comment.id);
        });

        likeCommentIcon.addEventListener("click", event => {
            likeComment(comment.id);
        })

} // end displayComment function


function deleteComment(commentId) {
    const apiDelete = `https://project-1-api.herokuapp.com/${getRequest}/${commentId}/?api_key=${apiKey}`;

    axios.delete(apiDelete)

    .then(response => {
        getAPICommentsData(apiUrl);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    })
}// end delete Comment

function likeComment (commentId) {
    const url = `https://project-1-api.herokuapp.com/${getRequest}/${commentId}/like/?api_key=${apiKey}`;

    axios.put(url)
    .then(response => {
        console.log(response.data.likes);
    })

    .catch(error => {
        console.log(`Error: ${error}`);
    })

}// end like comment


const commentForm = document.querySelector(".form__comment");
commentForm.addEventListener("submit", (event) => {

    event.preventDefault();

    let isNameProvided = event.target.name.value === "";
    let isNCommentProvided = event.target.comment.value === "";

    // if both fields are NOT empty
    if (!isNameProvided && !isNCommentProvided) {
  
        const nameInput = document.querySelector(".form__comment-name");
        event.target.name.classList.remove("form__comment-name--error");
        event.target.comment.classList.remove("form__comment-text--error");

        commentInputObj = {
            name: event.target.name.value,
            comment: event.target.comment.value
        };

        axios
        .post(apiUrl, commentInputObj)
        .then((response) => {
            const commentObj = response.data;
    
            event.target.name.placeholder = "Please enter your name";
            event.target.comment.placeholder = "Add a new comment";
                        
            // sorts the array in decending order
            // another way to solve this problem is to only display the last 3 elements of an array
            comments.sort ( (a,b) => {
                return b.timestamp - a.timestamp;
            }) 

            comments.forEach (c => {
                console.log(c.name);
            })
            
            commentForm.reset();
           
            getAPICommentsData(apiUrl);

        })
        .catch((error) => {
            console.log("error: ", error);
        });

        } else {
            // one or both fields are empty
            event.target.name.placeholder = "Please enter a name";
            event.target.name.classList.add("form__comment-name--error");
            event.target.comment.placeholder = "Please enter a comment";
            event.target.comment.classList.add("form__comment-text--error");
        }

    });

function getFormatedDate (timeStamp) {
    const postedDate = new Date(timeStamp);
    postedDate.toLocaleDateString('en-US');
     
    let day = postedDate.getDate() + "";
    let month = postedDate.getMonth() + "";
    let year = postedDate.getFullYear() + "";
    let hoursInSeconds = postedDate.getHours()*3600;
    let minutesInSeconds = postedDate.getMinutes()*60;
    let seconds = postedDate.getSeconds();
    let totalTimeInSec = hoursInSeconds + minutesInSeconds + seconds;

    if (postedDate.getMonth()/10 < 1 ) {
        month++;
        month = "0" + month;
    }
    if (postedDate.getDate()/10 < 1 ) {
        day = "0" + day;
    }
    return `${month}/${day}/${year}`;
} // end getFormatedDate function


function renderComments (commentsArr) {

    commentsArr.forEach(element => {
        displayComment(element);
    })
}


function clearComments (parent) {

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}// end clearComments function

function getAPICommentsData (url) {
 
        axios
        .get(url)
        .then((response) => {

            const commentsData = response.data;
            commentsData.forEach (comment => {
                const commentObj = {};
                commentObj.timestamp = comment.timestamp;
                commentObj.likes = comment.likes;
                commentObj.name = comment.name;
                commentObj.id = comment.id;
                commentObj.comment = comment.comment;
                console.log(`the time stamp here is: ${commentObj.timestamp}`);           
            });

            commentsData.sort( (a,b) => {
                return b.timestamp - a.timestamp;
            })

            commentList.innerHTML = "";
            renderComments(commentsData);

        }).catch(error => {
            console.log("Error ", error);
        })
}// end get APi comments function

getAPICommentsData(apiUrl);


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
