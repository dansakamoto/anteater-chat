import { reply } from "./sketch.js";

var form = document.getElementById("form");
var messageList = document.getElementById("messages");
var messageInput = document.getElementById("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (messageInput.value) {
    const message = messageInput.value;
    const question = ask(message);
    messageList.appendChild(question);

    window.scrollTo(0, document.body.scrollHeight);
    messageInput.value = "";

    const scremListItem = document.createElement("li");
    scremListItem.textContent = reply();
    messageList.appendChild(scremListItem);
  }
});

function ask(message) {
  var item = document.createElement("li");
  item.textContent = message;
  return item;
}
