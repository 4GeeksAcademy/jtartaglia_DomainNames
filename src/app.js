/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

/* window.onload = function() { */

let pronoun = ["my", "your"];
let adjective = ["wacky", "goofy", "silly"];
let noun = ["code", "home", "market", "webpage"];
let extension = [".com", ".es"];
let domainNames = "";

for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adjective.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      for (let l = 0; l < extension.length; l++) {
        domainNames += `${pronoun[i]}${adjective[j]}${noun[k]}${extension[l]}\n`;
      }
    }
  }
}
console.log(domainNames);
