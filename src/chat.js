import { reply } from "./sketch.js";

var form = document.getElementById("form");
var messageList = document.getElementById("messages");
var messageInput = document.getElementById("input");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	if (messageInput.value) {
		// this should move into sketch.js
	  let adverbs = [
	    "with enthusiasm",
	    "irritably",
	    "delightedly",
	    "quietly",
	    "suspiciously",
	    "angrily",
	    "with a sigh",
	    "suggestively",
	    "and a little yarn falls out of its mouth",
	  ];

	  let message = messageInput.value;

	  console.log(message);

	  let question = ask(message);
	  messageList.appendChild(question);

	  window.scrollTo(0, document.body.scrollHeight);
	  messageInput.value = "";

	  // scream = reply();
	  // messageList.appendChild(scream);

	  // if reply() returns adverb, something like scremText = reply()?
	  reply();

	  // rename screm here for disambiguation? scremListItem?
	  var screm = document.createElement("li");
	// move to sketch.js - reply()
	  let randNum = floor(random(adverbs.length));
	  console.log(randNum);
	  screm.textContent = "anteater screams " + adverbs[randNum];
	  messageList.appendChild(screm);

	  // ask(); -- handles user
	  // screm(); -- handles anteater
	}
});

function ask(message) {
  var item = document.createElement("li");
  item.textContent = message;
  return item;
};
