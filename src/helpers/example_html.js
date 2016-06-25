// Allows for the creation of HTML examples and live code in one snippet

module.exports = function(example_html) {
  var html_code = '```html\n' + example_html.fn(this) + '\n```\n\n';
  var example_output = '<div class="styleguide-code-live">' + example_html.fn(this) + '</div>\n\n';
  return html_code + example_output;
}
