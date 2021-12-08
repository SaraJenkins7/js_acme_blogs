function createElemWithText(elemType = "p", className) {
  const myElem = document.createElement(elemType);
  myElem.id = "p";
  myElem.textContent = "";
  if (className) myElem.classList.add(className);
  return myElem; 
}

function createSelectOptions(jsonData) {
  if (!jsonData){}
}

function toggleCommentSection(postId) {
  
}

function toggleCommentButton(postId) {
  var clicked = false;
  if(!clicked){
      clicked = true;
      document.getElementById("btn").textContent = "Show Comments"; 
  }else{
      clicked = false;
      document.getElementById("btn").textContent = "Hide Comments";
  }
}

const deleteChildElements = (parentElement) => {
  let child = parentElement.lastElementChild;
  while(child) {
      parentElement.removeChild(child);
      child = parentElement.lastElementChild(child);
  }
}

function addButtonListeners() {
  const button = document.querySelector(`button[data-post-id='${postId}']`);
  button.addEventListener("click", function (e) {toggleComments(e, postId)}, false);
}

function removeButtonListeners() {
  
}

function createComments(JSON) {

}

function populateSelectMenu(JSON) {

}

const getUsers = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUsers = await response.json();
  return jsonUsers;
}

const getUserPosts = async(userId) => {
  const userPosts = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const jsonUserPosts = await userPosts.json();
  return jsonUserPosts;
}

const getUser = async(userId) => {
  const users = await fetch("https://jsonplaceholder.typicode/users");
  const jsonUsers = await users.json();
  return jsonUsers;
}

const getPostComments = async(postId) => {
  const postComments = await fetch("https://jsonplaceholder.typicode/posts/1/comments");
  const jsonPostComments = await postComments.json();
  return jsonPostComments;
}

const displayComments = async(postId) => {

}

const createPosts = async(posts) => {
  if (!posts === ""){
      return;
  } else {
      const post = await posts;
      const fragment = document.createDocumentFragment();
      const article = document.createElement("article");
    for (let i = 0; i < posts.length; i++) {
        let post = posts[i];
    }
  }
}

const displayPosts = async(posts) => {

}

function toggleComments(event, postId) {

}

const refreshPosts = async(posts) => {

}

const selectMenuChangeEventHandler = async(event) => {
  const selectMenu = document.querySelector("select");
  selectMenu.disabled = ture;

  selectMenu.disabled = false;
  return refreshPosts;
}

const initPage = async() => {

}

function initApp() {

}