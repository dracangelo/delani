$(document).ready(function() {
  
  $("#gg").click(function() {
    $("#mm").show("1000");
    $("#gg").hide("1000");
  });
  $("#mm").click(function() {
    $("#gg").show("1000");
    $("#mm").hide("1000");
  });
  $("#pp").click(function() {
    $("#dd").show("1000");
    $("#pp").hide("1000");
  });
  $("#dd").click(function() {
    $("#pp").show("1000");
    $("#dd").hide("1000");
  });
  $("#tt").click(function() {
    $("#uu").show("1000");
    $("#tt").hide("1000");
  });
  $("#uu").click(function() {
    $("#tt").show("1000");
    $("#uu").hide("1000");
  });
  $("#pic").hover(
    function() {
      $(".text1").show("slow");
    },
    function() {
      $(".text1").hide("slow");
    }
  );
  $("#nop").hover(
    function() {
      $(".text2").show("slow");
    },
    function() {
      $(".text2").hide("slow");
    }
  );
  $("#noo").hover(
    function() {
      $(".text3").show("slow");
    },
    function() {
      $(".text3").hide("slow");
    }
  );
  $("#yep").hover(
    function() {
      $(".text4").show("slow");
    },
    function() {
      $(".text4").hide("slow");
    }
  );
  $("#shtap").hover(
    function() {
      $(".text5").show("slow");
    },
    function() {
      $(".text5").hide("slow");
    }
  );
  $("#doo").hover(
    function() {
      $(".text6").show("slow");
    },
    function() {
      $(".text6").hide("slow");
    }
  );
  $("#cls").hover(
    function() {
      $(".text7").show("slow");
    },
    function() {
      $(".text7").hide("slow");
    }
  );
  $("#ksj").hover(
    function() {
      $(".text8").show("slow");
    },
    function() {
      $(".text8").hide("slow");
    }
  );
});

function click(event) {
  var name = document.getElementById("name");
  var email = document.getElementById("email");
  var message = document.getElementById("meso");
  if (email == "") {
    alert("please enter email");
  } else {
    alert("Thank you for reaching out to us!");
  }
  alert("Niaje");
  event.preventDefault();
}
