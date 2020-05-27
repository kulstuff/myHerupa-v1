var credits= [0,0,0,0,0,0,0,0,0,0,0,0,0];
var grade=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var credits_sum =0;
var mulgrades_sum=0;

//For table generation
var sno__first=2;
var sno__second=2;
var first__rowspan=3;
var second__rowspan=3;

var margin_top=39;
var choice;
var i=0;

var gpa;
var pair;
var newOption;
var isSecondYear;

var getValue;

//service-worker


if (!window.Promise){
  window.Promise= Promise;
}

if('serviceWorker' in navigator){
  navigator.serviceWorker
 .register('/sw.js')
 .then(function(){
   console.log('Service worker registered!');
 })
 .catch(function(err){
  console.log(err);
});
}
if('serviceWorker' in navigator){
  navigator.serviceWorker.getRegistrations()
  .then(function(registrations){
    for(var i=0;i<registrations.length; i++){
      registrations[i].unregister();
    }
  })
}

$(document).ready(function(){

  
    function addSubjects(s1,s2){
        var s1 = document.getElementById(s1);
        var s2 = document.getElementById(s2);

        s2.innerHTML="";

        if(s1.value == 0)
        {
            var subjects = ["0|Select Subject",
                            "4|Biochemistry",
                            "3.5|Biophysics",
                            "4|Food Science",
                            "4|Immunotechnology",
                            "3.5|Material and Energy Balance",
                            "4.5|Molecular Biology",
                            "4|Bioanalytical Techniques",
                            "2.5|Biosafety, Bioethics & IPR",
                            "3|Energy & Environment",
                            "4|Genetic & Metagbolic Engineering",
                            "4|Industrial Biotechnology",
                            "4.5|Unit Operations"];
        }
        else if(s1.value == 1)
        {
            var subjects = ["0|Select Subject",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "5|Engineering Design Project-1",
                            "3.5|Material and Energy Balances",
                            "6|Engieering Design Project-2",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "3.5|Chemical Engineering Thermodynamics",
                            "4|Chemical Process Industries",
                            "4.5|Fluid & Particle Mechanics",
                            "4.5|Heat Transfer"];
        }
        else if(s1.value == 2)
        {
            var subjects = ["0|Select Subject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "3|Architecture Drawing & Construction",
                            "3|Building Materials",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "3.5|Design of Concrete Structures",
                            "8|Structural Analysis",
                            "5|Surveying"];
        }
        else if(s1.value == 3)
        {
            var subjects = ["0|Select Subject",
                            "5|Engineering Design Project-1",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "4|Computer Networks",
                            "6|Data Structures & Algorithms",
                            "2|Inventions & Innovations in Computing",
                            "4|Operating Systems",
                            "6|Engineering Design Project-2",
                            "3.5|Manufacturing Processes",
                            "3.5|Otimization Techniques",
                            "4.5|Solids and Strcutures",
                            "4.5|Thermo-Fluids",
                            "4|Database Management Systems",
                            "3.5|Discrete Mathematical Structures"];
        }
        else if(s1.value == 4)
        {
            var subjects = ["0|Select Subject",
                            "5|Engineering Design Project-1",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "3.5|Circuit Analysis & Synthesis",
                            //"4.5|Microprocessors & their Applications",
                            "4.5|Signals & Systems",
                            "4.5|Embedded Systems",
                            "6|Engineering Design Project-2",
                            "3.5|Manufacturing Processes",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Strcutures",
                            "4.5|Thermo-Fluids",
                            "4.5|Analog and Electronic Circuits"];
        }

        else if(s1.value == 5)
        {
            var subjects = ["0|Select Subject",
                            "5|Engineering Design Project-1",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            //"4.5|Microprocessors & their Applications",
                            //"3.5|Network Analysis & Synthesis",
                            "4.5|Embedded Systems",
                            "3.5|Circuit Analysis & Synthesis",
                            "4.5|Signals & Systems",
                            "6|Engineering Design Project-2",
                            "3.5|Manufacturing Processes",
                            "3.5|Otimization Techniques",
                            "4.5|Solids and Strcutures",
                            "4.5|Thermo-Fluids",
                            "4.5|Analog and Electronic Circuits"];
        }

        else if(s1.value == 6)
        {
            var subjects = ["0|Select Subject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "4.5|Signals & Systems",
                            "3.5|Network Analysis & Synthesis",
                            //"4.5|Electrical & Electronic Measurements",
                            "3|Humanities for Engineers",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "3|Energy & Environment",
                            "8|Sensors and Signal Conditioning with Project",
                            "3.5|Techniques on Sigal and Systems"];
        }

        else if(s1.value == 7)
        {
            var subjects = ["0|Select Subject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "3.5|Engineering Electromagnetics",
                            "3.5|Transmission and Distributon of Power",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "4.5|Analog and Electronic Circuits",
                            "4.5|DC Machines and Transformers",
                            "3.5|Circuit Analysis & Synthesis",
                            "3|Power System Practices"];
                        }

        else if(s1.value == 8)
        {
            var subjects = ["0|Select Subject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "4.5|Mechanics of Machines",
                            //
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "4|Mechatronics",
                            "4|Machine Design",
                            "8|Computer Aided Design & Analysis",
                            "2.5|Industrial Engineering"];
        }
        else if(s1.value == 9)
        {
            var subjects = ["0|Select Subject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "4.5|Mechanics of Machines",
                            //
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "4|Mechatronics",
                            //"3|Humanities for Engineers",
                            "4|Machine Design",
                            "8|Computer Aided Design & Analysis",
                            "2.5|Industrial Engineering"]
        }
        else if(s1.value == 10)
        {
            var subjects = ["0|Select Subject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "4.5|Mechanics of Machines",
                            //
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "4|Industrial Automation",
                            "8|Computer Aided Design & Analysis",
                            "4|Machine Design",
                            "2.5|Industrial Engineering"];
        }



        for(var option in subjects)
        {
            pair = subjects[option].split("|");
            newOption = document.createElement("option");
            newOption.value = pair[0];
            newOption.innerHTML = pair[1];
            s2.options.add(newOption);
        }


    }

    $(".gpa__stream").on('change',function (){
        $("tr:not(#keep)").remove();
        addSubjects(this.id,"gpa__subject--second-"+1);
        $(".gpa__add-row--second").css('visibility','visible');
        sno__second = 2;
        second__rowspan=3;
    });


    $("#gpa__add-row--first").click(function (){
        var table = document.getElementById("gpa__table--first");
        var row = table.insertRow(sno__first);
        var first__cell1 = row.insertCell(0);
        var first__cell2 = row.insertCell(1);
        var first__cell3 = row.insertCell(2);
        first__cell1.innerHTML = '<div class="display7">'+sno__first+'</div>';
        sno__first++;
        first__cell2.innerHTML = '<select name="subject" id="gpa__subject--first-'+(sno__first-1)+'" class="col col-lg-12 display7">'
                + '<option value="0" disabled selected>Select Subject</option>'
                + '<option value="4.5">Applied Chemistry</option>'
                + '<option value="4.5">Applied Physics</option>'
                + '<option value="4">Computer Science 1</option>'
                + '<option value="4">Computer Science 2</option>'
                + '<option value="4.5">Electrical</option>'
                + '<option value="4.5">Electronics</option>'
                + '<option value="4">Engineering Drawing 1</option>'
                + '<option value="5">Engineering Drawing 2</option>'
                + '<option value="3">Environment</option>'
                + '<option value="3.5">Mathematics 1</option>'
                + '<option value="3.5">Mathematics 2</option>'
                + '<option value="2.5">Mechanics</option>'
                + '<option value="3">Professional Communication</option>'
                + '</select>';
        first__cell3.innerHTML = '<select name="grade" id="gpa__grade--first-'+(sno__first-1)+'" class="col-lg-10 display7">'
                + '<option class="gpa__select--default" value="0" disabled selected>Grade &nbsp; &nbsp;</option>'
                + '<option class="gpa__select--item" value="10">A+</option>'
                + '<option class="gpa__select--item" value="10">A</option>'
                + '<option class="gpa__select--item" value="9">A-</option>'
                + '<option class="gpa__select--item" value="8">B</option>'
                + '<option class="gpa__select--item" value="7">B-</option>'
                + '<option class="gpa__select--item" value="6">C</option>'
                + '<option class="gpa__select--item" value="5">C-</option>'
                + '<option class="gpa__select--item" value="0">F</option>'
                +'</select>';

        $(".gpa__calculate--first").attr('rowspan',first__rowspan);
            first__rowspan++;
        $(".gpa__table--first").css('top',margin_top+'%');
            margin_top--;
        if(sno__first==8) //Remove button after adding 7 subjects
            {
                $(".td__add").css('visibility','hidden');
            }
        $(".gpa__calculate--first").html("Calculate"); //Reset Button

    });

    $("#gpa__add-row--second").click(function (){
        var table = document.getElementById("gpa__table--second");
        var row = table.insertRow(sno__second);
        var second__cell1 = row.insertCell(0);
        var second__cell2 = row.insertCell(1);
        var second__cell3 = row.insertCell(2);
        second__cell1.innerHTML = '<div class="display7">'+sno__second+'</div>';
        sno__second++;
        second__cell2.innerHTML = '<select name="subject" id="gpa__subject--second-'+(sno__second-1)+'" class="display7 col-lg-12" style="min-width: 412px;">    <option value="0" class="display7" disabled selected>Select Subject</option></select>;';
        addSubjects("gpa__stream","gpa__subject--second-"+(sno__second-1));
        second__cell3.innerHTML = '<select name="grade" id="gpa__grade--second-'+(sno__second-1)+'" class="col-lg-10 display7">'
                + '<option class="display7" value="0" disabled selected>Grade &nbsp; &nbsp;</option>'
                + '<option class="display7" value="10">A+</option>'
                + '<option class="display7" value="10">A</option>'
                + '<option class="display7" value="9">A-</option>'
                + '<option class="display7" value="8">B</option>'
                + '<option class="display7" value="7">B-</option>'
                + '<option class="display7" value="6">C</option>'
                + '<option class="display7" value="5">C-</option>'
                + '<option class="display7" value="0">F</option>'
                +'</select>';
        $(".gpa__calculate--second").attr('rowspan',second__rowspan);
            second__rowspan++;
        if(sno__second==8) //Remove button after adding 7 subjects
            {
                $(".gpa__add-row--second").css('visibility','hidden');
            }
        $(".gpa__calculate--second").html("Calculate"); //Reset Button

    });


   /*$(".delete").click( function deleteRow() {
        document.getElementById("table").deleteRow(sno-1);
        sno--;

    });*/
    $(".gpa__calculate--first").click(function (){

        var credits_sum =0;
        var mulgrades_sum=0;

        credits[0] = $("#gpa__subject--first-1").val();
        credits[1] = $("#gpa__subject--first-2").val();
        credits[2] = $("#gpa__subject--first-3").val();
        credits[3] = $("#gpa__subject--first-4").val();
        credits[4] = $("#gpa__subject--first-5").val();
        credits[5] = $("#gpa__subject--first-6").val();
        credits[6] = $("#gpa__subject--first-7").val();
        console.log(credits);
        grade[0] = $("#gpa__grade--first-1").val();
        grade[1] = $("#gpa__grade--first-2").val();
        grade[2] = $("#gpa__grade--first-3").val();
        grade[3] = $("#gpa__grade--first-4").val();
        grade[4] = $("#gpa__grade--first-5").val();
        grade[5] = $("#gpa__grade--first-6").val();
        grade[6] = $("#gpa__grade--first-7").val();
        console.log(grade);
        for(var i=0;grade[i]!=null ;i++)
        {
            console.log(grade[i]);
            console.log(credits[i]);
            mulgrades_sum = mulgrades_sum + grade[i]*credits[i];
            credits_sum = +credits_sum + +credits[i];
            console.log(mulgrades_sum);
            console.log(credits_sum);
        }

        gpa = mulgrades_sum/credits_sum;
        gpa = Math.round(gpa * 100) / 100
        $(".gpa__calculate--first").html("Your GPA : <br>" + gpa);
    });

    $(".gpa__calculate--second").click(function (){

        var credits_sum =0;
        var mulgrades_sum=0;

        credits[0] = $("#gpa__subject--second-1").val();
        credits[1] = $("#gpa__subject--second-2").val();
        credits[2] = $("#gpa__subject--second-3").val();
        credits[3] = $("#gpa__subject--second-4").val();
        credits[4] = $("#gpa__subject--second-5").val();
        credits[5] = $("#gpa__subject--second-6").val();
        credits[6] = $("#gpa__subject--second-7").val();
        grade[0] = $("#gpa__grade--second-1").val();
        grade[1] = $("#gpa__grade--second-2").val();
        grade[2] = $("#gpa__grade--second-3").val();
        grade[3] = $("#gpa__grade--second-4").val();
        grade[4] = $("#gpa__grade--second-5").val();
        grade[5] = $("#gpa__grade--second-6").val();
        grade[6] = $("#gpa__grade--second-7").val();

        for(var i=0;grade[i]!=null ;i++)
        {
            console.log(grade[i]);
            console.log(credits[i]);
            mulgrades_sum = mulgrades_sum + grade[i]*credits[i];
            credits_sum = +credits_sum + +credits[i];
            console.log(mulgrades_sum);
            console.log(credits_sum);
        }

        gpa = mulgrades_sum/credits_sum;
        gpa = Math.round(gpa * 100) / 100
        $(".gpa__calculate--second").html("Your GPA : <br>" + gpa);
    });

    $(".gpa__choice--first").click(function (){
        sno__first=2;
        first__rowspan=3;
        $(".gpa__first-year").css('display','block');
        $(".gpa__second-year").css('display','none');
        $(this).css('color','black');
        $(this).css('background-color','#eee');
        $(".gpa__choice--second").css('color','white');
        $(".gpa__choice--second").css('background-color','#F6C342');
        $("tr:not(#keep)").remove();
        $(".gpa__calculate--first").html("Calculate"); //Reset Button
        $(".gpa__calculate--second").html("Calculate"); //Reset Button
    });

    $(".gpa__choice--second").click(function (){
        $("tr:not(#keep)").remove();
        $(".gpa__second-year").css('display','block');
        $(".gpa__first-year").css('display','none');
        $(this).css('color','black');
        $(this).css('background-color','#eee');
        $(".gpa__choice--first").css('color','white');
        $(".gpa__choice--first").css('background-color','#F6C342');
    });

    $(".btn__society").click(function (){
        $(".btn__society").css('background-color','white');
        $(".btn__society").css('color','black');
        $(".news__society").css('display','block');
        $(".btn__reset").css('display','block');
        $("section:not(.news__society)").css('display','none');
        $("li:not(.btn__society)").css('background-color','black');
        $("li:not(.btn__society)").css('color','white');
    });
    $(".btn__academic").click(function (){
        $(".btn__academic").css('background-color','white');
        $(".btn__academic").css('color','black');
        $(".news__academic").css('display','block');
        $(".btn__reset").css('display','block');
        $("section:not(.news__academic)").css('display','none');
        $("li:not(.btn__academic)").css('background-color','black');
        $("li:not(.btn__academic)").css('color','white');

    });
    $(".btn__other").click(function (){
        $(".btn__other").css('background-color','white');
        $(".btn__other").css('color','black');
        $(".news__other").css('display','block');
        $(".btn__reset").css('display','block');
        $("section:not(.news__other)").css('display','none');
        $("li:not(.btn__other)").css('background-color','black');
        $("li:not(.btn__other)").css('color','white');

    });
    $(".btn__reset").click(function (){
        $("section").css('display','block');
        $("li:not(.btn__reset)").css('background-color','black');
        $("li:not(.btn__reset)").css('color','white');
        $(this).css('display','none');
    });
    $(".wifi__choice--passwords").click(function (){
        $(".wifi__passwords").css('display','block');
        $(".connectu").css('display','none');
        $(".wifi__sophos--choice").css('display','none');
        $(".wifi__connectu--choice").css('display','none');
        $(".sophos").css('display','none');
        $(this).css('color','white');
        $(this).css('background-color','black');
        $(".wifi__choice--sophos").css('color','white');
        $(".wifi__choice--sophos").css('background-color','#E94B3C');
        $(".wifi__choice--connectu").css('background-color','#E94B3C');
    });
    $(".wifi__choice--connectu").click(function (){
        $(".wifi__passwords").css('display','none'); //hide passwords
        $(".wifi__connectu--choice").css('display','block'); //show connectu
        $(".wifi__sophos--choice").css('display','none'); //hide sophos choices
        $(".sophos").css('display','none'); //hide sophos
        $(".connectu__devices").css('display','block');
        $(this).css('color','white');
        $(this).css('background-color','black');
        $(".wifi__choice--sophos").css('color','white');
        $(".wifi__choice--sophos").css('background-color','#E94B3C');
        $(".wifi__choice--passwords").css('color','white');
        $(".wifi__choice--passwords").css('background-color','#E94B3C');
        $(".wifi__choice-mobile").css('color','#185ABD');
        $(".wifi__choice-features").css('color','white');

        $(".wifi__choice--devices").css('color','#185ABD');
        $(".wifi__choice--features").css('color','white');

    });
    $(".wifi__choice--devices").click(function (){
        $(".connectu__devices").css('display','block');
        $(".connectu__features").css('display','none');
        $(this).css('color','#185ABD');
        $(".wifi__choice--features").css('color','white');
    });
    $(".wifi__choice--features").click(function (){
        $(".connectu__features").css('display','block');
        $(".connectu__devices").css('display','none');
        $(this).css('color','#185ABD');
          $(".wifi__choice--devices").css('color','white');
    });

    $(".wifi__choice--sophos").click(function (){
        $(".sophos").css('display','block');
        $(".connectu").css('display','none');
        $(".wifi__passwords").css('display','none');
        $(this).css('background-color','black');
        $(".wifi__choice--passwords").css('background-color','#E94B3C');
        $(".wifi__choice--connectu").css('background-color','#E94B3C');
        $(".wifi__connectu--choice").css('display','none');
        $(".wifi__sophos--choice").css('display','block');
        $(".sophos__pc").css('display','none');
        $(".sophos__info").css('display','none');
        $(".wifi__choice--mobile").css('color','#185ABD');
        $(".wifi__choice--pc").css('color','white');
        $(".wifi__choice--info").css('color','white');
    });

    $(".wifi__choice--pc").click(function (){
        $(".sophos__pc").css('display','block');
        $(".sophos__mobile").css('display','none');
        $(".sophos__info").css('display','none');
        $(this).css('color','#185ABD');
        $(".wifi__choice--mobile").css('color','white');
        $(".wifi__choice--info").css('color','white');

    });

    $(".wifi__choice--mobile").click(function (){
        $(".sophos__mobile").css('display','block');
        $(".sophos__pc").css('display','none');
        $(".sophos__info").css('display','none');
        $(this).css('color','#185ABD');
        $(".wifi__choice--pc").css('color','white');
        $(".wifi__choice--info").css('color','white');

    });
    $(".wifi__choice--info").click(function (){
        $(".sophos__info").css('display','block');
        $(".sophos__pc").css('display','none');
        $(".sophos__mobile").css('display','none');
        $(this).css('color','#185ABD');
        $(".wifi__choice--pc").css('color','white');
        $(".wifi__choice--mobile").css('color','white');

    });
    $(".gpa__table--plus").click(function (){
    });


    $('.box-1_lower').mouseenter(function (){
        $('.box-1_upper').animate({
            height: '0'
        },300);
        $('.box-1_lower').animate({
            height: '100%'
        },300);
        $('.seconds-1').toggle(300);
    });

    $('.box-1_lower').mouseleave(function (){
        $('.box-1_upper').animate({
            height: '65%'
        },300);
        $('.box-1_lower').animate({
            height: '35%'
        },300);
        $('.seconds-1').toggle(300);
    });
    $('.box-2_lower').mouseenter(function (){
        $('.box-2_upper').animate({
            height: '0'
        },300);
        $('.box-2_lower').animate({
            height: '100%'
        },300);
        $('.seconds-2').toggle(300);
    });

    $('.box-2_lower').mouseleave(function (){
        $('.box-2_upper').animate({
            height: '65%'
        },300);
        $('.box-2_lower').animate({
            height: '35%'
        },300);
        $('.seconds-2').toggle(300);
    });
    $('.box-3_lower').mouseenter(function (){
        $('.box-3_upper').animate({
            height: '0'
        },300);
        $('.box-3_lower').animate({
            height: '100%'
        },300);
        $('.seconds-3').toggle(300);
    });

    $('.box-3_lower').mouseleave(function (){
        $('.box-3_upper').animate({
            height: '65%'
        },300);
        $('.box-3_lower').animate({
            height: '35%'
        },300);
        $('.seconds-3').toggle(300);
    });
    $('.box-4_lower').mouseenter(function (){
        $('.box-4_upper').animate({
            height: '0'
        },300);
        $('.box-4_lower').animate({
            height: '100%'
        },300);
        $('.seconds-4').toggle(300);
    });

    $('.box-4_lower').mouseleave(function (){
        $('.box-4_upper').animate({
            height: '65%'
        },300);
        $('.box-4_lower').animate({
            height: '35%'
        },300);
        $('.seconds-4').toggle(300);
    });
    $('.box-5_lower').mouseenter(function (){
        $('.box-5_upper').animate({
            height: '0'
        },300);
        $('.box-5_lower').animate({
            height: '100%'
        },300);
        $('.seconds-5').toggle(300);
    });

    $('.box-5_lower').mouseleave(function (){
        $('.box-5_upper').animate({
            height: '65%'
        },300);
        $('.box-5_lower').animate({
            height: '35%'
        },300);
        $('.seconds-5').toggle(300);
    });
    $('.box-6_lower').mouseenter(function (){
        $('.box-6_upper').animate({
            height: '0'
        },300);
        $('.box-6_lower').animate({
            height: '100%'
        },300);
        $('.seconds-6').toggle(300);
    });

    $('.box-6_lower').mouseleave(function (){
        $('.box-6_upper').animate({
            height: '65%'
        },300);
        $('.box-6_lower').animate({
            height: '35%'
        },300);
        $('.seconds-6').toggle(300);
    });
    $('.box-7_lower').mouseenter(function (){
        $('.box-7_upper').animate({
            height: '0'
        },300);
        $('.box-7_lower').animate({
            height: '100%'
        },300);
        $('.seconds-7').toggle(300);
    });

    $('.box-7_lower').mouseleave(function (){
        $('.box-7_upper').animate({
            height: '65%'
        },300);
        $('.box-7_lower').animate({
            height: '35%'
        },300);
        $('.seconds-7').toggle(300);
    });
    $('.box-8_lower').mouseenter(function (){
        $('.box-8_upper').animate({
            height: '0'
        },300);
        $('.box-8_lower').animate({
            height: '100%'
        },300);
        $('.seconds-8').toggle(300);
    });

    $('.box-8_lower').mouseleave(function (){
        $('.box-8_upper').animate({
            height: '65%'
        },300);
        $('.box-8_lower').animate({
            height: '35%'
        },300);
        $('.seconds-8').toggle(300);
    });
    $('.box-9_lower').mouseenter(function (){
        $('.box-9_upper').animate({
            height: '0'
        },300);
        $('.box-9_lower').animate({
            height: '100%'
        },300);
        $('.seconds-9').toggle(300);
    });

    $('.box-9_lower').mouseleave(function (){
        $('.box-9_upper').animate({
            height: '65%'
        },300);
        $('.box-9_lower').animate({
            height: '35%'
        },300);
        $('.seconds-9').toggle(300);
    });
    $('.box-10_lower').mouseenter(function (){
        $('.box-10_upper').animate({
            height: '0'
        },300);
        $('.box-10_lower').animate({
            height: '100%'
        },300);
        $('.seconds-10').toggle(300);
    });

    $('.box-10_lower').mouseleave(function (){
        $('.box-10_upper').animate({
            height: '65%'
        },300);
        $('.box-10_lower').animate({
            height: '35%'
        },300);
        $('.seconds-10').toggle(300);
    });
    $('.box-11_lower').mouseenter(function (){
        $('.box-11_upper').animate({
            height: '0'
        },300);
        $('.box-11_lower').animate({
            height: '100%'
        },300);
        $('.seconds-11').toggle(300);
    });

    $('.box-11_lower').mouseleave(function (){
        $('.box-11_upper').animate({
            height: '65%'
        },300);
        $('.box-11_lower').animate({
            height: '35%'
        },300);
        $('.seconds-11').toggle(300);
    });
    $('.box-12_lower').mouseenter(function (){
        $('.box-12_upper').animate({
            height: '0'
        },300);
        $('.box-12_lower').animate({
            height: '100%'
        },300);
        $('.seconds-12').toggle(300);
    });

    $('.box-12_lower').mouseleave(function (){
        $('.box-12_upper').animate({
            height: '65%'
        },300);
        $('.box-12_lower').animate({
            height: '35%'
        },300);
        $('.seconds-12').toggle(300);
    });
    $('.box-13_lower').mouseenter(function (){
        $('.box-13_upper').animate({
            height: '0'
        },300);
        $('.box-13_lower').animate({
            height: '100%'
        },300);
        $('.seconds-13').toggle(300);
    });

    $('.box-13_lower').mouseleave(function (){
        $('.box-13_upper').animate({
            height: '65%'
        },300);
        $('.box-13_lower').animate({
            height: '35%'
        },300);
        $('.seconds-13').toggle(300);
    });
    $('.box-14_lower').mouseenter(function (){
        $('.box-14_upper').animate({
            height: '0'
        },300);
        $('.box-14_lower').animate({
            height: '100%'
        },300);
        $('.seconds-14').toggle(300);
    });

    $('.box-14_lower').mouseleave(function (){
        $('.box-14_upper').animate({
            height: '65%'
        },300);
        $('.box-14_lower').animate({
            height: '35%'
        },300);
        $('.seconds-14').toggle(300);
    });
    $('.box-15_lower').mouseenter(function (){
        $('.box-15_upper').animate({
            height: '0'
        },300);
        $('.box-15_lower').animate({
            height: '100%'
        },300);
        $('.seconds-15').toggle(300);
    });

    $('.box-15_lower').mouseleave(function (){
        $('.box-15_upper').animate({
            height: '65%'
        },300);
        $('.box-15_lower').animate({
            height: '35%'
        },300);
        $('.seconds-15').toggle(300);
    });
    $('.box-16_lower').mouseenter(function (){
        $('.box-16_upper').animate({
            height: '0'
        },300);
        $('.box-16_lower').animate({
            height: '100%'
        },300);
        $('.seconds-16').toggle(300);
    });

    $('.box-16_lower').mouseleave(function (){
        $('.box-16_upper').animate({
            height: '65%'
        },300);
        $('.box-16_lower').animate({
            height: '35%'
        },300);
        $('.seconds-16').toggle(300);
    });
    $('.box-17_lower').mouseenter(function (){
        $('.box-17_upper').animate({
            height: '0'
        },300);
        $('.box-17_lower').animate({
            height: '100%'
        },300);
        $('.seconds-17').toggle(300);
    });

    $('.box-17_lower').mouseleave(function (){
        $('.box-17_upper').animate({
            height: '65%'
        },300);
        $('.box-17_lower').animate({
            height: '35%'
        },300);
        $('.seconds-17').toggle(300);
    });
    $('.box-18_lower').mouseenter(function (){
        $('.box-18_upper').animate({
            height: '0'
        },300);
        $('.box-18_lower').animate({
            height: '100%'
        },300);
        $('.seconds-18').toggle(300);
    });

    $('.box-18_lower').mouseleave(function (){
        $('.box-18_upper').animate({
            height: '65%'
        },300);
        $('.box-18_lower').animate({
            height: '35%'
        },300);
        $('.seconds-18').toggle(300);
    });
    $('.box-19_lower').mouseenter(function (){
        $('.box-19_upper').animate({
            height: '0'
        },300);
        $('.box-19_lower').animate({
            height: '100%'
        },300);
        $('.seconds-19').toggle(300);
    });

    $('.box-19_lower').mouseleave(function (){
        $('.box-19_upper').animate({
            height: '65%'
        },300);
        $('.box-19_lower').animate({
            height: '35%'
        },300);
        $('.seconds-19').toggle(300);
    });
    $('.box-20_lower').mouseenter(function (){
        $('.box-20_upper').animate({
            height: '0'
        },300);
        $('.box-20_lower').animate({
            height: '100%'
        },300);
        $('.seconds-20').toggle(300);
    });

    $('.box-20_lower').mouseleave(function (){
        $('.box-20_upper').animate({
            height: '65%'
        },300);
        $('.box-20_lower').animate({
            height: '35%'
        },300);
        $('.seconds-20').toggle(300);
    });
    $('.box-21_lower').mouseenter(function (){
        $('.box-21_upper').animate({
            height: '0'
        },300);
        $('.box-21_lower').animate({
            height: '100%'
        },300);
        $('.seconds-21').toggle(300);
    });

    $('.box-21_lower').mouseleave(function (){
        $('.box-21_upper').animate({
            height: '65%'
        },300);
        $('.box-21_lower').animate({
            height: '35%'
        },300);
        $('.seconds-21').toggle(300);
    });
    $('.box-22_lower').mouseenter(function (){
        $('.box-22_upper').animate({
            height: '0'
        },300);
        $('.box-22_lower').animate({
            height: '100%'
        },300);
        $('.seconds-22').toggle(300);
    });

    $('.box-22_lower').mouseleave(function (){
        $('.box-22_upper').animate({
            height: '65%'
        },300);
        $('.box-22_lower').animate({
            height: '35%'
        },300);
        $('.seconds-22').toggle(300);
    });
    $('.box-23_lower').mouseenter(function (){
        $('.box-23_upper').animate({
            height: '0'
        },300);
        $('.box-23_lower').animate({
            height: '100%'
        },300);
        $('.seconds-23').toggle(300);
    });

    $('.box-23_lower').mouseleave(function (){
        $('.box-23_upper').animate({
            height: '65%'
        },300);
        $('.box-23_lower').animate({
            height: '35%'
        },300);
        $('.seconds-23').toggle(300);
    });
    $('.box-24_lower').mouseenter(function (){
        $('.box-24_upper').animate({
            height: '0'
        },300);
        $('.box-24_lower').animate({
            height: '100%'
        },300);
        $('.seconds-24').toggle(300);
    });

    $('.box-24_lower').mouseleave(function (){
        $('.box-24_upper').animate({
            height: '65%'
        },300);
        $('.box-24_lower').animate({
            height: '35%'
        },300);
        $('.seconds-24').toggle(300);
    });
    $('.box-25_lower').mouseenter(function (){
        $('.box-25_upper').animate({
            height: '0'
        },300);
        $('.box-25_lower').animate({
            height: '100%'
        },300);
        $('.seconds-25').toggle(300);
    });

    $('.box-25_lower').mouseleave(function (){
        $('.box-25_upper').animate({
            height: '65%'
        },300);
        $('.box-25_lower').animate({
            height: '35%'
        },300);
        $('.seconds-25').toggle(300);
    });
    $('.box-26_lower').mouseenter(function (){
        $('.box-26_upper').animate({
            height: '0'
        },300);
        $('.box-26_lower').animate({
            height: '100%'
        },300);
        $('.seconds-26').toggle(300);
    });

    $('.box-26_lower').mouseleave(function (){
        $('.box-26_upper').animate({
            height: '65%'
        },300);
        $('.box-26_lower').animate({
            height: '35%'
        },300);
        $('.seconds-26').toggle(300);
    });
    $('.box-27_lower').mouseenter(function (){
        $('.box-27_upper').animate({
            height: '0'
        },300);
        $('.box-27_lower').animate({
            height: '100%'
        },300);
        $('.seconds-27').toggle(300);
    });

    $('.box-27_lower').mouseleave(function (){
        $('.box-27_upper').animate({
            height: '65%'
        },300);
        $('.box-27_lower').animate({
            height: '35%'
        },300);
        $('.seconds-27').toggle(300);
    });
    $('.box-28_lower').mouseenter(function (){
        $('.box-28_upper').animate({
            height: '0'
        },300);
        $('.box-28_lower').animate({
            height: '100%'
        },300);
        $('.seconds-28').toggle(300);
    });

    $('.box-28_lower').mouseleave(function (){
        $('.box-28_upper').animate({
            height: '65%'
        },300);
        $('.box-28_lower').animate({
            height: '35%'
        },300);
        $('.seconds-28').toggle(300);
    });
    $('.box-29_lower').mouseenter(function (){
        $('.box-29_upper').animate({
            height: '0'
        },300);
        $('.box-29_lower').animate({
            height: '100%'
        },300);
        $('.seconds-29').toggle(300);
    });

    $('.box-29_lower').mouseleave(function (){
        $('.box-29_upper').animate({
            height: '65%'
        },300);
        $('.box-29_lower').animate({
            height: '35%'
        },300);
        $('.seconds-29').toggle(300);
    });
    $('.box-30_lower').mouseenter(function (){
        $('.box-30_upper').animate({
            height: '0'
        },300);
        $('.box-30_lower').animate({
            height: '100%'
        },300);
        $('.seconds-30').toggle(300);
    });

    $('.box-30_lower').mouseleave(function (){
        $('.box-30_upper').animate({
            height: '65%'
        },300);
        $('.box-30_lower').animate({
            height: '35%'
        },300);
        $('.seconds-30').toggle(300);
    });
    $('.box-31_lower').mouseenter(function (){
        $('.box-31_upper').animate({
            height: '0'
        },300);
        $('.box-31_lower').animate({
            height: '100%'
        },300);
        $('.seconds-31').toggle(300);
    });

    $('.box-31_lower').mouseleave(function (){
        $('.box-31_upper').animate({
            height: '65%'
        },300);
        $('.box-31_lower').animate({
            height: '35%'
        },300);
        $('.seconds-31').toggle(300);
    });
    $('.box-32_lower').mouseenter(function (){
        $('.box-32_upper').animate({
            height: '0'
        },300);
        $('.box-32_lower').animate({
            height: '100%'
        },300);
        $('.seconds-32').toggle(300);
    });

    $('.box-32_lower').mouseleave(function (){
        $('.box-32_upper').animate({
            height: '65%'
        },300);
        $('.box-32_lower').animate({
            height: '35%'
        },300);
        $('.seconds-32').toggle(300);
    });
    $('.box-33_lower').mouseenter(function (){
        $('.box-33_upper').animate({
            height: '0'
        },300);
        $('.box-33_lower').animate({
            height: '100%'
        },300);
        $('.seconds-33').toggle(300);
    });

    $('.box-33_lower').mouseleave(function (){
        $('.box-33_upper').animate({
            height: '65%'
        },300);
        $('.box-33_lower').animate({
            height: '35%'
        },300);
        $('.seconds-33').toggle(300);
    });
    $('.box-34_lower').mouseenter(function (){
        $('.box-34_upper').animate({
            height: '0'
        },300);
        $('.box-34_lower').animate({
            height: '100%'
        },300);
        $('.seconds-34').toggle(300);
    });

    $('.box-34_lower').mouseleave(function (){
        $('.box-34_upper').animate({
            height: '65%'
        },300);
        $('.box-34_lower').animate({
            height: '35%'
        },300);
        $('.seconds-34').toggle(300);
    });
    $('.box-35_lower').mouseenter(function (){
        $('.box-35_upper').animate({
            height: '0'
        },300);
        $('.box-35_lower').animate({
            height: '100%'
        },300);
        $('.seconds-35').toggle(300);
    });

    $('.box-35_lower').mouseleave(function (){
        $('.box-35_upper').animate({
            height: '65%'
        },300);
        $('.box-35_lower').animate({
            height: '35%'
        },300);
        $('.seconds-35').toggle(300);
    });
    $('.box-36_lower').mouseenter(function (){
        $('.box-36_upper').animate({
            height: '0'
        },300);
        $('.box-36_lower').animate({
            height: '100%'
        },300);
        $('.seconds-36').toggle(300);
    });

    $('.box-36_lower').mouseleave(function (){
        $('.box-36_upper').animate({
            height: '65%'
        },300);
        $('.box-36_lower').animate({
            height: '35%'
        },300);
        $('.seconds-36').toggle(300);
    });
    $('.box-37_lower').mouseenter(function (){
        $('.box-37_upper').animate({
            height: '0'
        },300);
        $('.box-37_lower').animate({
            height: '100%'
        },300);
        $('.seconds-37').toggle(300);
    });

    $('.box-37_lower').mouseleave(function (){
        $('.box-37_upper').animate({
            height: '65%'
        },300);
        $('.box-37_lower').animate({
            height: '35%'
        },300);
        $('.seconds-37').toggle(300);
    });
    $('.box-38_lower').mouseenter(function (){
        $('.box-38_upper').animate({
            height: '0'
        },300);
        $('.box-38_lower').animate({
            height: '100%'
        },300);
        $('.seconds-38').toggle(300);
    });

    $('.box-38_lower').mouseleave(function (){
        $('.box-38_upper').animate({
            height: '65%'
        },300);
        $('.box-38_lower').animate({
            height: '35%'
        },300);
        $('.seconds-38').toggle(300);
    });
    $('.box-39_lower').mouseenter(function (){
        $('.box-39_upper').animate({
            height: '0'
        },300);
        $('.box-39_lower').animate({
            height: '100%'
        },300);
        $('.seconds-39').toggle(300);
    });

    $('.box-39_lower').mouseleave(function (){
        $('.box-39_upper').animate({
            height: '65%'
        },300);
        $('.box-39_lower').animate({
            height: '35%'
        },300);
        $('.seconds-39').toggle(300);
    });
    $('.box-40_lower').mouseenter(function (){
        $('.box-40_upper').animate({
            height: '0'
        },300);
        $('.box-40_lower').animate({
            height: '100%'
        },300);
        $('.seconds-40').toggle(300);
    });

    $('.box-40_lower').mouseleave(function (){
        $('.box-40_upper').animate({
            height: '65%'
        },300);
        $('.box-40_lower').animate({
            height: '35%'
        },300);
        $('.seconds-40').toggle(300);
    });
    $('.box-41_lower').mouseenter(function (){
        $('.box-41_upper').animate({
            height: '0'
        },300);
        $('.box-41_lower').animate({
            height: '100%'
        },300);
        $('.seconds-41').toggle(300);
    });

    $('.box-41_lower').mouseleave(function (){
        $('.box-41_upper').animate({
            height: '65%'
        },300);
        $('.box-41_lower').animate({
            height: '35%'
        },300);
        $('.seconds-41').toggle(300);
    });
    $('.box-42_lower').mouseenter(function (){
        $('.box-42_upper').animate({
            height: '0'
        },300);
        $('.box-42_lower').animate({
            height: '100%'
        },300);
        $('.seconds-42').toggle(300);
    });

    $('.box-42_lower').mouseleave(function (){
        $('.box-42_upper').animate({
            height: '65%'
        },300);
        $('.box-42_lower').animate({
            height: '35%'
        },300);
        $('.seconds-42').toggle(300);
    });
    $('.box-43_lower').mouseenter(function (){
        $('.box-43_upper').animate({
            height: '0'
        },300);
        $('.box-43_lower').animate({
            height: '100%'
        },300);
        $('.seconds-43').toggle(300);
    });

    $('.box-43_lower').mouseleave(function (){
        $('.box-43_upper').animate({
            height: '65%'
        },300);
        $('.box-43_lower').animate({
            height: '35%'
        },300);
        $('.seconds-43').toggle(300);
    });
    $('.box-44_lower').mouseenter(function (){
        $('.box-44_upper').animate({
            height: '0'
        },300);
        $('.box-44_lower').animate({
            height: '100%'
        },300);
        $('.seconds-44').toggle(300);
    });

    $('.box-44_lower').mouseleave(function (){
        $('.box-44_upper').animate({
            height: '65%'
        },300);
        $('.box-44_lower').animate({
            height: '35%'
        },300);
        $('.seconds-44').toggle(300);
    });
    $('.box-45_lower').mouseenter(function (){
        $('.box-45_upper').animate({
            height: '0'
        },300);
        $('.box-45_lower').animate({
            height: '100%'
        },300);
        $('.seconds-45').toggle(300);
    });

    $('.box-45_lower').mouseleave(function (){
        $('.box-45_upper').animate({
            height: '65%'
        },300);
        $('.box-45_lower').animate({
            height: '35%'
        },300);
        $('.seconds-45').toggle(300);
    });
    $('.box-46_lower').mouseenter(function (){
        $('.box-46_upper').animate({
            height: '0'
        },300);
        $('.box-46_lower').animate({
            height: '100%'
        },300);
        $('.seconds-46').toggle(300);
    });

    $('.box-46_lower').mouseleave(function (){
        $('.box-46_upper').animate({
            height: '65%'
        },300);
        $('.box-46_lower').animate({
            height: '35%'
        },300);
        $('.seconds-46').toggle(300);
    });
    $('.box-47_lower').mouseenter(function (){
        $('.box-47_upper').animate({
            height: '0'
        },300);
        $('.box-47_lower').animate({
            height: '100%'
        },300);
        $('.seconds-47').toggle(300);
    });

    $('.box-47_lower').mouseleave(function (){
        $('.box-47_upper').animate({
            height: '65%'
        },300);
        $('.box-47_lower').animate({
            height: '35%'
        },300);
        $('.seconds-47').toggle(300);
    });
    $('.box-48_lower').mouseenter(function (){
        $('.box-48_upper').animate({
            height: '0'
        },300);
        $('.box-48_lower').animate({
            height: '100%'
        },300);
        $('.seconds-48').toggle(300);
    });

    $('.box-48_lower').mouseleave(function (){
        $('.box-48_upper').animate({
            height: '65%'
        },300);
        $('.box-48_lower').animate({
            height: '35%'
        },300);
        $('.seconds-48').toggle(300);
    });
  // $('.category').mouseenter(function(){
  //   $('.category').animate()
  //        box-shadow: '1rem'
  // },200);

$(".societies__cards--tumun").click(function (){
   $(".div1-logo").css('background-image',"url('../img/societies/TUMUN/one.jpg')");
   $(".div1-pic-img").css('background-image',"url('../img/societies/TUMUN/two.jpg')");
   $(".div1-pic-text").html('<hr style="margin:1rem;">Won ‘The Best Delegation Award’ at PECMUN 2018. Winning, One best delegate, one high commendation four special mentions and a runner up reporter<hr style="margin:1rem;">');
   $(".div2-pic-img-1").css('background-image',"url('../img/societies/TUMUN/three.png')");
   $(".div2-pic-text-1").html('<hr style="margin:1rem;">Won second best delegation ,one high commendation, one special mention and a best reporter at Deltech MUN 2018<hr style="margin:1rem;">');
   $(".div2-pic-img-2").css('background-image',"url('../img/societies/TUMUN/four.jpg')");
   $(".div2-pic-text-2").html('<hr style="margin:1rem;">Sent four delegates to the prestigious Harvard National Model United Nations, Boston, USA<hr style="margin:1rem;">');
   $(".div3-title").html('Thapar MUN Society');
   $(".div3-events").css('display','flex');
   $(".div3-about").css('height','50%');
   $(".div3-events-1").html('5th Semptember : Orietation : TAN Audi : 5:30 PM');
   $(".div3-events-2").html('6th - 7th October : Intra MUN : Thapar Campus : 5:30 PM');
   $(".div3-events-3").html('');
   $(".div3-events-4").html('');
   $(".div3-about").html('Thapar Model United Nations (TUMUN), an 8 year old conference, is one of the most prestigious conferences of North India. It is a 2-day conference and is organized in 2 levels: Intra and Inter. The aim of Intra MUN is to introduce the first-year TIET students to the culture of the MUN whereas Inter MUN involves the participation of more than 350 delegates from renowned colleges of North India. <span class=" display7 hide-small-desktop"> The society has been successful in sending a delegation to Harvard National MUN and also is proud of its winners of the Delhi circuit MUN’s, JMC, DelTech, to name a few. </span>');
   $(".div3-contact-1").html('Annanya Gupta : 9814425280');
   $(".div3-contact-2").attr('display','flex');
   $(".div3-contact-2").html('Bharat Goel ‭: 9711240852‬');
   $(".societies__modal--bg").animate({opacity : "1"});
          $(".dont-go").css('display','block');
   $(".societies__modal--bg").css("z-index","100");
});
$(".societies__cards--ccs").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/CCS/one.png')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/CCS/two.jpg')");
    $(".div1-pic-text").html('PyData Workshop<hr style="margin:1rem;">Helix Jan 2018');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/CCS/three.jpg')");
    $(".div2-pic-text-1").html('<hr style="margin:1rem;">Google I/O Extended<hr style="margin:1rem;">');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/CCS/four.jpg')");
    $(".div2-pic-text-2").html('Arduino Workshop<hr style="margin:1rem;">Chakrvyuh November 2017');
    $(".div3-title").html('Creative Computing Society');
    $(".div3-events").css('display','flex');
    $(".div3-events-1").html('29th August : Orietation : Thapar Campus');
    $(".div3-events-2").html('4th Semptember : Recruitment Begins');
    $(".div3-events-3").html('Odd Semester : Chakrvyuh : Thapar Campus');
    $(".div3-events-4").html('Even Semester : Helix : Thapar Campus');
    $(".div3-about").html('Creative Computing Society is an elite technical society with the most active proceedings in Thapar. The vision of the society is to help students achieve hands on experience in technical sphere with practice through various projects, events, competitions and numerous workshops. It focuses on bringing the together minds that are willing to learn and develop logical temperament. <span class=" display7 hide-small-desktop">CCS promotes a friendly environment to increase your knowledge, be updated about the latest technologies and develop together as a community.  </span>');
    $(".div3-contact-1").html('Upsehaj Singh Makkar : 8968916325');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/CCSTU');
    $(".div3-contact-link").attr('href','https://facebook.com/ccstu');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });

