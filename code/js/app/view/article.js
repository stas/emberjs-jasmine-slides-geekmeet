/**
 * Article view
 * @return Class
 */
( function( App ) {
  var ArticleView = Ember.View.extend({
    template: Ember.Handlebars.compile(
      '<h3>{{content.title}}</h3><p>{{content.content}}</p><a href="#" {{action goToPublish href=true}}>Publish more!</a>'
    )
  });

  return App.set( 'ArticleView', ArticleView );
} )( window.EmBlog );
