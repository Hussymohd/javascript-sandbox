// DOM - Document object model
//How to select element on the page:
// 1. get element by the ID
// const text = document.getElementById("text");
// console.log(text);

// //2. get element by classname
// const message = document.getElementsByClassName("message");
// console.log(message);

// //querySelector, querySelectorAll - use css selectors . #, div 
// const  paragraph = document.querySelector("#text");
// console.log(paragraph);

// const paragraphs = document.querySelectorAll(".message");
// console.log(paragraphs);
// // nodelist - array methods can be performed

// const heading6 = document.querySelector("div h6");

// // Ways we can interact with content on the webpage apart from selecting them
// //textContent, innerText, innerHtml

// const heading = document.querySelector("h1");
// // console.log(heading.textContent);
// // heading.textContent += "JS IS FUN";

// console.log(heading.innerText);
// heading.innerText += "JS IS GOOD";

// const div = document.querySelector("div");
// console.log(div.innerHTML);
// div.innerHTML += "<p> okay </p>";

// const name = "John";
// div.innerHTML = `<h1>Welcome ${name} </h1>`;

// // change attributes
// const beginPara = document.querySelector(".begin");
// console.log(beginPara);
// beginPara.className =  "okay";
// beginPara.id = "good";
// beginPara.style.color = "red"; 
// beginPara.style.backgroundColor = "green";

// //interact with css classnames
// const h1  = document.querySelector("h1");
// h1.className ="success";

// //classList - u can either add or remove, conatins - returns true or false
// const msg = document.querySelector("h2.message");
// // console.log(msg.classList);
// msg.classList.add  ("error");
// msg.classList.remove ("example");
// console.log(msg.classList.contains("good"));
// console.log(msg);

// // create elements
// const section = document.createElement("section");
// section.innerHTML = "<h1>Creaed from JS</h1>";

// // append - adding it somewhere
// const body = document.querySelector("body");
// body.appendChild(section);

// //remove element - removeChild
// //body.removeChild(section);

// //Replace child
// const link = document.createElement("a");
// link.innerText = "Visit Google";
// //link.href = "https://google.com";
// link.setAttribute("href", "https://google.com");

// body.replaceChild(link, section);

// //responding to user interations
// //event dat is happening, could be a : click event(click), event handler
// //addEventListener -  we are listening for dat event for dat particular button

// const btn = document.querySelector("button");
// btn.addEventListener("click", () => {
//   console.log("btn clicked");
//   body.style.backgroundColor = "aqua"
// });

//form handling

const form = document.querySelector("form");
// submit event
form.addEventListener("submit", (event) => {
  // default of forms when submitted is to refresh the page
  event.preventDefault();
  // select those inputfield
  const username = document.querySelector(".username");
  const password = document.querySelector(".password");

  const usernameValue = username.value.trim();
  const passwordValue = password.value;
  const small = document.querySelector("small");
  // console.log(usernameValue, passwordValue);

  // validate()
  if (!usernameValue || !passwordValue) {
    // display error message
    small.textContent = "please fill all fields";
  } else if (username.length < 5) {
    small.textContent = "minimum user length is 5";
  } else if (passwordValue.toLowerCase().includes("password")) {
    small.innerText = "password must not include password";
  } else {
    // submit form
    small.textContent = "form submitted";
  }
});