// AAA PREPROD
// File names in drive VERY Precize (for display8) and no more than one sub folder due to absence of substructure folder recursion [*]

// AA (Within Week or after MST Week)
// AA MUST ADD A NEW FEATURE SYMBOL w Date Modified and Fire Symbol for proximate examinations []
// AA Must have smoothness []
// AA Recursive Folder Loading ! []
// AA Table Proper []
// AA ADD OPTION TO UPLOAD AND CONTRIBUTE NOTES FROM STUDENTS
// AA Color as an argument to be resolved from the drive if possible
// AA Title Changing
// AA We are still worthy of the hammer

// A (Within Month)
// Put the minibar to use with icons to Different Locations in same Drive []
// Place Ads of Swiggy and Zomato []
// Pixel Analyze the page for click frequencies []
// SUBJECT SPECIFIC SVG VISCOUS ANIMATIONS []
// myHerupa SVG Loader []
// Enmark every file with Copyright Reserves []

// A+ 
// REACT Load from data.json and send user data to firebase server

// VH FIX
// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
  // Attaching the same code to script over resizing instances
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var resourceURL = (window.location.href + "").split("#resURL=")[1]
var itemURLs = []
var itemNames = []
var selectedDocumentId
var sidebarLoaded = true
var files = []
var folders = []
var sideBarOnDisplay = true;

$('#toggle--daynight').prop('checked', true)

$('#toggle--daynight').click(function () {
  if(this.checked) {
    $('.resource-hub-document-main').css({'filter': 'invert(0)'})
    $('#resource-lightdark-curr').css({'color': 'white', 'backgroundColor': 'lightBlue'})
    $('#resource-lightdark-curr').html('Light')
    $('#resource-sidebar-toggle-static').css({'filter': 'invert(0)'})
  }
  else {
    $('.resource-hub-document-main').css({'filter': 'invert(1)'})
    $('#resource-lightdark-curr').css({'color': 'white', 'backgroundColor': '#111'})
    $('#resource-lightdark-curr').html('Dark')
    $('#resource-sidebar-toggle-static').css({'filter': 'invert(1)'})
  }
})

setTimeout(function () {
  console.log($('#toggle--daynight'))
  $('#toggle--daynight').prop('checked', true)

  $('#toggle--daynight').click(function () {
    if(this.checked) {
      $('.resource-hub-document-main').css({'filter': 'invert(0)'})
      $('#resource-lightdark-curr').css({'color': 'white', 'backgroundColor': 'lightBlue'})
      $('#resource-lightdark-curr').html('Light')
      $('#resource-sidebar-toggle-static').css({'filter': 'invert(0)'})
    }
    else {
      $('.resource-hub-document-main').css({'filter': 'invert(1)'})
      $('#resource-lightdark-curr').css({'color': 'white', 'backgroundColor': '#111'})
      $('#resource-lightdark-curr').html('Dark')
      $('#resource-sidebar-toggle-static').css({'filter': 'invert(1)'})
    }
  })
}, 1000)

$('#resource-sidebar-toggle').click(function () {
  sidebarLoaded = !sidebarLoaded
  if(window.innerWidth > 700) {
    if(sidebarLoaded) $('#resource-sidebar').css({'margin-left': '0vw'})
    else $('#resource-sidebar').css({'margin-left': '-25vw'})
  }
})

$('#resource-sidebar-toggle-static').click(function () {
  console.log(sidebarLoaded)
  sidebarLoaded = !sidebarLoaded
  if(window.innerWidth > 700) {
    if(sidebarLoaded) $('#resource-sidebar').css({'margin-left': '0vw'})
    else $('#resource-sidebar').css({'margin-left': '-25vw'})
  }
})

