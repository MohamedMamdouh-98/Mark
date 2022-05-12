// Aos 
    AOS.init({
        duration: 1000,
    });

let nav = document.getElementById('nav');
window.onscroll = function(){
    if(scrollY >= 200){
        nav.classList.add('nav')
    }else{
        nav.classList.remove('nav') 
    }
}

    // start portfolio
    $('.filters ul li').click(function(){
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');
        
        var data = $(this).attr('data-filter');
        $grid.isotope({
        filter: data
        })
    });
    
    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: true,
        masonry: {
        columnWidth: ".all"
        }
    })
// OwlCarousel2 slider box
var owl = $('.clients-carousel');
owl.owlCarousel({
    loop: true,
    nav: false,
    autoplay:true,
    autoplayTimeout:5000,
    animateOut:'fadeOut',
    animateIn:'fadeIn',
    smartSpeed: 450,
    margin: 20,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        991: {
            items: 3
        },
        1200: {
            items: 3
        },
        1920: {
            items: 3
        },
    }
});