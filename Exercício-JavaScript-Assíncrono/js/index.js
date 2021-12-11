// CONSTANTE QUE ARMAZENA O CAMINHO DA API
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

// CONSTANTE QUE ARMAZENA O BOTÃO DO HTML
const catBtn = document.getElementById('change-cat');

// CONSTANTE QUE ARMAZENA A TAG IMG DO HTML 
const catImg = document.getElementById('cat');

// FUNÇÃO DE CARREGAR AS IMGENS DA API
const getCats = async () => {
    try{
        // pegando os dados da API
        const data = await fetch(BASE_URL);

        //convertendo os dados da API em Json
        const json = await data.json();

        return json.webpurl;
    }catch(e){
        console.log(e.message);
    }
};

// FUNÇÃO 
const loadImg = async () => {
    catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);
loadImg();