$('#resource-sidebar-search-input').on('input', function (e) {
  $('.resource-element').remove()
  files.map(file => {
    if(file.name.toUpperCase().includes(e.target.value.toUpperCase())) {
      $('#resource-elements-keep').append(file.elem)
    }
    
  $(".resource-element").click(function() {
    // console.log(this.className);
    // $(".resource-element").css({'backgroundColor': 'white', 'color': 'black', 'borderBottom': '#E94B3C 2px solid'})
    // $(this).css({'backgroundColor': '#E94B3C', 'color': 'white', 'borderBottom': '#555 4px solid'})
    $("#resource-loader").css({ display: "block" });
    if ($(".resource-loaded-document")) {
      $(".resource-loaded-document").remove();
    }
    var loadDocument = document.createElement("iframe");
    loadDocument.className +=
    " resource-loading-document resource-loaded-document";
    loadDocument.id = "loadDocument";
    loadDocument.src =
    "https://docs.google.com/file/d/" +
    this.className.split("resource-element-id-")[1] +
    "/preview?usp=drivesdk";
    document
    .getElementById("resource-overlay-document-payload")
    .append(loadDocument);
    if (window.innerWidth < 700) {
      console.log('Checks')
      $("#resource-hub").css({ zIndex: '100' });
      var bottomSideBar = document.getElementById('resource-sidebar')
      $('#resource-sidebar-header').css({opacity: 0})
      $('#resource-sidebar-mobo').animate({opacity: 1})
      bottomSideBar.style.top = 'calc(var(--vh, 1vh) * 93)'
      bottomSideBar.style.height = 'calc(var(--vh, 1vh) * 07)'
      sideBarOnDisplay = !sideBarOnDisplay
      $("#resource-sidebar").css({ zIndex: '102' });
    }
    $("#loadDocument").on("load", function() {
      $("#resource-loader").css({ display: "none" });
      // your code (will be called once iframe is done loading)
    });
  });
  })
})

$('#resource-up-chevron').click(function () {
  var bottomSideBar = document.getElementById('resource-sidebar')
  $('#resource-sidebar-header').animate({opacity: 1})
  $('#resource-sidebar-mobo').animate({opacity: 0})
  bottomSideBar.style.top = 'calc(var(--vh, 1vh) * 75)'
  bottomSideBar.style.height = 'calc(var(--vh, 1vh) * 25)'
  sideBarOnDisplay = !sideBarOnDisplay
})

$('.resource-down-chevron').click( function () {
  var bottomSideBar = document.getElementById('resource-sidebar')
  if(sideBarOnDisplay) {
    $('#resource-sidebar-header').animate({opacity: 0})
    $('#resource-sidebar-mobo').animate({opacity: 1})
    bottomSideBar.style.top = 'calc(var(--vh, 1vh) * 93)'
    bottomSideBar.style.height = 'calc(var(--vh, 1vh) * 07)'
    sideBarOnDisplay = !sideBarOnDisplay
  }
  else {
    // $('.resource-down-chevron').css({
    //   transform: "rotateZ(90)"
    // })
    $('#resource-sidebar-header').animate({opacity: 1})
    $('#resource-sidebar-mobo').animate({opacity: 0})
    bottomSideBar.style.top = 'calc(var(--vh, 1vh) * 75)'
    bottomSideBar.style.height = 'calc(var(--vh, 1vh) * 25)'
    sideBarOnDisplay = !sideBarOnDisplay
  }
})

