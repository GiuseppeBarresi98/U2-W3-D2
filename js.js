document.addEventListener("DOMContentLoaded", () => {
  const buttonSave = document.getElementById("save");
  const buttonRemove = document.getElementById("remove");
  const inputValue = document.getElementById("fname");
  const ul = document.getElementById("ul");
  const li = document.getElementById("li");

  const savedValue = localStorage.getItem("value");
  if (savedValue) {
    inputValue.value = savedValue;
    li.innerText = savedValue;
  }

  buttonRemove.addEventListener("click", removeLocal);
  buttonSave.addEventListener("click", saveLocal);

  function saveLocal() {
    const value = inputValue.value;
    localStorage.setItem("value", value);

    li.innerText = value;
  }

  function removeLocal() {
    localStorage.removeItem("value");
    inputValue.value = "";
    li.innerText = "";
  }
});
