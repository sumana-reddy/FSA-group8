import locationsArray from './locations.js';

$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myList div div h5 a").filter(function () {
            $(this).parent().parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    console.log(locationsArray);
    let i;
    for (i = 0; i < locationsArray.length; i++) {
        $("#myList").append("<div class=\"list-group-item list-group-item-action flex-column align-items-start\">" +
            "<div class=\"d-flex w-100 justify-content-between\"><h5 class=\"mb-1\"><a href=\"#\">" + locationsArray[i].name + "</a></h5>" +
            "<div class=\"mb-1 btn-group\"> <button type=\"button\" class=\"btn btn-primary\"><i class=\"fas fa-edit\"></i></button> " +
            "<button type=\"button\" class=\"btn btn-danger\"><i class=\"fas fa-trash\"></i></button></div></div></div>");
    }
});