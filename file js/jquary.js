// scroll spy

$('section').each(function() {


    let top = $(window).scrollTop();
    let offset = $(this).offset().top - 200;
    let height = $(this).height();
    let id = $(this).attr('id');

    if (top > offset && top < offset + height) {
        $('.navbar ul li a').removeClass('active');
        $('.navbar').find('[href="#${id}]"').addClass('active');
    }
});