$(".societies__cards--adv-club").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/ADV-CLUB/one.png')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/ADV-CLUB/two.jpg')");
    $(".div1-pic-text").html('Skiing<hr style="margin:1rem;">Gulmarg');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/ADV-CLUB/three.jpg')");
    $(".div2-pic-text-1").html('Paragliding<hr style="margin:1rem;">Bir Billing');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/ADV-CLUB/four.jpg')");
    $(".div2-pic-text-2").html('Rafting<hr style="margin:1rem;">Rishikesh');
    $(".div3-title").html('Adventure Club : TU');
    $(".div3-events").css('display','none');
    $(".div3-events-1").html('');
    $(".div3-events-2").html('');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','70%');
    $(".div3-about").html('Adventure Club at Thapar Institute of Engineering and Technology is the forum for adventure enthusiasts, trekkers, climbers and armchair mountaineers in the student community. It works to develop the spirit of adventure in Thaparians. The aim is to make the best of the absolutely beautiful terrain around Himachal region and beyond, in the short vacations one gets in an year, while having the greatest fun possible. While the stock activities are trekking ,rock climbing and mountain cycling, adventure club has also organized skiing and river rafting sporadically.');
    $(".div3-contact-1").html('');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/ThaparAdventureClub');
    $(".div3-contact-link").attr('href','https://facebook.com/ThaparAdventureClub');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });
 $(".societies__cards--econ").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/econ/one.jpg')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/econ/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Mock IPL<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/econ/three.jpg')");
    $(".div2-pic-text-1").html('<hr style="margin:1rem;">Wolf Of Dalal Street<hr style="margin:1rem;">');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/econ/four.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">World Economic Forum<hr style="margin:1rem;">');
    $(".div3-title").html('ECON Club : TU');
    $(".div3-events").css('display','flex');
    $(".div3-events-1").html('27th August : Orientation : TAN');
    $(".div3-events-2").html('28th August : Recruitments');
    $(".div3-events-3").html('Odd Semester : Staragem');
    $(".div3-events-4").html('Odd Semester : Mock FIFA & IPL Auctions');
    $(".div3-about").css('height','50%');
    $(".div3-about").html('It aims to inspire an understanding and application of economic concepts in day to day issues of life among university students who realizes the immense importance and practical relevance of this field in the complex world.');
    $(".div3-contact-1").html('Tanish Agarwal : 7814238088');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/econthapar');
    $(".div3-contact-link").attr('href','https://facebook.com/econthapar');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });

 $(".societies__cards--edc").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/edc/one.jpg')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/edc/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Pitchers<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/edc/three.jpg')");
    $(".div2-pic-text-1").html('<hr style="margin:1rem;">The Startup<hr style="margin:1rem;">');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/edc/four.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Pitchers<hr style="margin:1rem;">');
    $(".div3-title").html('Entrepreneurship Development Cell');
   $(".div3-events").css('display','flex');
   $(".div3-events-1").html('Startup-Expo');
    $(".div3-events-2").html('Pitchers');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html('EDC is an initiative under Thapar University to promote and stimulate innovative ideas in technical field to incubate Entrepreneurs of tomorrow. If you have an idea, they should be the ones you should approach.');
    $(".div3-contact-1").html('');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/TUEDCELL');
    $(".div3-contact-link").attr('href','https://facebook.com/tuedcell');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });

 $(".societies__cards--enactus").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/enactus/one.jpg')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/enactus/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">India at 75<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/enactus/three.jpg')");
    $(".div2-pic-text-1").html('Mushroomed<hr style="margin:1rem;">Enactus Day 1.0');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/enactus/four.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Enactus Day<hr style="margin:1rem;">');
    $(".div3-title").html('Enactus');
   $(".div3-events").css('display','flex');
   $(".div3-events-1").html('Enactus Day');
    $(".div3-events-2").html('');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html('Enactus, formerly known as SIFE, was originally founded in the United States in 1975 and since that time has expanded to become the premier business and higher education network with operations in 39 countries around the world, involving 1600 universities and has over 67,000 students as active members. <span class="hide-small-desktop">Enactus TU is an initiative to make this world a better place for others to live.</span>');
    $(".div3-contact-1").html('');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/TUENACTUS');
    $(".div3-contact-link").attr('href','https://facebook.com/TUEnactus');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });

 $(".societies__cards--faps").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/faps/one.jpg')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/faps/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Kaleidoscope 2017<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/faps/three.jpg')");
    $(".div2-pic-text-1").html('<hr style="margin:1rem;">Kaleidoscope 2017<hr style="margin:1rem;">');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/faps/four.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Kaleidoscope 2017<hr style="margin:1rem;">');
    $(".div3-title").html('Fine Arts & Photography Society');
   $(".div3-events").css('display','flex');
   $(".div3-events-1").html('Kaleidoscope');
    $(".div3-events-2").html('');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html('FAPS is always on the forefront to catch the "Vincis" and "Hussains". FAPS is grooming the engineering and management graduates of Thapar University to converse through the medium of art. FAPS is a very vibrant society and has a tradition of mentoring the youngsters through workshops on Sketching, Painting, Photography, Calligraphy and Photoshop. <span class="hide-small-desktop"> Active enthusiastic participation of students makes these events quite attractive, mixing teaching with learning.</span>');
    $(".div3-contact-1").html('');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/ThaparFAPS');
    $(".div3-contact-link").attr('href','https://facebook.com/ThaparFAPS');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });

 $(".societies__cards--iete").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/iete/one.png')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/iete/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Arduino Workshop<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/iete/three.jpg')");
    $(".div2-pic-text-1").html('<hr style="margin:1rem;">Bluetooth & Obstacle Avoider Bot Workshop<hr style="margin:1rem;">');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/iete/four.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Arithmania<hr style="margin:1rem;">');
    $(".div3-title").html('Institute Of Electronics and Telecommunication Engineers');
   $(".div3-events").css('display','flex');
   $(".div3-events-1").html('Arithmania');
    $(".div3-events-2").html('');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html('IETE Students Forum, is a society which conducts technical events and infuses in the students the true essence of Electronics.It provides a platform to exchange ideas and facilitates workshops and projects.Mentors take care of the technical aspects.');
    $(".div3-contact-1").html('');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/TUECECLUB');
    $(".div3-contact-link").attr('href','https://facebook.com/TUECECLUB');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });
 $(".societies__cards--iste").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/iste/one.jpg')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/iste/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Confrence on ECE & IT<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/iste/three.jpg')");
    $(".div2-pic-text-1").html('Video Editing Workshop<hr style="margin:1rem;">Colloqium');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/iste/four.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Analog Design Competition<hr style="margin:1rem;">');
    $(".div3-title").html('Indian Society for Technical Education');
   $(".div3-events").css('display','flex');
   $(".div3-events-1").html('Colloqium');
    $(".div3-events-2").html('');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html('ISTE-TU is the student chapter of the erstwhile Indian Society for Technical Education, wherein the students actively participate in conferences and seminars related to their own technical field of expertise');
    $(".div3-contact-1").html('Taranvir Singh : 08288014242');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/ISTE.Thapar');
    $(".div3-contact-link").attr('href','https://facebook.com/ISTE.Thapar');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });

 $(".societies__cards--litsoc").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/litsoc/one.jpg')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/litsoc/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Shocase Play 2018<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/litsoc/three.jpg')");
    $(".div2-pic-text-1").html('<hr style="margin:1rem;">Elixir 2017<hr style="margin:1rem;">');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/litsoc/four.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Elixir 2017<hr style="margin:1rem;">');
   $(".div3-events").css('display','flex');
   $(".div3-title").html('Literary Society');
    $(".div3-events-1").html('Eclectiza');
    $(".div3-events-2").html('Elixir');
    $(".div3-events-3").html('Showcase Play');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html('Literary Society is a blend of writers, quizzers, actors, poets, speakers and artists who excel in the arena of literature, frame the ladder of intellectualism step by step and guide everyone to zenith.');
    $(".div3-contact-1").html('Pranav Koshal : 07837180898');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/LitSoc.TU');
    $(".div3-contact-link").attr('href','https://facebook.com/LitSoc.TU');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });

 $(".societies__cards--msc").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/msc/one.png')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/msc/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Anime-TV Series Quiz<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/msc/three.jpg')");
    $(".div2-pic-text-1").html('<hr style="margin:1rem;">Whatsapp Hacking & Security Workshop<hr style="margin:1rem;">');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/msc/four.jpg')");
    $(".div2-pic-text-2").html('Blind Coding<hr style="margin:1rem;">Inspirus 2018');
   $(".div3-events").css('display','flex');
   $(".div3-title").html('Microsoft Student Chapter');
    $(".div3-events-1").html('Odd Semester : MS Week');
    $(".div3-events-2").html('Even Semester : Inspirus');
    $(".div3-events-3").html('28th August: Techmeet 18');
    $(".div3-events-4").html('29-30th August: Recruitments');
    $(".div3-about").css('height','50%');
    $(".div3-about").html("Microsoft Student chapter was formed in lieu of providing students the appropriate platform for cultivating technical skills and a spirit of teamwork. The vision is to create a community of computer enthusiasts with a mindset of development. Interaction with each other and seniors play an important role in the growth of a students knowledge of a topic. Various constructive ideas are shared regarding the technical space. <span class='hide-small-desktop'>The society encourages sequential and systematic learning with a belief of staying updated with new technologies and therefore organises many workshops on current scenario computer related concepts.</span>");
    $(".div3-contact-1").html('');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('https://www.msctiet.co.in/');
    $(".div3-contact-link").attr('href','https://www.msctiet.co.in/');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });

 $(".societies__cards--taas").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/taas.png')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/taas/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Frosh Week<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/taas/three.jpg')");
    $(".div2-pic-text-1").html('Workshop');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/taas/four.jpg')");
    $(".div2-pic-text-2").html('AkashGanga 3.0');
   $(".div3-events").css('display','flex');
   $(".div3-title").html('Thapar Amateur Astronomers Society (TAAS)');
    $(".div3-events-1").html('');
    // $(".div3-events-2").html('Even Semester : Inspirus');
    // $(".div3-events-3").html('28th August: Techmeet 18');
    // $(".div3-events-4").html('29-30th August: Recruitments');
    $(".div3-about").css('height','50%');
    $(".div3-about").html("Thapar Amateur Astronomers Society (TAAS) is the institute's sole student-run Astronomy and Astrophysics interest group. It organises excursions, field trips, star gazing eves, lectures and various other activities, throughout the academic session, pertaining to its members' interests. Anyone with a passion for science and love for 'the great beyond' is welcome amongst them. No matter how much (or how little) one knows, there is always more that they can learn about black holes and Uranus.</span>");
    $(".div3-contact-1").html('Abhishek Verma: 9899678702');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('http://mytaas.wordpress.com');
    $(".div3-contact-link").attr('href','http://mytaas.wordpress.com');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });

 $(".societies__cards--mudra").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/mudra/one.jpg')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/mudra/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Izhaar<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/mudra/three.jpg')");
    $(".div2-pic-text-1").html('<hr style="margin:1rem;">Izhaar<hr style="margin:1rem;">');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/mudra/four.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Izhaar<hr style="margin:1rem;">');
    $(".div3-title").html('MuDra Society');
   $(".div3-events").css('display','flex');
   $(".div3-events-1").html('Izhaar');
    $(".div3-events-2").html('');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html("Mudra society has been set out with a dream to fashion a legacy of performing arts and leave behind a heritage of culture.");
    $(".div3-contact-1").html('');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/mudrasociety');
    $(".div3-contact-link").attr('href','https://facebook.com/mudrasociety');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });

 $(".societies__cards--owasp").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/owasp/one.png')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/owasp/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Semnar on Web Application Security<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/owasp/three.jpg')");
    $(".div2-pic-text-1").html('<hr style="margin:1rem;">Introdction to C Workshop<hr style="margin:1rem;">');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/owasp/four.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Github Workshop<hr style="margin:1rem;">');
    $(".div3-title").html('OWASP Student Chapter');
   $(".div3-events").css('display','flex');
   $(".div3-events-1").html('Gensis');
    $(".div3-events-2").html('');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html("The OWASP student chapter provides an opportunity to the students to work and develop skills in the field of web and mobile applications, and computer information security");
    $(".div3-contact-1").html('Dheeraj Mittal :  08923830555');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/owasptsc');
    $(".div3-contact-link").attr('href','https://facebook.com/owasptsc');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });
 $(".societies__cards--pratigya").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/pratigya/one.png')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/pratigya/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Udaan 2k18<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/pratigya/three.jpg')");
    $(".div2-pic-text-1").html('<hr style="margin:1rem;">Udaan 2k18<hr style="margin:1rem;">');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/pratigya/four.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Udaan 2k18<hr style="margin:1rem;">');
    $(".div3-title").html('Pratigya Society');
   $(".div3-events").css('display','flex');
   $(".div3-events-1").html('Udaan');
    $(".div3-events-2").html('');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html(" An initiative started by the students of TU to remove illiteracy from community in and around campus... PRATIGYA is an effort to shape the dreams which every kid nurtures in his eyes, heart & thoughts. PRATIGYA  from its root is a team which basically teaches the underprivileged kids from classes 1 to 10+2 as well as diploma classes");
    $(".div3-contact-1").html('Manglam Mishra :   08196947903');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/pratigyatiet');
    $(".div3-contact-link").attr('href','https://facebook.com/pratigyatiet');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });
 $(".societies__cards--pws").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/pws/one.jpg')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/pws/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Bird House Installation<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/pws/three.jpg')");
    $(".div2-pic-text-1").html('<hr style="margin:1rem;">Tree Plantation Drive<hr style="margin:1rem;">');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/pws/four.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Spreading Awareness<hr style="margin:1rem;">');
    $(".div3-title").html('Paryavaran Welfare Society');
   $(".div3-events").css('display','flex');
   $(".div3-events-1").html('Plantation Drive');
    $(".div3-events-2").html('Earth Day Carnival');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html("The PWS was set up in the year 2009, as a scheme to uphold biodiversity, guard “paryavaran” (environment), and save energy  resources at local level. This society also spearheads with the ‘Swachh Bharat’ campaign on the TU campus. The society has many honors and awards to its credit for carrying out exemplary work in the field of environment protection and sustainability");
    $(".div3-contact-1").html('Rajneesh Kumar :  09888078599');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/ParyavaranWelfareSociety');
    $(".div3-contact-link").attr('href','https://facebook.com/ParyavaranWelfareSociety');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });
 $(".societies__cards--somie").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/somie/one.jpg')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/somie/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Solid Works Workshop<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/somie/three.jpg')");
    $(".div2-pic-text-1").html('Industrial Visit<hr style="margin:1rem;">NPTI Nangal');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/somie/four.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Workshop on Career in Civil<hr style="margin:1rem;">');
    $(".div3-title").html('Society Of Mechanical and Industrial Engineers');
   $(".div3-events").css('display','none');
   $(".div3-events-1").html('');
    $(".div3-events-2").html('');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','75%');
    $(".div3-about").html("SOMIE (Society of Mechanical and Industrial Engineering) is the     society which helps students gain technical and practical knowledge in the field of mechanical engineering. SOMIE also acts as a bridge between students and faculty. SOMIE organizes various events like industrial tours, engine assembly workshops, technical quiz  contests, guest lectures etc..");
    $(".div3-contact-1").html('');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/somiethapar');
    $(".div3-contact-link").attr('href','https://facebook.com/somiethapar');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });
 $(".societies__cards--spic-macay").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/spic-macay/one.jpg')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/spic-macay/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Classical Singing Workshop<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/spic-macay/three.jpg')");
    $(".div2-pic-text-1").html('Flute Sisters<hr style="margin:1rem;">Swaragini');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/spic-macay/four.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Heritage Walk<hr style="margin:1rem;">');
    $(".div3-title").html('Spic - Macay');
   $(".div3-events").css('display','flex');
   $(".div3-events-1").html('Heritage Walk');
    $(".div3-events-2").html('Spic Macay Night');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html("This society organizes functions throughout the country in which great classical artists from India and abroad give performances and demonstrate to students/youth the values of our culture through LECDEM series. Several great artists like Sh. Zakir Hussain, Sh. Amjad Ali Khan, Pt. Shiv Kumar Sharma, Pt. Rajan Mishr and Pt. Sajan Mishr and many more have performed on the Institute stage under the aegis of SPIC MACAY. ");
    $(".div3-contact-1").html('Arjun Raina : 08725828779');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/Spicmacaytu');
    $(".div3-contact-link").attr('href','https://facebook.com/Spicmacaytu');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });
 $(".societies__cards--spic-macay").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/spic-macay/one.jpg')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/spic-macay/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Classical Singing Workshop<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/spic-macay/three.jpg')");
    $(".div2-pic-text-1").html('Flute Sisters<hr style="margin:1rem;">Swaragini');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/spic-macay/four.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Heritage Walk<hr style="margin:1rem;">');
    $(".div3-title").html('Spic - Macay');
   $(".div3-events").css('display','flex');
   $(".div3-events-1").html('Heritage Walk');
    $(".div3-events-2").html('Spic Macay Night');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html("This society organizes functions throughout the country in which great classical artists from India and abroad give performances and demonstrate to students/youth the values of our culture through LECDEM series. Several great artists like Sh. Zakir Hussain, Sh. Amjad Ali Khan, Pt. Shiv Kumar Sharma, Pt. Rajan Mishr and Pt. Sajan Mishr and many more have performed on the Institute stage under the aegis of SPIC MACAY. ");
    $(".div3-contact-1").html('Arjun Raina : 08725828779');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/somiethapar');
    $(".div3-contact-link").attr('href','https://facebook.com/somiethapar');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });
