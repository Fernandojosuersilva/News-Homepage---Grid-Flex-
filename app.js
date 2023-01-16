$(function () {
    //open menu options when click at the menu icon
$("#openMenu").click(function () {
    //show menu
    $("#showMenu").toggle('slow');
    //show close menu icon
    $("#closeMenu").show();
    //hide open menu icon
    $("#openMenu").hide();
    //change container background-color when states is active
    $("#grid-container, #header").css("background-color", "hsl(233, 8%, 79%)");


});
    //hide menu items when click at close menu icon
$("#closeMenu").click(function () {
    //hide menu
    $("#showMenu").hide();
    //show open menu icon
    $("#openMenu").show();
    //hide close menu icon
    $("#closeMenu").hide();
    //change back backgroung-color to default one
    $("#grid-container, #header").css("background-color", "hsl(36, 100%, 99%)");
});
});