/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["my", "your"];
  let adjective = ["wacky", "goofy", "silly"];
  let noun = ["code", "home", "market", "webpage"];
  let extension = [".com", ".es"];

  function getDomainNames(array1, array2, array3, array4) {
    let domainNames = "";

    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        for (let k = 0; k < array3.length; k++) {
          for (let l = 0; l < array4.length; l++) {
            domainNames += `${array1[i]}${array2[j]}${array3[k]}${array4[l]}\n`;
          }
        }
      }
    }
    console.log(domainNames);
  }
  getDomainNames(pronoun, adjective, noun, extension);
};
