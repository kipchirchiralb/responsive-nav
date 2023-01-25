const navigation = document.querySelector("#navigation");
const openNavBtn = document.querySelector(".open-nav");
const closeNavBtn = document.querySelector(".close-nav");

openNavBtn.addEventListener("click", function () {
  navigation.classList.remove("hidden");
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "block";
});

closeNavBtn.addEventListener("click", function () {
  navigation.classList.add("hidden");
  openNavBtn.style.display = "block";
  closeNavBtn.style.display = "none";
});
