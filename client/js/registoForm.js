Template.registoForm.rendered = function() {

}

Template.registoForm.events({
    "submit .registoForm": function(event) {
        var nomeRegisto = event.target.nomeRegisto.value;
        var descRegisto = event.target.descRegisto.value;
        var projeto = event.target.projeto.value;
        var valRegisto = event.target.valRegisto.value;
        var entidade = event.target.entidade.value;
        var dataRegisto = event.target.dataRegisto.value;

        if(isNotEmpty(nomeRegisto)) {
            Meteor.call('adicRegisto', nomeRegisto, descRegisto, projeto, valRegisto, entidade);
            event.target.nomeRegisto.value = "";
            event.target.descRegisto.value = "";
            event.target.projeto.value = "";
            event.target.valRegisto.value = "";
            event.target.entidade.value = "";
            event.target.dataRegisto.value = "";

            Bert.alert("Registado!", "success", "growl-top-right");
        }
        else {
            Bert.alert("Alguma coisa correu mal!", "danger", "growl-top-right");
        }
        return false;
    }
});

// Validation Rules
var isNotEmpty = function(value) {
    if(value && value !== '') {
        return true;
    }
    Bert.alert("Por favor preenche todos os campos!", "danger", "growl-top-right");
    return false;
}
