$(document).ready(function() {
  $("button#Meow").click(function() {
    $("ul#user").prepend("<li>Cat</li>");
    $("ul#webpage").prepend("<li>Meow</li>");
    $("ul#user").children("li").first().click(function() {
  alert('hi');
});
  });
  $("button#Woof").click(function() {
    $("ul#user").prepend("<li>Dog</li>");
    $("ul#webpage").prepend("<li>Woof</li>");
  });
  $("button#Yum").click(function() {
    $("ul#user").prepend("<li>Bone</li>");
    $("ul#webpage").prepend("<li>Yum</li>");
  });
  $("button#Purr").click(function() {
    $("ul#user").prepend("<li>Catnip</li>");
    $("ul#webpage").prepend("<li>Purr</li>");
  });
});
