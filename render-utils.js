export function renderBeanie(beanie) {
    const li = document.createElement('li');
    li.classList.add('card');

    const img = document.createElement('img');
    img.src = beanie.image;
    img.alt = beanie.title;

    const h2 = document.createElement('h2');
    h2.textContent = beanie.title;

    const p = document.createElement('p');
    p.textContent = beanie.astroSign;

    li.append(img, h2, p);

    return li;
}

export function renderAstroSignOption(astroSign) {
    const option = document.createElement('option');
    option.value = astroSign.name;
    option.textContent = astroSign.name;
    return option;
}
