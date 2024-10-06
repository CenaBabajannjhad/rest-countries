const searchInput = document.querySelector("#search");

searchInput.addEventListener("keyup", searchCountriesHandler);

function searchCountriesHandler(e) {
  const countrieCards = document.querySelectorAll(".country-item");

  countrieCards.forEach(card => {
    let targetCountry = e.target.value;

    card.classList.add('disable');

    if(card.dataset.name.toLowerCase().includes(targetCountry)){
        card.classList.remove('disable');
        console.log(card);
    }
  })
}
