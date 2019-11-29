$(document).ready(function() {
  $(".news__selector-first").click(function() {
    $("button:not(this)").css(
      "background-image",
      "linear-gradient( #EEEEEE, #EEEEEE)"
    );
    $("button:not(this)").css("color", "black");
    $(this).css("background-image", "linear-gradient(90deg, #00b09b, #96c93d)");
    $(this).css("color", "white");
    $(".news__article-second").css("display", "none");
    $(".news__article-third").css("display", "none");
    $(".news__article-first").css("display", "block");
    console.log("1");
  });

  $(".news__selector-second").click(function() {
    $("button:not(this)").css(
      "background-image",
      "linear-gradient( #EEEEEE, #EEEEEE)"
    );
    $("button:not(this)").css("color", "black");
    $(this).css("background-image", "linear-gradient(90deg, #fc4a1a, #f7b733)");
    $(this).css("color", "white");
    $(".news__article-first").css("display", "none");
    $(".news__article-third").css("display", "none");
    $(".news__article-second").css("display", "block");
    console.log("2");
  });

  $(".news__selector-third").click(function() {
    $("button:not(this)").css(
      "background-image",
      "linear-gradient( #EEEEEE, #EEEEEE)"
    );
    $("button:not(this)").css("color", "black");
    $(this).css("background-image", "linear-gradient(90deg, #9b5151, #dd1818)");
    $(this).css("color", "white");
    $(".news__article-first").css("display", "none");
    $(".news__article-second").css("display", "none");
    $(".news__article-third").css("display", "block");
    console.log("3");
  });
});
