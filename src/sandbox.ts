const anchor = document.querySelector("a");
if (anchor) {
  console.log(anchor.href);
}

const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

const type = document.querySelector("#type") as HTMLInputElement;
const toform = document.querySelector("#toform") as HTMLInputElement;
const details = document.querySelector("#amount") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value, toform.value, details.value, amount.valueAsNumber);
});
