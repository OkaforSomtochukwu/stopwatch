var s = 0;
var m = 0;
var h = 0;
var ms = 0;
var counttime;
var d;
			
	setInterval(()=>{
		d = new Date();

		//To display time
		document.getElementById("sectime").innerHTML =  d.getSeconds();			
		document.getElementById("mintime").innerHTML =  d.getMinutes();
		document.getElementById("hourtime").innerHTML = d.getHours();
	}, 1000)
			
		function commence(){
			counttime = setInterval(()=>{
				ms++;
					
				//var m = Math.floor(s/60)
				if (ms >= 100){
					ms = 0;
					s++;
				}
					
				//var m = Math.floor(s/60)
				if (s >= 60){
					s = 0;
					m++;
				}
					
				if (m >= 60){
					m = 0;
					h++;
				}
					
				//To display stop watch
				document.getElementById("msec").innerHTML = ms;
				document.getElementById("sec").innerHTML = s;			
				document.getElementById("min").innerHTML = m;
				document.getElementById("hrs").innerHTML = h;
			}, 10);
		}
			
		function stoptime(){
			//this is to stop the stopwatch
			clearInterval(counttime);
		}
			 