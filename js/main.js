


function getAPI() {

    const access_token = 'frNC86dJ1THPnIaUIBCJQYpbTGYP30DJLtevLBId8X2FuydllyK';
    const expires = '3600';
    const code = 'fr3118fc52de734f0777c7653972b696';
    let url = `https://api.deezer.com/album/302127`;

    fetch(url)
        .then(response => response.json())
        .then(resultado => console.log(resultado))
        .catch(err => console.log(err));
}


document.addEventListener('DOMContentLoaded', getAPI);

