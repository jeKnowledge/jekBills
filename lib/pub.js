if (Meteor.isServer) {
    Meteor.publish('Registos', function() {
        return Registos.find();
    });
    /*
    Meteor.publish("FBRegistos", function() {
        return FBRegistos.find();
    });*/
}
