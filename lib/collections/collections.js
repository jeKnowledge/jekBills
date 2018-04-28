//var { ProfileImages } = require('./config.js');
//console.log(database);

Registos = new Mongo.Collection("Registos");

// Set Meteor collection rules
/*
FBRegistos = new FS.Collection("FBRegistos", {
    stores: [new FS.Store.FileSystem("FBRegistos", {path: "~/FBRegistos"})]
});

FBRegistos.allow({
    insert: function(userId, doc) {
        return true;
    },
    update: function(userId, doc, fields, modifier) {
        return true;
    },
    download: function() {
        return true;
    },
});
*/


//For Easy Search
//////////////////

RegistosIndex = new EasySearch.Index({
    engine: new EasySearch.MongoDB({
        sort: function() {
            return { createdAt: -1 };
        },
        selector: function(searchObject, options, aggregation) {
            let selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
            categoryFilter = options.search.props.categoryFilter;

            if(_.isString(categoryFilter) && !_.isEmpty(categoryFilter)) {
                selector.category = categoryFilter;
            }

            return selector;
        }
    }),

    collection: Registos,
    fields: ['nomeRegisto'],
    defaultSearchOptions: {
        limit: 20
    },
    permissions: () => {
        return true;
    }
});
