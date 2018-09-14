// //Combine with the main script
$(document).ready(function(){
  $("#vlec_parent").mouseup(function(e)
  {
      var subject = $("#vlec_child");
      if(e.target.id != subject.attr('id') && !subject.has(e.target).length)
      {
          $(".vlec__child").css('display','none');
          $(".vlec__parent").css('display','none');
          
      }
  });
    function getModal(key) {
      $(".vlec__parent").css('display','block');
      $(".vlec__child").css('display','block');
      $('#vlec_parent').fadeIn();
      var embedFrame = document.createElement('iframe');
      embedFrame.className = 'vlec__frame';
      embedFrame.setAttribute('src', key);
      $('#vlec_child').append(embedFrame);
      embedFrame = document.getElementById('frame')
      embedFrame.setAttribute('src', key);
    }

    var subjects = new Map();
        subjects.set('AppChem' , 'Applied Chemistry');
        subjects.set('AppPhy' , 'Applied Physics');
        subjects.set('Maths1' , 'Mathematics 1');
        subjects.set('Maths2' , 'Mathematics 2');
        subjects.set('BioChem' , 'BioChemistry');
        subjects.set('BioTech' , 'Introduction to BioTechnology');
        subjects.set('CellBio' , 'Cell Biology and Genetics');
        subjects.set('ProfComm' , 'Professional Communication');
        subjects.set('CompOne' , 'Computer Programming 1');
        subjects.set('CompTwo' , 'Computer Programming 2');
        subjects.set('DevBio' , 'Development Biology');
        subjects.set('EngDraw' , 'Engineering Drawing');
        subjects.set('EngDes' , 'Engineering Design');
        subjects.set('EleEng' , 'Electrical Engineering');
        subjects.set('EceEng' , 'Electronics Engineering');
        subjects.set('IntroBio' , 'Introduction to BioTechnology');
        subjects.set('MicroBio' , 'MicroBiology');
        subjects.set('Env' , 'Environmental Engineering');
        subjects.set('IntroMaths1' , 'Introductory Mathematics 1');
        subjects.set('IntroMaths2' , 'Introductory Mathematics 2');
        subjects.set('Mech' , 'Mechanics');


    var subjectThemes = new Map()
        subjectThemes.set('AppChem' , '#4F84C4');
        subjectThemes.set('AppPhy' , '#79C753');
        subjectThemes.set('Maths1' , '#E94B3C');
        subjectThemes.set('Maths2' , '#6F9FD8');
        subjectThemes.set('BioChem' , '#6B5B95');
        subjectThemes.set('BioTech' , '#bc243c');
        subjectThemes.set('CellBio' , '#ed9302');
        subjectThemes.set('ProfComm' , '#bc243c');
        subjectThemes.set('CompOne' , '#005960');
        subjectThemes.set('CompTwo' , '#D2691E');
        subjectThemes.set('DevBio' , '#4F84C4');
        subjectThemes.set('EngDraw' , '#2E4A62');
        subjectThemes.set('EngDes' , '#4f1a5f');
        subjectThemes.set('EleEng' , '#944743');
        subjectThemes.set('EceEng' , '#c47fad');
        subjectThemes.set('Env' , '#6B5B95');
        subjectThemes.set('IntroBio' , '#4f1a5f');
        subjectThemes.set('MicroBio' , ' #944743');
        subjectThemes.set('IntroMaths1' , '#c47fad');
        subjectThemes.set('IntroMaths2' , '#E94B3C');
        subjectThemes.set('Mech' , '#ed9302');

    var subjectAlias = new Map();
    //Chemistry
        //Fuels
        subjectAlias.set('Fuels -1 Introduction, Classification, Calorific Value','Introduction, Classification', 'Calorific Value');
        subjectAlias.set('Fuels -2 Higher or Gross(HCV)(GCV) and Lower or Net Calorific Value(LCV)(NCV) of Coal', 'Lower, Higher, Gross and Net Calorific Value');
        subjectAlias.set('Fuels -3 Characteristics of a Good Fuel and Discussion on Coal', 'Categorisation of a Good Fuel');
        subjectAlias.set('Fuels -4 Proximate Analysis', 'Proximate Analysis');
        subjectAlias.set('Fuels -4 Proximate Analysis', 'Ultimate Analysis');
        subjectAlias.set('Fuels -5 Ultimate Analysis', 'Ultimate Analysis');
        subjectAlias.set('Fuels -6 Carbonization of Coal', 'Carbonization of Coal');
        subjectAlias.set('Fuels -7 Refining of Petroleum', 'Refining of Petroleum');
        subjectAlias.set('Fuels -8 Refining of Petroleum - Fractional Distillation parts', 'Fractional Distillation');
        subjectAlias.set('Fuels -9 Knocking, Octane Number, Cetane Number', 'Knocking, Octane Number, Cetane Number');
        subjectAlias.set('Power Alcohol', 'Power Alcohol');
        //Atomic Structure
        subjectAlias.set('Elements, Compounds and Mixtures','Elements, Compounds and Mixtures');
        subjectAlias.set('Class 10 Science - Chemistry - Physical & Chemical Changes','Physical & Chemical Changes');


    // Youtube API Setup Starts
    var key = 'AIzaSyDx4VTk6azBY48eGwkYkpLQXdPxmCLuLLg';
    var channelId = 'UCqH46ioeOAHPjveiJb3R0rg';
    var URL = 'https://www.googleapis.com/youtube/v3/playlists';
    var options = {
        part: 'snippet',
        key: key,
        maxResults: 25,
        channelId: channelId
    }
    // Youtube API Setup Ends


    var subjectAbr = ( '' + window.location.href ).split( '#first' )[1];
    console.log( subjectAbr );

    var subject;
    var subjectTheme;
    var playListNames = [];
    var playListIds = [];
    var thumbnailURLs = [];
    var videos;
    var bgCol;

    subject = subjects.get( subjectAbr );
    console.log ( subject );
    // subjectTheme = getSubjectTheme( subjectAbr );
    $('span.vlec__title').html = subjectAbr;

    function renderBoiler(subjectAbr, subject){
        bgCol = subjectThemes.get(subjectAbr);
    }
    renderBoiler(subjectAbr, subject);

    console.log(bgCol);

    renderBoiler(subject, subjectTheme);

    function generateSection (i, subjectAbr, topic, playlistId){
        // videos = loadVideos(playListId);
        // console.log('dekhle:' + topic);
        bgCol = subjectThemes.get(subjectAbr);
        var textNode = document.createElement('span');
        var whiteNode = topic.split('-')[0];
        var colNode = topic.split('-')[1];
        whiteNode += ' ';
        textNode.innerHTML = ('' + colNode);
        textNode.style.color = bgCol;
        var textNodeWrapper = document.createElement('div');
        textNodeWrapper.className = 'vlec__section__head display4';
        textNodeWrapper.innerHTML = whiteNode;
        textNodeWrapper.append(textNode);
        var newSection = document.createElement('div');
        newSection.className = 'vlec__section';
        newSection.append(textNodeWrapper);
        $('body').append(newSection);

        var speed = 0;
        var scroll = 0;
        var container = $('.vlec__section');
        var container_w = container.width();
        var max_scroll = container[0].scrollWidth - container.outerWidth();

        container.on('mousemove', function(e) {
          console.log(2);
          var mouse_x = e.pageX - container.offset().left;
          var mouseperc = 100 * mouse_x / container_w;
          speed = mouseperc - 50;
        }).on ( 'mouseleave', function() {
          speed = 0;
        });

        function updatescroll() {
          if (speed !== 0) {
            scroll += speed / 5;
            if (scroll < 0) scroll = 0;
            if (scroll > max_scroll) scroll = max_scroll;
            $('.vlec__section').scrollLeft(scroll);
          }
          $("#speed").html('Speed: ' + speed);
          $("#scroll").html('Scroll: ' + scroll);

          window.requestAnimationFrame(updatescroll);
        }
        window.requestAnimationFrame(updatescroll);
        $('.vlec__section').css("background-color", 'black');

        var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
        var options = {
            part: 'snippet',
            key: key,
            maxResults: 25,
            playlistId: playlistId
        }
        $.getJSON(URL, options, function(data){
            console.log(data.items);
            data.items.forEach(function(element, j = 1){
              console.log(element.snippet.title);
              var newElement = document.createElement('div');
              newElement.onclick = 'getModal()';
              numString = 'vlec__section__grid__element__' + (i) + '__' + (j+1);
              newElement.className = 'vlec__section__grid__element ' + numString;
              var thumbnailURI = element.snippet.thumbnails.maxres.url;
              console.log(thumbnailURI);
              var newElementText = document.createElement('h1');
              newElementText.innerHTML=  'Random text';
              newElementText.className = 'videotitle display5';
              newElement.append(newElementText);
              //newElement.style.backgroundColor = 'rgb(79, 132, 196)';
              // newElement.style.backgroundSize = 'cover';
              // newElement.style.backgroundPosition = 'center';
              console.log(679);
              newSection.append(newElement);

              j++;

              $(newElement).click(function(){
                var key = 'https://www.youtube.com/embed/videoseries?list=' + playlistId + '&index=' + (j);
                getModal(key);
                // http://www.youtube.com/embed/videoseries?list=PL9C5815B418D1508E&index=7
              });


              $('.vlec__section__grid__element__1__1').mouseenter(function(){
                $('.vlec__section__grid__element__1__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__1__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__1').mouseleave(function(){
                $('.vlec__section__grid__element__1__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__2').mouseenter(function(){
                $('.vlec__section__grid__element__1__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__2').mouseleave(function(){
                $('.vlec__section__grid__element__1__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__3').mouseenter(function(){
                $('.vlec__section__grid__element__1__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__3').mouseleave(function(){
                $('.vlec__section__grid__element__1__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__4').mouseenter(function(){
                $('.vlec__section__grid__element__1__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__4').mouseleave(function(){
                $('.vlec__section__grid__element__1__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__5').mouseenter(function(){
                $('.vlec__section__grid__element__1__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__5').mouseleave(function(){
                $('.vlec__section__grid__element__1__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__6').mouseenter(function(){
                $('.vlec__section__grid__element__1__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__6').mouseleave(function(){
                $('.vlec__section__grid__element__1__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__7').mouseenter(function(){
                $('.vlec__section__grid__element__1__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__7').mouseleave(function(){
                $('.vlec__section__grid__element__1__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__8').mouseenter(function(){
                $('.vlec__section__grid__element__1__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__8').mouseleave(function(){
                $('.vlec__section__grid__element__1__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__9').mouseenter(function(){
                $('.vlec__section__grid__element__1__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__9').mouseleave(function(){
                $('.vlec__section__grid__element__1__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__10').mouseenter(function(){
                $('.vlec__section__grid__element__1__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__10').mouseleave(function(){
                $('.vlec__section__grid__element__1__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__11').mouseenter(function(){
                $('.vlec__section__grid__element__1__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__11').mouseleave(function(){
                $('.vlec__section__grid__element__1__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__12').mouseenter(function(){
                $('.vlec__section__grid__element__1__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__12').mouseleave(function(){
                $('.vlec__section__grid__element__1__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__13').mouseenter(function(){
                $('.vlec__section__grid__element__1__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__13').mouseleave(function(){
                $('.vlec__section__grid__element__1__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__14').mouseenter(function(){
                $('.vlec__section__grid__element__1__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__14').mouseleave(function(){
                $('.vlec__section__grid__element__1__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__15').mouseenter(function(){
                $('.vlec__section__grid__element__1__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__15').mouseleave(function(){
                $('.vlec__section__grid__element__1__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__16').mouseenter(function(){
                $('.vlec__section__grid__element__1__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__16').mouseleave(function(){
                $('.vlec__section__grid__element__1__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__17').mouseenter(function(){
                $('.vlec__section__grid__element__1__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__17').mouseleave(function(){
                $('.vlec__section__grid__element__1__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__18').mouseenter(function(){
                $('.vlec__section__grid__element__1__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__18').mouseleave(function(){
                $('.vlec__section__grid__element__1__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__19').mouseenter(function(){
                $('.vlec__section__grid__element__1__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__19').mouseleave(function(){
                $('.vlec__section__grid__element__1__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__20').mouseenter(function(){
                $('.vlec__section__grid__element__1__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__1__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__1__20').mouseleave(function(){
                $('.vlec__section__grid__element__1__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__1__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__1__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });


//2

              $('.vlec__section__grid__element__2__1').mouseenter(function(){
                $('.vlec__section__grid__element__2__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__2__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__1').mouseleave(function(){
                $('.vlec__section__grid__element__2__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__2').mouseenter(function(){
                $('.vlec__section__grid__element__2__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__2').mouseleave(function(){
                $('.vlec__section__grid__element__2__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__3').mouseenter(function(){
                $('.vlec__section__grid__element__2__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__3').mouseleave(function(){
                $('.vlec__section__grid__element__2__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__4').mouseenter(function(){
                $('.vlec__section__grid__element__2__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__4').mouseleave(function(){
                $('.vlec__section__grid__element__2__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__5').mouseenter(function(){
                $('.vlec__section__grid__element__2__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__5').mouseleave(function(){
                $('.vlec__section__grid__element__2__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__6').mouseenter(function(){
                $('.vlec__section__grid__element__2__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__6').mouseleave(function(){
                $('.vlec__section__grid__element__2__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__7').mouseenter(function(){
                $('.vlec__section__grid__element__2__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__7').mouseleave(function(){
                $('.vlec__section__grid__element__2__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__8').mouseenter(function(){
                $('.vlec__section__grid__element__2__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__8').mouseleave(function(){
                $('.vlec__section__grid__element__2__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__9').mouseenter(function(){
                $('.vlec__section__grid__element__2__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__9').mouseleave(function(){
                $('.vlec__section__grid__element__2__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__10').mouseenter(function(){
                $('.vlec__section__grid__element__2__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__10').mouseleave(function(){
                $('.vlec__section__grid__element__2__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__11').mouseenter(function(){
                $('.vlec__section__grid__element__2__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__11').mouseleave(function(){
                $('.vlec__section__grid__element__2__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__12').mouseenter(function(){
                $('.vlec__section__grid__element__2__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__12').mouseleave(function(){
                $('.vlec__section__grid__element__2__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__13').mouseenter(function(){
                $('.vlec__section__grid__element__2__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__13').mouseleave(function(){
                $('.vlec__section__grid__element__2__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__14').mouseenter(function(){
                $('.vlec__section__grid__element__2__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__14').mouseleave(function(){
                $('.vlec__section__grid__element__2__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__15').mouseenter(function(){
                $('.vlec__section__grid__element__2__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__15').mouseleave(function(){
                $('.vlec__section__grid__element__2__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__16').mouseenter(function(){
                $('.vlec__section__grid__element__2__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__16').mouseleave(function(){
                $('.vlec__section__grid__element__2__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__17').mouseenter(function(){
                $('.vlec__section__grid__element__2__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__17').mouseleave(function(){
                $('.vlec__section__grid__element__2__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__18').mouseenter(function(){
                $('.vlec__section__grid__element__2__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__18').mouseleave(function(){
                $('.vlec__section__grid__element__2__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__19').mouseenter(function(){
                $('.vlec__section__grid__element__2__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__19').mouseleave(function(){
                $('.vlec__section__grid__element__2__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__20').mouseenter(function(){
                $('.vlec__section__grid__element__2__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__2__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__2__20').mouseleave(function(){
                $('.vlec__section__grid__element__2__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__2__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__2__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

//3

              $('.vlec__section__grid__element__3__1').mouseenter(function(){
                $('.vlec__section__grid__element__3__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__3__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__1').mouseleave(function(){
                $('.vlec__section__grid__element__3__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__2').mouseenter(function(){
                $('.vlec__section__grid__element__3__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__2').mouseleave(function(){
                $('.vlec__section__grid__element__3__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__3').mouseenter(function(){
                $('.vlec__section__grid__element__3__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__3').mouseleave(function(){
                $('.vlec__section__grid__element__3__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__4').mouseenter(function(){
                $('.vlec__section__grid__element__3__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__4').mouseleave(function(){
                $('.vlec__section__grid__element__3__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__5').mouseenter(function(){
                $('.vlec__section__grid__element__3__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__5').mouseleave(function(){
                $('.vlec__section__grid__element__3__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__6').mouseenter(function(){
                $('.vlec__section__grid__element__3__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__6').mouseleave(function(){
                $('.vlec__section__grid__element__3__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__7').mouseenter(function(){
                $('.vlec__section__grid__element__3__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__7').mouseleave(function(){
                $('.vlec__section__grid__element__3__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__8').mouseenter(function(){
                $('.vlec__section__grid__element__3__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__8').mouseleave(function(){
                $('.vlec__section__grid__element__3__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__9').mouseenter(function(){
                $('.vlec__section__grid__element__3__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__9').mouseleave(function(){
                $('.vlec__section__grid__element__3__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__10').mouseenter(function(){
                $('.vlec__section__grid__element__3__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__10').mouseleave(function(){
                $('.vlec__section__grid__element__3__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__11').mouseenter(function(){
                $('.vlec__section__grid__element__3__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__11').mouseleave(function(){
                $('.vlec__section__grid__element__3__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__12').mouseenter(function(){
                $('.vlec__section__grid__element__3__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__12').mouseleave(function(){
                $('.vlec__section__grid__element__3__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__13').mouseenter(function(){
                $('.vlec__section__grid__element__3__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__13').mouseleave(function(){
                $('.vlec__section__grid__element__3__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__14').mouseenter(function(){
                $('.vlec__section__grid__element__3__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__14').mouseleave(function(){
                $('.vlec__section__grid__element__3__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__15').mouseenter(function(){
                $('.vlec__section__grid__element__3__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__15').mouseleave(function(){
                $('.vlec__section__grid__element__3__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__16').mouseenter(function(){
                $('.vlec__section__grid__element__3__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__16').mouseleave(function(){
                $('.vlec__section__grid__element__3__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__17').mouseenter(function(){
                $('.vlec__section__grid__element__3__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__17').mouseleave(function(){
                $('.vlec__section__grid__element__3__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__18').mouseenter(function(){
                $('.vlec__section__grid__element__3__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__18').mouseleave(function(){
                $('.vlec__section__grid__element__3__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__19').mouseenter(function(){
                $('.vlec__section__grid__element__3__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__19').mouseleave(function(){
                $('.vlec__section__grid__element__3__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__20').mouseenter(function(){
                $('.vlec__section__grid__element__3__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__3__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__3__20').mouseleave(function(){
                $('.vlec__section__grid__element__3__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__3__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__3__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

//4

              $('.vlec__section__grid__element__4__1').mouseenter(function(){
                $('.vlec__section__grid__element__4__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__4__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__1').mouseleave(function(){
                $('.vlec__section__grid__element__4__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__2').mouseenter(function(){
                $('.vlec__section__grid__element__4__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__2').mouseleave(function(){
                $('.vlec__section__grid__element__4__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__3').mouseenter(function(){
                $('.vlec__section__grid__element__4__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__3').mouseleave(function(){
                $('.vlec__section__grid__element__4__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__4').mouseenter(function(){
                $('.vlec__section__grid__element__4__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__4').mouseleave(function(){
                $('.vlec__section__grid__element__4__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__5').mouseenter(function(){
                $('.vlec__section__grid__element__4__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__5').mouseleave(function(){
                $('.vlec__section__grid__element__4__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__6').mouseenter(function(){
                $('.vlec__section__grid__element__4__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__6').mouseleave(function(){
                $('.vlec__section__grid__element__4__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__7').mouseenter(function(){
                $('.vlec__section__grid__element__4__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__7').mouseleave(function(){
                $('.vlec__section__grid__element__4__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__8').mouseenter(function(){
                $('.vlec__section__grid__element__4__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__8').mouseleave(function(){
                $('.vlec__section__grid__element__4__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__9').mouseenter(function(){
                $('.vlec__section__grid__element__4__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__9').mouseleave(function(){
                $('.vlec__section__grid__element__4__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__10').mouseenter(function(){
                $('.vlec__section__grid__element__4__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__10').mouseleave(function(){
                $('.vlec__section__grid__element__4__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__11').mouseenter(function(){
                $('.vlec__section__grid__element__4__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__11').mouseleave(function(){
                $('.vlec__section__grid__element__4__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__12').mouseenter(function(){
                $('.vlec__section__grid__element__4__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__12').mouseleave(function(){
                $('.vlec__section__grid__element__4__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__13').mouseenter(function(){
                $('.vlec__section__grid__element__4__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__13').mouseleave(function(){
                $('.vlec__section__grid__element__4__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__14').mouseenter(function(){
                $('.vlec__section__grid__element__4__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__14').mouseleave(function(){
                $('.vlec__section__grid__element__4__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__15').mouseenter(function(){
                $('.vlec__section__grid__element__4__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__15').mouseleave(function(){
                $('.vlec__section__grid__element__4__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__16').mouseenter(function(){
                $('.vlec__section__grid__element__4__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__16').mouseleave(function(){
                $('.vlec__section__grid__element__4__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__17').mouseenter(function(){
                $('.vlec__section__grid__element__4__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__17').mouseleave(function(){
                $('.vlec__section__grid__element__4__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__18').mouseenter(function(){
                $('.vlec__section__grid__element__4__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__18').mouseleave(function(){
                $('.vlec__section__grid__element__4__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__19').mouseenter(function(){
                $('.vlec__section__grid__element__4__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__19').mouseleave(function(){
                $('.vlec__section__grid__element__4__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__20').mouseenter(function(){
                $('.vlec__section__grid__element__4__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__4__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__4__20').mouseleave(function(){
                $('.vlec__section__grid__element__4__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__4__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__4__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

//5

              $('.vlec__section__grid__element__5__1').mouseenter(function(){
                $('.vlec__section__grid__element__5__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__5__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__1').mouseleave(function(){
                $('.vlec__section__grid__element__5__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__2').mouseenter(function(){
                $('.vlec__section__grid__element__5__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__2').mouseleave(function(){
                $('.vlec__section__grid__element__5__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__3').mouseenter(function(){
                $('.vlec__section__grid__element__5__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__3').mouseleave(function(){
                $('.vlec__section__grid__element__5__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__4').mouseenter(function(){
                $('.vlec__section__grid__element__5__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__4').mouseleave(function(){
                $('.vlec__section__grid__element__5__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__5').mouseenter(function(){
                $('.vlec__section__grid__element__5__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__5').mouseleave(function(){
                $('.vlec__section__grid__element__5__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__6').mouseenter(function(){
                $('.vlec__section__grid__element__5__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__6').mouseleave(function(){
                $('.vlec__section__grid__element__5__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__7').mouseenter(function(){
                $('.vlec__section__grid__element__5__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__7').mouseleave(function(){
                $('.vlec__section__grid__element__5__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__8').mouseenter(function(){
                $('.vlec__section__grid__element__5__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__8').mouseleave(function(){
                $('.vlec__section__grid__element__5__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__9').mouseenter(function(){
                $('.vlec__section__grid__element__5__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__9').mouseleave(function(){
                $('.vlec__section__grid__element__5__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__10').mouseenter(function(){
                $('.vlec__section__grid__element__5__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__10').mouseleave(function(){
                $('.vlec__section__grid__element__5__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__11').mouseenter(function(){
                $('.vlec__section__grid__element__5__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__11').mouseleave(function(){
                $('.vlec__section__grid__element__5__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__12').mouseenter(function(){
                $('.vlec__section__grid__element__5__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__12').mouseleave(function(){
                $('.vlec__section__grid__element__5__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__13').mouseenter(function(){
                $('.vlec__section__grid__element__5__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__13').mouseleave(function(){
                $('.vlec__section__grid__element__5__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__14').mouseenter(function(){
                $('.vlec__section__grid__element__5__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__14').mouseleave(function(){
                $('.vlec__section__grid__element__5__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__15').mouseenter(function(){
                $('.vlec__section__grid__element__5__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__15').mouseleave(function(){
                $('.vlec__section__grid__element__5__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__16').mouseenter(function(){
                $('.vlec__section__grid__element__5__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__16').mouseleave(function(){
                $('.vlec__section__grid__element__5__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__17').mouseenter(function(){
                $('.vlec__section__grid__element__5__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__17').mouseleave(function(){
                $('.vlec__section__grid__element__5__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__18').mouseenter(function(){
                $('.vlec__section__grid__element__5__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__18').mouseleave(function(){
                $('.vlec__section__grid__element__5__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__19').mouseenter(function(){
                $('.vlec__section__grid__element__5__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__19').mouseleave(function(){
                $('.vlec__section__grid__element__5__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__5__20').mouseenter(function(){
                $('.vlec__section__grid__element__5__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__5__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "-2vw");
                console.log('shifting');
              });


              $('.vlec__section__grid__element__5__20').mouseleave(function(){
                $('.vlec__section__grid__element__5__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__5__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__5__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

// 6

              $('.vlec__section__grid__element__6__1').mouseenter(function(){
                $('.vlec__section__grid__element__6__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__6__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__1').mouseleave(function(){
                $('.vlec__section__grid__element__6__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__2').mouseenter(function(){
                $('.vlec__section__grid__element__6__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__2').mouseleave(function(){
                $('.vlec__section__grid__element__6__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__3').mouseenter(function(){
                $('.vlec__section__grid__element__6__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__3').mouseleave(function(){
                $('.vlec__section__grid__element__6__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__4').mouseenter(function(){
                $('.vlec__section__grid__element__6__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__4').mouseleave(function(){
                $('.vlec__section__grid__element__6__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__5').mouseenter(function(){
                $('.vlec__section__grid__element__6__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__5').mouseleave(function(){
                $('.vlec__section__grid__element__6__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__6').mouseenter(function(){
                $('.vlec__section__grid__element__6__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__6').mouseleave(function(){
                $('.vlec__section__grid__element__6__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__7').mouseenter(function(){
                $('.vlec__section__grid__element__6__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__7').mouseleave(function(){
                $('.vlec__section__grid__element__6__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__8').mouseenter(function(){
                $('.vlec__section__grid__element__6__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__8').mouseleave(function(){
                $('.vlec__section__grid__element__6__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__9').mouseenter(function(){
                $('.vlec__section__grid__element__6__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__9').mouseleave(function(){
                $('.vlec__section__grid__element__6__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__10').mouseenter(function(){
                $('.vlec__section__grid__element__6__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__10').mouseleave(function(){
                $('.vlec__section__grid__element__6__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__11').mouseenter(function(){
                $('.vlec__section__grid__element__6__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__11').mouseleave(function(){
                $('.vlec__section__grid__element__6__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__12').mouseenter(function(){
                $('.vlec__section__grid__element__6__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__12').mouseleave(function(){
                $('.vlec__section__grid__element__6__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__13').mouseenter(function(){
                $('.vlec__section__grid__element__6__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__13').mouseleave(function(){
                $('.vlec__section__grid__element__6__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__14').mouseenter(function(){
                $('.vlec__section__grid__element__6__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__14').mouseleave(function(){
                $('.vlec__section__grid__element__6__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__15').mouseenter(function(){
                $('.vlec__section__grid__element__6__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__15').mouseleave(function(){
                $('.vlec__section__grid__element__6__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__16').mouseenter(function(){
                $('.vlec__section__grid__element__6__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__16').mouseleave(function(){
                $('.vlec__section__grid__element__6__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__17').mouseenter(function(){
                $('.vlec__section__grid__element__6__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__17').mouseleave(function(){
                $('.vlec__section__grid__element__6__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__18').mouseenter(function(){
                $('.vlec__section__grid__element__6__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__18').mouseleave(function(){
                $('.vlec__section__grid__element__6__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__19').mouseenter(function(){
                $('.vlec__section__grid__element__6__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__19').mouseleave(function(){
                $('.vlec__section__grid__element__6__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__20').mouseenter(function(){
                $('.vlec__section__grid__element__6__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__6__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__6__20').mouseleave(function(){
                $('.vlec__section__grid__element__6__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__6__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__6__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

//7


              $('.vlec__section__grid__element__7__1').mouseenter(function(){
                $('.vlec__section__grid__element__7__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__7__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__1').mouseleave(function(){
                $('.vlec__section__grid__element__7__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__2').mouseenter(function(){
                $('.vlec__section__grid__element__7__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__2').mouseleave(function(){
                $('.vlec__section__grid__element__7__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__3').mouseenter(function(){
                $('.vlec__section__grid__element__7__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__3').mouseleave(function(){
                $('.vlec__section__grid__element__7__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__4').mouseenter(function(){
                $('.vlec__section__grid__element__7__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__4').mouseleave(function(){
                $('.vlec__section__grid__element__7__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__5').mouseenter(function(){
                $('.vlec__section__grid__element__7__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__5').mouseleave(function(){
                $('.vlec__section__grid__element__7__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__6').mouseenter(function(){
                $('.vlec__section__grid__element__7__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__6').mouseleave(function(){
                $('.vlec__section__grid__element__7__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__7').mouseenter(function(){
                $('.vlec__section__grid__element__7__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__7').mouseleave(function(){
                $('.vlec__section__grid__element__7__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__8').mouseenter(function(){
                $('.vlec__section__grid__element__7__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__8').mouseleave(function(){
                $('.vlec__section__grid__element__7__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__9').mouseenter(function(){
                $('.vlec__section__grid__element__7__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__9').mouseleave(function(){
                $('.vlec__section__grid__element__7__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__10').mouseenter(function(){
                $('.vlec__section__grid__element__7__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__10').mouseleave(function(){
                $('.vlec__section__grid__element__7__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__11').mouseenter(function(){
                $('.vlec__section__grid__element__7__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__11').mouseleave(function(){
                $('.vlec__section__grid__element__7__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__12').mouseenter(function(){
                $('.vlec__section__grid__element__7__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__12').mouseleave(function(){
                $('.vlec__section__grid__element__7__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__13').mouseenter(function(){
                $('.vlec__section__grid__element__7__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__13').mouseleave(function(){
                $('.vlec__section__grid__element__7__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__14').mouseenter(function(){
                $('.vlec__section__grid__element__7__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__14').mouseleave(function(){
                $('.vlec__section__grid__element__7__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__15').mouseenter(function(){
                $('.vlec__section__grid__element__7__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__15').mouseleave(function(){
                $('.vlec__section__grid__element__7__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__16').mouseenter(function(){
                $('.vlec__section__grid__element__7__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__16').mouseleave(function(){
                $('.vlec__section__grid__element__7__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__17').mouseenter(function(){
                $('.vlec__section__grid__element__7__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__17').mouseleave(function(){
                $('.vlec__section__grid__element__7__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__18').mouseenter(function(){
                $('.vlec__section__grid__element__7__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__18').mouseleave(function(){
                $('.vlec__section__grid__element__7__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__19').mouseenter(function(){
                $('.vlec__section__grid__element__7__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__19').mouseleave(function(){
                $('.vlec__section__grid__element__7__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__20').mouseenter(function(){
                $('.vlec__section__grid__element__7__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__7__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__7__20').mouseleave(function(){
                $('.vlec__section__grid__element__7__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__7__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__7__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

//8

              $('.vlec__section__grid__element__8__1').mouseenter(function(){
                $('.vlec__section__grid__element__8__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__8__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__1').mouseleave(function(){
                $('.vlec__section__grid__element__8__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__2').mouseenter(function(){
                $('.vlec__section__grid__element__8__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__2').mouseleave(function(){
                $('.vlec__section__grid__element__8__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__3').mouseenter(function(){
                $('.vlec__section__grid__element__8__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__3').mouseleave(function(){
                $('.vlec__section__grid__element__8__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__4').mouseenter(function(){
                $('.vlec__section__grid__element__8__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__4').mouseleave(function(){
                $('.vlec__section__grid__element__8__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__5').mouseenter(function(){
                $('.vlec__section__grid__element__8__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__5').mouseleave(function(){
                $('.vlec__section__grid__element__8__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__6').mouseenter(function(){
                $('.vlec__section__grid__element__8__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__6').mouseleave(function(){
                $('.vlec__section__grid__element__8__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__7').mouseenter(function(){
                $('.vlec__section__grid__element__8__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__7').mouseleave(function(){
                $('.vlec__section__grid__element__8__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__8').mouseenter(function(){
                $('.vlec__section__grid__element__8__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__8').mouseleave(function(){
                $('.vlec__section__grid__element__8__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__9').mouseenter(function(){
                $('.vlec__section__grid__element__8__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__9').mouseleave(function(){
                $('.vlec__section__grid__element__8__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__10').mouseenter(function(){
                $('.vlec__section__grid__element__8__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__10').mouseleave(function(){
                $('.vlec__section__grid__element__8__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__11').mouseenter(function(){
                $('.vlec__section__grid__element__8__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__11').mouseleave(function(){
                $('.vlec__section__grid__element__8__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__12').mouseenter(function(){
                $('.vlec__section__grid__element__8__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__12').mouseleave(function(){
                $('.vlec__section__grid__element__8__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__13').mouseenter(function(){
                $('.vlec__section__grid__element__8__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__13').mouseleave(function(){
                $('.vlec__section__grid__element__8__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__14').mouseenter(function(){
                $('.vlec__section__grid__element__8__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__14').mouseleave(function(){
                $('.vlec__section__grid__element__8__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__15').mouseenter(function(){
                $('.vlec__section__grid__element__8__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__15').mouseleave(function(){
                $('.vlec__section__grid__element__8__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__16').mouseenter(function(){
                $('.vlec__section__grid__element__8__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__16').mouseleave(function(){
                $('.vlec__section__grid__element__8__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__17').mouseenter(function(){
                $('.vlec__section__grid__element__8__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__17').mouseleave(function(){
                $('.vlec__section__grid__element__8__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__18').mouseenter(function(){
                $('.vlec__section__grid__element__8__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__18').mouseleave(function(){
                $('.vlec__section__grid__element__8__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__19').mouseenter(function(){
                $('.vlec__section__grid__element__8__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__19').mouseleave(function(){
                $('.vlec__section__grid__element__8__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__20').mouseenter(function(){
                $('.vlec__section__grid__element__8__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__8__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__8__20').mouseleave(function(){
                $('.vlec__section__grid__element__8__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__8__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__8__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

//9


              $('.vlec__section__grid__element__9__1').mouseenter(function(){
                $('.vlec__section__grid__element__9__1').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css('transform', 'scale(1.3)');
                $('.vlec__section__grid__element__9__2').css("margin-left", "5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__1').mouseleave(function(){
                $('.vlec__section__grid__element__9__1').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__2').css("margin-left", "2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__2').mouseenter(function(){
                $('.vlec__section__grid__element__9__2').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__2').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__2').mouseleave(function(){
                $('.vlec__section__grid__element__9__2').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__2').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__3').mouseenter(function(){
                $('.vlec__section__grid__element__9__3').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__3').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__3').mouseleave(function(){
                $('.vlec__section__grid__element__9__3').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__3').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__4').mouseenter(function(){
                $('.vlec__section__grid__element__9__4').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__4').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__4').mouseleave(function(){
                $('.vlec__section__grid__element__9__4').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__4').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__5').mouseenter(function(){
                $('.vlec__section__grid__element__9__5').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__5').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__5').mouseleave(function(){
                $('.vlec__section__grid__element__9__5').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__5').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__6').mouseenter(function(){
                $('.vlec__section__grid__element__9__6').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__6').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__6').mouseleave(function(){
                $('.vlec__section__grid__element__9__6').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__6').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__7').mouseenter(function(){
                $('.vlec__section__grid__element__9__7').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__7').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__7').mouseleave(function(){
                $('.vlec__section__grid__element__9__7').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__7').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__8').mouseenter(function(){
                $('.vlec__section__grid__element__9__8').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__8').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__8').mouseleave(function(){
                $('.vlec__section__grid__element__9__8').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__8').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__9').mouseenter(function(){
                $('.vlec__section__grid__element__9__9').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__9').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__9').mouseleave(function(){
                $('.vlec__section__grid__element__9__9').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__9').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__10').mouseenter(function(){
                $('.vlec__section__grid__element__9__10').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__10').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__10').mouseleave(function(){
                $('.vlec__section__grid__element__9__10').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__10').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__11').mouseenter(function(){
                $('.vlec__section__grid__element__9__11').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__11').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__11').mouseleave(function(){
                $('.vlec__section__grid__element__9__11').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__11').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__12').mouseenter(function(){
                $('.vlec__section__grid__element__9__12').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__12').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__12').mouseleave(function(){
                $('.vlec__section__grid__element__9__12').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__12').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__13').mouseenter(function(){
                $('.vlec__section__grid__element__9__13').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__13').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__13').mouseleave(function(){
                $('.vlec__section__grid__element__9__13').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__13').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__14').mouseenter(function(){
                $('.vlec__section__grid__element__9__14').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__14').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__14').mouseleave(function(){
                $('.vlec__section__grid__element__9__14').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__14').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__15').mouseenter(function(){
                $('.vlec__section__grid__element__9__15').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__15').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__15').mouseleave(function(){
                $('.vlec__section__grid__element__9__15').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__15').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__16').mouseenter(function(){
                $('.vlec__section__grid__element__9__16').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__16').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__16').mouseleave(function(){
                $('.vlec__section__grid__element__9__16').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__16').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__17').mouseenter(function(){
                $('.vlec__section__grid__element__9__17').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__17').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__17').mouseleave(function(){
                $('.vlec__section__grid__element__9__17').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__17').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__18').mouseenter(function(){
                $('.vlec__section__grid__element__9__18').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__18').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__18').mouseleave(function(){
                $('.vlec__section__grid__element__9__18').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__18').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__19').mouseenter(function(){
                $('.vlec__section__grid__element__9__19').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__19').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__19').mouseleave(function(){
                $('.vlec__section__grid__element__9__19').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__19').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__20').mouseenter(function(){
                $('.vlec__section__grid__element__9__20').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__20').css("transform", "translate3d(0%,0,0) scale(1.3)");
                $('.vlec__section__grid__element__9__21').css("margin-left", "5vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "-2vw");
                console.log('shifting');
              });

              $('.vlec__section__grid__element__9__20').mouseleave(function(){
                $('.vlec__section__grid__element__9__20').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__20').css('transform', 'scale(1)');
                $('.vlec__section__grid__element__9__21').css("margin-left", "2vw");
                $('.vlec__section__grid__element__9__1').css("margin-left", "2.5vw");
                console.log('shifting');
              });



               // newElement.style.position = 'relative';
              // var textNode = element.snippet.title;
              // textNode.style.position = 'absolute';
              // newElement.append(textNode);
                // topic = element.snippet.title.split(':')[1];
                // if ( subject == element.snippet.localized.title.split(':')[0] ){
                    // var playlistId = element.id;
                    // console.log(topic +': ' + playlistId);
                    // thumbnailURLs.push(element.snippet.thumbnails.maxres.url);
                    // generateSection(subjectAbr, topic, playlistId);
                // }
            });
        });
    }

    function generateElement (count){
    }

    function loadVideos(playlistId){

    }

    function loadPlaylists(subject, subjectAbr){
        var i = 0;
        $.getJSON(URL, options, function(data){
            console.log(data.items);
            data.items.forEach(function(element){
                topic = element.snippet.localized.title.split(':')[1];
                if ( subject == element.snippet.localized.title.split(':')[0] ){
                    var playlistId = element.id;
                    console.log(topic +': ' + playlistId);
                    // thumbnailURLs.push(element.snippet.thumbnails.maxres.url);
                    i++;
                    generateSection(i, subjectAbr, topic, playlistId);
                }
            });
        });
    }


    //
    // generateSection();
    loadPlaylists(subject, subjectAbr);

    //Data
    var playlists = {
      'Applied Chemistry' : NULL
    }


    //Replace the following Data Structures with Maps

});
