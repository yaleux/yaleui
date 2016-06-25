// Allows for the creation of HTML examples and live code in one snippet

module.exports = function(example_html) {
  var html_code = '```\n' + example_html.fn(this) + '\n```\n\n';
  var example_output = example_html.fn(this);

  return html_code + example_output;
}
