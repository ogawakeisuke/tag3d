 $(document).ready(function(){
//  var html_data = $('html').children();
  var html_data =  document.getElementsByTagName('html')[0].innerHTML;
  alert(html_data);

  return false;
});