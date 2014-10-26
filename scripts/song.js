$.fn.songPlay = function() {



	$(function() {

		$(document).scroll(function(){
	    	if($(this).scrollTop()>=$('#playFirstSong').position().top){
	        // alert('it works!');
	        $(document).off('scroll');
	        startSongs();
	        

        
			}
		});

		var startSongs = function(){
	        var link = $('#firstSong').attr('data-firstSong');
			$('#playSong').attr('src', link);

			console.log($('#playSong').attr('src')); 

			changeToSecondSong();

    	};

    	var changeToSecondSong = function(){
		
    	$(document).scroll(function(){
	    	if($(this).scrollTop()>=$('#playSecondSong').position().top){
	        // alert('it works!');
	        $(document).off('scroll');
	        playSecondSong();	

		 	}
		});	

		var playSecondSong = function(){

			var link = $('#secondSong').attr('data-secondSong');
			$('#playSong').attr('src', link);

			console.log($('#playSong').attr('src'));

			ChangeToThirdSong();


		}
	};

		var ChangeToThirdSong = function(){
		
    		$(document).scroll(function(){
	    		if($(this).scrollTop()>=$('#playThirdSong').position().top){
	        	// alert('it works!');
	        	$(document).off('scroll');
	        	playThirdSong();	

		 		}
			});	

			var playThirdSong = function(){

				var link = $('#thirdSong').attr('data-thirdSong');
				$('#playSong').attr('src', link);

				console.log($('#playSong').attr('src'));


			}
		};


	});	


}

