import Form from "./components/Form";
import List from "./components/List";
import api from "./services/api.service";

api.index().then((data) => {
  console.log(data);
});
const root = document.querySelector("#root");

api.index().then((products) => {
  root.innerHTML = `
<main class="container mx-auto flex flex-col items-center">
  ${Form}
  ${List(products)}
</main>
`;
