

$(".header__menu-btn").on("click", function () {
    $(".header__menu-list").toggleClass("menu--active");
    $(".header__menu-burger").toggleClass("menu-burger--active");
    $(".header__btn-menu").toggleClass("header__btn-menu--active");
});
