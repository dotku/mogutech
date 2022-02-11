document.forms[0].onsubmit = (e) => {
  e.preventDefault();
  const subject = document.getElementById("subject").value;
  const content = document.getElementById("content").value;

  window.open(
    `mailto:weijingjaylin@gmail.com?subject=${subject}&body=${content}`
  );
};
// function component() {
//   const element = document.createElement("div");

//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(["Hello", "webpack"], " ");

//   return element;
// }

// document.body.appendChild(component());
