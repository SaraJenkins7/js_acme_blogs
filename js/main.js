function createElemWithText(elemType = "p", textContent = "", className) {
  const myElem = document.createElement(elemType);
  myElem.textContent = textContent;
  if (className) myElem.classList.add(className);
  return myElem;
}

function createSelectOptions(jsonData) {
  if (!jsonData) return;
  const myArray = [];
  for (let i=0; i < jsonData.length; i++) {
    let option = document.createElement('option');
    option.value = user.id;
    option.textContent = user.name;
    return myArray[i];
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
  if (!postId) return;
  var clicked = false;
  if(!clicked){
      clicked = true;
      document.getElementById("btn").textContent = "Show Comments";
  } else {
      clicked = true;
      document.getElementById("btn").textContent = "Hide Comments";
  }
}

function deleteChildElements(parentElement) {
  if (!parentElement) return;
  let child = parentElement.lastElementChild;
  while (parentElement.child) {
      parentElement.removeChild(parentElement.child);
      child = parentElement.lastElementChild;
      return parentElement;
  }
}

function addButtonListeners() {
   const button = document.querySelector(`button[data-post-id='${postId}']`);
   button.addEventListener("click", function (e) {toggleComments(e, postId)}, false);
}

function removeButtonListeners() {
  
}

function createComments(jsonData) {
  if (!jsonData) return;
  const fragment = document.createDocumentFragment();
  for (let i=0; i < jsonData.length; i++) {
      let articleElem = document.createElement('article');
      articleElem.append(jsonData);
  }
  return fragment;
}

function populateSelectMenu(jsonData) {
  if (!jsonData) return;
  const selectMenu = document.getElementById(selectMenu);
  return selectMenu;
}

const getUsers = async() => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUsers = await response.json();
  return jsonUsers;
}

const getUserPosts = async(userId) => {
  try {
    const postData = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    if (postData.ok) throw new Error("Error");
    return await postData.json();
  } catch (err) {
     console.error(err);
  }
}

const getUser = async(userId) => {
  try {
    const postData = await fetch("https://jsonplaceholder.typicode.com/posts/1");      
    if (postData.ok) throw new Error("Error");
    return await postData.json();
  } catch (err) {
     console.error(err);
  }
}

const getPostComments = async(postId) => {
  try {
    const postData = await fetch("https://jsonplaceholder.typicode.com/comments?postId=1");
    if (postData.ok) throw new Error("Error");
    return await postData.json();
  } catch (err) {
     console.error(err);
  }
}

const displayComments = async(postId) => {
  if (!postId) return;
  const sectionElem = document.createElement('section');
  //sectionElem.classList.add = ("comments");
  //sectionElem.classList.add = ("hide");
  //const commentsVar = await getPostComments(postId);
  //const fragment = createComments(comments);
  //fragment.append(sectionElem);
  return sectionElem;
}

const createPosts = async(posts) => {
  if (!posts) return;
  const docFragment = document.createDocumentFragment();
  return docFragment;
}

const displayPosts = async(posts) => {
  if (!posts) return;
  const postsFragment = document.createDocumentFragment();
  return postsFragment;
}

function toggleComments(event, postId) {

}

const refreshPosts = async(posts) => {

}

const selectMenuChangeEventHandler = async(event) => {
   const menuArray = [];
   return menuArray;
}

const initPage = async() => {

}

function initApp() {

}