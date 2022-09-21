/* Imports */
import { getBeanies } from './fetch-utils.js';

/* Get DOM Elements */
const beaniesList = document.getElementById('beanies-list');

/* State */
let beanies = [];

/* Events */
window.addEventListener('load', async () => {
    findBeanies();
});

async function findBeanies() {
    const response = await getBeanies();

    error = response.error;
    beanies = response.data;

    displayNotifications();
    if (!error) {
        displayBeanies();
    }
}
/* Display Functions */
function displayBeanies() {
    beaniesList.innerHTML = '';

    for (const beanie of beanies) {
        const beanieEl = renderBeanie();
        beaniesList.append(beanieEl);
    }
}

function displayNotifications() {}

// (don't forget to call any display functions you want to run on page load!)
findBeanies();
