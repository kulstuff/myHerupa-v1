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

        for(var option in batch)
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
    $(".wifi__choice--password").click(function (){
        $(".password").css('display','block');
        $(".setup__mobile").css('display','none');
        $(".setup__info").css('display','none');
        $(".setup__pc").css('display','none');
        $(".setup").css('display','none');
        $(this).css('color','red');
        $(".wifi__choice--setup").css('color','white');
    });

    $(".wifi__choice--setup").click(function (){
        $(".setup").css('display','block');
        $(".password").css('display','none');
        $(this).css('color','red');
        $(".wifi__choice--password").css('color','white');
        $(".setup__pc").css('display','block');
        $(".setup__mobile").css('display','none');
        $(".setup__info").css('display','none');
        $(".setup__choice--pc").css('color','yellow');
        $(".setup__choice--mobile").css('color','white');
        $(".setup__choice--info").css('color','white');
    });

    $(".setup__choice--pc").click(function (){
        $(".setup__pc").css('display','block');
        $(".setup__mobile").css('display','none');
        $(".setup__info").css('display','none');
        $(this).css('color','yellow');
        $(".setup__choice--mobile").css('color','white');
        $(".setup__choice--info").css('color','white');

    });

    $(".setup__choice--mobile").click(function (){
        $(".setup__mobile").css('display','block');
        $(".setup__pc").css('display','none');
        $(".setup__info").css('display','none');
        $(this).css('color','yellow');
        $(".setup__choice--pc").css('color','white');
        $(".setup__choice--info").css('color','white');

    });
    $(".setup__choice--info").click(function (){
        $(".setup__info").css('display','block');
        $(".setup__pc").css('display','none');
        $(".setup__mobile").css('display','none');
        $(this).css('color','yellow');
        $(".setup__choice--pc").css('color','white');
        $(".setup__choice--mobile").css('color','white');

    });
    $(".gpa__table--plus").click(function (){

    })
});
