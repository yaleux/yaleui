/**
 * This module generates a table of contents from the <h2>s on a page.
 */

!function() {

var $h2s = $('#styleguide-component h2');
var $toc = $('[data-styleguide-toc]');

$h2s.each(function() {
  // Ignore <h2>s inside of a rendered code sample
  if ($(this).parents('.styleguide-code-live').length) return;

  // Ignore the breadcrumb label
  if ($(this).is('#breadcrumbs-label')) return;

  // Ignore the main menu label
  if ($(this).is('#main-menu-heading')) return;

  //Add Magellan Target 
  $( this ).attr("data-magellan-target", this.id);

  var text = $(this).text();
  var anchor = this.id;

  $toc.append('<li><a href="#'+anchor+'">'+text+'</a></li>');
});

// Initialize Magellan on the generated table of contents
if ($toc.length) {
  if (typeof Foundation !== 'undefined') {
    new Foundation.Magellan($toc, {});
  }
 }
}();