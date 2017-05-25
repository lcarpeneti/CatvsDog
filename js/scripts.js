$(document).ready(function() {
  $("button#Meow").click(function() {
    $("ul#user").prepend("<li>Cat</li>");
    $("ul#webpage").prepend("<li>Meow</li>");
    $("#cat-showing").show()
    $("#bone-showing").hide()
    $("#dog-showing").hide()
    $("#nip-showing").hide()
  });
  $("button#Woof").click(function() {
    $("ul#user").prepend("<li>Dog</li>");
    $("ul#webpage").prepend("<li>Woof</li>");
    $("#dog-showing").show()
    $("#cat-showing").hide()
    $("#bone-showing").hide()
    $("#nip-showing").hide()
  });
  $("button#Yum").click(function() {
    $("ul#user").prepend("<li>Bone</li>");
    $("ul#webpage").prepend("<li>Yum</li>");
    $("#bone-showing").show()
    $("#cat-showing").hide()
    $("#dog-showing").hide()
    $("#nip-showing").hide()
  });
  $("button#Purr").click(function() {
    $("ul#user").prepend("<li>Catnip</li>");
    $("ul#webpage").prepend("<li>Purr</li>");
    $("#nip-showing").show()
    $("#cat-showing").hide()
    $("#dog-showing").hide()
    $("#bone-showing").hide()
  });
});
