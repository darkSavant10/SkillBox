//              SLIDER

const image = document.querySelectorAll('.slider__image img');
let currentImage = 0;
const dots = document.querySelectorAll('.dot');

const arrowRight = document.querySelector('#right');
arrowRight.addEventListener('click', function () {
    for (let i = 0; i < image.length; ++i) {
        image[i].classList.add('opacity');
    }
    ++currentImage;

    if(currentImage > 4) {
        currentImage = 0;
    }

    for (let j = 0; j < dots.length; ++j) {
        dots[j].classList.remove('active');
    }
    dots[currentImage].classList.add('active')

    image[currentImage].classList.remove('opacity');
})

const arrowLeft = document.querySelector('#left');
arrowLeft.addEventListener('click', function () {
    for (let i = 0; i < image.length; ++i) {
        image[i].classList.add('opacity');
    }

    --currentImage;
    if(currentImage < 0) {
        currentImage = 4;
    }

    for (let j = 0; j < dots.length; ++j) {
        dots[j].classList.remove('active');
    }
    dots[currentImage].classList.add('active');

    image[currentImage].classList.remove('opacity');
})

for (let i = 0; i < dots.length; ++i) {
    dots[i].addEventListener('click', function () {
        for (let j = 0; j < dots.length; ++j) {
            dots[j].classList.remove('active');
        }
        dots[i].classList.add('active');
        for (let z = 0; z < image.length; ++z) {
            image[z].classList.add('opacity');
        }
        currentImage = i;
        image[currentImage].classList.remove('opacity')
    })
}



//              INPUTS

const name = document.querySelector('.name');
const phone = document.querySelector('.phone');
const eMail = document.querySelector('.e-mail');
const form = document.querySelector('.form__container');
const nameErr = document.querySelector('.nameErr');
const phoneErr = document.querySelector('.phoneErr');
const eMailErr = document.querySelector('.e-mailErr');
const emptyName = document.querySelector('.emptyName');
const emptyPhone = document.querySelector('.emptyPhone');
const emptyEmail = document.querySelector('.emptyEmail');




form.addEventListener('submit', (e) => {

    e.preventDefault();
    checkInputsEmptiness(name);
    checkInputsEmptiness(phone);
    checkInputsEmptiness(eMail);
    checkName();
    checkPhone();
    checkEmail();
})

function checkInputsEmptiness(input) {
    let classes = input.classList;
    if(input.value) {
        if (classes.contains('error')) {
            classes.remove('error');
            classes.add('input');
            switch (input) {
                case name:
                    emptyName.style.display = 'none';
                    break;
                case phone:
                    emptyPhone.style.display = 'none';
                    break;
                case eMail:
                    emptyEmail.style.display = 'none';
                    break;
            }
        }
    } else {
        classes.remove('input');
        classes.add('error');
        switch (input) {
            case name:
                emptyName.style.display = 'block';
                break;
            case phone:
                emptyPhone.style.display = 'block';
                break;
            case eMail:
                emptyEmail.style.display = 'block';
                break;
        }
    }
}

function checkEmail() {
    if(eMail.value) {
        if (!eMail.value.includes('@') || !eMail.value.includes('.') || eMail.value.trim() !== eMail.value) {
            eMail.classList.remove('input');
            eMail.classList.add('error');
            eMailErr.style.display = 'block';
        } else {
            eMailErr.style.display = 'none';
        }
    }
}

function checkPhone() {
    if(phone.value) {
        let check = /^[+]\d{3}[ -][\(]\d{2}[\)][ -]\d{2}[\-]\d{2}[\-]\d{2}/.test(phone.value);
        if(!check || phone.value.trim() !== phone.value) {
            phone.classList.remove('input');
            phone.classList.add('error');
            phoneErr.style.display = 'block';
        } else {
            phoneErr.style.display = 'none';
        }
    }
}

function checkName() {
    if (name.value) {
        let nameCheck = /^[A-Za-z][А-ЯЁ][а-яё]*$+$/.test(name.value);
        if (!nameCheck) {
            name.classList.remove('input');
            name.classList.add('error');
            nameErr.style.display = 'block';
        } else {
            nameErr.style.display = 'none';
        }
    }
}



//              FAQ

const faqBlocks = document.querySelectorAll('.question__block');
const answerBlocks = document.querySelectorAll('.answer');
const crosses = document.querySelectorAll('.cross');

for (let i = 0; i < faqBlocks.length; ++i) {
    for (let j = 0; j < answerBlocks.length; ++j) {
        faqBlocks[i].addEventListener('click', function () {
            if (i === j) {
                if (answerBlocks[j].classList.contains('active')) {
                    answerBlocks[j].classList.remove('active');
                    crosses[j].classList.remove('opened');
                    crosses[j].classList.add('closed')
                } else {
                    answerBlocks[j].classList.add('active');
                    crosses[j].classList.remove('closed')
                    crosses[j].classList.add('opened');
                }
            }
        })
    }
}



//              SCROLL

const priceButton = document.querySelector('#price');
const headButton = document.querySelector('#head');
const priceSection = document.querySelector('.section5');
const headSection = document.querySelector('.section');

function scrollTo(el) {
    window.scroll({
        left: 0,
        top: el.offsetTop,
        behavior: "smooth"
    })
}

priceButton.addEventListener('click', function () {
    scrollTo(priceSection)
})

headButton.addEventListener('click', function () {
    scrollTo(headSection)
})

//              Resize block
//              ADD block

const addBlock = document.querySelector('.add');
const video = document.querySelector('.youtube');
const infoSection = document.querySelector('.section__info');
const videoSection = document.querySelector('.section__video');
const videoSectionText = document.querySelector('.section__video_text');
const miniTitle = document.querySelector('.section__video_text_title');
const info = document.querySelector('.section__video_text_info');
const header = document.querySelector('.header');
const container = document.querySelector(".section__container");


window.addEventListener('resize', function (e) {
    let viewport_width = Math.min(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width <= 1360) {
        header.style.width = viewport_width + "px";
        container.style.maxWidth = viewport_width - 260 + "px";
        if (viewport_width <= 1080) {
            addBlock.style.width = viewport_width - 60 + "px";
            video.classList.remove('youtube');
            videoSection.classList.remove('section__video');
            videoSection.classList.add('section__video__phoneV');
            infoSection.classList.remove('section__info');
            infoSection.classList.add('section__info__phoneV');
            videoSectionText.classList.remove('section__video_text');
            videoSectionText.classList.add('section__video_text_phoneV');
            let parent = miniTitle.parentNode;
            parent.insertBefore(info, miniTitle);
        }
    }
})










