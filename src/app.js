import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Mike from the console");
};
let generateExcuse = () => {
  let pronoun = ["My", "The"];
  let who = [
    "jogger",
    "baboon",
    "chimpansee",
    "biker",
    "grandpa",
    "girlfriend"
  ];
  let actions = ["took my", "thew my", "stole my", "tore apart my", "hid my"];
  let what = ["homework", "pants", "car", "bike", "phone", "glasses"];
  let where = [
    "on the parking",
    "in my room",
    "in the supermarket",
    "right in front of school"
  ];

  let pronIndx = Math.floor(Math.random() * pronoun.length);
  let whoIndx = Math.floor(Math.random() * who.length);
  let actIndx = Math.floor(Math.random() * actions.length);
  let whtIndx = Math.floor(Math.random() * what.length);
  let whrIndx = Math.floor(Math.random() * where.length);

  return (
    pronoun[pronIndx] +
    " " +
    who[whoIndx] +
    " " +
    actions[actIndx] +
    " " +
    what[whtIndx] +
    " " +
    where[whrIndx]
  );
};
