
(async () => {

  // showFile(blob){
  //   // It is necessary to create a new blob object with mime-type explicitly set
  //   // otherwise only Chrome works like it should
  //   var newBlob = new Blob([blob], {type: "application/pdf"})
  
  //   // IE doesn't allow using a blob object directly as link href
  //   // instead it is necessary to use msSaveOrOpenBlob
  //   if (window.navigator && window.navigator.msSaveOrOpenBlob) {
  //     window.navigator.msSaveOrOpenBlob(newBlob);
  //     return;
  //   } 
  
  //   // For other browsers: 
  //   // Create a link pointing to the ObjectURL containing the blob.
  //   const data = window.URL.createObjectURL(newBlob);
  //   var link = document.createElement('a');
  //   link.href = data;
  //   link.download="file.pdf";
  //   link.click();
  //   setTimeout(function(){
  //     // For Firefox it is necessary to delay revoking the ObjectURL
  //     window.URL.revokeObjectURL(data);
  //   }, 100);
  // }
  
  // fetch([url to fetch], {[options setting custom http-headers]})
  // .then(r => r.blob())
  // .then(showFile)

  function loadPDF (base64Data) {
    var pdfData = base64ToUint8Array(base64Data);
    PDFJS.getDocument(pdfData).then(function (pdf) {
      pdf.getPage(1).then(function (page) {
        var scale = 1;
        var viewport = page.getViewport(scale);
        var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        page.render({ canvasContext: context, viewport: viewport });
      });
    });

    
  
    function base64ToUint8Array(base64) {
      var raw = atob(base64);
      var uint8Array = new Uint8Array(raw.length);
      for (var i = 0; i < raw.length; i++) {
        uint8Array[i] = raw.charCodeAt(i);
      }
      return uint8Array;
    }
  }

    const loadingTask = PDFJS.getDocument("https://cors-anywhere.herokuapp.com/https://docs.google.com/uc?id=0ByP7_A9vXm17TmRYcmNScnYzS1E&amp;export=download").then(res => {
      console.log(res)
    });
    
    const pdf = await loadingTask.promise;
  
    // Load information from the first page.
    const page = await pdf.getPage(1);
  
    const scale = 2;
    const viewport = page.getViewport(scale);
  
    // Apply page dimensions to the <canvas> element.
    const canvas = document.getElementById("pdf-canvas");
    const context = canvas.getContext("2d");
    canvas.height = viewport.height;
    canvas.width = viewport.width;
  
    // Render the page into the <canvas> element.
    const renderContext = {
      canvasContext: context,
      viewport: viewport
    };
    await page.render(renderContext);
    console.log("Page rendered!");
  })();