Template.search.helpers({
    inputAttributes: function() {
        return { 'class': 'easy-search-input', 'placeholder': 'Start Searching' }
    },
    players: function() {
        return Registos.find({}, { sort: { createdAt: -1 } });
    },
    selectedName: function() {
        var registo = RegistosIndex.config.mongoCollection.findOne({ __originalId: Session.get("selectedRegisto")});
        return registo && registo.nomeRegisto;
    },
    index: function() {
        return RegistosIndex;
    },
    resultsCount: function() {
        return RegistosIndex.getComponentDict().get('count');
    },
    showMore: function() {
        return false;
    },

    renderTmpl: () => Template.renderTemplate
});

Template.User.helpers({
    selected: function() {
        return Session.equals("selectedRegisto", this.__originalId) ? "selected" : '';
    },
});

Template.User.events({
    'click': function() {
        Session.set("selectedRegisto", this.__originalId);
    }
});
