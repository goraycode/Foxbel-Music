import getAPI from "./api.js";

const inputSearch = document.querySelector('#search');


function getInfo() {
    const writting = this.value;
    getAPI(writting);
}



inputSearch.addEventListener('blur', getInfo);
