function changeBodyBackground() {
  const firstImage = document.querySelector(
    ".image-container img:first-of-type"
  );
  const title = document.querySelector(".title");

  firstImage.addEventListener("mouseover", () => {
    document.body.style.backgroundColor = "#343434";
  });
  firstImage.addEventListener("mouseout", () => {
    document.body.style.backgroundColor = "";
  });
}
changeBodyBackground();
