function fetchAPI() {
  fetch("https://api.adviceslip.com/advice")
  .then(response => response.json())
  .then(data => {
    document.querySelector(".id").innerHTML = `Advice #${data.slip.id}`;
    document.querySelector(".quote").innerHTML = data.slip.advice;
  })
}

window.onload = function() {
  fetchAPI();

  document.querySelector(".quote-btn").addEventListener("click", fetchAPI);
}