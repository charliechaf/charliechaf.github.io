var start = new Date().getTime();

			var sum = 0;

			var listOfTimes = [];

			function getRandomColor() {
			  var letters = '0123456789ABCDEF';
			  var color = '#';
			  for (var i = 0; i < 6; i++) {
			    color += letters[Math.floor(Math.random() * 16)];
			  }
			  return color;
			}

			function makeShapeAppear () {


				var top = Math.random() * 150;

				var left = Math.random() * 1100;

				var width = Math.random() * 400 +10;

				document.getElementById("shape").style.top = top + "px";

				document.getElementById("shape").style.left = left + "px";

				document.getElementById("shape").style.width = width + "px";

				document.getElementById("shape").style.height = width + "px";

				document.getElementById("shape").style.display = "block";

				document.getElementById("shape").style.background = getRandomColor();

				if (Math.random() > 0.5) {
					document.getElementById("shape").style.borderRadius = "50%";
				} else {
					document.getElementById("shape").style.borderRadius = "0";
				}

				start = new Date().getTime();

			}

			function MarkShapeAppearWithTime () {
				setTimeout(makeShapeAppear, Math.random() * 2500);
			};

			function FindTheAverage (array) {
				for( var i = 0; i < array.length; i++ ){
    			sum += array[i]; //don't forget to add the base
			}
			var avg = sum/array.length;
			return avg.toFixed(2);
			}

			document.getElementById("Go").onclick = function() {
				document.getElementById("Go").style.display = "none";
				MarkShapeAppearWithTime();
			}


				document.getElementById("shape").onclick =  function(){
					
					document.getElementById("shape").style.display = "none";
					var end = new Date().getTime();

					var timeTaken = (end - start)/ 1000;

					listOfTimes.push(timeTaken)
					
					document.getElementById("YourTime").innerHTML = "Your Time: " + timeTaken + " seconds";

					if (listOfTimes.length ==6) {

						if(alert("Your average time is "+FindTheAverage(listOfTimes)+ " seconds!"));
						else  {  window.location.reload(); 
						
					}

					} 

					MarkShapeAppearWithTime();

					console.log(listOfTimes)			

			}
