const projects = [
  {
    head_title: "My Recent Works",
    title: "Multi-Post Stories",
    card_title: "Website Portfolio",
    card_header: "Profesional Art Printing Data",
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. This has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    technology: ["css", "html", "bootstrap", "Ruby"],
    PopTechnology: ["html", "css", "bootstrap", "Ruby on rails"],
    cardTechnology: ["html", "bootstrap", "ruby"],
    image: 'images/work-title-img.svg" alt=""',
    imagePopClose:'images/popCloseBtn.png',
    workBodyImage: "images/work-main.svg",
    image_popup: "images/worklarge.png",
    workPopDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita."
  },
];

// work main part start

const section = document.querySelector("#work-part");
const workDiv = document.querySelector("#work-section");

for (let i = 0; i < projects.length; i += 1) {
  const div = document.createElement("div");
  div.className = "work-header";
  const h2 = document.createElement("h2");
  h2.className = "work-title";
  h2.textContent = projects[0].head_title;
  div.appendChild(h2);

  workDiv.appendChild(div);
  //header img
  const newDiv = document.createElement("div");
  newDiv.className = "work-header-img";
  const FirstImage = document.createElement("img");
  FirstImage.src = projects[i].image;
  div.appendChild(FirstImage);
  div.appendChild(newDiv);
  //work body div
  const workBodyDiv = document.createElement("bodyDiv");
  workBodyDiv.className = "work-body";
  workDiv.appendChild(workBodyDiv);
  //work body img
  const workBodyImage = document.createElement("img");
  workBodyImage.src = projects[i].workBodyImage;
  workBodyDiv.appendChild(workBodyImage);
  // article
  const workArticle = document.createElement("article");
  workArticle.className = "work-article";
  workBodyDiv.appendChild(workArticle);
  // work article h2
  const workArticleTitle = document.createElement("h2");
  workArticleTitle.innerHTML = projects[i].title;
  workArticle.appendChild(workArticleTitle);
  // work article p
  const workArticleP = document.createElement("p");
  workArticleP.innerHTML = projects[i].description;
  workArticle.appendChild(workArticleP);
  //work article ul
  const workArticleUl = document.createElement("ul");
  workArticleUl.className = "work-links";
  workArticle.appendChild(workArticleUl);
  //work article ul li
  const workArticleUiLi = document.createElement("li");
  workArticleUl.appendChild(workArticleUiLi);

  for (let ab = 0; ab < projects[i].technology.length; ab += 1) {
    const a = document.createElement("a");
    a.textContent = projects[i].technology[ab];
    workArticleUiLi.appendChild(a);
  }
  //work article button
  const workArticleBtn = document.createElement('button');
  workArticleBtn.className = 'work-see-button';
  workArticleBtn.innerHTML = 'See Project';
  workArticle.appendChild(workArticleBtn);
}





//work popup first section start

const workBtn = document.querySelector('.work-see-button');

//work first button click

