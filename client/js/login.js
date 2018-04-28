Tracker.autorun(function(){
    if(Meteor.userId()){
        Router.go("/perfil");
    }
});

Template.login.rendered = function(){

}

Template.login.events({
    "submit .form-signin": function(event){
        var email = trimInput(event.target.email.value);
        var password = trimInput(event.target.password.value);
        if(isNotEmpty(email) &&
            isNotEmpty(password) &&
            isEmail(email) &&
            isValidPassword(password)){
                Meteor.loginWithPassword(email, password, function(err){
                    if(err){
                        Bert.alert(err.reason, "danger", "growl-top-right");
                        return false;
                    }
                    else{
                        Bert.alert("Sessão iniciada!", "success", "growl-top-right");
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
