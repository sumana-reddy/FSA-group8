$(document).ready(function () {
    $("#myInput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#myList div div div h5").filter(function () {
            $(this).parent().parent().parent().toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $("button.btn.btn-primary.edit").click(function () {
        let locationID = $(this).attr("locationID");
        $.get("/list/edit", {locationID: locationID});
    })

    $("button.btn.btn-danger.delete").click(function () {
        let locationID = $(this).attr("locationID");
        $.post("/list/delete", {locationID: locationID});
    })

    $('#confirm-delete').on('show.bs.modal', function (e) {
        $(this).find('.btn-ok').attr('href', $(e.relatedTarget).data('href'));
    });

    let locationListUpdated = JSON.parse(localStorage.getItem("locationListUpdated"));

    locationListUpdated.forEach(x => {
        if (x.status == "true") {
            $('#myList h5 .badge.badge-info').each(function (key, value) {

                if(x.id == $(value).attr("locID"))
                    $(value).attr("style", "display:inline-block")
            });
        }
    })

    // $(locationListUpdated).each(i, locValue => {
    //     console.log(locValue);
    //     if(loc.status == "true") {
    //         $('#myList .badge.badge-info').each(function (key, value) {
    //             // $("div").attr("style", "display:block")
    //             console.log($(value))
    //         });
    //     }
    // })


});