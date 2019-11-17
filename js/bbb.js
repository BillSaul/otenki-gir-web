window.onload = function() {
	var oBtn = document.getElementById("submit");

	oBtn.addEventListener("click", function() {
		var address = document.getElementById("input_address").value;
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
	document.getElementById("img_stop").style.display = "none";
	document.getElementById("img_play").style.display = "block";
	document.getElementById("music").pause();
}

function music_play(){
	document.getElementById("img_play").style.display = "none";
	document.getElementById("img_stop").style.display = "block";
	document.getElementById("music").play();
}