//  $(".societies__cards--tmc").click(function (){
//     $(".div1-logo").css('background-image',"url('../img/societies/tmc/one.jpg')");
//     $(".div1-pic-img").css('background-image',"url('../img/societies/tmc/two.jpg')");
//     $(".div1-pic-text").html('<hr style="margin:1rem;">Movie Screening<hr style="margin:1rem;">');
//     $(".div2-pic-img-1").css('background-image',"url('../img/societies/tmc/three.jpg')");
//     $(".div2-pic-text-1").html('<hr style="margin:1rem;">Photo Editing Workshop<hr style="margin:1rem;">');
//     $(".div2-pic-img-2").css('background-image',"url('../img/societies/tmc/four.jpg')");
//     $(".div2-pic-text-2").html('<hr style="margin:1rem;">Movie Making Workshop<hr style="margin:1rem;">');
//     $(".div3-title").html('Thapar Movie Club');
//    $(".div3-events").css('display','flex');
//    $(".div3-events-1").html('Cineyouth');
//     $(".div3-events-2").html('');
//     $(".div3-events-3").html('');
//     $(".div3-events-4").html('');
//     $(".div3-about").css('height','50%');
//     $(".div3-about").html("To help motivate, involve and promote appreciation (artistic, commercial and overall theme) of quality international and national films and foster an independent spirit of film criticism by the students and encourage them for critical writing on Indian and International cinema from the perspective of science, technology, technical education art and culture.<span class='hide-small-desktop'> The club organizes movies screenings on relevant technical and social themes and also organizes the inter-institute event ‘CINEYOUTH’.</span> ");
//     $(".div3-contact-1").html('');
//     $(".div3-contact-2").html('');
//     $(".div3-contact-link").html('FB/thaparmovieclub');
//     $(".div3-contact-link").attr('href','https://facebook.com/thaparmovieclub');
//     $(".societies__modal--bg").animate({opacity : "1"});
    //    $(".dont-go").css('display','block');
