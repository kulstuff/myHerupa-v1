// AAA PREPROD
// File names in drive VERY Precise (for display8) and no more than one sub folder due to absence of substructure folder recursion [*]

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
var itemNames = []
var selectedDocumentId
var sidebarLoaded = true
var files = []
var folders = []
var sideDisplay = 'Full'
var countAd = 0

var adTiles = []
// Monetary
var tileAds = [
  `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <ins class="adsbygoogle"
    style="display:block"
    data-ad-client="ca-pub-4625423558686989"
    data-ad-slot="4857255991"
    data-ad-format="auto"
    data-full-width-responsive="true"></ins>
  <script>
    (adsbygoogle = window.adsbygoogle || []).push({});
  </script>`,
  `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <!-- Resource horizontal -->
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-4625423558686989"
       data-ad-slot="1366046622"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>`,
  `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <!-- Display Ad 1 -->
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-4625423558686989"
       data-ad-slot="1613582349"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>`,
  `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <!-- Display Ad 2 -->
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-4625423558686989"
       data-ad-slot="3957492894"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>`,
  `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
  <!-- Display Ad 3 -->
  <ins class="adsbygoogle"
       style="display:block"
       data-ad-client="ca-pub-4625423558686989"
       data-ad-slot="4048173996"
       data-ad-format="auto"
       data-full-width-responsive="true"></ins>
  <script>
       (adsbygoogle = window.adsbygoogle || []).push({});
  </script>`

]

// Day Night Toggle
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

// Sidebar Toggle Contoller
$('#resource-sidebar-toggle').click(function () {
  sidebarLoaded = !sidebarLoaded
  if(window.innerWidth > 700) {
    if(sidebarLoaded) $('#resource-sidebar').css({'margin-left': '0vw'})
    else $('#resource-sidebar').css({'margin-left': '-25vw'})
  }
})
// Static Sidebar Toggle Contoller
$('#resource-sidebar-toggle-static').click(function () {
  console.log(sidebarLoaded)
  sidebarLoaded = !sidebarLoaded
  if(window.innerWidth > 700) {
    if(sidebarLoaded) $('#resource-sidebar').css({'margin-left': '0vw'})
    else $('#resource-sidebar').css({'margin-left': '-25vw'})
  }
})

// Mobo Chevron Controls
// UP
$('#resource-up-chevron').click(function () {
  var bottomSideBar = document.getElementById('resource-sidebar')
  $('#resource-sidebar-header').animate({opacity: 1})
  $('#resource-sidebar-mobo').animate({opacity: 0})
  bottomSideBar.style.top = 'calc(var(--vh, 1vh) * 75)'
  bottomSideBar.style.height = 'calc(var(--vh, 1vh) * 25)'
  sideBarOnDisplay = !sideBarOnDisplay
})
// DOWN
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
    $('#resource-sidebar-header').animate({opacity: 1})
    $('#resource-sidebar-mobo').animate({opacity: 0})
    bottomSideBar.style.top = 'calc(var(--vh, 1vh) * 75)'
    bottomSideBar.style.height = 'calc(var(--vh, 1vh) * 25)'
    sideBarOnDisplay = !sideBarOnDisplay
  }
})

// Desktop Chevron Controls for the Sidebar
$('.resource-sidebar-controls-left').click(function () {

})

$('#resource-sidebar-controls-right').click(function () {
  $('#resource-sidebar').css({width: '5000vw'})
})


