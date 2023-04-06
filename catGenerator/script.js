const url = 'https://api.thecatapi.com/v1/images/search';
const btn = document.querySelector('.btn');
const catContainer = document.querySelector('.block');

const getCat = () => {
   return fetch(url)
   .then(data => data.json())
   .then(data => {
      console.log(data[0].url);
      catContainer.style.backgroundImage = 'url(' + data[0].url + ')';
   })
}

btn.addEventListener('click', () => {
   getCat();
})