$(document).ready(function() {
  // Set the URL for Request FOLDER CONTENTS
  var URL =
    "https://www.googleapis.com/drive/v3/files?q=%27" +
    resourceURL +
    "%27+in+parents&key=AIzaSyCLsjQI8bnfyuh9-FKy-eH87Uq_wUG0H0Y&fields=*";
  // Show the loader while the list loads
  // $('#resource-list-loader').css({'display': 'block'})
  // Get links of the children
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(JSON.parse(this.responseText))
      $('#resource-list-loader').css({'display': 'none'})
      JSON.parse(this.responseText).files.forEach(file => {
        if (file.mimeType != "application/vnd.google-apps.folder") {
          itemURLs.push(file.id);
          itemNames.push(file.name);
          var elem = document.createElement("div");
          elem.className += " resource-element";
          elem.className += " display7";
          elem.className += " resource-element-id-" + file.id;
          // textChild = document.createElement('div')
          // textChild.className += ' resource-element-textnode display8'
          // textChild.innerHTML = file.name
          elem.innerHTML = file.name.split('.')[0]
          thumbnail = document.createElement('div')
          thumbnail.className += ' resource-element-thumbnail'
          thumbnailImage = document.createElement('img')
          thumbnailImage.src = file.thumbnailLink
          thumbnail.append(thumbnailImage)
          // elem.append(thumbnail) 
          // elem.append(textChild)
          newFile = {}
          newFile.elem = elem
          newFile.name = file.name
          newFile.thumbnail = thumbnail
          files.push(newFile)
        }
        else {
          // Create a Generic Folder Chip
          genericChip = document.createElement('span')
          genericChip.className += ' resource-sidebar-folderChip resource-sidebar-folderChip-id-' + file.id + ' display10'
          genericChip.innerHTML = file.name
          // Set onClick Listener later to avoid multiple API calls
          // Check if a folderbar exists already!
          if(!document.getElementById('resource-sidebar-folderBar')) {
            folderBar = document.createElement('div')
            folderBar.id = 'resource-sidebar-folderBar'
            folderBar.className += ' resource-sidebar-content-folderBar'
            $('#resource-grid').prepend(folderBar)
            if(window.innerWidth > 700) {
              $('#resource-sidebar-folderBar').mousewheel(function(event, delta) {
                this.scrollLeft -= (delta * 1)
                event.preventDefault()
              })
            }
            generalChip = {} 
            generalChip.name = 'General'
            generalChip.id = resourceURL
            generalChip.chip = document.createElement('span')
            generalChip.chip.className = ' resource-sidebar-folderChip resource-sidebar-folderChip-id-' + resourceURL + ' display10'
            generalChip.chip.innerHTML = 'General'
            folders.push(generalChip)
          }
          // Create a folderchip element to carry properties as well as the the chip element
          folderChip = {}
          folderChip.name = file.name
          folderChip.id = file.id
          folderChip.chip = genericChip
          // Push to folders array
          folders.push(folderChip)
          // // Append chip to folderbar
          // $('#resource-sidebar-folderBar').append(genericChip)
        }
      });
    }
    // folders.reverse()
    folders.map(folder => {
      $('#resource-sidebar-folderBar').append(folder.chip)
    })
    files.reverse()
    files.map(file => {
      document.getElementById("resource-elements-keep").append(file.elem);
    })
    $(".resource-element").click(function() {
      // console.log(1)
      // console.log(this.className);
      // $(".resource-element").css({'backgroundColor': 'white', 'color': 'black', 'borderBottom': '#E94B3C 2px solid'})
      // $(this).css({'backgroundColor': '#E94B3C', 'color': 'white', 'borderBottom': '#555 4px solid'})
      $("#resource-loader").css({ display: "block" });
      if ($(".resource-loaded-document")) {
        $(".resource-loaded-document").remove();
      }
      var loadDocument = document.createElement("iframe");
      loadDocument.className +=
      " resource-loading-document resource-loaded-document";
      loadDocument.id = "loadDocument";
      loadDocument.src =
      "https://docs.google.com/file/d/" +
      this.className.split("resource-element-id-")[1] +
      "/preview?usp=drivesdk";
      document
      .getElementById("resource-overlay-document-payload")
      .append(loadDocument);
      if (window.innerWidth < 700) {
        console.log('checks')
        $("#resource-hub").css({ zIndex: '100' });
        var bottomSideBar = document.getElementById('resource-sidebar')
        $('#resource-sidebar-header').animate({opacity: 0})
        $('#resource-sidebar-mobo').animate({opacity: 1})
        bottomSideBar.style.top = 'calc(var(--vh, 1vh) * 93)'
        bottomSideBar.style.height = 'calc(var(--vh, 1vh) * 07)'
        sideBarOnDisplay = !sideBarOnDisplay
        $("#resource-sidebar").css({ zIndex: '100000000000000000002' });
      }
      $("#loadDocument").on("load", function() {
        $("#resource-loader").css({ display: "none" });
      });
    });
    $('.resource-sidebar-folderChip').click(function () {
      $('.resource-element').remove()
      $('#resource-list-loader').css({'display': 'none'})
      files = []
      $('#resource-list-loader').css({'display': 'block'})
      // Send a new Request
      // Set the newURL for Request FOLDER CONTENTS
      var URLSub = "https://www.googleapis.com/drive/v3/files?q=%27" + this.className.split('id-')[1].split(' ')[0] + "%27+in+parents&key=AIzaSyCLsjQI8bnfyuh9-FKy-eH87Uq_wUG0H0Y&fields=*";
      var xmlHttpSubFolder = new XMLHttpRequest();
      xmlHttpSubFolder.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          console.log(JSON.parse(this.responseText))
          $('#resource-list-loader').css({'display': 'none'})
          JSON.parse(this.responseText).files.forEach(file => {
            if (file.mimeType != "application/vnd.google-apps.folder") {
              itemURLs.push(file.id);
              itemNames.push(file.name);
              var elem = document.createElement("div");
              elem.className += " resource-element";
              elem.className += " display7";
              elem.className += " resource-element-id-" + file.id;
              // textChild = document.createElement('div')
              // textChild.className += ' resource-element-textnode display8'
              // textChild.innerHTML = file.name
              elem.innerHTML = file.name.split('.')[0]
              thumbnail = document.createElement('div')
              thumbnail.className += ' resource-element-thumbnail'
              thumbnailImage = document.createElement('img')
              thumbnailImage.src = file.thumbnailLink
              thumbnail.append(thumbnailImage)
              // elem.append(thumbnail) 
              // elem.append(textChild)
              newFile = {}
              newFile.elem = elem
              newFile.name = file.name
              newFile.thumbnail = thumbnail
              files.push(newFile)
            }
          })
        }
      }
      xmlHttp.open("GET", URLSub, true); // false for synchronous request
      xmlHttp.send();
      files.reverse()
      files.map(file => {
        document.getElementById("resource-elements-keep").append(file.elem);
      })
    })
  };
  xmlHttp.open("GET", URL, true); // false for synchronous request
  xmlHttp.send();
  
  $("#resource-bars").click(function() {
    // $(".resource-sidebar__bars").css('color', 'black');
    $("#resource-sidebar").css("display", "grid");
    $("#resource-hub").css("display", "none");
  });
  
});

