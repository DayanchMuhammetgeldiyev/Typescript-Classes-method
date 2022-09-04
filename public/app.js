"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _nvoice_js_1 = require("./classes/\u0130nvoice.js");
const Payment_js_1 = require("./classes/Payment.js");
const ListTemplate_js_1 = require("./classes/ListTemplate.js");
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate_js_1.ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new _nvoice_js_1.Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment_js_1.Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
