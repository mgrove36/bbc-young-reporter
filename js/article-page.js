$(document).ready(function(){
  // remove black bar if article has no content
  if (! $.trim($(".article-content").html())) {
    $(".article-content").hide();
  }
});
