var resourceURL = "1IJ3jYyL3VEHYQtwP6VG_RnNjyXh5jP6g";
// var resourceURL = "1l6z2DqLI1thuFFIpHdBpe1tmepWPg13R";
var itemURLs = [];
var itemNames = [];
var selectedDocumentId;

$(document).ready(function() {
  // Set the URL for Request FOLDER CONTENTS
  var URL =
    "https://www.googleapis.com/drive/v3/files?q=%27" +
    resourceURL +
    "%27+in+parents&key=AIzaSyCLsjQI8bnfyuh9-FKy-eH87Uq_wUG0H0Y";

  // Get links of the children
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
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
    $(".resource-element").click(function() {
      console.log(this.className);
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
    });
  };
  xmlHttp.open("GET", URL, true); // false for synchronous request
  xmlHttp.send();

  // Click Test
});
