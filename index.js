const body = document.querySelector("#body");
const Menu = document.querySelector("#test");
const navbar = document.querySelector(".topnav");
const nav = document.querySelector("#navbar");
const allCard = document.getElementById("all");
const allCard1 = document.getElementById("all1");
const allCard2 = document.getElementById("all2");
const allCard3 = document.getElementById("all3");
const allCard4 = document.getElementById("all4");
const clear = document.querySelector(".total");
const lienAll = document.querySelector(".lienAll");
const lienFabric = document.querySelector(".lienFabric");
const lienDress = document.querySelector(".lienDress");
const lienBag = document.querySelector(".lienBag");
const lienShoes = document.querySelector(".lienShoes");
const allStar = document.querySelectorAll(".allStar");
const tBody = document.querySelector("#tBody");
const test = document.querySelector(".button2");
const totallll = 0;

/* __________________________________ Mes Cards_______________________________________________________________ */
for (let i = 0; i < data.length; i++) {
  if (data[i].categori === "All") {
    allCard.innerHTML += `
        <div class="w-full  max-w-sm  shadow dark:bg-gray-200 dark:border-gray-700 text-gray-950">
        <a >
            <img class="p-4 rounded-t-lg" src=${
              data[i].img
            } alt="product image" />
        </a>
        <div class="px-5 pb-5 ">
            <a> 
                <h5 class="text-xl font-semibold  text-gray-900 dark:text-black">${
                  data[i].nom
                }</h5>
            </a>
            <div class="flex mt-2.5 mb-5  p-0 gap-1 divEtoilles" data-rate="${data[i].categori}${i}" data-te-rating-init> 
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-black">${
                  data[i].prix + " F CFA"
                } </span>
                <span  ><a data-id="${i}"
                class="btnAddToCard text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">${"Add to cart"}
                 </a>
                 </span>
            </div>
        </div>
    </div>`;
    appreciation()
  }
}
/*________________________________________Click de mes bouton de produit_________________________________________________________ */
lienAll.addEventListener("click", function () {
  allCard.textContent = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].categori === "All") {
      allCard.innerHTML += `
        <div class="w-full  max-w-sm  shadow dark:bg-gray-200 dark:border-gray-700 text-gray-950">
        <a >
            <img class="p-4 rounded-t-lg" src=${
              data[i].img
            } alt="product image" />
        </a>
        <div class="px-5 pb-5 ">
            <a> 
                <h5 class="text-xl font-semibold  text-gray-900 dark:text-black">${
                  data[i].nom
                }</h5>
            </a>
            <div class="flex mt-2.5 mb-5  p-0 gap-1 divEtoilles" data-rate="${data[i].categori}${i}" data-te-rating-init>  
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-black">${
                  data[i].prix + " F CFA"
                } </span>
                <a data-id="${i}"
                   class="btnAddToCard text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">${"Add to cart"} </a>
            </div>
        </div>
    </div>`;
    appreciation()
    }
  }
});
lienFabric.addEventListener("click", function () {
  allCard.textContent = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].categori === "Tissu") {
      allCard.innerHTML += `
        <div class="w-full  max-w-sm  shadow dark:bg-gray-200 dark:border-gray-700 text-gray-950">
        <a >
            <img class="p-4 rounded-t-lg" src=${
              data[i].img
            } alt="product image" />
        </a>
        <div class="px-5 pb-5 ">
            <a> 
                <h5 class="text-xl font-semibold  text-gray-900 dark:text-black">${
                  data[i].nom
                }</h5>
            </a>
            <div class="flex mt-2.5 mb-5  p-0 gap-1  divEtoilles" data-rate="${data[i].categori}${i}" data-te-rating-init>  
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-black">${
                  data[i].prix + " F CFA"
                } </span>
                <a data-id="${i}"
                   class="btnAddToCard text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">${"Add to cart"} </a>
            </div>
        </div>
    </div>`;
    appreciation()
    }
  }
});
lienDress.addEventListener("click", function () {
  allCard.textContent = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].categori === "Robe") {
      allCard.innerHTML += `
        <div class="w-full  max-w-sm  shadow dark:bg-gray-200 dark:border-gray-700 text-gray-950">
        <a >
            <img class="p-4 rounded-t-lg" src=${
              data[i].img
            } alt="product image" />
        </a>
        <div class="px-5 pb-5 ">
            <a> 
                <h5 class="text-xl font-semibold  text-gray-900 dark:text-black">${
                  data[i].nom
                }</h5>
            </a>
            <div class="flex mt-2.5 mb-5  p-0 gap-1 divEtoilles" data-rate="${data[i].categori}${i}" data-te-rating-init>  
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-black">${
                  data[i].prix + " F CFA"
                } </span>
                <a data-id="${i}"
                   class="btnAddToCard text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">${"Add to cart"} </a>
            </div>
        </div>
    </div>`;
    appreciation()
    }
  }
});
lienBag.addEventListener("click", function () {
  allCard.textContent = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].categori === "Bag") {
      allCard.innerHTML += `
        <div class="w-full  max-w-sm  shadow dark:bg-gray-200 dark:border-gray-700 text-gray-950">
        <a >
            <img class="p-4 rounded-t-lg" src=${
              data[i].img
            } alt="product image" />
        </a>
        <div class="px-5 pb-5 ">
            <a> 
                <h5 class="text-xl font-semibold  text-gray-900 dark:text-black">${
                  data[i].nom
                }</h5>
            </a>
            <div class="flex mt-2.5 mb-5  p-0 gap-1 divEtoilles" data-rate="${data[i].categori}${i}" data-te-rating-init>  
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-black">${
                  data[i].prix + " F CFA"
                } </span>
                <a data-id="${i}"
                   class="btnAddToCard text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">${"Add to cart"} </a>
            </div>
        </div>
    </div>`;
    appreciation()
    }
  }
});
lienShoes.addEventListener("click", function () {
  allCard.textContent = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i].categori === "Shoes") {
      allCard.innerHTML += `
        <div class="w-full  max-w-sm  shadow dark:bg-gray-200 dark:border-gray-700 text-gray-950">
        <a >
            <img class="p-4 rounded-t-lg" src=${
              data[i].img
            } alt="product image" />
        </a>
        <div class="px-5 pb-5 ">
            <a> 
                <h5 class="text-xl font-semibold  text-gray-900 dark:text-black">${
                  data[i].nom
                }</h5>
            </a>
            <div class="flex mt-2.5 mb-5  p-0 gap-1 divEtoilles" data-rate="${data[i].categori}${i}" data-te-rating-init>  
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            <span class='m-0 spanStar' ><i class="fa-solid fa-star"></i></span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-black">${
                  data[i].prix + " F CFA"
                } </span>
                <a data-id="${i}"
                   class="btnAddToCard text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">${"Add to cart"} </a>
            </div>
        </div>
    </div>`;
    appreciation()
    }
  }
});

