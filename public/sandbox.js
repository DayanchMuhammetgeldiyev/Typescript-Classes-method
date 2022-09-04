"use strict";
const anchor = document.querySelector("a");
if (anchor) {
    console.log(anchor.href);
}
const form = document.querySelector(".new-item-form");
console.log(form.children);
const type = document.querySelector("#type");
const toform = document.querySelector("#toform");
const details = document.querySelector("#amount");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
