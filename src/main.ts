import "./style.css";

let time = 0;
const answer = createSpan("Loading..");
document.getElementById("app")?.appendChild(answer);

const id = setInterval(async () => {
  const { data }: { data: string } = await fetch(
    `http://localhost:3001/api/answer`
  )
    .then((res) => res.json())
    .catch(() => undefined);

  if (data) {
    answer.innerText = data;
  } else {
    time % 2 == 0
      ? (answer.innerText = "Loading..")
      : (answer.innerHTML = "Loading...");
  }

  time += 1;
}, 1000);

globalThis.addEventListener("close", () => {
  clearInterval(id);
});

function createSpan(data: string): HTMLSpanElement {
  const span = document.createElement("span");
  span.innerHTML = `<span>${data}</span>`;
  span.id = "answer";

  return span;
}
