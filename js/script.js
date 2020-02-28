function verifJquery () {
    // Initialisation des variables objects
    let name = $('[name="name"]').val();
    let lastName = $('[name="lastName"]').val();
    let email = $('[name="email"]').val();
    let tel = $('[name="tel"]').val();
    let area = $('[name="area"]').val();
    let alert = $('#alert');
    // Initialisation variable de sécurité
    let nameV = false;
    let lastV = false;
    let emailV = false;
    let telV = false;
    let areaV = false;
    //Vérification du prenom
    if(name == '') {
        $('#form_name').addClass("is-invalid");
        $('#errorName').html("<small>Merci de remplir ce champs!</small>");
    } else {
        $('#form_name').removeClass("is-invalid");
        $('#errorName').html("");
        nameV = true;
    }
    //Vérification du nom
    if(lastName == '') {
        $('#form_lastname').addClass("is-invalid");
        $('#errorLastName').html("<small>Merci de remplir ce champs!</small>");
    } else {
        $('#form_lastname').removeClass("is-invalid");
        $('#errorLastName').html("");
        lastV = true;
    }
    //Vérification de l'email
    if(!validateEmail(email)) {
        $('#form_email').addClass("is-invalid");
        $('#errorEmail').html("<small>Merci de saisir un email valide !</small>");
    } else {
        $('#form_email').removeClass("is-invalid");
        $('#errorEmail').html("");
        emailV = true;
    }
    if (!validateNumero(tel) || tel.length != 10) {
        $('#form_tel').addClass('is-invalid');
        $('#errorTel').html("<small>Merci de saisir un numero valide !</small>");
    } else {
        $('#form_tel').removeClass('is-invalid');
        $('#errorTel').html("");
        telV = true;
    }
    //Vérification du message
    if(area == '') {
        $('#form_message').addClass("is-invalid");
        $('#errorArea').html("<small>Merci de remplir ce champs!</small>");
    } else {
        $('#form_message').removeClass("is-invalid");
        $('#errorArea').html("");
        areaV = true;
    }
    if (area.length > 500) {
        $('#form_message').addClass("is-invalid");
    }
    if (nameV && lastV && emailV && areaV && telV) {
        $('#contact-form').trigger("reset");
        $("#charNum").html($('#charNum').attr('default-value'));
        alert.addClass('alert alert-success').text('Message envoyez avec success');
        sleep(3500).then(() => {
            alert.removeClass('alert alert-success').text("");
        });
    } else {
        return;
    }
}
/* Sleep Script */
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
/* Check Email */
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function validateNumero(numero) {
    let re = /^[0-9\-\(\)\s]+$/;
    return re.test(numero);

}
$('#form_message').keyup(function () {
    var max = 500;
    var len = $(this).val().length;
    if (len > max) {
        $('#charNum').html('<span class="text-danger mt-3">Vous avez depassé la limite de carractère autorisé');
        $('#button_validate').attr('disabled', true)
    } else {
        var char = max - len;
        $('#charNum').text(char + ' caractère restant !');
        $('#button_validate').attr('disabled',false)
    }
});