/* ____________________________________ les bouton de ma card du panier_____________________________________________________________ */
document.addEventListener("DOMContentLoaded", function () {
  const modalButtons = document.querySelectorAll("[data-modal-toggle]");
  const closeModalButtons = document.querySelectorAll("[data-modal-hide]");

  modalButtons.forEach(function (span1) {
    span1.addEventListener("click", function () {
      const targetModalId = span1.getAttribute("data-modal-target");
      const targetModal = document.getElementById(targetModalId);
      if (targetModal) {
        targetModal.classList.toggle("hidden");
      }
    });
  });

  closeModalButtons.forEach(function (span2) {
    span2.addEventListener("click", function () {
      const targetModalId = span2.getAttribute("data-modal-hide");
      const targetModal = document.getElementById(targetModalId);

      if (targetModal) {
        targetModal.classList.add("hidden");
      }
    });
  });
});

/* ____________________________________ L'ajout de mes element dans le panier____________________________________________________________ */
let tableData = [];
function addCard() {
  const btnAddToCard = document.querySelectorAll(".btnAddToCard");
  btnAddToCard.forEach((button, index) => {
    button.addEventListener("click", () => {
      tBody.innerHTML = "";
      const achat = data[index];
      const existeAchat = tableData.find(
        (element) => element.nom === achat.nom
      );
      if (existeAchat) {
        existeAchat.quantity++;
      } else {
        const object = {
          nom: achat.nom,
          img: achat.img,
          prix: achat.prix,
          quantity: 1,
          id: achat.id,
        };
        tableData.push(object);
        showToast();
      }
      localStorage.setItem("tableData", JSON.stringify(tableData));
      insertElements();
      caluculTotal();
    });
  });
}

addCard();

