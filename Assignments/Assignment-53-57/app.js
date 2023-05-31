//..................EVENTS................

//..................Q1....................

// 1. Consider you have 4 images in a file as shown below: 
// Now When you click on an image it should display in a modal.
// 




//..................Q2....................

  // 2. Create a paragraph and two buttons “zoom in ”(+) and “zoom out”(-)
  // On each click on “zoom in”(+) , add 10px in font size of paragraph.
  // And on each click on “zoom out”(-) , minus 10px in font size of paragraph.

  var fontSize = 16; 
      
  function zoomIn() {
    fontSize += 10; 
    updateFontSize();
  }

  function zoomOut() {
    fontSize -= 10;
    updateFontSize();
  }

  function updateFontSize() {
    var zoomParagraph = document.getElementById("zoom-paragraph");
    zoomParagraph.style.fontSize = fontSize + "px";
  }