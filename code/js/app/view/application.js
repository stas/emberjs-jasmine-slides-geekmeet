/**
 * Main application view
 * @return Class
 */
( function( App ) {
  var AppView = Ember.View.extend({
    template: Ember.Handlebars.compile( '{{outlet}}' )
  });

  return App.set( 'ApplicationView', AppView );
} )( window.EmBlog );
