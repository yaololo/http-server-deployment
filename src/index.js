import "./style.css";
import Icon from "./icon.jpg";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = "hello world";
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(json => {
    console.log(
      "We retrieved some data! AND we're confident it will work on a variety of browser distributions."
    );
    console.log(json);
  })
  .catch(error =>
    console.error("Something went wrong when fetching this data: ", error)
  );
