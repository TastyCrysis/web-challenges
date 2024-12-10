console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
newPost.classList.add("post");

const newPostContent = document.createElement("p");
newPostContent.classList.add("post__content");
newPostContent.textContent =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const newPostFooter = document.createElement("footer");
newPostFooter.classList.add("post__footer");

const newPostUsername = document.createElement("span");
newPostUsername.classList.add("post__username");
newPostUsername.textContent = "@username";

const newPostLikeButton = document.createElement("button");
newPostLikeButton.classList.add("post__button");
newPostLikeButton.textContent = "♥ Like";
newPostLikeButton.addEventListener("click", handleLikeButtonClick);

document.body.append(newPost);
newPostFooter.append(newPostUsername, newPostLikeButton);

newPost.append(newPostContent, newPostFooter);
