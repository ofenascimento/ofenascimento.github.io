var modal = document.getElementById("contactModal");

var btn = document.querySelector(".btn-contact");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;

  const row1 = document.getElementById('row1');
  const row2 = document.getElementById('row2');

  row1.style.transform = `translateX(${scrollPosition * 0.5}px)`;
  row2.style.transform = `translateX(${-scrollPosition * 0.5}px)`;
});





