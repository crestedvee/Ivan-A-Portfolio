import { changeTextColor, changeBackgroundColor} from "./modules.js";

let myName = document.getElementById("my-name");
let subHeader1 = document.getElementById("sub-header");
let subHeader2 = document.getElementById("h2-contact");
let subHeader3 = document.getElementById("btn-div2");

setInterval(() =>{
  changeTextColor(myName);
},400);


setInterval(() =>{
  changeBackgroundColor(subHeader2);
},400);

