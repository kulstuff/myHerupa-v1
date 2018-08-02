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

var getValue;
$(document).ready(function(){

    function addBatch(s1,s2){
      var s1 = document.getElementById(s1);
      var s2 = document.getElementById(s2);

      s2.innerHTML = "";

        subbatch = [s1.value+"1|"+s1.value+"1",
                    s1.value+"2|"+s1.value+"2",
                    s1.value+"3|"+s1.value+"3",
                    s1.value+"4|"+s1.value+"4",
                    s1.value+"5|"+s1.value+"5"];

      for(var option in subbatch)
      {
        pair = subbatch[option].split("|");
        newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
      }
    }
    function addYear(s1,s2){
      var s1 = document.getElementById(s1);
      var s2 = document.getElementById(s2);

      s2.innerHTML = "";

      if(s1.value == "first-yr")
      {
        batch = ["A|A",
                  "B|B",
                  "C|C",
                  "D|D",
                  "E|E",
                  "F|F",
                  "G|G",
                  "H|H",
                  "I|I",
                  "J|J",
                  "K|K",
                  "L|L",
                  "M|M",
                  "N|N",
                  "O|O",
                  "P|P"
                ];
            }
      for(var option in batch)
      {
        pair = batch[option].split("|");
        newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
      }
      addBatch("popup__selector-batch","popup__selector-subbatch");
    }
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
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "3.5|Material and Energy Balances",
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
            var subjects = ["0|Select Suject",
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
            var subjects = ["0|Select Suject",
                            "6|Engineering Design Project-1",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "3.5|Circuit Analysis & Synthesis",
                            "4.5|Microprocessors & their Applications",
                            "4.5|Signals & Systems",
                            "6|Engineering Design Project-2",
                            "3.5|Manufacturing Processes",
                            "3.5|Otimization Techniques",
                            "4.5|Solids and Strcutures",
                            "4.5|Thermo-Fluids",
                            "4.5|Analog and Electronic Circuits"];
        }

        else if(s1.value == 5)
        {
            var subjects = ["0|Select Suject",
                            "6|Engineering Design Project-1",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "4.5|Microprocessors & their Applications",
                            "3.5|Network Analysis & Synthesis",
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
            var subjects = ["0|Select Suject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "4.5|Electrical & Electronic Measurements",
                            "3|Humanities for Engiineers",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "8|Sensors and Signal Conditioning with Project",
                            "3.5|Techniques on Sigal and Systems"];
        }

        else if(s1.value == 7)
        {
            var subjects = ["0|Select Suject",
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
                            "3.5|Network Analysis & Synthesis",
                            "3|Power System Practices"];
                        }

        else if(s1.value == 8)
        {
            var subjects = ["0|Select Suject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "4.5|Mechanics of Machines",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "4|Mechatronics",
                            "4|Machine Design",
                            "8|Computer Aided Design & Analysis"];
        }
        else if(s1.value == 9)
        {
            var subjects = ["0|Select Suject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "4.5|Mechanics of Machines",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "3|Humanities for Engineers",
                            "4.5|Signals & Systems",
                            "8|Computer Aided Design & Analysis"]
        }
        else if(s1.value == 10)
        {
            var subjects = ["0|Select Suject",
                            "6|Engieering Design Project-2",
                            "3.5|Manufacturing Process",
                            "3.5|Optimization Techniques",
                            "4.5|Solids and Structures",
                            "4.5|Thermo-Fluids",
                            "4.5|Mechanics of Machines",
                            "4.5|Engineering Materials",
                            "4.5|Numerical Analysis",
                            "4|Industrial Automation",
                            "8|Computer Aided Design & Analysis",
                            "4|Machine Design"];
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

    $(".popup__selector-batch").on('change', function (){
      addBatch("popup__selector-batch","popup__selector-subbatch");
      $("#popup__selector-batch").css("border","default");
    });
    $(".popup__selector-yr").on('change', function (){
      addYear("popup__selector-yr","popup__selector-batch");
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
        $(".wifi__sophos--choice").css('display','none');
        $(".sophos").css('display','none');
        $(this).css('color','white');
        $(this).css('background-color','black');
        $(".wifi__choice--sophos").css('color','white');
        $(".wifi__choice--sophos").css('background-color','#E94B3C');
    });

    $(".wifi__choice--sophos").click(function (){
        $(".sophos").css('display','block');
        $(".wifi__passwords").css('display','none');
        $(this).css('background-color','black');
        $(".wifi__choice--passwords").css('background-color','#E94B3C');
        $(".wifi__sophos--choice").css('display','block');
        $(".sophos__pc").css('display','none');
        $(".sophos__info").css('display','none');
        $(".wifi__choice-mobile").css('color','#185ABD');
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
    $(".submit").click(function (){
        var v1 = document.getElementById("popup__selector-subbatch");
        

        if(v1.value == "A1")
             window.open("https://calendar.google.com/calendar?cid=dmw1MW9kaXQ0NmRnNjNrYzQxdjh1bTI5a29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "A2")
            window.open("https://calendar.google.com/calendar?cid=ZGlyOXZoNzI5bmsybHBkZ2RrZGM2ZDM3bWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "A3")
            window.open("https://calendar.google.com/calendar?cid=MzVtNDltbnZsZjJsa29kYzFiazZuYTJzb2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "A4")
            window.open("https://calendar.google.com/calendar?cid=cWdyZW1zMnQ0aWx2dTlnOGN2ZW5uY2UxZDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "A5")
            window.open("https://calendar.google.com/calendar?cid=MnRlYWkwdThwbHJjN2Nucm10cmFmMmNrNW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "B1")
            window.open("https://calendar.google.com/calendar?cid=ZXUxcm1yaWthcG1idjZvbTR0dHQ0bnE0Y2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "B2")
            window.open("https://calendar.google.com/calendar?cid=MHFxdGduZHM3MjFycGpycXZqNWlpMnZ0aXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "B3")
            window.open("https://calendar.google.com/calendar?cid=MzljbmVtaXRldWUwN2ZzdHVtbDRsdGc2MmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "B4")
            window.open("https://calendar.google.com/calendar?cid=a2YzZHUzYzZuMWlmaHI2MWtqM3ZrbzVkOGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "B5")
            window.open("https://calendar.google.com/calendar?cid=ZzcxdG9ka29hOTQwN2R1b3IyaWhnOXJoMWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "C1")
            window.open("https://calendar.google.com/calendar?cid=Yjk4ZHRzcmw1M2xma2l0MjFnNGhoZmlhajhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "C2")
            window.open("https://calendar.google.com/calendar?cid=MmNibmNmMDNyOG1lMnVucGs4Mmd2NnF0ZzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "C3")
            window.open("https://calendar.google.com/calendar?cid=YmdkM3RrcDZ1YTBxMTQxODJyM3Uxc3VmYTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "C4")
            window.open("https://calendar.google.com/calendar?cid=NG8xMjlnaDJrdHRkODQ3NzlwMjlkc2Rtc2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "C5")
            window.open("https://calendar.google.com/calendar?cid=ZjdwbGo3YTVjZTcxNWNzbzlyN2R2M2wyYXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "D1")
            window.open("https://calendar.google.com/calendar?cid=YWpxNDl2YXVham0ydG51OTNyM2luZ3FwZDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "D2")
            window.open("https://calendar.google.com/calendar?cid=aGZoNGk0dG1kY2MzdWxsaGNuMTd0aWlkazhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "D3")
            window.open("https://calendar.google.com/calendar?cid=dGFnMnR0dnI3ZGgzdGJ0MXNpdnJmazA2MzBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "D4")
            window.open("https://calendar.google.com/calendar?cid=NmplZzQ3ZnR0MXY5bHYzNDk1NWtkYjRuZ3NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "D5")
            window.open("https://calendar.google.com/calendar?cid=dDBldWNiamk2YzdzN2UxdW1waWY2dHBxYnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "E1")
            window.open("https://calendar.google.com/calendar?cid=b3QxcXBuczkzaTM0ZnY5MnV0ZmMyMDNwaWtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "E2")
            window.open("https://calendar.google.com/calendar?cid=c3NwNGVscGFjcm9taG8waGdmZW12N3E5cjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "E3")
            window.open("https://calendar.google.com/calendar?cid=M2VqNTQ0cjRpcDhscmdicThoYWljaW05b2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "E4")
            window.open("https://calendar.google.com/calendar?cid=N2tlZ2Q4dWNzcnBwdmFvZm12bzVwNXU0OWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "E5")
            window.open("https://calendar.google.com/calendar?cid=NTcyM2tlZXN1czc2djhkdHV2NWgxZ2JmZmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "F1")
            window.open("https://calendar.google.com/calendar?cid=dWs4aDViYzhncGczNG12NXI5bWh2YTA4NDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "F2")
            window.open("https://calendar.google.com/calendar?cid=YTBkdmM3NGJpMWZqaTRmbjgyODF2bmlxZDBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "F3")
            window.open("https://calendar.google.com/calendar?cid=YTk5NTBxMms1YXEzNHAxZ2k1YmxkZWt2bThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "F4")
            window.open("https://calendar.google.com/calendar?cid=bmVhZTd1NWN0ZzFubW9hYjNhc3EzdWprbThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "F5")
            window.open("https://calendar.google.com/calendar?cid=amk5bmNkNmM5cHZxZWJlZHJmY2VmZmFlcW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "G1")
            window.open("https://calendar.google.com/calendar?cid=MnZuZ2lmb3V2bnM1MnJpdnZhMmxwZDBtcDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "G2")
            window.open("https://calendar.google.com/calendar?cid=dGxvcWxvdmtnbTMxbXNmZ3I3YjVmbDdra2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "G3")
            window.open("https://calendar.google.com/calendar?cid=NTY3OHJ0NTFwM21hbTVocDB0aTk2M21ha2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "G4")
            window.open("https://calendar.google.com/calendar?cid=amhlZ2dncTFpNXQ3bjJhZGIwb3ViMGo1a2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "G5")
            window.open("https://calendar.google.com/calendar?cid=bDZqbGl0dTQxaG1jM201YTlmN3Noc3NwaWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "H1")
            window.open("https://calendar.google.com/calendar?cid=M2p2aHBndGdpczIwOXRvNmxoa2Z1MXNua29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "H2")
            window.open("https://calendar.google.com/calendar?cid=OTdiaG41MjQ4Z3ZlYmoxa2VyZnRsMnY2Z29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "H3")
            window.open("https://calendar.google.com/calendar?cid=aXVrYm1oaHR0dDhnbzllZjhmZXM0dTJpODBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "H4")
            window.open("https://calendar.google.com/calendar?cid=bnJxanJuaTI1M3FqZ3N2cXM1c3VsMDQxczRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "H5")
            window.open("https://calendar.google.com/calendar?cid=bGxyZW5xbDY3dGllaDc2ZmxlM3V2Z3BiZmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "I1")
            window.open("https://calendar.google.com/calendar?cid=b3Zzc29mamMyNXM1dTYzbzk5NGd1amRkZjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "I2")
            window.open("https://calendar.google.com/calendar?cid=bW9iMzU3M2g1OTZ0cDBvcjl1a2dvNnI1bjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "I3")
            window.open("https://calendar.google.com/calendar?cid=cWN1bTZmcm9iMWVjMGxqYmc0dDdzZ2ljaThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "I4")
            window.open("https://calendar.google.com/calendar?cid=MWhjZmdyNnZ0Yzc2bjdrYjkzY3Axbm9odG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "I5")
            window.open("https://calendar.google.com/calendar?cid=YWY4NHYyaWY0NGlkNWxoZDZzOWEwMWVsMDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "J1")
            window.open("https://calendar.google.com/calendar?cid=ZW81OG1zcGcycTl1c3Z2cDBjNmdib3BtaWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "J2")
            window.open("https://calendar.google.com/calendar?cid=YjVoN2JvajhqYmYydWhpZmdnM2NpbWpnNXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "J3")
            window.open("https://calendar.google.com/calendar?cid=MDEwdTYxNmZnbG1sNGkxdmdnbDN0ZWkxbXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "J4")
            window.open("https://calendar.google.com/calendar?cid=bjU5dm5mdjdnOTludmJsaHFhM2FiMG84MnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "J5")
            window.open("https://calendar.google.com/calendar?cid=cnJwaDlrcjE4bnZxazZkOW9xYzE0ajdkamNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "K1")
            window.open("https://calendar.google.com/calendar?cid=ZWIwNG05dWlwcWxzOHIzMHEya3VxOGQ3ZThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "K2")
            window.open("https://calendar.google.com/calendar?cid=NWVkamRlcnM0YmxjNmFuMjlxZmllZWo0azBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "K3")
            window.open("https://calendar.google.com/calendar?cid=NWY3MTVkdTA2NHZuajhqZmsxdTJpa3E2dm9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "K4")
            window.open("https://calendar.google.com/calendar?cid=bnE0ZjlybXBzZzk0OWNjcWk4ZzVhb284bnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "K5")
            window.open("https://calendar.google.com/calendar?cid=azNoZ3FkZmZsYjZhODQ3YmE5aDRmbzg0b2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "L1")
            window.open("https://calendar.google.com/calendar?cid=YmVtbTFvbzVkbm85NnZnaXBtbnR0cGlxbHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "L2")
            window.open("https://calendar.google.com/calendar?cid=ZWUxb2wybW0wdXI4aGhkbDRyZzZibTEwa2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "L3")
            window.open("https://calendar.google.com/calendar?cid=cTk2Ymg3N20xdTNja3V2MXFzNmxnbGh2ZDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "L4")
            window.open("https://calendar.google.com/calendar?cid=aWtqajNoc29paWg5bnQ4bWl1azFhamlmM2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "L5")
            window.open("https://calendar.google.com/calendar?cid=aGxiOW02a3QyY28xdHRsb3Jtc3NrcDFlZ2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "M1")
            window.open("https://calendar.google.com/calendar?cid=Z3Z0ZWt2bWJzM3Y3NjhqZ3E1Z3BvOHZ0ZDRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "M2")
            window.open("https://calendar.google.com/calendar?cid=NHBlZ2xucTZpODdrOHZ1b3M2bG10NHMxbmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "M3")
            window.open("https://calendar.google.com/calendar?cid=OXJnMW4wcDc1ZTQwYnFjMmllZm04ZDh2bW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "M4")
            window.open("https://calendar.google.com/calendar?cid=YjNpcmpsM2FrMXZsNmpsODE2a2JhcGtxNmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "M5")
            window.open("https://calendar.google.com/calendar?cid=M3ZoNXBsZzh1MXI5amVsamRxZzJsaGVkNTBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "N1")
            window.open("https://calendar.google.com/calendar?cid=ZmwwMzB2YnYyb3BxdHI4NGtlcWRrNjc0YzRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "N2")
            window.open("https://calendar.google.com/calendar?cid=cTdnY2VyYzFza2pyYTFhdmZrcW9qb25jajBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "N3")
            window.open("https://calendar.google.com/calendar?cid=MTI3aG5rNmZnY2FqYmNjcWU2bmh0dXY5ZjhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "N4")
            window.open("https://calendar.google.com/calendar?cid=dmhkcW1oOXNzZGplanA0cDhhZ250ZGZhZ29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "N5")
            window.open("https://calendar.google.com/calendar?cid=M2luaTBwOHJpc28wZGNna3JtNjg0cTJ0cWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "O1")
            window.open("https://calendar.google.com/calendar?cid=MGdwOWw0aWFmbjA2cXUybTdxODF0dHMybThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "O2")
            window.open("https://calendar.google.com/calendar?cid=bzExNXZsa3RrZGRzdWt1MXBodDBmazZvc2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "O3")
            window.open("https://calendar.google.com/calendar?cid=cmdwbGs1YThtdTExMWx2Z3U5ZGYydDh2MnNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "O4")
            window.open("https://calendar.google.com/calendar?cid=bmJkNTdjamk5Ym91ZjVhNnZuc2FjZjNhZGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "O5")
            window.open("https://calendar.google.com/calendar?cid=azduczVrbjFybWd1M202NTQxc2R2YTlndjBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "P1")
            window.open("https://calendar.google.com/calendar?cid=N2o3NDAyMTN2M241dnBmdnZuNW9nNXJwb2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "P2")
            window.open("https://calendar.google.com/calendar?cid=cmtodmk1NHB2ZWR1bmJlODBnbGNydjNkMjRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "P3")
            window.open("https://calendar.google.com/calendar?cid=YWdlc2dlcjZhdmpqam04aTBya3F2bWRpMmtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "P4")
            window.open("https://calendar.google.com/calendar?cid=ZTE4ZG82YjAwNHNpNzc2MmFyMGk1cmFlMGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "P5")
            window.open("https://calendar.google.com/calendar?cid=ajJ1ZXBrYTdtc3Z2N25pMzIyZzZnNHNlMWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "BTD1")
            window.open("https://calendar.google.com/calendar?cid=bmo3bXF2aW9xMDFmbnBjbm9iM2dzaGNlazBAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "BTD2")
            window.open("https://calendar.google.com/calendar?cid=dmE2Zm9tZmpyajQzNWU4ZnFza2lzbjBqcWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else if(v1.value == "BTD3")
            window.open("https://calendar.google.com/calendar?cid=b250MXBvN3NqbWdyN2huYWpjc3U0ZWVnZDhAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ");
        else
        {
            if(v1.value == "selector")
            $("#popup__selector-subbatch").css("border","1px solid red");
            else {
            $("#popup__selector-subbatch").css("border","1 px solid gray");
            }
        }
    });
});
