
var credits= [0,0,0,0,0,0,0,0,0,0,0,0,0];
var grade=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var sno=7;
var i=0;
var credits_sum =0;
var mulgrades_sum=0;

var gpa;
$(document).ready(function(){

  /* NOt working :( get this up and running using functions
  function hide(){
        $(this).css('visibility','hidden');
    }
    function show(){
        $(this).css('display','inline-block');
    }
    */
    $(".add").click(function (){
        var table = document.getElementById("table");
        var row = table.insertRow(sno);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = sno;
        sno++;
        cell2.innerHTML = '<select name="subject" id="subject" class="table__item col col-lg-12 subject-'+(sno-1)+'">'
                + '<option value="0" disabled selected>Select Subject</option>'
                + '<option value="0" disabled>First Year</option>'
                + '<option value="4.5">Applied Chemistry</option>'
                + '<option value="4.5">Applied Physics</option>'
                + '<option value="4">Computer Science 1</option>'
                + '<option value="4">Computer Science 2</option>'
                + '<option value="4.5">Electrical</option>'
                + '<option value="4.5">Electronics</option>'
                + '<option value="4">Engineering Drawing 1</option>'
                + '<option value="4">Engineering Drawing 2</option>'
                + '<option value="3">Environment</option>'
                + '<option value="3.5">Mathematics 1</option>'
                + '<option value="3.5">Mathematics 2</option>'
                + '<option value="2.5">Mechanics</option>'
                + '<option value="3">Professional Communication</option>'
                + '</select>';
        cell3.innerHTML = '<select name="grade" id="gpa__grade" class="table__item col-lg-10 grade-'+(sno-1)+'">'
                + '<option class="gpa__select--default" value="0" disabled selected>Select Grade</option>'
                + '<option class="gpa__select--item" value="10">A+</option>'
                + '<option class="gpa__select--item" value="10">A</option>'
                + '<option class="gpa__select--item" value="9">A-</option>'
                + '<option class="gpa__select--item" value="8">B</option>'
                + '<option class="gpa__select--item" value="7">B-</option>'
                + '<option class="gpa__select--item" value="6">C</option>'
                + '<option class="gpa__select--item" value="5">C-</option>'
                + '<option class="gpa__select--item" value="0">F</option>'
                +'</select>'; 
    if(sno>=6)
{
    $(".delete").css('display','inline-block');
    $(".add").css('width','50%');
    $(".delete").css('width','50%');

}
if(sno>13)
    {
        $(".add").css('display','none');
        $(".delete").css('width','100%');
    }
    });

   $(".delete").click( function deleteRow() {
        document.getElementById("table").deleteRow(sno-1);
        sno--;
        if(sno==7)
    {
        $(".delete").css('display','none');
    $(".add").css('width','100%');
    }

    if(sno==13)
    {
        $(".add").css('display','inline-block');
        $(".add").css('width','50%');
        $(".delete").css('width','50%');
    
    }
    });
    $(".calculate").click(function (){

        var credits_sum =0;
        var mulgrades_sum=0;

        credits[0] = $(".subject-1").val();
        credits[1] = $(".subject-2").val();
        credits[2] = $(".subject-3").val();
        credits[3] = $(".subject-4").val();
        credits[4] = $(".subject-5").val();
        credits[5] = $(".subject-6").val();
        credits[6] = $(".subject-7").val();
        grade[0] = $(".grade-1").val();
        grade[1] = $(".grade-2").val();
        grade[2] = $(".grade-3").val();
        grade[3] = $(".grade-4").val();
        grade[4] = $(".grade-5").val();
        grade[5] = $(".grade-6").val();
        grade[6] = $(".grade-7").val();

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
        $(".gpa__display").html("Your GPA : " + gpa);
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
});
