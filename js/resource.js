var resourceURL = (window.location.href + '').split('#resURL=')[1]
// var resourceURL = Request.QueryString["resURL"]
// console.log((window.location.href + '').split('#resURL=')[1])
// window.location.href = (window.location.href + '').split('#')[0]
// var resourceURL = "1l6z2DqLI1thuFFIpHdBpe1tmepWPg13R";
var itemURLs = [];
var itemNames = [];
var selectedDocumentId;

$(document).ready(function () {
  // Set the URL for Request FOLDER CONTENTS
  var URL =
    "https://www.googleapis.com/drive/v3/files?q=%27" +
    resourceURL +
    "%27+in+parents&key=AIzaSyCLsjQI8bnfyuh9-FKy-eH87Uq_wUG0H0Y";

  // Get links of the children
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(JSON.parse(this.responseText));
      JSON.parse(this.responseText).files.forEach(file => {
        if (file.mimeType != "application/vnd.google-apps.folder") {
          itemURLs.push(file.id);
          itemNames.push(file.name);
          var elem = document.createElement("div");
          elem.className += " resource-element";
          elem.className += " display7";
          elem.className += " resource-element-id-" + file.id;
          elem.innerHTML = file.name;
          document.getElementById("resource-grid").append(elem);
        }
      });
    }
    $(".resource-element").click(function () {
      // console.log(this.className);
      $('#resource-loader').css({'display': 'block'})
      if ($(".resource-loaded-document")) {
        $(".resource-loaded-document").remove();
      }
      var loadDocument = document.createElement("iframe");
      loadDocument.className +=
        " resource-loading-document resource-loaded-document";
      loadDocument.src =
        "https://docs.google.com/file/d/" +
        this.className.split("resource-element-id-")[1] +
        "/preview?usp=drivesdk";
      document
        .getElementById("resource-overlay-document-payload")
        .append(loadDocument);
      if (window.innerWidth < 700) {
        $("#resource-sidebar").css({ 'display': 'none' });
        $("#resource-hub").css({ 'display': 'block', 'width': '100vw' });
      }
      var iframeDoc = loadDocument.contentDocument || loadDocument.contentWindow.document
      console.log(iframeDoc.readyState)
      // setTimeout(100, setLoader)
      if (  iframeDoc.readyState  == 'complete' ) {
        // loadDocument.contentWindow.alert("Hello");
        loadDocument.contentWindow.onload = function() {
          alert("I am loaded")
        };
        // The loading is complete, call the function we want executed once the iframe is loaded
        afterLoading();
        // return;
      }
    });
    
  };
  xmlHttp.open("GET", URL, true); // false for synchronous request
  xmlHttp.send();
  
  
  $("#resource-bars").click(function () {
    // $(".resource-sidebar__bars").css('color', 'black');
    $("#resource-sidebar").css('display', 'grid');
    $("#resource-hub").css('display', 'none');
    
  })
  
  // function setLoader(){
    //   alert("I am here")
  // }
  
  function afterLoading(){
    $('#resource-loader').css({'display': 'none'})
    // alert("I am here")
  }

  // Click Test
});
