let endDate = (document.getElementById("new-date").innerText =
  "11 may 2023 12:00 AM");

let input = document.getElementsByTagName("input");
function clock() {
  let end = new Date(endDate);
  let now = new Date();
  let diff = (end - now) / 1000;

  if (diff < 0) {
    return;
  }

  // convert into days hours minutes seconds
  input[0].value = Math.floor(diff / 3600 / 24);
  input[1].value = Math.floor(diff / 3600) % 24;
  input[2].value = Math.floor(diff / 60) % 60;
  input[3].value = Math.floor(diff) % 60;
}

// function call
clock();

setInterval(() => {
  clock();
}, 1000);
