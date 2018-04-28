Template.optionsbar.rendered = function() {

}

Template.optionsbar.events({
    "click .logout": function(event){
        Meteor.logout(function(err){
            if(err){
                Bert.alert(err.reason, "danger", "growl-top-right");
            }
            else {
                Router.go('/');
                Bert.alert("Sessão terminada!", "success", "growl-top-right");
            }
        });
    }
});
