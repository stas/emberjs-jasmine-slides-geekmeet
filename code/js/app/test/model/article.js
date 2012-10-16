// Tests for Article class
( function( App, $ ){
  describe( 'Article creation', function() {

    it( 'must have a set of default attributes', function() {
      var article = App.Article.create();

      expect( article.get( 'id' ) ).toMatch( /\d+/ );
      expect( article.get( 'title' ) ).toBeNull();
      expect( article.get( 'content' ) ).toBeNull();

    // It is good to add as many details about why a test was written.
    // It is good to add a human readable explanation about the expected
    // result. This can be read from the code...but sometimes the code can
    // be cryptic.
    //
    it( 'will throw an error when trying to get the slug when title is not defined', function() {
      var article = App.Article.create();

      expect( function(){ article.get( 'slug' )}).toThrow(
        new TypeError( 'Cannot call method \'toLowerCase\' of null' ) );
    });

    it( 'can be created as a valid object with custom values', function() {
      var article = App.Article.create({
        title: 'Test Article', content: 'Some content...'
      });

      var todayish = Date.now().toString().match(/\d{10}/);

      expect( article.get( 'id' ).toString() ).toMatch( todayish );
      expect( article.get( 'title' ) ).toEqual( 'Test Article' );
      expect( article.get( 'slug' ) ).toEqual( 'test-article' );
      expect( article.get( 'content' ) ).toEqual( 'Some content...' );
    });
  });


  // This is rather a class method...
  // You don't test the Article Object, but rather the Article static
  // methods.
  describe( 'Article class methods', function() {

    it( 'should find an existing object', function() {

      // Put this testing environemnt initialization in a dedicated function.
      // let's call it add_article()
      var article = App.Article.create({
        title: 'Test Article', content: 'Some content...'
      });

      // Call the testing environment intialization function
      // add_article({title: 'Name', content: 'some content'})

      var foundArticle = App.Article.prototype.find( article.get( 'id' ) );

      expect( foundArticle.get( 'slug' ) ).toEqual( article.get( 'slug' ) );

    });
  });

})( window.EmBlog, window.jQuery );
