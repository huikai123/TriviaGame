$(document).ready(function(){

	//declare variables
	var t = 120;
	var interval;
	var correctAnswers = 0;
	var incorrectAnswers = 0;
	var unanswered=0;

	//set a timer
	function timer() {
	    interval = setInterval(function() {
	    	t--;	         // count down
	    	if(t === 0) {    //timeout
	    		clearInterval(interval);
	    		$(".wrap").hide();
    			$(".last").css("display","block");
	    		var inputs = $('input[data-correct]:checked');//css selector, check answers. Correct answers have attribute "data-correct"
	    		correctAnswers = inputs.length;
	    		incorrectAnswers = 20 - correctAnswers;
	    		unanswered 
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

    	var checked = $('input:checked')
    	
    	$.each(checked, function(index, input) {
    		console.log("index: " + index, "input: " + input);

    		if($(input).data('correct')) { 
    			correctAnswers++;
    			console.log('correct answer!')
    		} else {
    			incorrectAnswers++;
    		} /*else if {
    			var items = $('li');
				$.each(items, function(i, li) {
  					var inputs =  $(li).find('input:checked');
  					if(inputs.length === 0) {
    					unanswered++; 
  					} */
  				})
  			})	

    	
		
    	console.log("Correct Answers: " + correctAnswers, "Incorrect Answers: " + incorrectAnswers, "Unanswered: " + unanswered);
    	$(".correct").html(correctAnswers);
    	$(".incorrectAnswers").html(incorrectAnswers);
    	$(".unanswered").html(unanswered);

    	
 
    // click "replay" to restart the game without reloading.
    function reset(){
		t = 120;
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

