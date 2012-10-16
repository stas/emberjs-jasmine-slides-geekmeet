/**
 * Publishing screen view
 * @return Class
 */
( function( App ) {
  var PublishView = Ember.ContainerView.extend({
    childViews: [ 'titleView', 'contentView', 'buttonView' ],
    titleBinding: 'titleView.value',
    contentBinding: 'contentView.value',

    isEmpty: function() {
      var empty = false;
        title = this.get( 'title' ),
        content = this.get( 'content' );

      if ( title && title.trim() === '' && content && content.trim() === '' ) {
        empty = true;
      }

      return empty;
    }.property( 'title', 'content' ),

    titleView: Ember.TextField.extend({
      placeholder: 'Give me a title...',
      elementId: 'title-input'
    }),

    contentView: Ember.TextArea.extend({
      placeholder: 'Write something...',
      elementId: 'content-input'
    }),

    buttonView: Ember.View.extend({
      tagName: 'input',
      attributeBindings: [ 'type', 'value', 'disabled'],
      type: 'submit',
      value: 'Publish!',
      elementId: 'submit-button',
      disabledBinding: '_parentView.isEmpty',
      clickBinding: '_parentView.controller.publish'
    })

  });

  return App.set( 'PublishView', PublishView );
} )( window.EmBlog );