$('#resource-sidebar').click(function () {
  console.log(1)
})

if(window.innerWidth < 700) {
  // var bottomSideBar = document.getElementById('resource-sidebar')
  // var hammerController = new Hammer(bottomSideBar)
  // hammerController.get('swipe').set({
  //   direction: Hammer.DIRECTION_ALL,
  //   threshold: 1, 
  //   velocity: 0.1
  // })
  // hammerController.on('pandown', function (e) {
    // console.log('Pan Down:', e)
  //   if(sideBarOnDisplay) {
  //     $('#resource-sidebar-header').animate({opacity: 0})
  //     $('#resource-sidebar-mobo-seek').animate({opacity: 1})
  //     bottomSideBar.style.top = 'calc(var(--vh, 1vh) * 93)'
  //     bottomSideBar.style.height = 'calc(var(--vh, 1vh) * 07)'
  //     sideBarOnDisplay = !sideBarOnDisplay
  //   }
  // })
  // hammerController.on('panup', function (e) {
  //   if(!sideBarOnDisplay) {
  //     $('#resource-sidebar-header').animate({opacity: 1})
  //     $('#resource-sidebar-mobo-seek').animate({opacity: 0})
  //     bottomSideBar.style.top = 'calc(var(--vh, 1vh) * 75)'
  //     bottomSideBar.style.height = 'calc(var(--vh, 1vh) * 25)'
  //     sideBarOnDisplay = !sideBarOnDisplay
  //   }
    // console.log('Pan Up: ', e)
  // })
}
