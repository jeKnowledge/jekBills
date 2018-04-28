Router.configure({
    layoutTemplate: "layout"
});

Router.route('/', function () {
  this.render('login');
});

Router.route('/perfil', function () {
  this.render('perfil');
});

Router.route('/consRegistos', function () {
  this.render('consRegistos');
});

Router.route('/addRegisto', function () {
  this.render('addRegisto');
});

Router.route('/signup', function () {
  this.render('signup');
});

Router.route('/search', function () {
  this.render('search');
});

Router.route('/contacts', function () {
  this.render('contacts');
});

Router.route('/stats', function () {
  this.render('stats');
});

Router.route('/logout', function () {
  this.render('logout');
});


/*
Router.route('/items/:_id', function () {
  var item = Items.findOne({_id: this.params._id});
  this.render('ShowItem', {data: item});
});

Router.route('/files/:filename', function () {
  this.response.end('hi from the server\n');
}, {where: 'server'});

Router.route('/restful', {where: 'server'})
  .get(function () {
    this.response.end('get request\n');
  })
  .post(function () {
    this.response.end('post request\n');
  });
*/
