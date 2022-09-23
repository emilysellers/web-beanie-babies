/* Imports */
import { getBeanies, getAstroSigns } from './fetch-utils.js';
import { renderBeanie, renderAstroSignOption } from './render-utils.js';

/* Get DOM Elements */
const notificationDisplay = document.getElementById('notification-display');
const searchForm = document.getElementById('search-form');
const astroSelect = document.getElementById('astro-select');
const beaniesList = document.getElementById('beanies-list');

/* State */
let error = null;
//let count = 0;
let astroSigns = [];
let beanies = [];

/* Events */
window.addEventListener('load', async () => {
    findBeanies();

    const response = await getAstroSigns();

    error = response.error;
    astroSigns = response.data;

    if (!error) {
        displayAstroOptions();
    }
    // displayBeanies();
});

async function findBeanies(name, astroSign) {
    const response = await getBeanies(name, astroSign);
    console.log('find', name);

    error = response.error;
    //count = response.count;
    beanies = response.data;

    displayNotifications();
    if (!error) {
        displayBeanies();
    }
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    findBeanies(formData.get('name'), formData.get('astroSign'));
});

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
        const option = renderAstroSignOption(astroSign);
        astroSelect.append(option);
    }
}

// (don't forget to call any display functions you want to run on page load!)
