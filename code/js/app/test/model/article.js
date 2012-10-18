// Tests for Article class
( function( App, $ ){
  describe( 'Article', function() {

    describe( 'initialization with no values', function() {
      var article;

      beforeEach( function() {
        article = App.Article.create();
      } );

      it( 'has a set of default attributes', function() {
        expect( article.get( 'id' ) ).toMatch( /\d+/ );
        expect( article.get( 'title' ) ).toBeNull();
        expect( article.get( 'content' ) ).toBeNull();
      });

      it( 'throws an exception when calling slug', function() {
        expect( function(){ article.get( 'slug' ) } ).toThrow();
      });

    } );


    it( 'is a valid object when initialized with custom values', function() {
      var article = App.Article.create({
        title: 'Test Article', content: 'Some content...'
      });

      var todayish = Date.now().toString().match(/\d{10}/);

      expect( article.get( 'id' ).toString() ).toMatch( todayish );
      expect( article.get( 'title' ) ).toEqual( 'Test Article' );
      expect( article.get( 'slug' ) ).toEqual( 'test-article' );
      expect( article.get( 'content' ) ).toEqual( 'Some content...' );
    });

    describe( 'class methods', function() {

      it( 'finds an existing object', function() {
        var article = App.Article.create({
          title: 'Test Article', content: 'Some content...'
        });

        var foundArticle = App.Article.find( article.get( 'id' ) );

        expect( foundArticle.get( 'slug' ) ).toEqual( article.get( 'slug' ) );

      });

    } );

  });
})( window.EmBlog, window.jQuery );
