Template.perfil.helpers({
    email: function() {
        return Meteor.user().emails[0].address;
    },

    username: function() {
        return Meteor.user().username;
    },

    userRegistos: function() {
        var username = Meteor.user().username;
        var userId = Meteor.userId();
        var userRegistos = Registos.find({userId: userId}, {sort: {createdAt: -1}});
        //var profileImage = ProfileImages.find({userId: userId}); //NÃO SEI SE ESTÁ A FUNCIONAR PORQUE FALTA TRATAR DA BD PARA IMAGENS
        return userRegistos;
    }
});

/*
Template.perfil.events({
    "submit .edit-profile": function(event) {

        var file = $('#profileImage').get(0).files[0];

        if (file) {




            //fsFile = new FS.file(file);
            //profileImages.insert(fsFile, function(err, result) {
                if(err) {
                    throw new Meteor.Error(err);
                }
                else {
                    var storageRef = firebase.storage().ref('ProfileImages/'+file.name);
                    storageRef.put(file);


                    var imageLoc = '/cfs/files/profileImages/'+result._id;

                    UserImages.insert({
                        userId: Meteor.userId,
                        username: Meteor.user().username,
                        image: imageLoc,
                    });
                    Bert.alert("Foto de perfil atualizada com sucesso!", "success", "growl-top-right");
                }
            }
            });
        }

        return false;
    }
});
*/