// Search Feature
$('#resource-sidebar-search-input').on('input', function (e) {
  $('.resource-element-capsule').remove()
  // console.log(files)
  files.map(file => {
    if(file.name.toUpperCase().includes(e.target.value.toUpperCase())) {
      $('#resource-grid').append(file.elem)
    }
    
    // $(".resource-element").click(function() {
      // console.log(this.className);
      // $(".resource-element").css({'backgroundColor': 'white', 'color': 'black', 'borderBottom': '#E94B3C 2px solid'})
      // $(this).css({'backgroundColor': '#E94B3C', 'color': 'white', 'borderBottom': '#555 4px solid'})
      // $("#resource-loader").css({ display: "block" })
      // if ($(".resource-loaded-document")) {
      //   $(".resource-loaded-document").remove()
      // }
      // var loadDocument = document.createElement("iframe")
      // loadDocument.className += " resource-loading-document resource-loaded-document"
      // loadDocument.id = "loadDocument"
      // loadDocument.src = "https://docs.google.com/file/d/" + this.className.split("resource-element-id-")[1] + "/preview?usp=drivesdk"
      // document.getElementById("resource-overlay-document-payload").append(loadDocument)
      // if (window.innerWidth < 700) {
      //   $("#resource-hub").css({ zIndex: '100' });
      //   var bottomSideBar = document.getElementById('resource-sidebar')
      //   $('#resource-sidebar-header').css({opacity: 0})
      //   $('#resource-sidebar-mobo').animate({opacity: 1})
      //   bottomSideBar.style.top = 'calc(var(--vh, 1vh) * 93)'
      //   bottomSideBar.style.height = 'calc(var(--vh, 1vh) * 07)'
      //   sideBarOnDisplay = !sideBarOnDisplay
      //   $("#resource-sidebar").css({ zIndex: '102' });
      // }
      // $("#loadDocument").on("load", function() {
      //   $("#resource-loader").css({ display: "none" });
      //   // your code (will be called once iframe is done loading)
      // })
    // })
  })
})

$(document).ready(function() {
  // Set the URL for Request FOLDER CONTENTS
  var URL =
    "https://www.googleapis.com/drive/v3/files?q=%27" +
    resourceURL +
    "%27+in+parents&key=AIzaSyCLsjQI8bnfyuh9-FKy-eH87Uq_wUG0H0Y&fields=*";
  // Show the loader while the list loads
  // $('#resource-list-loader').css({'display': 'block'})
  // Get links of the children using XMLHTTP
  var xmlHttp = new XMLHttpRequest()
  xmlHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(JSON.parse(this.responseText))
      // $('#resource-list-loader').css({'display': 'none'})
      // For each element in the GDrive Directory
      JSON.parse(this.responseText).files.forEach(file => {
        // Check if not Folder
        if (file.mimeType != "application/vnd.google-apps.folder") {
          
          // Layout the mainframe called Resource-Element
          var elem = document.createElement("div")
          elem.className += " resource-element"
          elem.className += " display7"
          elem.className += " resource-element-id-" + file.id
          
          // Lay out its branch [AAA]  as Resource-Element-Branch
          var branch = document.createElement('div')
          branch.className += ' resource-element-branch display10'
          branch.innerHTML = file.name.split('.')[0]
          
          // Encapsulate Mainfrome and its branch in Resource-Capsule
          var capsule = document.createElement('div')
          capsule.className += ' resource-element-capsule'
          capsule.className += ' resource-element-capsule-id-' + file.id
          
          // Thumbnail insertion
          // ThumbnailDiv
          thumbnail = document.createElement('div')
          thumbnail.className += ' resource-element-thumbnail'
          // ThumbnailImage
          thumbnailImage = document.createElement('img')
          thumbnailImage.src = file.thumbnailLink.substring(0, file.thumbnailLink.length - 3) + '720'
          // Insert Thumbnail Image to Thumbnail
          thumbnail.append(thumbnailImage)
          
          // Add Thumbnail to the mainframe
          elem.append(thumbnail)
          
          // Append branch to Capsule
          capsule.append(branch)
          // Preppend Mainframe to the Capsule 
          capsule.prepend(elem)

          // Create an internal Js Reference Object and store it in files list
          newFile = {}
          newFile.elem = capsule
          newFile.id = file.id
          newFile.name = file.name
          newFile.thumbnail = thumbnail
          files.push(newFile)
        }
        else { 
          // We encounter a subfolder
          // Create a Generic Folder Chip as Resource-Sidebar-FolderChip
          genericChip = document.createElement('span')
          genericChip.className += ' resource-sidebar-folderChip resource-sidebar-folderChip-id-' + file.id + ' display10'
          genericChip.innerHTML = file.name
          
          // Set onClick Listener later to avoid multiple API calls [AA]
          
          // Check if a folderbar exists already!
          if(!document.getElementById('resource-sidebar-folderBar')) {
            // Create a FolderBar
            folderBar = document.createElement('div')
            folderBar.id = 'resource-sidebar-folderBar'
            folderBar.className += ' resource-sidebar-content-folderBar'
            
            $('#resource-grid').prepend(folderBar)
            
            // Create A General Chip to Always Refer to the main content of the Directory (Treat this as a folder)
            // Create an internal JS reference for a GENERAL folder and store it in folders List
            generalChip = {} 
            generalChip.name = 'General'
            generalChip.id = resourceURL
            generalChip.chip = document.createElement('span')
            generalChip.chip.className = ' resource-sidebar-folderChip resource-sidebar-folderChip-id-' + resourceURL + ' display10'
            generalChip.chip.innerHTML = 'General'
            folders.push(generalChip)
            console.log('Hello by General Chip')
            $('#resource-sidebar-folderBar').append(generalChip.chip)

            // [AAA] Style the General by Default and other FolderChips to Seem Selected when Selected {CSS}
            
            // Allow side scrollling on scroll down
            if(window.innerWidth > 700) {
              $('#resource-sidebar-folderBar').mousewheel(function(event, delta) {
                this.scrollLeft -= (delta * 1)
                event.preventDefault()
              })
            }
          }

          // Create an internal JS reference for a folder and store it in folders List
          folderChip = {}
          folderChip.name = file.name
          folderChip.id = file.id
          folderChip.chip = genericChip
          folders.push(folderChip)
          // Append chip to folderbar
          $('#resource-sidebar-folderBar').append(genericChip)
        }
      })
    }

    // TEST
    files.reverse()
    
    files.map((file, index) => {
      if((index % 4) == 3) insertAdTile(1, 'Advertisement')
      document.getElementById("resource-grid").append(file.elem);
    })
    
    // Set the listeners
    setOnClickListeners()
  }

  // Asynchronusly call for Material
  xmlHttp.open("GET", URL, true) // false for synchronous request
  xmlHttp.send()
})

