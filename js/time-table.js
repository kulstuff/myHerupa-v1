$(document).ready(function() {
  $(".popup__selector-yr").on("change", function() {
    addYear("popup__selector-yr", "popup__selector-batch");
  });

  $(".popup__selector-batch").on("change", function() {
    addBatch("popup__selector-batch", "popup__selector-subbatch");
    $("#popup__selector-batch").css("border", "default");
  });

  //Add subsequent elements in second drop down
  function addYear(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    if (s1.value == "first-yr") {
      s2.innerHTML = "";
      batch = [
        "A|A",
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
        "CSE|CSE",
        "CSBS|CSBS",
        "EC|EC"
      ];

      for (var option in batch) {
        pair = batch[option].split("|");
        newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
      }
    } else {
      s2.innerHTML = "";
      stream = [
        "COE|Computer (COE)",
        "ECE|Electronics and Communication (ECE)",
        "CHE|Chemical (CHE)",
        "CIE|Civil (CIE)",
        "MEE|Mechanical (MEE)",
        "ELE|Electrical (ELE)",
        "BTD|Biotechnology (BTD)",
        "EIC|Electronics and Instrumentation (EIC)",
        "ENC|Electronics and Computer (ENC)",
        "MPE|Mechanical Production (MPE)",
        "MTX|Mechatronics (MTX)"
      ];
      for (var option in stream) {
        pair = stream[option].split("|");
        newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
      }
    }
    addBatch("popup__selector-batch", "popup__selector-subbatch");
  }

  //Add subsequent elements in Sub-Batch dropdown
  function addBatch(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    var year = document.getElementById("popup__selector-yr");
    s2.innerHTML = "";
    if (year.value == "first-yr") {
      // console.log(s1.value);

      if (
        s1.value == "G" ||
        s1.value == "H" ||
        s1.value == "I" ||
        s1.value == "J" ||
        s1.value == "K" ||
        s1.value == "CSE" ||
        s1.value == "EC"
      )
        addSubOptions(8);
      else if (s1.value == "CSBS") addSubOptions(2);
      else addSubOptions(6);
    } else if (year.value == "second-yr") {
      if (s1.value == "COE") {
        addSubOptions(32);
      } else if (s1.value == "ECE") {
        addSubOptions(10);
      } else if (s1.value == "ENC") {
        addSubOptions(8);
      } else if (s1.value == "CHE") {
        addSubOptions(1);
      } else if (s1.value == "EIC") {
        addSubOptions(2);
      } else if (s1.value == "BTD") {
        addSubOptions(2);
      } else if (s1.value == "CIE") {
        addSubOptions(3);
      } else if (s1.value == "MEE") {
        addSubOptions(12);
      } else if (s1.value == "ELE") {
        addSubOptions(4);
      } else if (s1.value == "MTX") {
        addSubOptions(2);
      }
    } else if (year.value == "third-yr") {
      if (s1.value == "COE") {
        addSubOptions(28);
      } else if (s1.value == "ECE" || s1.value == "ENC") {
        addSubOptions(8);
      } else if (s1.value == "CHE") {
        addSubOptions(1);
      } else if (s1.value == "EIC") {
        addSubOptions(3);
      } else if (s1.value == "BTD") {
        addSubOptions(3);
      } else if (s1.value == "CIE") {
        addSubOptions(4);
      } else if (s1.value == "MEE") {
        addSubOptions(12);
      } else if (s1.value == "ELE") {
        addSubOptions(6);
      } else if (s1.value == "CHE") {
        addSubOptions(1);
      } else if (s1.value == "MTX" || s1.value == "MTP") {
        addSubOptions(2);
      }
    }

    function addSubOptions(num, exep) {
      var subbatches = [];
      for (var i = 1; i <= num; i++) {
        subbatches.push(i + "|" + s1.value + i);
      }

      for (var option in subbatches) {
        pair = subbatches[option].split("|");
        newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
      }
    }
  }
  // Submit Button onClick action : all calendar links
  $(".submit").click(function() {
    var batch = document.getElementById("popup__selector-subbatch");
    var trait = document.getElementById("popup__selector-batch");
    var year = document.getElementById("popup__selector-yr");
    var year_const; //Convert value to a constant
    if (year.value == "first-yr") year_const = 1;
    if (year.value == "second-yr") year_const = 2;
    if (year.value == "third-yr") year_const = 3;
    if (year_const == 1) {
      window.open(eval(trait.value + "[" + (batch.value - 1) + "]")); //since first year has arrays : A[0]
    } else {
      window.open(
        eval(trait.value + year_const + "[" + (batch.value - 1) + "]") //since non first year has arrays : BTD2[0]
      );
    }
    // Replace this by sheets maintained online
  });
});
