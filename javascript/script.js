const burger = document.querySelector('.burger');
const headerNav = document.querySelector('.nav-links');

burger.addEventListener('click', function() {
    headerNav.classList.toggle('active');
    burger.classList.toggle('rotated');
});

const videos = document.querySelectorAll('.video');
const playBtns = document.querySelectorAll('.video-btn');

playBtns.forEach(function (el, ind) {
    el.addEventListener('click', function() {
        if (videos[ind].paused) {
            el.style.opacity = 0;
        }
        videos[ind].play();
    });
});

videos.forEach((el, index)=> {
    el.addEventListener('timeupdate', function(e) {
        if (el.ended) {
            playBtns[index].style.opacity = 1;
        }
    });
})

// Video Slider
const videoSlider = document.querySelector('.video-slider');
const videoScreen = document.querySelectorAll('.video-screen-container');
const sliderVideos = document.querySelectorAll('.services-video');
const servicesSliderVideos = document.querySelector('.services-video-slider');
const btnLeft = document.querySelector('.btn-left');
const btnRight = document.querySelector('.btn-right');
let videoIndex = 0;
let videoWidth;
let videoHeight;

btnRight.addEventListener('click', function() {
    videoWidth = videoScreen[0].offsetWidth;
    videoIndex += 1;
    if (videoIndex > sliderVideos.length-1) {
        videoIndex = 0;
        videoSlider.style.transform = `translateX(0px)`;
    } else {
        videoSlider.style.transform = `translateX(${-(videoWidth*videoIndex + 30)}px)`;
    }
});

btnLeft.addEventListener('click', function() {
    videoWidth = videoScreen[0].offsetWidth;
    videoIndex -= 1;

    if (videoIndex < 0) {
        videoIndex = sliderVideos.length-1;
        videoSlider.style.transform = `translateX(${-(videoWidth*videoIndex + 30)}px)`;
    } else {
        videoSlider.style.transform = `translateX(0px)`;
    }
});

const worksFilter = document.querySelector('.works-filter');
const worksItems = document.querySelectorAll('.work-item');

worksFilter.addEventListener('click', function(e) {
    if (e.target.classList.contains('works-nav-link') && !e.target.classList.contains('active')) {
        worksFilter.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');

        const target = e.target.getAttribute('data-filter');

        worksItems.forEach((item) => {
            // console.log(item.getAttribute('data-attr'));
            if (target === item.getAttribute('data-attr') || target === "all") {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        })
    }
});

const testimonialBlock = document.querySelector('.testimonials-block');
const testimonialSlider = document.querySelector('.testimonials-slider');
const tSliderInner = document.querySelectorAll('.testimonials-slider-inner');

const tSliderRightBtn = document.querySelector('.t-btn-right');
const tSliderLeftBtn = document.querySelector('.t-btn-left');

let testiIndex = 0;

tSliderRightBtn.addEventListener('click', function() {
    let tSliderWidth = testimonialBlock.offsetWidth;
    testiIndex += 1;
    if (testiIndex > tSliderInner.length-1) {
        testiIndex = 0;
        testimonialSlider.style.transform = `translateX(0)`;
        sliderToggle(testiIndex);
    } else {
        testimonialSlider.style.transform = `translateX(${-tSliderWidth * testiIndex}px)`;
        sliderToggle(testiIndex);
    }
});

tSliderLeftBtn.addEventListener('click', function() {
    let tSliderWidth = testimonialBlock.offsetWidth;
    testiIndex -= 1;
    if (testiIndex < 0) {
        testiIndex = tSliderInner.length-1;
        testimonialSlider.style.transform = `translateX(${-tSliderWidth * testiIndex}px)`;
        sliderToggle(testiIndex);
    } else {
        testimonialSlider.style.transform = `translateX(0)`;
        sliderToggle(testiIndex);
    }
});

window.addEventListener('load', function() {
    document.body.style.opacity = 1;
    videoScreen.forEach((el, i)=> {
        el.style.width = `${servicesSliderVideos.offsetWidth * 0.74}px`;
    })
    tSliderInner.forEach((el)=> {
        el.style.width = `${testimonialBlock.offsetWidth}px`;
    })
    testimonialBlock.style.height = `${testimonialSlider.offsetHeight}px`;
});

function sliderToggle(ind) {
    tSliderInner.forEach((el)=> {
        el.classList.remove('active');
    });
    tSliderInner[ind].classList.add('active');
}

window.addEventListener('resize', function() {
    videoScreen.forEach((el, i)=> {
        el.style.width = `${servicesSliderVideos.offsetWidth * 0.74}px`;
    })
    tSliderInner.forEach((el)=> {
        el.style.width = `${testimonialBlock.offsetWidth}px`;
    })
    testimonialBlock.style.height = `${testimonialSlider.offsetHeight}px`;
    testimonialSlider.style.transform = `translateX(0)`;
    testiIndex = 0;
    sliderToggle(testiIndex);
    videoSlider.style.transform = `translateX(0px)`;
});
