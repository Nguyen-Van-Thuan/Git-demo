function categoryEven(x){
	x.classList.toggle("change"); //xoay ic category
	//an hien category
		//lay doi tuong
		var cate = document.getElementsByClassName("mylinks");
		// console.log(cate);
		if (cate[0].style.display === "block") {
	    	cate[0].style.display = "none";
	  	} else {
	    	cate[0].style.display = "block";
	  	}
}
//menu mobile
var icon_bar = document.getElementById("ic-bar-even");
console.log(icon_bar);
//them su kien  gian tiep qua add...
icon_bar.addEventListener('click', function(){
	var menuEven = document.getElementsByClassName("menu");
	console.log(menuEven);
	menuEven[0].classList.toggle("menu-new");
	icon_bar.classList.toggle("rotate");
});
// tabs-product
function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.color = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.color = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
