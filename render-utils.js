export function renderBeanie(beanie) {
    const li = document.createElement('li');
    li.classList.add('card');

    const img = document.createElement('img');
    img.src = beanie.image;
    img.alt = beanie.title;

    const content = document.createElement('div');
    content.classList.add('content');

    const h2 = document.createElement('h2');
    h2.textContent = beanie.title;

    const astroSign = document.createElement('span');
    astroSign.textContent = beanie.astroSign;

    content.append(h2, astroSign);
    li.append(img, content);

    return li;
}

export function renderAstroSignOption(astroSign) {
    const option = document.createElement('option');
    option.value = astroSign.name;
    option.textContent = astroSign.name;
    return option;
}
