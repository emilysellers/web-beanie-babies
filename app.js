/* Imports */
import { getBeanies } from './fetch-utils.js';
import { renderBeanie } from './render-utils.js';

/* Get DOM Elements */
const notificationDisplay = document.getElementById('notification-display');
const searchForm = document.getElementById('search-form');
const beaniesList = document.getElementById('beanies-list');

/* State */
let error = null;
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
        const beanieEl = renderBeanie(beanie);
        beaniesList.append(beanieEl);
    }
}

function displayNotifications() {
    notificationDisplay.textContent = 'showing XX of XX beanies';
}

// (don't forget to call any display functions you want to run on page load!)
