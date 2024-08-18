// Boxes = document.querySelectorAll(".country-item")
let countryNames;
const input = document.getElementById('search');
const countriesWrapper = document.getElementById('country-boxes-place');
setTimeout(() => {
    countryNames = document.querySelectorAll('.country-name');
}, 500);

input.addEventListener('change' , (Event) => {
    countriesWrapper.remove()
    let searchResult = countryNames.map(item => {
        return item.include(Event.target.textContent);
    })
    console.log(searchResult)
})
