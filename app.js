/* Imports */
import { getBeanies, getAstro } from './fetch-utils.js';
import { renderBeanie, renderAstroSignOption } from './render-utils.js';

/* Get DOM Elements */
const notificationDisplay = document.getElementById('notification-display');
const searchForm = document.getElementById('search-form');
const astroSelect = document.getElementById('astro-select');
const beaniesList = document.getElementById('beanies-list');

/* State */
let error = null;
let count = 0;
let beanies = [];
let astroSigns = [];

/* Events */
window.addEventListener('load', async () => {
    findBeanies();

    const response = await getAstro();
    astroSigns = response.data;

    if (!error) {
        displayAstroOptions();
    }
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
    if (error) {
        notificationDisplay.classList.add('error');
        notificationDisplay.textContent = error.message;
    } else {
        notificationDisplay.classList.remove('error');
        notificationDisplay.textContent = `showing ${beanies.length} beanies`;
    }
}

function displayAstroOptions() {
    for (const astroSign of astroSigns) {
        //renderAstroSign
        const option = renderAstroSignOption(astroSign);
        astroSelect.append(option);
    }
}

// (don't forget to call any display functions you want to run on page load!)
