if(Meteor.isServer) {
    Meteor.methods({
        adicRegisto: function(nomeRegisto, descRegisto, projeto, valRegisto, entidade) {
            if(!Meteor.userId()) {
                throw new Meteor.Error('Não autorizado!');
                return false;
            }
            else {
                var username = Meteor.user().username;
                var year = new Date().getFullYear();
                var month = new Date().getMonth() + 1;
                var day = new Date().getDate();
                var date = (day + "/" + month + "/" + year).toString();
                Registos.insert({
                    nomeRegisto: nomeRegisto,
                    descRegisto: descRegisto,
                    autor: username,
                    projeto: projeto,
                    valRegisto: valRegisto,
                    entidade: entidade,
                    date: date,
                    createdAt: new Date(),
                    userId: Meteor.userId()
                });
            }
        },
    });
}
