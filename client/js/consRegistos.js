Template.consRegistos.rendered = function() {

}


Template.consRegistos.helpers({
    consRegistos: function () {
        var registos = Registos.find({}, {sort: {createdAt: -1}});
        return registos;
    }
});
