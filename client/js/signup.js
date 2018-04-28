Template.signup.rendered = function () {

}

Template.signup.events({
    "submit .form-signup": function(event) {
        var username = trimInput(event.target.username.value);
        var email = trimInput(event.target.email.value);
        var password = trimInput(event.target.password.value);
        var password2 = trimInput(event.target.password2.value);
        if(isNotEmpty(email) &&
        isNotEmpty(username) &&
        isNotEmpty(password) &&
        isEmail(email) &&
        areValidPasswords(password, password2)) {
            Accounts.createUser({
                username: username,
                email: email,
                password: password
            }, function(err){
                if(err){
                    Bert.alert(err.reason, "danger", "growl-top-right");
                } else {
                    Bert.alert("Conta criada! Já estás conectado!", "success", "growl-top-right");
                    Router.go("/perfil");
                }
            });
        }
        return false;
    }
});

//Validation Rules

//Trim Helper
var trimInput = function(val) {
    return val.replace(/^\s*|\s*$/g, "");
}

var isNotEmpty = function(value) {
    if(value && value !== '') {
        return true;
    }
    Bert.alert("Por favor preenche todos os campos!", "danger", "growl-top-right");
    return false;
}


isEmail = function(value) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(filter.test(value)) {
        return true;
    }
    Bert.alert("Por favor introduz um endereço de email válido!", "danger", "growl-top-right");
    return false;
};

// Check Password Field
isValidPassword = function(password){
    if(password.length <6) {
        Bert.alert("A password deve ter pelo menos 6 caracteres!", "danger", "growl-top-right");
        return false;
    }
    return true;
};

// Match Password
areValidPasswords = function(password, confirm) {
    if(!isValidPassword(password)) {
        return false;
    }
    if(password !== confirm) {
        Bert.alert("As passwords não combinam!", "danger", "growl-top-right");
        return false;
    }
    return true;
};