//     $(".societies__modal--bg").css("z-index","100");
//  });
 $(".societies__cards--toastmasters").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/toastmasters/one.jpg')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/toastmasters/two.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Toast Tussle<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/toastmasters/three.jpg')");
    $(".div2-pic-text-1").html('<hr style="margin:1rem;">Toast Tussle<hr style="margin:1rem;">');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/toastmasters/four.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Toast Talks<hr style="margin:1rem;">');
    $(".div3-title").html('Toastmasters TU');
   $(".div3-events").css('display','flex');
   $(".div3-events-1").html('Toast Talks');
    $(".div3-events-2").html('Showcase');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html("Thapar Toastmasters Club, a chapter of Toastmasters International is an organization that helps its members to improve their public speaking, communication and leadership skills. A very juvenile club started in Thapar Institute of Engineering & Technology, who meet every Wednesday, not just to overcome their stage fear and improve their communication skills, but to become a better orator and a better leader. ");
    $(".div3-contact-1").html('Prakhar Chaudhary : 09877437998');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/ThaparToastmastersClub');
    $(".div3-contact-link").attr('href','https://facebook.com/ThaparToastmastersClub');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });

 $(".societies__cards--urja").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/urja/1.jpg')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/urja/2.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Football<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/urja/3.jpg')");
    $(".div2-pic-text-1").html('<hr style="margin:1rem;">Badminton<hr style="margin:1rem;">');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/urja/4.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Sport Fest<hr style="margin:1rem;">');
    $(".div3-title").html('Urja');
   $(".div3-events").css('display','flex');
   $(".div3-events-1").html('None at the moment');
    $(".div3-events-2").html('');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html("Urja 2018 is one of the biggest sports fest of North India, hosted by Thapar Institute of Engineering and Technology. Being one of the prestigious college of the region,TIET planned and successfully organised this years’ inter college sports fest from 16-18 February 2018.Urja comprises of many pre-fest events that are followed by the three main fest days which comprises of major sports competitions i.e Basketball, Cricket, Football, Badminton, Chess, Volleyball, Lawn Tennis, Table Tennis etc. ");
    $(".div3-contact-1").html('Vaibhav Dhir : 09664954626');
    $(".div3-contact-2").html('');
    $(".div3-contact-link").html('FB/ThaparToastmastersClub');
    $(".div3-contact-link").attr('href','https://facebook.com/ThaparToastmastersClub');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });
 $(".societies__cards--saturnalia").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/saturnalia/1.jpg')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/saturnalia/6.jpg')");
    $(".div1-pic-img").css('object-fit',"cover");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Music Night<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/saturnalia/3.jpg')");
    $(".div2-pic-text-1").html('<hr style="margin:1rem;">DJ night<hr style="margin:1rem;">');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/saturnalia/2.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Band Battle<hr style="margin:1rem;">');
    $(".div3-title").html('Saturnalia TU');
   $(".div3-events").css('display','flex');
   $(".div3-events-1").html('Saturnalia Fest');
    $(".div3-events-2").html('');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html("SATURNALIA is the Largest Techno-Cultural Fest of North India and a symbol of Pride for Thapar Institute of Engineering & Technology, Patiala. This Extravagant fest is a Perfect blend of Events, Competitions, Workshops, Guest Lectures and Star Night spanning over a period of 4 Months along with 3 major Fest days Scheduled from 16-18 November 2018.This Year Saturnalia will be Based on the Theme 'THE GLOBAL ODYSSEY' which will give a much better quality to the fest with the help of International Involvement.. ");
    $(".div3-contact-1").html('Ankit : 919711769966');
    $(".div3-contact-2").html('Anurag : 917408575353');
    $(".div3-contact-link").html('FB/Saturnalia');
    $(".div3-contact-link").attr('href','https://www.facebook.com/saturnalia.thapar/?fb_dtsg_ag=AdwqY3fdyVHx7_og2H85uFrvQfDw_lkarWDlIC9jzGa4-A%3AAdxwga6wJEzh1rLMqQu6gNHO93oashnD0pT3pYdmQkNXBw');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });
 $(".societies__cards--spades").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/spades/1.jpg')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/spades/2.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Basketball<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/spades/3.jpg')");
    $(".div2-pic-text-1").html('<hr style="margin:1rem;">Badminton<hr style="margin:1rem;">');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/spades/4.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">VolleyBall<hr style="margin:1rem;">');
    $(".div3-title").html('Spades TU');
    $(".div3-events").css('display','flex');
    $(".div3-events-1").html('Spades tournament');
    $(".div3-events-2").html('Spades fifa tournament');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html("SPADES was formed with the objective of promoting sports and inculcating discipline among students of Thapar University. The society encourages students to participate in sports, maintain their fitness and to bring out the sportsman in each individual. Sports-addiction and Discipline inculcation is one of the most important aims that the society would focus on.Major Events: Inter Year Sports League (ACE), Inter Hostel Sports Tournament, Thaparlympics etc.. ");
    $(".div3-contact-1").html('Ashish : 9915173176');
    $(".div3-contact-2").html('Atishet : 7310815050');
    $(".div3-contact-link").html('FB/Spades TU');
    $(".div3-contact-link").attr('href','https://www.facebook.com/spades.tiet/');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });
 $(".societies__cards--virsa").click(function (){
    $(".div1-logo").css('background-image',"url('../img/societies/virsa/1.jpg')");
    $(".div1-pic-img").css('background-image',"url('../img/societies/virsa/2.jpg')");
    $(".div1-pic-text").html('<hr style="margin:1rem;">Bhangra<hr style="margin:1rem;">');
    $(".div2-pic-img-1").css('background-image',"url('../img/societies/virsa/3.jpg')");
    $(".div2-pic-text-1").html('<hr style="margin:1rem;">Ethnic Fashion<hr style="margin:1rem;">');
    $(".div2-pic-img-2").css('background-image',"url('../img/societies/virsa/4.jpg')");
    $(".div2-pic-text-2").html('<hr style="margin:1rem;">Musical Night<hr style="margin:1rem;">');
    $(".div3-title").html('Virsa TU');
   $(".div3-events").css('display','flex');
   $(".div3-events-1").html('Virsa event');
    $(".div3-events-2").html('');
    $(".div3-events-3").html('');
    $(".div3-events-4").html('');
    $(".div3-about").css('height','50%');
    $(".div3-about").html("VIRSA is the Annual Punjabi Festival of Thapar University, Patiala .dedicated to showcase every aspect of Punjab 's rich culture, literature & heritage. ");
    $(".div3-contact-1").html('Manish : 8727084421');
    $(".div3-contact-2").html('Akhand : 9487517577');
    $(".div3-contact-link").html('FB/Virsa');
    $(".div3-contact-link").attr('href','https://www.facebook.com/VirsaTIET/');
    $(".societies__modal--bg").animate({opacity : "1"});
           $(".dont-go").css('display','block');
    $(".societies__modal--bg").css("z-index","100");
 });

