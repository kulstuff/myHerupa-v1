
(async () => {
    const loadingTask = PDFJS.getDocument("https://cors-anywhere.herokuapp.com/https://docs.google.com/uc?id=0ByP7_A9vXm17TmRYcmNScnYzS1E&amp;export=download");
    
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