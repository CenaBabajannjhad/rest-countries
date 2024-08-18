const selectRegion = document.querySelector("#select");
let Boxes;

setTimeout(() => {
  Boxes = document.querySelectorAll(".country-item");
}, 500);

selectRegion.addEventListener("change", (Event) => {
  const targetValue = Event.target.value;
  // if value dosen't eq with select
  if (targetValue !== "select") {
    if (targetValue === "All") {
      Boxes.forEach((element) => {
        element.style.display = "block";
      });
    }
    if (targetValue === "Europe") {
      Boxes.forEach((element) => {
        const elementAttribute = element.getAttribute("data-region");
        console.log(elementAttribute !== "Europe");
        console.log(elementAttribute);
        if (elementAttribute !== "Europe") {
          element.style.display = "none";
        }
      });
    }
    if (targetValue === "Asia") {
      Boxes.forEach((element) => {
        const elementAttribute = element.getAttribute("data-region");
        console.log(elementAttribute !== "Asia");
        console.log(elementAttribute);
        if (elementAttribute !== "Asia") {
          element.style.display = "none";
        }
      });
    }
    if (targetValue === "Africa") {
      Boxes.forEach((element) => {
        const elementAttribute = element.getAttribute("data-region");
        console.log(elementAttribute !== "Africa");
        console.log(elementAttribute);
        if (elementAttribute !== "Africa") {
          element.style.display = "none";
        }
      });
    }
    if (targetValue === "Oceania") {
      Boxes.forEach((element) => {
        const elementAttribute = element.getAttribute("data-region");
        console.log(elementAttribute !== "Oceania");
        console.log(elementAttribute);
        if (elementAttribute !== "Oceania") {
          element.style.display = "none";
        }
      });
    }
    if (targetValue === "Americas") {
      Boxes.forEach((element) => {
        const elementAttribute = element.getAttribute("data-region");
        console.log(elementAttribute !== "Americas");
        console.log(elementAttribute);
        if (elementAttribute !== "Americas") {
          element.style.display = "none";
        }
      });
    }
  }
});

