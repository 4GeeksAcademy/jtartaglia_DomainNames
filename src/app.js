/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function getDomainNames(pronoun, adjective, noun, extension) {
  let domainNames = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adjective.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < extension.length; l++) {
          domainNames += `<p>${pronoun[i]}${adjective[j]}${noun[k]}${extension[l]}</p>`;
        }
      }
    }
  }
  return domainNames;
}

const pronoun = ["my", "your"];
const adjective = ["goofy", "perfect"];
const noun = ["code", "market", "webpage"];
const extension = [".com", ".es"];

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#showDomainNames").innerHTML = getDomainNames(
      pronoun,
      adjective,
      noun,
      extension
    );
  });
  console.log("Hello");
};
