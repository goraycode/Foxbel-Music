const detailVideo = document.querySelector('.detail-video');
const galleryGrid = document.querySelector('.galleryGrid');

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
    
}







export {
    banner,
    galleryVideos
}