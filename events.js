oldSchool = () => {
  document.getElementById("htmlEH").innerHTML =
    "This is bad practice. Don't use this one.";
}

tradText = () => {
  document.getElementById("traditional").innerHTML =
    "You can only attach one function to this event.";
}

const tradHandler = document.getElementsByTagName("input")[1];

tradHandler.onclick = tradText;

level2Text = () => {
  document.getElementById("level2").innerHTML =
    "Use this. You can attach multiple functions to an event.";
}

alertMe = () => {
  alert("This is part of the level 2 functionality.");
}

var level2Btn = document.getElementsByTagName("input")[2];

level2Btn.addEventListener("click", function () {
  level2Text();
  alertMe();
});

//UI Event
let pURL = document.getElementById("pageURL");
var lUpdate = document.getElementById("myLastUpdate");

displayInfo = () => {
  pURL.innerHTML = `URL: + ${window.location}`;
  lUpdate.innerHTML = `Last Update:  + ${document.lastModified}`;
};

window.addEventListener("load", displayInfo);

//Keyboard Events
let keyNum = document.getElementById("pressNumber");
let keyInput = document.getElementsByTagName("input")[3];
let pressCount = 0;

countKey = () => {
  pressCount++;
  keyNum.innerHTML = `You have pressed a key ${pressCount} times.`;
};
keyInput.addEventListener("keydown", countKey);

//Mouse Events
let dangerTxt = document.getElementById("danger");

changeDanger = () => {
  dangerTxt.innerHTML = "<b>You changed the text. Way to go!</b>";
};

dangerTxt.addEventListener("dblclick", changeDanger);

//Focus Event
let blurText = document.getElementsByClassName("blurText")[0];

change2Upper = () => {
  blurText.style.textTransform = "uppercase";
};

blurText.addEventListener("blur", change2Upper);

//Form Events
const dropD = document.getElementById("js");
let selectOutput = document.getElementById("selectText");

ddChoice = () => {
  let yourChoice = dropD.options[dropD.selectedIndex].value;
  let choiceText;
  switch (yourChoice) {
    case "javascript":
      choiceText = "Javascript is the base for all of these.";
      break;
    case "jQuery":
      choiceText = "You will learn jQuery this semester.";
      break;
    case "Angular":
      choiceText = "You may or may not learn Angular in an IUPUI course.";
      break;
    case "React":
      choiceText = "React is very popular.";
      break;
    default:
      choiceText = "What did you choose?";
      break;
  }

  selectOutput.innerHTML = choiceText;
};

dropD.addEventListener("change", ddChoice);

//Add/Delete List
let myList = document.getElementById("myList");

addItem = () => {
  let newItem = prompt("Enter Item:");
  let newLi = document.createElement("li");
  let newText = document.createTextNode(newItem);
  newLi.appendChild(newText);
  myList.appendChild(newLi);
};

document.getElementsByTagName("button")[0].addEventListener("click", addItem);

//Delete any list item

getTarget = (e) => e.target || e.srcElement;

deleteItem = (e) => {
  let target = getTarget(e);
  console.log(target);
  let tParent = target.parentNode;
  console.log(tParent);
  tParent.removeChild(target);
};

myList.addEventListener("click", deleteItem);
