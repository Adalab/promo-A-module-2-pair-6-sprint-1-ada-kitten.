'use strict';

document.querySelector ('.js-list');
const listHTML = document.querySelector ('.js-list');
const addButton = document.querySelector ('.js-btn-add');
const formSection = document.querySelector ('.js-new-form');
const showButton = document.querySelector ('.js-btn-show');
const form = document.querySelector ('.js-form')
const cancelBtn = document.querySelector ('.js-btn-cancel')
const searchBtn = document.querySelector ('.js_btn_search')
const descripInput = document.querySelector ('.js_in_search_desc')

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputBreed = document.querySelector('.js-input-breed');
const labelMessageError = document.querySelector('.js-label-error');
const input_search_desc = document.querySelector('.js_in_search_desc');
const button_search = document.querySelector('.js_btn_search');
/* Agregar el código del li desde HTMl 
Repetir este proceso por cada gatito */
const kittenOne = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://dev.adalab.es/gato-siames.webp"
    alt="gatito"
  />
  <h3 class="card_title">Anastacio</h3>
  <h4 class="card_race">Siamés</h4>
  <p class="card_description">
            Porte elegante, su patrón de color tan característico y sus ojos
            de un azul intenso, pero su historia se remonta a Asía al menos
            hace 500 años, donde tuvo su origen muy posiblemente.
   </p>
</article>
</li>`;

const kittenTwo = `<li class="card">
<img class="card_img" src="https://dev.adalab.es/sphynx-gato.webp" alt="sphynx-cat" />
<h3 class="card_title">Fiona</h3>
<h4 class="card_race">Sphynx</h4>
<p class="card_description">
  Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
  hasta con pinta de alienígena han llegado a definir a esta raza
  gatuna que se caracteriza por la «ausencia» de pelo.
</p>
</li>`;

const kittenThree = `<li class="card">
<img class="card_img" src="https://dev.adalab.es/maine-coon-cat.webp" alt="maine-coon-cat" />
<h3 class="card_title">Cielo</h3>
<h4 class="card_race">Maine Coon</h4>
<p class="card_description">
  Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
  bella mirada se ha convertido en una de sus señas de identidad.
  Sus ojos son grandes y las orejas resultan largas y en punta.
</p>
</li>`;


listHTML.innerHTML = kittenOne + kittenTwo + kittenThree;

//console.log (showButton)//
showButton.addEventListener ('click' , (event) => {
   formSection.classList.toggle ('collapsed');
});



/* Código HTML de un gatito */
const kittenDesc1 = `Porte elegante, su patrón de color tan característico y sus ojos
de un azul intenso, pero su historia se remonta a Asía al menos
hace 500 años, donde tuvo su origen muy posiblemente.`
const kittenDesc2 = ` Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
hasta con pinta de alienígena han llegado a definir a esta raza
gatuna que se caracteriza por la «ausencia» de pelo.`
const kittenDesc3 = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
bella mirada se ha convertido en una de sus señas de identidad.
Sus ojos son grandes y las orejas resultan largas y en punta.`

addButton.addEventListener ('click' , (event) => {
  event.preventDefault();
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueBreed = inputBreed.value;  
  const newKittenHTML = `<li class="card">
  <img
  class="card_img"
  src="` + valuePhoto + `"
  alt="gatito"
  />
  <h3 class="card_title">` + valueName + `</h3>
  <h4 class="card_race">` + valueBreed + `</h4>
  <p class="card_description">
    ` + valueDesc + `
  </p>
  </li>`;
  listHTML.innerHTML += newKittenHTML;
  form.reset ();
  formSection.classList.add ('collapsed');

  // Completa el código para generar el nuevo <li> con la información del nuevo gatito
});

cancelBtn.addEventListener ('click' , (event) => {
  form.reset ();
  formSection.classList.add ('collapsed');
 });

 button_search.addEventListener('click', (event) => {
  event.preventDefault ();
  listHTML.innerHTML = '';

  const descrSearchText = input_search_desc.value;

  if( kittenDesc1.includes(descrSearchText) ) {
    listHTML.innerHTML += kittenOne;
    }
    
    if( kittenDesc2.includes(descrSearchText) ) {
      listHTML.innerHTML += kittenTwo;
    }
    
    if( kittenDesc3.includes(descrSearchText) ) {
      listHTML.innerHTML += kittenThree;
  
    }
});