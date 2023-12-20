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
            <div class="flex items-center mt-2.5 mb-5"> 
<ul class="my-1 flex list-none gap-1 p-0" data-te-rating-init>
  <li>
    <span
      class="text-primary [&>svg]:h-5 [&>svg]:w-5"
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
                  data[i].prix + " F CFA"
                } </span>
                <span  ><a data-id="${i}"
                class="btnAddToCard text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">${"Add to cart"}
                 </a>
                 </span>
            </div>
        </div>
    </div>`;
  }
}
/*_________________________________________________________________________________________________ */
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
                  data[i].prix + " F CFA"
                } </span>
                <a data-id="${i}"
                   class="btnAddToCard text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">${"Add to cart"} </a>
            </div>
        </div>
    </div>`;
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
                  data[i].prix + " F CFA"
                } </span>
                <a data-id="${i}"
                   class="btnAddToCard text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">${"Add to cart"} </a>
            </div>
        </div>
    </div>`;
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
                  data[i].prix + " F CFA"
                } </span>
                <a data-id="${i}"
                   class="btnAddToCard text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">${"Add to cart"} </a>
            </div>
        </div>
    </div>`;
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
                  data[i].prix + " F CFA"
                } </span>
                <a data-id="${i}"
                   class="btnAddToCard text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">${"Add to cart"} </a>
            </div>
        </div>
    </div>`;
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
                  data[i].prix + " F CFA"
                } </span>
                <a data-id="${i}"
                   class="btnAddToCard text-white cursor-pointer focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">${"Add to cart"} </a>
            </div>
        </div>
    </div>`;
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
    tBody.innerHTML = '';
    const achat = data[index];
    const existeAchat = tableData.find((element) => element.nom === achat.nom);
    if (existeAchat) {
      existeAchat.quantity++;
    } else {
      const object = {
        nom: achat.nom,
        img: achat.img,
        prix: achat.prix,
        quantity: 1,
        id: achat.id
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

addCard()

function insertElements() {
  let lAjout = JSON.parse(localStorage.getItem("tableData")) || [];
  tableData = lAjout;
  tBody.innerHTML = ''
  lAjout.forEach((element ) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td class="p-3"><img class="w-8 h-8 rounded-2xl" src="${element.img}"></td> 
                    <td class="p-3">${element.nom}</td>                                             
                    <td class="p-3">${element.prix * element.quantity}</td>
                    <td class="p-3">${element.quantity} </td>
                    <td class="p-3">
                    <svg onclick="supprimerLigne(${element.id})"   class="trash cursor-pointer w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
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

// boutonsSupprimer = document.querySelectorAll(".trash");

// boutonsSupprimer.forEach(function (bouton) {
//   bouton.addEventListener("click", (event) =>{
//     supprimerLigne(event)
//   });
// });
function supprimerLigne(indexBouton) {
  let tableData = JSON.parse(localStorage.getItem("tableData"));
  // let bouton = event.target;
  // let indexBouton = bouton.getAttribute("data-id");
   console.log(indexBouton);
  // supprimer l'élément correspondant de tableData
  if (indexBouton !== null) {
    const newtable = tableData.filter(element=>element.id !== indexBouton)
    
    console.log(newtable);
    localStorage.setItem("tableData", JSON.stringify(newtable));
  }

  // Supprimer la ligne HTML correspondante
  insertElements();

  // recalcul le total
  caluculTotal();
}


// navbar
Menu.addEventListener("click", function () {
  Menu.innerHTML = `
<button data-modal-target="static-modal" data-modal-toggle="static-modal"
class="block text-white bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
type="button">
<img class="w-5 m-auto" src="./images/shopping-cart.png" alt="">
</button>

<!-- Main modal -->
<div id="static-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true"
class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-end items-end w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
<div class="relative p-4 w-full max-w-2xl max-h-full">
    <!-- Modal content -->
    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <!-- Modal header -->
        <div
            class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-300">SHOPPNG CARD</h3>
            <button type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="static-modal">
                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span class="sr-only">Close modal</span>
            </button>
        </div>
        <!-- Modal body -->
        <div class="tBody p-4 md:p-5 space-y-4 ">
            <table class="w-full">
                <tbody id="tBody" class="text-red-200"></tbody>
            </table>
        </div>
        <!-- Modal footer -->
        <div
            class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            <span data-modal-hide="static-modal" type="button"
                class="button1 text-white bg-zinc-400 hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Close</span>
            <span data-modal-hide="static-modal" type="button " id="totalSpan"
                class="button2 h-10  ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"></span>
        </div>
    </div>
</div>
</div>
`;
});

// input de recherche
const inputSearch = document.getElementById('Search')
inputSearch.addEventListener('input', function (){
  let searchText = searchInput.value.toLowerCase();
})

function showToast() {
  let toast = document.getElementById("toast-simple");
  toast.style.display = "flex";
  // minuteur
  setTimeout(function () {
    toast.style.display = "none";
  }, 1000);
}