$("#parent").mouseup(function(e)
    {
        // alert("Yo");
        var subject = $("#child");
        if(e.target.id != subject.attr('id') && !subject.has(e.target).length)
        {
            $(".societies__modal--bg").animate({opacity : "0"});
            $(".societies__modal--bg").css("z-index","-100");

        }
    });
    
$(".societies__nav--sort-travel").click( function(){

    $("div:not(.travel)").css('display','none');
    $(".travel").css('display','block');
    $("h4:not(.societies__nav--sort-travel)").css('background-color','black');
    $("h4:not(.societies__nav--sort-travel)").css('color','#f5f5f5');
    $(".societies__nav--sort-travel").css('background-color','#f5f5f5');
    $(".societies__nav--sort-travel").css('color','black');
});

$(".societies__nav--sort-technical").click( function(){
    $(".technical").css('display','block');

    $("div:not(.technical)").css('display','none');
    $("h4:not(.societies__nav--sort-technical)").css('background-color','black');
    $("h4:not(.societies__nav--sort-technical)").css('color','#f5f5f5');
    $(".societies__nav--sort-technical").css('background-color','#f5f5f5');
    $(".societies__nav--sort-technical").css('color','black');
});

$(".societies__nav--sort-internship").click( function(){

    $("div:not(.internship)").css('display','none');
    $(".internship").css('display','block');
    $("h4:not(.societies__nav--sort-internship)").css('background-color','black');
    $("h4:not(.societies__nav--sort-internship)").css('color','#f5f5f5');
    $(".societies__nav--sort-internship").css('background-color','#f5f5f5');
    $(".societies__nav--sort-internship").css('color','black');
});

