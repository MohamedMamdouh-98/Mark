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

