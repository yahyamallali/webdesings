function toggleContent() {
    var content1 = document.getElementById("content-1");
    var content2 = document.getElementById("content-2");
    var content3 = document.getElementById("content-3");
    var content4 = document.getElementById("content-4");
    var content5 = document.getElementById("content-5");
    var content6 = document.getElementById("content-6");
    
    if (content1.style.display === "none") {
      content1.style.display = "block";
      content2.style.display = "block";
      content3.style.display = "block";
      content4.style.display = "block";
      content5.style.display = "block";
      content6.style.display = "block";
    } else {
      content1.style.display = "none";
      content2.style.display = "none";
      content3.style.display = "none";
      content4.style.display = "none";
      content5.style.display = "none";
      content6.style.display = "none";
    }
  }