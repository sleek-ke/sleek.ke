// =======Hero slider======================== //

const slider1 = document.querySelector("#glide_1");

if (slider1) {
    new Glide(slider1, {
        type: 'carousel',
        statrAt: 0,
        autoplay: 4000,
        gap: 0,
        hoverpause: true,
        perView: 1,
        animationDuration: 800,
        animationTimingFunc: 'linear',
    }).mount();
}