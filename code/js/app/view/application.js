/**
 * Main application view
 * @return Class
 */
( function( App ) {
  var AppView = Ember.View.extend({
    template: Ember.Handlebars.compile( '{{outlet}}' )
  });

  return App.ApplicationView = AppView;
} )( window.EmBlog );
