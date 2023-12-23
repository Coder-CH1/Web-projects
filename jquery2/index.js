// JavaScript Document

// 25th july 2021 
/*$(document).ready(function(){
  $("button").click(function(){
    $("p").hide();
  });
});*/



/*$(document).ready(function(){
  $("#p1").hover(function(){
    alert("You entered p1!");
  },
  function(){
    alert("Bye! You now leave p1!");
  }); 
});*/



/*$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "red");
  });
  $("input").blur(function(){
    $(this).css("background-color", "green");
  });
});*/



/*$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});

*/


/*$(document).ready(function(){
  $("button").click(function(){
    $("p").hide(2000);
  });
});*/




/*$(document).ready(function(){
  $("button").click(function(){
    $("p").toggle(1000);
  });
});
*/




// 26th july 2021 number 1

/*$(document).ready(function(){
$("#go").click(function(){
$(".block").animate({ left: "+=100px"}, 2000);
});
	//stops animation when a button is clicked
	$("#stop").click(function(){
		$(".block").stop();
	});
	//starts animation in the opposite direction
	$("#back").click(function(){
		$(".block").animate({ left: "-=100px"}, 2000);
		//to cancel any added left margin
	});
});*/



// number 2

/*$(document).ready(function(){
var $block = $(".block");
	
//toggle a sliding animation animation
	$("#toggle").on("click", function(){
		$block.stop().slideToggle(2000);
	});
	
});
*/


//number 3
/*$(document).ready(function(){
$("p").click(function(){
	if($(".ben").is( ":hidden" )){
		$(".ben").slideDown('slow');
		//div .slidedown 2000
	}else{  
	//.ben .hide slow
	$(".ben").slideUp(2000);
	}
});	
});
*/



//number 4
/*$(document).ready(function(){
var ct = $('#animate').children().length;
	//
	setInterval(function swap(){
		
		--ct;
		//
		if(ct==1){
			$('#animate').css('left',0+'px');
			ct= $('#animate').children().length;}
		$('#animate').animate({'left':'-='+700+'px'},1000);
	},5000);
	
	
});*/




/*$(document).ready(function(){
  $("#p1").mouseenter(function(){
    alert("You entered p1!");
  });
});

*/




/*$(document).ready(function(){
  $("p").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },  
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    }, 
    click: function(){
      $(this).css("background-color", "yellow");
    }  
  });
});

*/






/*$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeToggle();
    $("#div2").fadeToggle("slow");
    $("#div3").fadeToggle(3000);
  });
});

*/





/*$(document).ready(function(){
  $("button").click(function(){
    $("#div1").fadeTo("slow", 0.15);
    $("#div2").fadeTo("slow", 0.4);
    $("#div3").fadeTo("slow", 0.7);
  });
});
*/




/*$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});*/




/*$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({left: '50px',
	  opacity: '0.5',
      height: '+=150px',
      width: '+=150px'},1000);
  });
});*/




/*$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({
      height: 'toggle'
    });
  });
});

*/





/*$(document).ready(function(){
  $("button").click(function(){
    var div = $("div");
    div.animate({height: '300px', opacity: '0.4'}, "slow");
    div.animate({width: '300px', opacity: '0.8'}, "slow");
    div.animate({height: '100px', opacity: '0.4'}, "slow");
    div.animate({width: '100px', opacity: '0.8'}, "slow");
  });
});
*/




/*$(document).ready(function(){
  $("button").click(function(){
    var div = $("div");  
    div.animate({left: '100px', width: '500px', height: '500px'}, "slow");
    div.animate({fontSize: '3em'}, "slow");
  });
});
*/






/*$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#panel").stop();
  });
});*/




/*$(document).ready(function(){
  $("button").click(function(){
    $("p").hide("slow", function(){
      alert("The paragraph is now hidden");
    });
  });
});*/





/*$(document).ready(function(){
  $("button").click(function(){
    $("p").hide(1000);
    alert("The paragraph is now hidden");
  });
});
*/




/*$(document).ready(function(){
  $("button").click(function(){
    $("#p1").css("color", "red").slideUp(2000).slideDown(2000);
  });
});*/



$(document).ready(function(){
  $("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });
});










