 $(document).ready(function(){
//  var html_data = $('html').children();
  var html_data =  document.getElementsByTagName('html')[0].innerHTML;
  // alert(html_data);

  return false;
});

var depth = 0;

$(function() {
  var body = document.body;
  
  function parse(el) {
    console.log(depth,  el, getComputedStyle(el));
    if (el.hasChildNodes()) {
      for (var i = 0; i < el.children.length; i++) {
        parse(el.children[i]); // recursive
      }
    } else {
      ++depth;
      return;
    }
  }
  
  parse(body);
});