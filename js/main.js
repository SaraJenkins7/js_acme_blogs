function createElemWithText(elemType = "p", textContent = "", className) {
  const myElem = document.createElement(elemType);
  myElem.textContent = textContent;
  if (className) myElem.classList.add(className);
  return myElem;
}

function createSelectOptions(jsonData) {
  if (!jsonData) {
    return;
  } else {
    const user = fetch ("https://jsonplaceholder.typicode.com/users");
    const option = document.createElement(user);
    option.value = user.id;
    option.textContent = user.name;
    return option;
  }
}

function toggleCommentSection(postId) {
  const button = document.querySelector(`button[data-post-id='${postId}']`);
  if (!postId) return;
  //toggleClick = function() {
       // document.querySelector(button).classList.toggle("hide");
 // }
}

function toggleCommentButton(postId) {
  if (!jsonData) return;
  var clicked = false;
  if(!clicked){
      clicked = true;
      document.getElementById("btn").textContent = "Show Comments";
  } else {
      clicked = true;
      document.getElementById("btn").textContent = "Hide Comments";
  }
}

const deleteChildElements = (parentElement) => {
  if (!parentElement) return;
  let child = parentElement.lastElementChild;
  while (parentElement.child) {
      parentElement.removeChild(parentElement.child);
      child = parentElement.lastElementChild;
  }
}

function addButtonListeners() {
   
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

}

const getUser = async(userId) => {

}

const getPostComments = async(postId) => {

}

const displayComments = async(postId) => {

}

const createPosts = async(posts) => {

}

const displayPosts = async(posts) => {

}

function toggleComments(event, postId) {

}

const refreshPosts = async(posts) => {

}

const selectMenuChangeEventHandler = async(event) => {
 
}

const initPage = async() => {

}

function initApp() {

}