(function() {
  this.BlobGitignoreSelectors = (function() {
    function BlobGitignoreSelectors(opts) {
      var ref;
      this.$dropdowns = (ref = opts.$dropdowns) != null ? ref : $('.js-gitignore-selector'), this.editor = opts.editor;
      this.$dropdowns.each((function(_this) {
        return function(i, dropdown) {
          var $dropdown;
          $dropdown = $(dropdown);
          return new BlobGitignoreSelector({
            pattern: /(.gitignore)/,
            data: $dropdown.data('data'),
            wrapper: $dropdown.closest('.js-gitignore-selector-wrap'),
            dropdown: $dropdown,
            editor: _this.editor
          });
        };
      })(this));
    }

    return BlobGitignoreSelectors;

  })();

}).call(this);
