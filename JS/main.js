let imgBox = document.querySelector(".img_box")
let imgWrap = document.querySelector(".imgWrap")
let originalImg = document.getElementById("originalImg")
let line = document.getElementById("line")

originalImg.style.width = imgBox.offsetWidth + "px" ;
let leftSpace = imgBox.offsetLeft ;

imgBox.onmousemove = function (e) {
   let boxWidth = (e.pageX - leftSpace) + "px" ;
   imgWrap.style.width = boxWidth ;
   line.style.left = boxWidth ;
}




