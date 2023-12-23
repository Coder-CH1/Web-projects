// JavaScript Document

/*$(document).ready(function(){
  $("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });
});
*/






/*$(document).ready(function(){
  $("button").click(function(){
    alert("Value: " + $("#test").val());
  });
});
*/




/*$(document).ready(function(){
  $("button").click(function(){
    alert($("#w3s").attr("href"));
  });
});*/





/*$(document).ready(function(){
  $("#btn1").click(function(){
    $("#test1").text("Hello world!");
  });
  $("#btn2").click(function(){
    $("#test2").html("<b>Hello world!</b>");
  });
  $("#btn3").click(function(){
    $("#test3").val("Dolly Duck");
  });
});
*/





$(document).ready(function(){
  $("#btn1").click(function(){
    $("#test1").text(function(i, origText){
      return "Old text: " + origText + " New text: Hello world! (index: " + i + ")"; 
    });
  });

  $("#btn2").click(function(){
    $("#test2").html(function(i, origText){
      return "Old html: " + origText + " New html: Hello <b>world!</b> (index: " + i + ")"; 
    });
  });
});

























