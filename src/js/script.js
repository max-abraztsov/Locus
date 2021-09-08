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
          footer = document.querySelector('.footer'),
          menuBurgerTab = document.querySelector('.header__burger');

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
            menuBurgerTab.classList.remove('active');
            navigation.classList.remove('active');

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



    // Menu-burger
    const navigationBurger = document.querySelector('.header__navigation'),
          menuBurger = document.querySelector('.header__burger');

    menuBurger.addEventListener('click', (e) => {
        menuBurger.classList.toggle('active');
        navigationBurger.classList.toggle('active');
        document.body.classList.toggle('lock');
    });



    //PostData
    const form = document.querySelector('.footer__form form'),
          nameInput = form.querySelector('[name="name"]'),
          emailInput = form.querySelector('[name="email"]'),
          descInput = form.querySelector('[name="description"]'),
          buttonHome = document.querySelector('.home__button');

    async function workWithNewData (url, method, headers,body){
        const newData = await fetch(url, {
            method:method,
            headers:headers,
            body:JSON.stringify(body),
        });
        return await newData.json();
    }

    postData(form);
    modal()

    function postData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const bodyData = {
                name:nameInput.value,
                email:emailInput.value,
                description:descInput.value
            }
            // //Для работы с FormData
            // const formData = new FormData();
            // const convertJson = JSON.stringify(Object.fromEntries(formData.entries()));
            const localData = {
                name:nameInput.value,
                email:emailInput.value,
            }
            localStorage.setItem(localData.name, JSON.stringify(localData));

            workWithNewData('https://jsonplaceholder.typicode.com/users',
            'POST',
            {'Content-Type':'application/json'},
            bodyData)
            .then(data => {
                console.log(data);
            }).catch(() => {
                console.error('Error');
            }).finally(() => {
                form.reset();
            })
        });
    }
    function modal(){
        const modalElem = document.createElement('div');
        modalElem.innerHTML = form.outerHTML;
        console.log(modalElem.innerHTML);
    }

});