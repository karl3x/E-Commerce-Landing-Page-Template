//HORIZONTAL SCROLL FOR FEATURED ITEMS CONTAINER
const featuredItemsBtnScrollLeft = [...document.querySelectorAll("#featured-items-scroll-left")];
const featuredItemsBtnScrollRight = [...document.querySelectorAll("#featured-items-scroll-right")];
const featuredProductsContainer = [...document.querySelectorAll(".featured-products-container")];

featuredProductsContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    featuredItemsBtnScrollRight[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        
        if(item.scrollLeft > containerWidth){
            featuredItemsBtnScrollLeft[i].style.visibility = "visible";
            featuredItemsBtnScrollRight[i].style.visibility = "hidden";
        }
        else if(item.scrollLeft < containerWidth){
            featuredItemsBtnScrollLeft[i].style.visibility = "visible";
        }
    })

    featuredItemsBtnScrollLeft[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;

        if(item.scrollLeft < containerWidth){
            featuredItemsBtnScrollLeft[i].style.visibility = "hidden";
            featuredItemsBtnScrollRight[i].style.visibility = "visible";
        }
        else if(item.scrollLeft > containerWidth){
            featuredItemsBtnScrollRight[i].style.visibility = "visible";
        }
    })
})