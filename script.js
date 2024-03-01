const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("myModal");
// Get the modal image
const modalImg = document.getElementById("modalImg");
// Get the close button
const closeBtn = document.getElementsByClassName("close")[0];

images.forEach((img) => {
  img.addEventListener("click", function (event) {
    modal.style.display = "block"; // Display the modal
    modalImg.src = this.src;
  });
});

closeBtn.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
