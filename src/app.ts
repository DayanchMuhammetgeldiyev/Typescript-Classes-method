import { Invoice } from "./classes/İnvoice";
import { Payment } from "./classes/Payment";
import { ListTemplate } from "./classes/ListTemplate";
import { HasFormatter } from "./interfaces/HasFormatter";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLInputElement;
const toform = document.querySelector("#toform") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [toform.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "end");
});
