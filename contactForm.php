<?php
    $toEmail = "tosojohan@gmail.com";
    $mailHeaders = "From: " . $_POST["userName"] . "<". $_POST["email"] .">\r\n";
    if(mail($toEmail, $_POST["exampleFormControlTextarea1"])) {
        print "<p class='success'>Mail Sent.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }
?>