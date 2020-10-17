window.onload = function() {
	var oBtn = document.getElementById("btn");

	oBtn.addEventListener("click", function() {
		var address = document.getElementsByClassName("input-address")[0].value;
		console.log(address);
		if (address == "") {
			alert("你没有填写地址哦")
		} else {
			alert("你希望" + address + "天晴");
		}
	})
	oBtn.addEventListener("click", function() {
		alert("许愿不花钱,也没有晴女");
	})
	oBtn.addEventListener("click", function() {
		alert("仅此以作纪念");
	})

}

function music_stop(){
	document.getElementById("img-stop").style.display = "none";
	document.getElementById("img-play").style.display = "block";
	document.getElementsByClassName("music")[0].pause();
}

function music_play(){
	document.getElementById("img-play").style.display = "none";
	document.getElementById("img-stop").style.display = "block";
	document.getElementsByClassName("music")[0].play();
}

var i = true;
function auto_play(){
	if(i) {
		document.getElementsByClassName("music")[0].play();
		i = false;
	}

}

if ('mediaSession' in navigator) {
	navigator.mediaSession.metadata = new MediaMetadata({
	  title: '陽菜と、走る帆高',
	  artist: 'RADWIMPS',
	  album: '100% 晴天女孩',
	  artwork: [
		{ src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1602909496783&di=646654d2f47331acfa0e2e38997f64a1&imgtype=0&src=http%3A%2F%2Fcdn2.ettoday.net%2Fimages%2F4452%2F4452987.jpg', sizes: '192x192' },
	  ]
	});
  
	navigator.mediaSession.setActionHandler('play', function() {
		music_play()
	});
	navigator.mediaSession.setActionHandler('pause', function() {
		music_stop()
	});
	navigator.mediaSession.setActionHandler('seekbackward', function() { /* Code excerpted. */ });
	navigator.mediaSession.setActionHandler('seekforward', function() { /* Code excerpted. */ });
	navigator.mediaSession.setActionHandler('previoustrack', function() { /* Code excerpted. */ });
	navigator.mediaSession.setActionHandler('nexttrack', function() { /* Code excerpted. */ });
  }