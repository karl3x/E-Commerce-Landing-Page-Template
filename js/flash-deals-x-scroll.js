//HORIZONTAL SCROLL FOR FLASH DEALS CONTAINER
const flashBtnScrollLeft = [...document.querySelectorAll("#flash-scroll-left")];
const flashBtnScrollRight = [...document.querySelectorAll("#flash-scroll-right")];
const productContainer = [...document.querySelectorAll(".flash-deals-product-container")];

productContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    flashBtnScrollRight[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        
        if(item.scrollLeft < containerWidth){
            flashBtnScrollLeft[i].style.visibility = "visible";
            flashBtnScrollRight[i].style.visibility = "hidden";
        }
    })

    flashBtnScrollLeft[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;

        if(item.scrollLeft < containerWidth){
            flashBtnScrollLeft[i].style.visibility = "hidden";
            flashBtnScrollRight[i].style.visibility = "visible";
        }
    })
})

