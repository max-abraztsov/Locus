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
          nameInput = document.querySelectorAll('[name="name"]'),
          emailInput = document.querySelectorAll('[name="email"]'),
          descInput = document.querySelectorAll('[name="description"]');

    async function workWithNewData (url, method, headers,body){
        const newData = await fetch(url, {
            method:method,
            headers:headers,
            body:JSON.stringify(body),
        });
        return await newData.json();
    }

    postData(form);

    function postData(form){
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const bodyData = {
                name:'',
                email:'',
                description:''
            }

            const localData = {
                name:'',
                email:'',
            }

            function eachInput(inputs, property){
                inputs.forEach( item => {
                    if (item.value){
                        bodyData[property] = item.value;
                        if (property != 'description'){
                            localData[property] = item.value;
                        }
                    }
                });
            }

            eachInput(nameInput, 'name');
            eachInput(emailInput, 'email');
            eachInput(descInput, 'description');

            console.log(bodyData);
            console.log(localData);

            if (JSON.parse(localStorage.getItem(localData.name)) != localData.name && JSON.parse(localStorage.getItem(localData.email)) != localData.email ){
                localStorage.setItem(localData.name.substr(0,3) + Math.random().toFixed(4), JSON.stringify(localData));
            }

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


    // Modal

    const buttonHome = document.querySelector('.home__button'),
          modalElem = document.querySelector('.modal'),
          modalClose = modalElem.querySelector('.modal__close'),
          modalForm =modalElem.querySelector('#modal__form');

    postData(modalForm);
    closeModal();

    function openModal(){
        modalElem.style.display = `block`;
        document.body.style.overflow = 'hidden';
        
    }

    function closeModal(){
        modalElem.style.display = 'none';
        document.body.style.overflow = '';
    }

    buttonHome.addEventListener('click', openModal);
    modalClose.addEventListener('click', closeModal);


});