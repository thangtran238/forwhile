function productsoder() {
  for (let i = 0; i < bread.length; i++) {
    if (bread[i].status == 1) {
      let show = "<div class='item'>";
      show += "<img src=" + bread[i].Image+">";
      show += "<div class='card-body'>";
      show += "<h5 class='card-title' title='" + bread[i].name  +"'>"+bread[i].name+"</h5>";
      show += "<p class='card-text'>"+bread[i].price+" đ</p>";
      show += "<a href ='#' onclick='oder()'>ĐẶT MUA</a>";
      show += "</div>";   
      show += "</div>";
      document.getElementById("nproduct").innerHTML += show;
    } else {
      let show = "<div class='item'>";
      show += "<img src=" + bread[i].Image+'>';
      show += "</div>"
      document.getElementById("hproduct").innerHTML += show;
    }
  }
}
