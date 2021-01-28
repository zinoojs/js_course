// document.getElementById()
// document.getElementsByClassName()
// document.querySelector()
// document.querySelectorAll()

// let h3 = document.querySelector("h3");
// h3.style.color = "yellow";
// h3.style.fontStyle = "italic";
// h3.style.fontSize = "45px";
// const form = document.getElementById("form");
// console.log(form);
// const h1 = document.querySelector("h1");
// console.log(h1);
// const all = document.querySelectorAll("li");
// console.log(all);
// console.log(document.getElementsByTagName("li"));
// const items = document.getElementsByClassName("item");
// console.log(items);

// const items = document.querySelectorAll(".item");
// console.log(items);
// items.forEach((e) => console.log(e.innerText));
// const ul = document.querySelector(".items");
// ul.firstElementChild.innerText = "hello";
// // ul.lastElementChild.remove();
// ul.children[2].textContent = "world";
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   document.querySelector("#form").style.backgroundColor = "red";
//   document.querySelector("body").classList.add("bg-dark");
//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<b>Hello myanmar</b>";
// });

const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");
const btn = document.querySelector(".btn");
const lists = document.querySelector(".lists");
form.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  if (name.value === "" || email.value === "") {
    //   alert("type name and email");
    msg.innerHTML = "Please fill name and Email!";
    msg.style.color = "red";
    setTimeout(() => msg.remove(), 2000);
  } else {
    //   alert("success");
    // msg.innerHTML = "Success";
    // msg.style.color = "green";
    // setTimeout(() => msg.remove(), 2000);
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`Name is ${name.value} :Email is ${email.value}`)
    );
    lists.appendChild(li);
    name.value = "";
    email.value = "";
  }
}
