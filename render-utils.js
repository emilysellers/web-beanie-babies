export function renderBeanie(beanie) {
    const li = document.createElement('li');
    li.classList.add('card');

    const image = document.createElement('img');
    image.src = ``;
    image.alt = beanie.name;

    const h2 = document.createElement('h2');
    h2.textContent = beanie.name;

    const p = document.createElement('p');
    p.textContent = beanie.astro;

    li.append(image, h2, p);

    return li;
}