$(".societies__nav--sort-social").click( function(){

    $("div:not(.social)").css('display','none');
    $(".social").css('display','block');
    $("h4:not(.societies__nav--sort-social)").css('background-color','black');
    $("h4:not(.societies__nav--sort-social)").css('color','#f5f5f5');
    $(".societies__nav--sort-social").css('background-color','#f5f5f5');
    $(".societies__nav--sort-social").css('color','black');
});

$(".societies__nav--sort-cultural").click( function(){

    $("div:not(.cultural)").css('display','none');
    $(".cultural").css('display','block');
    $("h4:not(.societies__nav--sort-cultural)").css('background-color','black');
    $("h4:not(.societies__nav--sort-cultural)").css('color','#f5f5f5');
    $(".societies__nav--sort-cultural").css('background-color','#f5f5f5');
    $(".societies__nav--sort-cultural").css('color','black');
});

$(".societies__nav--sort-elocution").click( function(){

    $("div:not(.elocution)").css('display','none');
    $(".elocution").css('display','block');
    $("h4:not(.societies__nav--sort-elocution)").css('background-color','black');
    $("h4:not(.societies__nav--sort-elocution)").css('color','#f5f5f5');
    $(".societies__nav--sort-elocution").css('background-color','#f5f5f5');
    $(".societies__nav--sort-elocution").css('color','black');
});

