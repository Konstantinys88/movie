
export const slick = () => {

    $(".center").slick({
        centerMode: true,
        infinite: true,
        centerPadding: "330px",
        slidesToShow: 1,
        speed: 700,
        autoplay: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                }
            }
        ]
    });
    
}