// Bouncy Animation for Resource-Elements moving in and out
$('#resource-grid').scroll(function () {
  function checkTop (elem) {
    var elemTop = $(elem).offset().top
    var gridTop = $('#resource-grid').offset().top
    var gridBottom = $('#resource-grid').offset().top + $('#resource-grid').height()

    // Test Logger
    // console.log('GridTop: ' + gridTop + 'GridBottom: ' + gridBottom + ' ElemTop: ' + elemTop)
    
    if(elemTop >= gridTop && elemTop <= gridBottom) return 1 
    else return 0
  }
  files.map(file => {
    if(!(checkTop('.resource-element-id-' + file.id))) {
      $('.resource-element-capsule-id-' + file.id).css({transform: 'scale(0)'})
    }
    else {
      $('.resource-element-capsule-id-' + file.id).css({transform: 'scale(1)'})
    }
  })
})

var setOnClickListeners = function () {
  
  // ELement Tile Listener
  $(".resource-element").click(function() {
    console.log(1)
    // $(".resource-element").css({'backgroundColor': 'white', 'color': 'black', 'borderBottom': '#E94B3C 2px solid'})
    // $(this).css({'backgroundColor': '#E94B3C', 'color': 'white', 'borderBottom': '#555 4px solid'})
    // $("#resource-loader").css({ display: "block" });
    
    // If there exists a loaded document beforehand then go on and remove it
    if ($(".resource-loaded-document")) {
      $(".resource-loaded-document").remove()
    }

    // Create a new Document
    var loadDocument = document.createElement("iframe")
    
    loadDocument.className +=
    " resource-loading-document resource-loaded-document";
    loadDocument.id = "loadDocument";
    loadDocument.src =
    "https://docs.google.com/file/d/" +
    this.className.split("resource-element-id-")[1] +
    "/preview?usp=drivesdk";
    document
    .getElementById("resource-overlay-document-payload")
    .append(loadDocument)
    if (window.innerWidth < 700) {
      // $('#resource-hub').css({ zIndex: '100' });
      var bottomSideBar = document.getElementById('resource-sidebar')
      $('#resource-sidebar-header').animate({opacity: 0})
      $('#resource-sidebar-mobo').animate({opacity: 1})
      bottomSideBar.style.top = 'calc(var(--vh, 1vh) * 93)'
      bottomSideBar.style.height = 'calc(var(--vh, 1vh) * 07)'
      sideBarOnDisplay = !sideBarOnDisplay
      // $("#resource-sidebar").css({ zIndex: '100000000000000000002' });
    }
    $("#loadDocument").on("load", function() {
      $("#resource-loader").css({ display: "none" });
    })
  })
  
  $('.resource-sidebar-folderChip').click(function () {
    $('.resource-element-capsule').remove()
    // $('#resource-list-loader').css({'display': 'none'})
    // Reset the files to be shown
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
        
        // The following should probably be a separate function
        JSON.parse(this.responseText).files.forEach(file => {
          // Check if not Folder
          if (file.mimeType != "application/vnd.google-apps.folder") {
            // Layout the mainframe called Resource-Element
            var elem = document.createElement("div")
            elem.className += " resource-element"
            elem.className += " display7"
            elem.className += " resource-element-id-" + file.id
            
            // Lay out its branch [AAA]  as Resource-Element-Branch
            var branch = document.createElement('div')
            branch.className += ' resource-element-branch display10'
            branch.innerHTML = file.name.split('.')[0]
            
            // Encapsulate Mainfrome and its branch in Resource-Capsule
            var capsule = document.createElement('div')
            capsule.className += ' resource-element-capsule'
            capsule.className += ' resource-element-capsule-id-' + file.id
            
            // Thumbnail insertion
            // ThumbnailDiv
            thumbnail = document.createElement('div')
            thumbnail.className += ' resource-element-thumbnail'
            // ThumbnailImage
            thumbnailImage = document.createElement('img')
            thumbnailImage.src = file.thumbnailLink.substring(0, file.thumbnailLink.length - 3) + '720'
            // Insert Thumbnail Image to Thumbnail
            thumbnail.append(thumbnailImage)
            
            // Add Thumbnail to the mainframe
            elem.append(thumbnail)
            
            // Append branch to Capsule
            capsule.append(branch)
            // Preppend Mainframe to the Capsule 
            capsule.prepend(elem)

            // Create an internal Js Reference Object and store it in files list
            newFile = {}
            newFile.elem = capsule
            newFile.id = file.id
            newFile.name = file.name
            newFile.thumbnail = thumbnail
            files.push(newFile)
          }
        })
        
        // TEST
        files.reverse()
        
        // Append the files one by one
        files.map((file, index) => {
          if((index % 4) == 3) insertAdTile(1, 'Advertisement')
          document.getElementById("resource-grid").append(file.elem)
        })
      }
    }
    xmlHttpSubFolder.open("GET", URLSub, true) // false for synchronous request
    xmlHttpSubFolder.send()
  })
}

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

