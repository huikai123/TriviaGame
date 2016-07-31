$(document).ready(function(){

	//declare variables
	var t = 30;
	var interval;
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var unanswered=0;

	//set a timer
	function timer() {
	    interval = setInterval(function() {
	    	t--;	        
	    	if(t === 0) {   
	    		clearInterval(interval);
	    		$(".wrap").hide();
    			$(".last").css("display","block");

	    		var inputs = $('input[data-correct]:checked');//css selector, check answers. Correct answers have attribute "data-correct"
	    		correctAnswers = inputs.length;
	    		$("#correct").text(correctAnswers);
	    		
	    		//copy from below, same as clicking "done"
	    		var items = $('li');
    			$.each(items, function(i, li) {
  					var inputs =  $(li).find('input:checked');
  					if(inputs.length === 0) {  // 1 checked button in every list==selected, if 0, means unchecked (unanswered)
    					unanswered++; 
    					$("#unanswered").text(unanswered);
  					}
				})
	    		
				incorrectAnswers = 20 - correctAnswers-unanswered;
	    		$("#incorrect").text(incorrectAnswers);
	    		console.log("Correct Answers: " + correctAnswers, "Incorrect Answers: " + incorrectAnswers, "Unanswered: " + unanswered);
	    	}
	    	$('#seconds-left').text(t);
	    }, 1000);
	}

	

	// click "start" to begin the game: show content & start timer
    $(".start").click(function(){
        $(".wrap").css("display","block");  
    	$(".start").hide();
    	timer();
	});	

    // click "done" to submit the answers and stop the timer
    $(".submit").click(function(){
    	clearInterval(interval);
    	$(".wrap").hide();
    	$(".last").css("display","block");

    	
    	// loop through to check unanwered
    	var items = $('li');
    	$.each(items, function(i, li) {
  					var inputs =  $(li).find('input:checked');
  					if(inputs.length === 0) {  // 1 checked button in every list==selected, if 0, means unchecked (unanswered)
    					unanswered++; 
    					$("#unanswered").text(unanswered);
  					}
		})


  		// loop through to check rignt & wrong
		var checked = $('input:checked');
    	$.each(checked, function(index, input) {
    		console.log("index: " + index, "input: " + input);

    		if($(input).data('correct')) { 
    			correctAnswers++;
    			$("#correct").text(correctAnswers);
    			console.log('correct answer!')

    		} else {
    			incorrectAnswers++;
    			$("#incorrect").text(incorrectAnswers);
    		} 
  		})

    	console.log("Correct Answers: " + correctAnswers, "Incorrect Answers: " + incorrectAnswers, "Unanswered: " + unanswered);
  			
    });
    	
		
 
    // click "replay" to restart the game without reloading.
    function reset(){
		t = 30;
		correctAnswers = 0;
    	incorrectAnswers = 0;
    	unanswered = 0;

		clearInterval(interval);
		$(".wrap").css("display","none");  
	
    	$(".start").show();

    	$(".last").css("display","none");

    	$('input:checked').attr('checked', false); //no radio button is chosen

	}

    $(".replay").click(function(){
    	reset();

    });

    })

/* Answer key:
1:C 2:C 3:A 4:C 5:B 6:C 7:C 8:B 9:A 10:C
11:D 12:B 13:A 14:A 15:B 16:A 17:B 18:B 19:B 20:C */