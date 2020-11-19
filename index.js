function sendContact() {
    var valid;
    valid = validateContact();
    if (valid) {
        jQuery.ajax({
            url: "contact_mail.php",
            data: 'userName=' + $("#userName").val() + '&email=' +
                $("#email").val() + '&exampleFormControlTextarea1=' +
                $("#exampleFormControlTextarea1").val(),
            type: "POST",
            success: function (data) {
                $("#mail-status").html(data);
            },
            error: function () {}
        });
    }
}

function validateContact() {
    var valid = true;
    if (!$("#userName").val()) {
        $("#userName").css('background-color', '#FFFFDF');
        valid = false;
    }
    if (!$("#email").val()) {
        $("#email").css('background-color', '#FFFFDF');
        valid = false;
    }
    if (!$("#email").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#email").css('background-color', '#FFFFDF');
        valid = false;
    }
    return valid;
}