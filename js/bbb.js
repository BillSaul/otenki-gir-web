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
