const body = document.body;
const bgColorsBody = ['#31E1F7', '#D800A6', '#F57328', '#367E18', '#533483'];
const menu = body.querySelector('.menu');
const menuItems = menu.querySelectorAll('.menu__item');
const menuBorder = menu.querySelector('.menu_border')

let activeItem = menu.querySelector('.active');

menuItems.forEach((item,index) => {
    item.addEventListener('click', () => clickItem(item, index));
});

const clickItem = (item, index) => {

   if (activeItem == item) return;
    if (activeItem) activeItem.classList.remove("active");

    item.classList.add('active');
    body.style.backgroundColor = bgColorsBody[index];
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);
}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}



menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));
    
})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});


