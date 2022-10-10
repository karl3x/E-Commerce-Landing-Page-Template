//OPENING POP-UP CONTAINER FOR CART
const openCartContainer = document.getElementById("cart-icon");
const cartContainer = document.getElementById("cart-container");

openCartContainer.addEventListener('mouseover', () => cartContainer.classList.add("active"))
cartContainer.addEventListener('mouseleave', () => cartContainer.classList.remove("active"))

window.addEventListener('mouseup', (e) => {
    if(e.target != cartContainer && e.target != openCartContainer){
        cartContainer.classList.remove("active")
    }
})

window.addEventListener('resize', (e) => cartContainer.classList.remove("active"))

//OPENING SEARCH BAR CONTAINER FOR RESPONSIVE DESIGN
const openSearchBarContainer = document.getElementById("search-icon-res");
const searchBarContainer = document.getElementById("search-bar-res-container");


openSearchBarContainer.addEventListener('click', () => searchBarContainer.classList.toggle("active-search-bar"))

window.addEventListener('resize', (e) => searchBarContainer.classList.remove("active-search-bar"))

