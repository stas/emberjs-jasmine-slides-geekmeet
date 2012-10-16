/**
 * Application Router
 * @return Class
 */
( function( App ) {
  var Router = Ember.Router.extend({

    root: Ember.Route.extend({
      goToPublish: Ember.Route.transitionTo( 'root.publish' ),

      // GET /#/
      index: Ember.Route.extend({
        route: '/',
        redirectsTo: 'publish'
      }),

      // GET /#/publish
      publish: Ember.Route.extend({
        route: '/publish',

        connectOutlets: function( router ) {
          router.get( 'applicationController' ).connectOutlet( 'publish' );
        }
      }),

      // GET /#/article/:id
      article: Ember.Route.extend({
        route: '/article/:id',

        connectOutlets: function( router, article ) {
          router.get( 'applicationController' ).connectOutlet(
            'article', article );
        }
      }),

      // GET /#/test
      test: Ember.Route.extend({
        route: '/test',
        enter: function() {
          var jasmineEnv = jasmine.getEnv(),
          htmlReporter = new jasmine.HtmlReporter(),
          reporterCss = '<link rel="stylesheet" href="css/lib/jasmine.css">';

          $( 'head' ).append( reporterCss );
          jasmineEnv.addReporter( htmlReporter );

          jasmineEnv.execute();
        }
      })

    })
  });

  return App.set( 'Router', Router );
})( window.EmBlog );
