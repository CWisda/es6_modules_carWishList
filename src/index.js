import WishList from "./wishlist";

//selecting the html elements to use in JS

const submitForm = document.querySelector("#submitForm");
const makeInput = document.querySelector("#makeInput");
const modelInput = document.querySelector("#modelInput");
const yearInput = document.querySelector("#yearInput");
const carMakePara = document.querySelector("#car-make");
const carModelPara = document.querySelector("#car-model");
const carYearPara = document.querySelector("#car-year");
const removeBtn = document.querySelector(".removeBtn");
const wishListUl = document.querySelector("#wishListContainer > ul");


const wishList = new WishList();

submitForm.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);

function showCarDetails (car) {
    carMakePara.textContent = car.make;
    carModelPara.textContent = car.model
    carYearPara.textContent = car.year;
    //enable the remove button
    removeBtn.disabled = false;
    //storing information on the DOM button to be accessed later
    removeBtn.setAttribute("data-carId", car.id);
}
  
function updateDOMList() {
    //clear out any previous stuff from the UL
    wishListUl.textContent = "";
    //iterate over list of cars 
    wishList.list.forEach((car) => {
        const tempLi = document.createElement("li");
        tempLi.textContent = `${car.make} : ${car.model}`;
        tempLi.addEventListener("click", () => showCarDetails(car));
        wishListUl.append(tempLi);       
    });
}

//takes in an event - event handler function
function addCar(event) {
  // done for submit event
  event.preventDefault(); // Prevent the default form submission behavior
  wishList.add(makeInput.value, modelInput.value, yearInput.value); // Call wishlist.add with input values
  updateDOMList(wishList); // Update the DOM list
}


//   const makeInput = document.querySelector("makeInput");
//   const modelInput = document.querySelector("modelInput");
//   const yearInput = document.querySelector("yearInput");

//   const make = makeInput.value;
//   const model = modelInput.value;
//   const year = yearInput.value;

function removeCar () {
    const carId = removeBtn.getAttribute("data-carId");
    wishList.remove(carId);
    updateDOMList();
    carMakePara.textContent = "";
    carModelPara.textContent = "";
    carYearPara.textContent = "";
    removeBtn.disable = true;
}