var societies__flag=1;
$(".societies__filter").click(function (){
    if(societies__flag==0)
    {
        $(".societies__nav--filter").css('display','none');
        $(".societies__reset").animate({opacity:"0"});
        societies__flag=1;
    }
    else
    {
        $(".societies__nav--filter").css('display','block');
        $(".societies__reset").animate({opacity:"1"});
        societies__flag=0;
    }
});

$(".societies__reset").click(function (){
    $("div:not(.elocution)").css('display','block');
    $(".elocution").css('display','block');
    $("h4:not(.societies__nav--sort-elocution)").css('background-color','black');
    $("h4:not(.societies__nav--sort-elocution)").css('color','#f5f5f5');
    $(".societies__nav--sort-elocution").css('background-color','black');
    $(".societies__nav--sort-elocution").css('color','#f5f5f5');
});

$(".category-meals").click(function (){
    $("section:not(.meals)").css('display','none');
    $(".meals").css('display','block');
    $(".container").css('height','100%');
    $('html, body').animate({
      scrollTop: $('.container').offset().top -1000
    }, 1000);
});

$(".category-hangouts").click(function (){
    $("section:not(.hangouts)").css('display','none');
    $(".container").css('height','100%');
    $(".hangouts").css('display','block');
    $('html, body').animate({
      scrollTop: $('.container').offset().top -1000
    }, 1000);
});
$(".category-bars").click(function (){
    $("section:not(.bars)").css('display','none');
    $(".container").css('height','100%');
    $(".bars").css('display','block');
    $('html, body').animate({
      scrollTop: $('.container').offset().top -1000
    }, 1000);
});
$(".category-campus").click(function (){
    $("section:not(.campus)").css('display','none');
    $(".container").css('height','100%');
    $(".campus").css('display','block');
    $('html, body').animate({
      scrollTop: $('.container').offset().top -1000
    }, 1000);
});

