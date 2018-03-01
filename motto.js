
	var timer = setInterval(refresh, 5000);

	var motto = [
	"Patata Ventana Limón", 
	"Solo Mister Jägger conoce el secreto",
	"La vida es dura, pero bachiller más",
	"Make My Life Great Again"
	];

	function refresh () {
		var rnd = Math.floor(Math.random()*motto.length);
		var rnd_past = -1;

		if(rnd != rnd_past) {
			$("#motto").html(motto[rnd]);
			rnd_past = rnd;
		}
		
	}
