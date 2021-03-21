
$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myList div div h5 a").filter(function () {
            $(this).parent().parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("button.btn.btn-primary.edit").click(function () {
        let locationID = $(this).attr("locationID");
        $.get( "/list/update", { locationID: locationID } );
    })

    $("button.btn.btn-danger.delete").click(function () {
        let locationID = $(this).attr("locationID");
        $.post( "/list/delete", { locationID: locationID } );
    })
});