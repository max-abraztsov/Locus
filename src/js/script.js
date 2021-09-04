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


    // Tabs in navigation
    const navigation = document.querySelector('.header__navigation'),
          itemsParent = document.querySelector('.header__items'),
          itemsChildren = document.querySelectorAll('.header__item'),
          underLine = navigation.querySelector('.header__under');

    underLine.style.width = `${itemsChildren[0].offsetWidth}px`;

    itemsChildren.forEach(item => {
        item.addEventListener('click', () => {

            function getWidth(){
                let widthElem = item.offsetWidth;
                let leftElem = item.offsetLeft;
                underLine.style.width = widthElem + 'px';
                underLine.style.transition = '0.4s ease-in-out';
                underLine.style.marginLeft = `${leftElem}px`;
            }

            itemsChildren.forEach( item => {
                item.classList.remove('active__item');
            });

            item.classList.add('active__item');
            getWidth();
        });
    });
});