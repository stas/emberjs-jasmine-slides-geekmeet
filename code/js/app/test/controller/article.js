// Tests for article screen controller class
( function( App ){
  describe( 'ArticleController', function() {

    it( 'handles article screen', function() {
      var article = App.get( 'Article' ).create({
        title: 'Testing title', content: 'Some content...'
      });
      var controller = App.get( 'ArticleController' ).create();
      var view = App.get( 'ArticleView' ).create();
      var html;

      controller.set( 'content', article );
      view.set( 'controller', controller );

      view.createElement();
      html = view.$().html();

      expect( html ).toMatch( '<h3>' );
      expect( html ).toMatch( 'Testing title' );
      expect( html ).toMatch( 'Some content...' );
      expect( html ).toMatch( '<p>' );

    });

  });
})( window.EmBlog );
