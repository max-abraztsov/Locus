import '../scss/zero.scss';
import '../css/style.css';
import '../scss/style.scss';
import '../img/logo.png';
import '../img/inside.jpg';
import "../img/Play.png";
import "../img/main-img.png";
import "../img/visual.jpg";
import "../img/circle-rect.png";
import "../img/circle.png";
import "../img/circle-rect2.png";
import "../img/logos1.png";
import "../img/logos2.png";
import "../img/logos3.png";
import "../img/logos4.png";
import "../img/expirience.jpg";
import "../img/backtic.png";


window.addEventListener('DOMContentLoaded', () => {
    
    // Tabs and scroll in navigation
    const navigation = document.querySelector('.header__navigation'),
          itemsChildren = navigation.querySelectorAll('.header__item'),
          underLine = navigation.querySelector('.header__under'),
          projects =document.querySelector('.projects'),
          footer = document.querySelector('.footer');

    underLine.style.width = `${itemsChildren[0].offsetWidth}px`;

    function removeClass(){
        itemsChildren.forEach( item => {
            item.classList.remove('active__item');
        });
    }

    function scrollTo(elem){
        setTimeout(() =>{
            window.scroll({
                left:0,
                top:elem.offsetTop,
                behavior:'smooth'
            }); 
        }, 500);
    }

    itemsChildren.forEach( item => {
        item.addEventListener('click', () => {
            removeClass();
            
            item.classList.add('active__item');

            underLine.style.cssText = `
                width: ${item.offsetWidth}px;
                transition: 0.4s ease-in-out;
                margin-left: ${item.offsetLeft}px;
            `;
           
            if (item.textContent == "Contact"){
                scrollTo(footer);
            } else if (item.textContent == "About Us"){
                scrollTo(projects);
            } else {
                scrollTo(document);
            }
        });
    });
});