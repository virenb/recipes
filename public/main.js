$(function () {
  $("ul").on("click",".delete", function (e) {
    e.preventDefault();
    if ($(this).closest("label").find("input").get(0).checked) {
      $(this).closest("label").remove();
      swal(
        'Successful',
        "You have completed a task and deleted off your list!",
        'success'
      );
    }
    else
      swal(
        'Oops...',
        "Sorry, you should check your item off before removal.",
        'error'
      );
  });
});

$(function() {
  $(".textbox").on("keydown", function(e) {
    if (e.which == 13) {
      $("ul").prepend("<li><label><input type=\"checkbox\" class=\"delete\"><span>" + this.value + "</span><a href=\"#\" class=\"delete\"></a></label></li>");
      this.value = "";
    }
  });

});