$(".category-delivery").click(function (){
    $("section:not(.delivery)").css('display','none');
    $(".container").css('height','100%');
    $(".delivery").css('display','block');
    $('html, body').animate({
      scrollTop: $('.container').offset().top -1000
    }, 1000);
});

$(".playlist__video-1").mouseenter(function() {
    $(".playlist__video-2").animate({
        width : "10%"
    });
    $(this).animate({
        width : "23.32%"
    });
});

$(".playlist__video-2").mouseenter(function() {
    $(".playlist__video-1").animate({
        width : "13.3%"
    });
    $(".playlist__video-3").animate({
        width : "13.3%"
    });
    $(this).animate({
        width : "23.32%"
    });
});

$(".playlist__video-3").mouseenter(function() {
    $(".playlist__video-2").animate({
        width : "13.3%"
    });
    $(".playlist__video-4").animate({
        width : "13.3%"
    });
    $(this).animate({
        width : "23.32%"
    });
});
$(".playlist__video-4").mouseenter(function() {
    $(".playlist__video-5").animate({
        width : "13.3%"
    });
    $(".playlist__video-6").animate({
        width : "13.3%"
    });
    $(this).animate({
        width : "23.32%"
    });
});

$(".playlist__video-6").mouseenter(function() {
    $(".playlist__video-5").animate({
        width : "10%"
    });
    $(this).animate({
        width : "23.32%"
    });
});
$(".playlist__video").mouseleave(function() {
    $("div").animate({
        width : "16.66%"
    });
});
});
