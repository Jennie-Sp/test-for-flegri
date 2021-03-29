//START   ---       OWL CAROUSEL1
$(function() {
    $("#banner").owlCarousel({
        items: 1,
        smartSpeed: 800,
    });
});

//START   ---       like
let likes = document.querySelectorAll('.product-card-icon-like');

for (let like of likes) {

    like.onclick = function () {
        let likePassive = like.querySelector('.product-card-icon-like-passive');
        let likeActive = like.querySelector('.product-card-icon-like-active');

        if (likePassive.style.display === 'none') {
            likePassive.style.display = 'block';
            likeActive.style.display = 'none';
        } else {
            likePassive.style.display = 'none';
            likeActive.style.display = 'block';
        }
    };
}