workBtn.addEventListener('click', ()=>{



  section.style.filter = 'blur(5px)';
const WorkSection = document.querySelector('.workPopup');


for (let j = 0; j < projects.length; j += 1) {

const pDiv = document.createElement('div');
pDiv.className = 'workHeader';
WorkSection.appendChild(pDiv);

const containerDiv = document.createElement('div');
containerDiv.className = 'workContainer';
pDiv.appendChild(containerDiv);


const colDiv = document.createElement('div');
colDiv.className = 'col-one';
containerDiv.appendChild(colDiv);

const pTitle = document.createElement('h2');
pTitle.textContent = projects[j].head_title;
colDiv.appendChild(pTitle);

//popup close button
const popClose = document.createElement('img');
popClose.className = 'popclose';
popClose.setAttribute('alt', 'close');
popClose.src = projects[j].imagePopClose;
containerDiv.appendChild(popClose);

  // popup close button click


popClose.addEventListener('click', ()=>{
  WorkSection.style.display = 'none';
  section.style.display = 'block';
  section.style.filter = 'blur(0)';
})



//popup ul li start

  //work article ul
  const workPopUl = document.createElement("ul");
  workPopUl.className = "work-p-links";
  colDiv.appendChild(workPopUl)
  //work article ul li
  const workPopUiLi = document.createElement("li");
  workPopUl.appendChild(workPopUiLi);

  
 

  for (let ab = 0; ab < projects[j].technology.length; ab += 1) {
    const popAncor = document.createElement('a');
    popAncor.textContent = projects[j].PopTechnology[ab];
    workPopUiLi.appendChild(popAncor);
  }

  //pop work image

  const workPopLImg = document.createElement('img');
  workPopLImg.src = projects[j].image_popup;
  colDiv.appendChild(workPopLImg);

  //pop description


  const colDiv2 = document.createElement('div');
  colDiv2.className = 'col-two';
  containerDiv.appendChild(colDiv2);

  const popDes = document.createElement('p');
  popDes.textContent = projects[j].workPopDescription;
  colDiv2.appendChild(popDes);


  //work-pop-up last two buttons

  const popBtn = document.createElement('button');
  popBtn.innerHTML = 'See Live';
  colDiv2.appendChild(popBtn);
  const popBtn2 = document.createElement('button');
  popBtn2.innerHTML = 'See Source';
  colDiv2.appendChild(popBtn2);
}
})


// work card section 
const workAllCard = document.querySelector('.all-cards');

for(let k = 0; k < 6; k += 1){
for(let i = 0; i < projects.length; i += 1){

const workCard = document.createElement('div');
workCard.className = 'work-card';
workAllCard.appendChild(workCard);
const card = document.createElement('div');
card.className = 'card';
workCard.appendChild(card);

const cardHeader = document.createElement('h3');
cardHeader.textContent = projects[i].card_header;
card.appendChild(cardHeader);

const cardDes = document.createElement('p');
cardDes.className = 'description';
cardDes.textContent = projects[i].description;
card.appendChild(cardDes);

const cardUl = document.createElement('ul');
cardUl.className = 'card-ul';
card.appendChild(cardUl);


for(let n = 0; n < 3; n += 1){
  const proLi = document.createElement('li');
  proLi.textContent = projects[i].cardTechnology[n];
  cardUl.appendChild(proLi);
}

const workCardBtn = document.createElement('button');
workCardBtn.className = 'card-button';
workCardBtn.innerHTML = 'See Project';
card.appendChild(workCardBtn);

}
}


//work popup second section start


const workCardBtn = document.querySelectorAll('.card-button');
workCardBtn.forEach((cardButton) => {
  cardButton.addEventListener('click', ()=>{

  section.style.filter = 'blur(5px)';
const WorkSection = document.querySelector('.workPopup');


for (let j = 0; j < projects.length; j += 1) {

const pDiv = document.createElement('div');
pDiv.className = 'workHeader';
WorkSection.appendChild(pDiv);

const containerDiv = document.createElement('div');
containerDiv.className = 'workContainer';
pDiv.appendChild(containerDiv);

const colDiv = document.createElement('div');
colDiv.className = 'col-one';
containerDiv.appendChild(colDiv);

const pTitle = document.createElement('h2');
pTitle.textContent = projects[j].card_title;
colDiv.appendChild(pTitle);

//popup close button
const popClose = document.createElement('img');
popClose.className = 'popclose';
popClose.setAttribute('alt', 'close');
popClose.src = projects[j].imagePopClose;
containerDiv.appendChild(popClose);

  // popup close button click

popClose.addEventListener('click', ()=>{
  WorkSection.style.display = 'none';
  section.style.display = 'block';
  section.style.filter = 'blur(0)';
})



//popup ul li start

  //work article ul
  const workPopUl = document.createElement("ul");
  workPopUl.className = "work-p-links";
  colDiv.appendChild(workPopUl)
  //work article ul li
  const workPopUiLi = document.createElement("li");
  workPopUl.appendChild(workPopUiLi);

  
 

  for (let ab = 0; ab < projects[j].technology.length; ab += 1) {
    const popAncor = document.createElement('a');
    popAncor.textContent = projects[j].technology[ab];
    workPopUiLi.appendChild(popAncor);
  }

  //pop work image
  const workPopLImg = document.createElement('img');
  workPopLImg.src = projects[j].image_popup;
  colDiv.appendChild(workPopLImg);
  //pop description
  const colDiv2 = document.createElement('div');
  colDiv2.className = 'col-two';
  containerDiv.appendChild(colDiv2);

  const popDes = document.createElement('p');
  popDes.textContent = projects[j].workPopDescription;
  colDiv2.appendChild(popDes);

  //work-pop-up last two buttons
  const popBtn = document.createElement('button');
  popBtn.innerHTML = 'See Live';
  colDiv2.appendChild(popBtn);
  const popBtn2 = document.createElement('button');
  popBtn2.innerHTML = 'See Source';
  colDiv2.appendChild(popBtn2);
}
})
})



