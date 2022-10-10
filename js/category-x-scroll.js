//HORIZONTAL SCROLL FOR CATEGORY CONTAINER
const categoryBtnScrollLeft = [...document.querySelectorAll("#category-scroll-left")];
const categoryBtnScrollRight = [...document.querySelectorAll("#category-scroll-right")];
const categoryContainer = [...document.querySelectorAll(".categories-pg-container")];

categoryContainer.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    categoryBtnScrollRight[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
        
        if(item.scrollLeft < containerWidth){
            categoryBtnScrollLeft[i].style.visibility = "visible";
            categoryBtnScrollRight[i].style.visibility = "hidden";
        }
    })

    categoryBtnScrollLeft[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;

        if(item.scrollLeft < containerWidth){
            categoryBtnScrollLeft[i].style.visibility = "hidden";
            categoryBtnScrollRight[i].style.visibility = "visible";
        }
    })
})