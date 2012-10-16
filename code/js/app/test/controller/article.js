// Tests for article screen controller class
( function( App ){
  describe( 'ArticleController', function() {

    it( 'handles article screen', function() {
      var article = App.Article.create({
        title: 'Testing title', content: 'Some content...'
      });
      var controller = App.ArticleController.create();
      var view = App.ArticleView.create();

      controller.set( 'content', article );
      view.set( 'controller', controller );

      view.createElement();

      expect( view.$().find( 'h3' ).length ).toEqual( 1 );
      expect( view.$().find( 'h3' ).text() ).toEqual( 'Testing title' );
      expect( view.$().find( 'p' ).length ).toEqual( 1 );
      expect( view.$().find( 'p' ).text() ).toEqual( 'Some content...' );

    });

  });
})( window.EmBlog );
