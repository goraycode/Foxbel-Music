const detailVideo = document.querySelector('.detail-video');
const galleryGrid = document.querySelector('.gallery__grid');

function banner(data) {

    for (let i = 0; i < 1; i++) {
        const { album: { cover_big, title },
            artist: { name, picture_medium } } = data[i];

        designBanner(cover_big, title, name, picture_medium);
    }
}
function designBanner(imgAlbum, album, artist, photoArtist) {

    const contenedor = document.createElement('div');
    contenedor.className = 'contenedorbanner my-5 flex flex-col md:flex-row';

    const getContenedor = document.querySelector('.contenedorbanner');
    if (getContenedor !== null) {
        getContenedor.remove();
    }

    const divImg = document.createElement('div');
    divImg.className = 'detail-video__img';
    const imgArtist = document.createElement('img');
    imgArtist.src = photoArtist;
    imgArtist.alt = 'detail-video';
    divImg.appendChild(imgArtist);


    const divBanner = document.createElement('div');
    divBanner.className = 'detail-video__banner flex flex-col justify-between';
    divBanner.style.backgroundImage = `linear-gradient(0deg, rgba(167, 0, 0, 0.7), rgba(167, 0, 0, 0.7)), url("${imgAlbum}")`;

    const divInfo = document.createElement('div');
    divInfo.className = 'info container mt-8 mb-2';

    const pAlbum = document.createElement('p');
    pAlbum.className = 'text-white text-xl font-bold';
    pAlbum.textContent = album;

    const divInfoSmall = document.createElement('div');
    divInfoSmall.className = 'info__small flex items-center gap-4';
    const pSmall = document.createElement('p');
    pSmall.textContent = `Lo mejor de ${artist}`;

    divInfoSmall.appendChild(pSmall);


    const pBiografy = document.createElement('p');
    pBiografy.className = 'text-white mt-5 text-xs';
    pBiografy.textContent = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,itaque dolorem optio porro maiores illo labore amet sunt, cumque ullam ipsa reprehenderit quisquam? A laudantium aut pariatur ipsum repudiandae ab.';


    divInfo.appendChild(pAlbum);
    divInfo.appendChild(divInfoSmall);
    divInfo.appendChild(pBiografy);


    const divButtons = document.createElement('div');
    divButtons.className = 'buttons container flex gap-5 items-center mb-5';

    const btnPlay = document.createElement('button');
    btnPlay.className = 'btn btn__activado rounded-2xl text-sm px-2 py-1';
    btnPlay.textContent = 'Reproducir';

    const btnSeguir = document.createElement('button');
    btnSeguir.className = 'btn btn__activado rounded-2xl text-sm px-2 py-1';
    btnSeguir.textContent = 'Seguir';

    const btnMore = document.createElement('button');
    btnMore.className = 'text-white';
    btnMore.innerHTML = `<i class="fa-solid fa-ellipsis"></i>`;


    divButtons.appendChild(btnPlay);
    divButtons.appendChild(btnSeguir);
    divButtons.appendChild(btnMore);


    divBanner.appendChild(divInfo);
    divBanner.appendChild(divButtons);



    contenedor.appendChild(divImg);
    contenedor.appendChild(divBanner);

    detailVideo.appendChild(contenedor);

}


function galleryVideos(data) {

    limpiarHTML();
    data.forEach(song => {
        const { album: { cover_medium, title }, artist: { name } } = song;

        const divCard = document.createElement('div');
        divCard.className = 'card flex items-end';
        divCard.style.backgroundImage = `url("${cover_medium}")`;

        const cardInfo = document.createElement('div');
        cardInfo.className = 'card__info';
        cardInfo.innerHTML = `
        <p class="card__title font-bold text-sm">${title.slice(0, 20)}</p>
        <p class="card__author">${name.slice(0, 20)}</p>`;


        const cardButtonPlay = document.createElement('button');
        cardButtonPlay.className = 'card__play w-full';
        cardButtonPlay.innerHTML = `<i class="fa-solid fa-play text-white text-4xl"></i>`;

        const cardButtonOpt = document.createElement('button');
        cardButtonOpt.className = 'card__opts pr-1';
        cardButtonOpt.innerHTML = `<i class="fa-solid fa-ellipsis-vertical text-white"></i>`;

        divCard.appendChild(cardInfo);
        divCard.appendChild(cardButtonPlay);
        divCard.appendChild(cardButtonOpt);


        galleryGrid.appendChild(divCard);


    });
}

function limpiarHTML() {
    while (galleryGrid.firstChild) {
        galleryGrid.removeChild(galleryGrid.firstChild);
    }
}




export {
    banner,
    galleryVideos
}