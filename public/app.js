"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _nvoice_1 = require("./classes/\u0130nvoice");
const Payment_1 = require("./classes/Payment");
const ListTemplate_1 = require("./classes/ListTemplate");
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toform = document.querySelector("#toform");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate_1.ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [toform.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "invoice") {
        doc = new _nvoice_1.Invoice(...values);
    }
    else {
        doc = new Payment_1.Payment(...values);
    }
    list.render(doc, type.value, "end");
});
