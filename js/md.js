

    function getVars(est, mst, tut, lab){
        console.log("hi");
        
        var tutPerc = tut;
        var mstPerc = mst;
        var estPerc = est;
        var labPerc = lab;
        $(".dist__ray-tut").css({'width':tutPerc});
        $(".dist__ray-mst").css({'width':mstPerc});
        $(".dist__ray-est").css({'width':estPerc});
        $(".dist__ray-lab").css({'width':labPerc});
        $(".dist__ray-tut").hover(function () {
            this.innerHTML=tutPerc;
        });
        $(".dist__ray-tut").mouseleave(function () {
            this.innerHTML="Tutorials";
        });
        $(".dist__ray-mst").hover(function () {
            this.innerHTML=mstPerc;
        });
        $(".dist__ray-mst").mouseleave(function () {
            this.innerHTML="Mid-Sem";
        });
        $(".dist__ray-est").hover(function () {
            this.innerHTML=estPerc;
        });
        $(".dist__ray-est").mouseleave(function () {
            this.innerHTML="End-Sem";
        });
        $(".dist__ray-lab").hover(function () {
            this.innerHTML=labPerc;
        });
        $(".dist__ray-lab").mouseleave(function () {
            this.innerHTML="Lab-Eval";
        });
    }