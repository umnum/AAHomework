document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items

  // --- your code here!
  document.getElementsByClassName("list-container")[0].addEventListener("submit", (e) => {
    e.preventDefault();
    let textInput = document.getElementsByClassName("favorite-input")[0];
    let ul = document.getElementById("sf-places");
    let li = document.createElement("li");
    li.textContent = textInput.value;
    ul.appendChild(li);
    textInput.value = "";
  });



  // adding new photos

  // --- your code here!
document.getElementsByClassName("photo-show-button")[0].addEventListener("click", (e) => {
  let form = document.getElementsByClassName("photo-form-container")[0];
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  } else {
    form.classList.add("hidden");
  }
})


});
