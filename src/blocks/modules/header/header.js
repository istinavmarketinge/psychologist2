import $ from "jquery";
const Header = class Header {
    constructor(){
        this.headerHeight = 0;
    }
    getHeaderHeight() {
        return new Promise((resolve, reject) => {
            if (!$('.header').length) {
                reject('Элемента с классом header нет на странице.');
                return false;
            }
            this.headerHeight = $('.header').innerHeight();
            
            resolve(this.headerHeight);
        })
    }
    toggleBurgerMenu() {
        $(".header-menu-mobile-opener").on("click",function(){
            $(".header-menu-mobile").addClass("isOpened");
        });
        $(".header-menu-mobile__closer, .header-menu-mobile__link").on("click",function(){
            $(".header-menu-mobile").removeClass("isOpened");
        });
    }
    init() {
        this.toggleBurgerMenu();
        $(window).on('resize', () => {
            this.getHeaderHeight().then(result => {
                $('.section').css('padding-top', `${result}px`);
            }).catch(error => {
                console.warn(error);
            })
        });
        $(window).trigger('resize'); 
    }
    
}

export default Header;