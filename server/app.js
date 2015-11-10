'use strict';

const koa = require('koa'),
      Router = require('koa-router'),
      react = require('koa-react-view'),
      router = new Router(),
      path = require('path'),
      app = koa();

// Initialise koa-react-view
react(app, {
  views: path.join(__dirname, '../shared/views'),
  babel: {
    only: [
      path.join(__dirname, '../shared')
    ]
  },
  internals: true
});

// Initialise routes
router.get('/', function() {
    this.render('index', { title: "Home" }, true);
});

router.get('/:page', function() {
    if (this.params.page.indexOf('favicon') === -1) {
        this.render(this.params.page, { title: "This is page " + this.params.page }, true);
    }
});

app.use(router.routes());

// Initialise application
function init(port) {
    port = port || process.env.HTTP_PORT || 8000;
    app.listen(port, function() {
        console.log('App is listening on port ' + port);
    });
}

exports = module.exports = {
    start: init
};