const URL =
  "https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json";

const button = document.getElementById("btn");
const ulElement = document.getElementById("list");
const inputElement = document.getElementById("input");

function printStates(usStates) {
  ulElement.innerHTML = "";
  for (let state of usStates) {
    console.log(state);
    let newLi = document.createElement("li");
    newLi.textContent = state;
    ulElement.appendChild(newLi);
  }
}

function filteredState(statesArray) {
  const filteredStates = statesArray.filter((state) => {
    return state.toLowerCase().includes(inputElement.value.toLowerCase());
  });
  printStates(filteredStates);
}

axios
  .get(URL)
  .then((response) => {
    const states = Object.values(response.data);
    console.log(states); // array
    printStates(states);
    inputElement.oninput = () => filteredState(states);
  })
  .catch((error) => {
    console.error(error);
  });
