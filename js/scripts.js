$(document).ready(function() {
  $("#pp").click(function() {
    $("#dd").toggle(3000);
  });
  $("#tt").click(function() {
    $("#uu").toggle(3000);
  });
  $("#gg").click(function() {
    $("#mm").toggle(3000);
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
      },
  );
  $("#noo").hover (
      function() {
          $(".text3").show("slow");
      },
      function() {
          $(".text3").hide("slow")
      }
  );
  $("#yep").hover (
      function() {
          $(".text4").show("slow");
      },
      function() {
          $(".text4").hide("slow")
      }
  );
});
