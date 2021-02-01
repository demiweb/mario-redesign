let headerList = [...document.querySelectorAll('.mario-header__header-navigation > ul > li')];
let headerLanguage = [...document.querySelectorAll('.mario-header__site-language > a ')][0];
let headerLanguageCont = [...document.querySelectorAll('.mario-header__site-language')][0];
let headerBurgerBtn = [...document.querySelectorAll('.mario-header__burger-btn-mob')][0];
let headerNav = [...document.querySelectorAll('.mario-header__header-navigation')][0];
let burgerBtn = [...document.querySelectorAll('.mario-header__burger-btn-mob')][0];
let marioShop = [...document.querySelectorAll('.mario-internet-shop')];
let marioHeaderContacts = document.querySelector('.mario-contacts-header');
let marioHeaderContactsLi = [...marioHeaderContacts.querySelectorAll('ul > li')];
let marioHeaderContactsUl = marioHeaderContacts.querySelector('ul');
let marioHeaderContactsP = marioHeaderContacts.querySelector('ul ~ p');
let totalItemsAnimHeader = [];


let currentHeight = document.body.clientHeight;



headerList.forEach((item) => {
    totalItemsAnimHeader.push(item);
});
totalItemsAnimHeader.push(marioShop[0]);

[...marioShop[0].children].forEach((item) => {
    totalItemsAnimHeader.push(item);
});

totalItemsAnimHeader.push(marioHeaderContacts);
totalItemsAnimHeader.push(marioHeaderContactsUl);
marioHeaderContactsLi.forEach((item) => {
    totalItemsAnimHeader.push(item);
});

totalItemsAnimHeader.push(marioHeaderContactsP);
window.addEventListener('resize', () => {
    if (document.body.clientWidth > 768) {
        headerList.forEach((li) => {
            li.style.opacity = '1';
        })
        document.body.classList.remove('scroll-hidden');
    } else if (document.body.clientWidth < 768) {
        if (headerBurgerBtn.classList.contains('active-burger-btn')) {
            document.body.classList.add('scroll-hidden');

            if (currentHeight !== document.body.clientHeight || currentHeight === document.body.clientHeight) {

            } else {

                totalItemsAnimHeader.forEach((li) => {
                    li.style.opacity = '0';
                })
            }
        } else {
            totalItemsAnimHeader.forEach((li) => {
                li.style.opacity = '0';
            })
        }


    }
})

function liVisibility() {
    totalItemsAnimHeader.forEach((li, i) => {
        li.style.transform = 'translate(0, 25px)';
        li.style.opacity = '0';

        li.style.animation = '';
        if (!burgerBtn.classList.contains('active-burger-btn')) {
            li.style.opacity = '0';
            li.style.animation = '';
            headerLanguageCont.style.opacity = '0';


        } else {
            setTimeout(() => {

                li.style.opacity = '1';
                let time = 75 * (i + 1);
                li.style.transform = 'translate(0, 25px)';
                li.style.opacity = '0';
                setTimeout(() => {
                    li.style.animation = 'fadeingTopLi 0.6s ease-in-out';
                    headerLanguageCont.style.opacity = '1';
                }, time);

                setTimeout(() => {
                    li.style.transform = 'translate(0, 0)';
                    li.style.opacity = '1';
                    li.style.animation = '';
                }, time)

            }, 400)
        }


    })

}

document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown-open-lang')) {
        headerLanguage.classList.remove('dropdown-open-lang');
    } else {
    }
})
headerLanguage.addEventListener('click', () => {
    headerLanguage.classList.toggle('dropdown-open-lang');
})

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active-burger-btn');
    document.body.classList.toggle('scroll-hidden');
    headerNav.style.animation = 'navFading 0.4s linear'

    if (!burgerBtn.classList.contains('active-burger-btn')) {
        headerNav.style.animation = 'navFadingReverse 0.4s linear';
        totalItemsAnimHeader.forEach((li) => {
            li.style.opacity = '0';
            li.style.animation = '';
            headerLanguageCont.style.opacity = '0';
        })
    } else {
        liVisibility();
    }


});

let subHeadMenu = document.querySelector('.mario-subheader-menu');
let oldScrollPos = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
document.addEventListener('scroll', (e) => {
    if (!subHeadMenu) {

    } else {
        // console.log(oldScrollPos);
        let newScrollPos = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
        // console.log(e.deltaY);
        if (newScrollPos > oldScrollPos) {
            setTimeout(() => {
                subHeadMenu.style.transform = 'translate(0, -120px)';
            }, 400);


        } else {

            setTimeout(() => {
                subHeadMenu.style.transform = 'translate(0, 0)';
            }, 400);

        }

        oldScrollPos = newScrollPos;
    }


});


let headerLiPopups = [...document.querySelectorAll('.has-popup a')];
let popupCloseBtn = [...document.querySelectorAll('.close-btn-popup')];

headerLiPopups.forEach((li) => {
    li.addEventListener('click', (event)=> {
        event.preventDefault();
        let liId = li.id;
        let popUpModal = document.querySelector(`.${liId}`);
        console.log(popUpModal);
        popUpModal.classList.add('popup-visible');
    })
});

popupCloseBtn.forEach((cls) => {
    cls.addEventListener('click', () => {
        let closestPopup = cls.closest('.popup-mario');
        closestPopup.classList.add('hidding');
        setTimeout(() => {
            closestPopup.classList.remove('popup-visible');
            closestPopup.classList.remove('hidding');
        }, 1200)
    })
})