// function loadData() {
//     const worksContainer = document.querySelector('#work-section');
//     worksContainer.innerHTML = `<div class="work" id="work-section">
//     <div class="work-header">

//       <h2 class="work-title">${porject[0].head_title}</h2>
//       <div class="work-header-img"></div>
//       <img src="${porject[0].image}" alt="">
//     </div>
//     <div class="work-body">
//      <img src="#" alt="">
//       <article class="work-article">
//          <h2>${porject[0].head_title}</h2>
//          <p>${porject[0].description}</p>
//          <ul class="work-links">
//           <li><a href="#">Html</a></li>
//           <li><a href="#">Css</a></li>
//           <li><a href="#">Javascript</a></li>
//           <li><a href="#">Ruby</a></li>

//          </ul>
//          <button type="button" class="work-see-button">See Project</button>
//       </article>
//     </div>
//   </div>
// }

// //   <!--work card section start-->

// // <div class="all-cards">
// // <div class="work-card">
// // <div class="card">
// //   <h3>Profesional Art Printing Data</h3>
// //   <p class="description">A daily selections of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
// //   <ul class="card-ul">
// //     <li>html</li>
// //     <li>bootstrap</li>
// //     <li>ruby</li>
// //   </ul>
// //   <button type="button" class="card-button">See Project</button>
// // </div>
// // </div>
// // <div class="work-card">
// // <div class="card">
// //   <h3>Profesional Art Printing Data</h3>
// //   <p class="description">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
// //   <ul class="card-ul">
// //     <li>html</li>
// //     <li>bootstrap</li>
// //     <li>ruby</li>
// //   </ul>
// //   <button type="button" class="card-button">See Project</button>
// // </div>
// // </div>
// // <div class="work-card">
// // <div class="card">
// //   <h3>Profesional Art Printing Data</h3>
// //   <p class="description">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
// //   <ul class="card-ul">
// //     <li>html</li>
// //     <li>bootstrap</li>
// //     <li>ruby</li>
// //   </ul>
// //   <button type="button" class="card-button">See Project</button>
// // </div>
// // </div>
// // <div class="work-card">
// // <div class="card">
// //   <h3>Profesional Art Printing Data</h3>
// //   <p class="description">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
// //   <ul class="card-ul">
// //     <li>html</li>
// //     <li>bootstrap</li>
// //     <li>ruby</li>
// //   </ul>
// //   <button type="button" class="card-button">See Project</button>
// // </div>
// // </div>
// // <div class="work-card">
// // <div class="card">
// //   <h3>Profesional Art Printing Data</h3>
// //   <p class="description">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
// //   <ul class="card-ul">
// //     <li>html</li>
// //     <li>bootstrap</li>
// //     <li>ruby</li>
// //   </ul>
// //   <button type="button" class="card-button">See Project</button>
// // </div>
// // </div>
// // <div class="work-card">
// // <div class="card">
// //   <h3>Profesional Art Printing Data</h3>
// //   <p class="description">A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard</p>
// //   <ul class="card-ul">
// //     <li>html</li>
// //     <li>bootstrap</li>
// //     <li>ruby</li>
// //   </ul>
// //   <button type="button" class="card-button">See Project</button>
// // </div>
// // </div>
// // </div>
// // `
// }
// loadData();
