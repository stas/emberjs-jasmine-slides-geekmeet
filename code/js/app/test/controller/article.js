// Tests for article screen controller class
( function( App ){
  describe( 'ArticleController', function() {

    it( 'handles article screen', function() {

      // Put this in tearUp...or a dedicated function.
      // is not really about testing ArticleController
      // but rather about setting up the testing environment. 
      var controller = App.ArticleController.create();
      var view = App.ArticleView.create();
      controller.set( 'content', article );
      view.set( 'controller', controller );
      view.createElement();

      var article = App.Article.create({
        title: 'Testing title', content: 'Some content...'
      });

      expect( view.$().find( 'h3' ).length ).toEqual( 1 );
      expect( view.$().find( 'h3' ).text() ).toEqual( 'Testing title' );
      expect( view.$().find( 'p' ).length ).toEqual( 1 );
      expect( view.$().find( 'p' ).text() ).toEqual( 'Some content...' );

    });

  });
})( window.EmBlog );