// Utility Function to add Ads [Spacer: Width of the Ad] [AAA: Spacer == 2 posibility]
var insertAdTile = function (spacer, branchText) {

  // Set Ad Object to return
  var adTile = {}
  if(spacer == 1) {
    // Layout the mainframe called Resource-Element
    var elem = document.createElement("div")
    elem.className += " resource-element resource-element-ad"
    elem.innerHTML = tileAds[countAd]

    // Lay out its branch [AAA]  as Resource-Element-Branch
    var branch = document.createElement('div')
    branch.className += ' resource-element-branch resource-element-ad-branch display10'
    branch.innerHTML = branchText
    
    // Encapsulate Mainfrome and its branch in Resource-Capsule
    var capsule = document.createElement('div')
    capsule.className += ' resource-element-capsule'
    
    // Append branch to Capsule
    capsule.append(branch)
    // Preppend Mainframe to the Capsule 
    capsule.prepend(elem)
    
    // Create an internal Js Reference Object and store it in files list
    adTile.spacer = 1
    adTile.elem = capsule
    adTile.id = 'ad'
    adTile.adId = (countAd++)
  }
  else {

  }
  document.getElementById('resource-grid').append(adTile.elem)
  adTiles.push(adTile)
}

// var goToDrive = document.createElement('a')
// goToDrive.id = 'GoToDrive'
// if(window.innerWidth < 700) {
//   goToDrive.className += ' display8'
// }
// else {
//   goToDrive.classList += ' display10'
// }
// goToDrive.style.paddingLeft = '2rem'
// goToDrive.style.color = 'red'
// goToDrive.href = 'https://drive.google.com/open?id=' + resourceURL
// goToDrive.innerHTML = 'View in drive'
// $('#resource-sidebar-header').append(goToDrive)