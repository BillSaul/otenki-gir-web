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