function insertElements() {
  let lAjout = JSON.parse(localStorage.getItem("tableData")) || [];
  tableData = lAjout;
  tBody.innerHTML = "";
  lAjout.forEach((element) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="p-3"><img class="w-8 h-8 rounded-2xl" src="${
      element.img
    }"></td> 
                    <td class="p-3">${
                      element.nom
                    }</td>                                             
                    <td class="p-3">${element.prix * element.quantity}</td>
                    <td class="p-3">${element.quantity} </td>
                    <td class="p-3">
                    <svg onclick="supprimerLigne(${
                      element.id
                    })"   class="trash cursor-pointer w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z"/>
                    </svg>
                    </td> 
                    `;
    tBody.append(tr);
  });
}
insertElements();

/* _____________________________________ Calcul de total des prix____________________________________________________________ */
let tableTotal = 0;
function caluculTotal() {
  let totalCard = JSON.parse(localStorage.getItem("tableData")) || [];
  let t = 0;
  totalCard.forEach((valeur) => {
    let total = 0;
    total = valeur.prix * valeur.quantity;
    console.log(total);
    t += total;
  });
  tableTotal = t;
  test.textContent = "total : " + tableTotal + " F CFA";
}
caluculTotal();

// Ajout de l'événements pour le clic sur tous les boutons avec la classe "supprimer"
function supprimerLigne(indexBouton) {
  let tableData = JSON.parse(localStorage.getItem("tableData"));
  // let bouton = event.target;
  // let indexBouton = bouton.getAttribute("data-id");
  console.log(indexBouton);
  // supprimer l'élément correspondant de tableData
  if (indexBouton !== null) {
    const newtable = tableData.filter((element) => element.id !== indexBouton);
    // console.log(newtable);
    localStorage.setItem("tableData", JSON.stringify(newtable));
  }
  insertElements();

  // recalcul le total
  caluculTotal();
}

// navbar
Menu.addEventListener("click", function () {
  navbar.classList.toggle('topnav');
  navbar.classList.add('flex-col')
});

// filtre de recherche
function recherche(e) {
  allCard.innerHTML = "";
  data.forEach((element) => {
    if (element.categori.toLowerCase().includes(e)) {
      allCard.innerHTML += `
        <div class="w-full  max-w-sm  shadow dark:bg-gray-200 dark:border-gray-700 text-gray-950">
        <a >
            <img class="p-4 rounded-t-lg" src=${
              element.img
            } alt="product image" />
        </a>
        <div class="px-5 pb-5 ">
            <a> 
                <h5 class="text-xl font-semibold  text-gray-900 dark:text-black">${
                  element.nom
                }</h5>
            </a>
            <div class="flex items-center mt-2.5 mb-5">
            <ul class="my-1 flex list-none gap-1 p-0" data-te-rating-init>
            <li>
              <span
                class="text-primary [&>svg]:h-5 [&>svg]:w-5"
                title="Bad"
                data-te-rating-icon-ref>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </span>
            </li>
            <li>
              <span
                class="text-primary [&>svg]:h-5 [&>svg]:w-5"
                title="Poor"
                data-te-rating-icon-ref>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </span>
            </li>
            <li>
              <span
                class="text-primary [&>svg]:h-5 [&>svg]:w-5"
                title="OK"
                data-te-rating-icon-ref>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </span>
            </li>
            <li>
              <span
                class="text-primary [&>svg]:h-5 [&>svg]:w-5"
                title="Good"
                data-te-rating-icon-ref>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </span>
            </li>
            <li>
              <span
                class="text-primary [&>svg]:h-5 [&>svg]:w-5"
                title="Excellent"
                data-te-rating-icon-ref>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
              </span>
            </li>
          </ul>
                <span
                    class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
            </div>
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-gray-900 dark:text-black">${
                  element.prix + " F CFA"
                } </span>
                <a
                   class="btnAddToCard text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">${"Add to cart"} </a>
            </div>
        </div>
    </div>`;
    }
  });
}
// input de recherche
const inputSearch = document.getElementById("Search");
inputSearch.addEventListener("input", function () {
  let searchText = inputSearch.value.toLowerCase();
  recherche(searchText);
});
function showToast() {
  let toast = document.getElementById("toast-simple");
  toast.style.display = "flex";
  // minuteur
  setTimeout(function () {
    toast.style.display = "none";
  }, 1000);
}

// Récupérer le contenu et  de le vider en cliquant sur clear card
const viderLeContenu = document.getElementById("clear");
viderLeContenu.addEventListener("click", function () {
  let tBodyElement = document.getElementById("tBody");
  tBodyElement.innerHTML = "";
  test.textContent = "total : 0 " + " F CFA";

  localStorage.clear();
});


// ------------------Ajouter un gestionnaire d'événements à chaque étoile------------------------------------------------------
function appreciation() {
  const divEtoilles = document.querySelectorAll('.divEtoilles');
divEtoilles.forEach((span, cardIndex) => {
 const dataRate = span.getAttribute('data-rate')
 const star = [...span.children];
 star.filter(child => child.classList === 'spanStar');
//  console.log(star);
 star.forEach((starItem, starIndex) => {
  starItem.addEventListener('click', () =>{
    star.forEach((starsss, index) => {
      starIndex >= index ? starsss.classList.add('spanCouleur') : starsss.classList.remove('spanCouleur')
    });

    let spanRotio = Array.from(star).map(star => star.classList.contains('spanCouleur'));
    localStorage.setItem(dataRate,JSON.stringify(spanRotio))
  })
   const getStar = JSON.parse(localStorage.getItem(dataRate))
 if (getStar && getStar.length === star.length) {
  if (getStar[starIndex]) {
    starItem.classList.add('spanCouleur');
  }else{
    starItem.classList.remove('spanCouleur');
  }
 }
 });
});
}
appreciation()