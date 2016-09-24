$(function() {


  $('#enter').on('click', function(e) {
    e.preventDefault();
    var ingred = $('#ingredient').val();
    $('#list-group').append('<li class="list-group-item">' + ingred + ' <input type="checkbox" /> <input type="hidden" name="ingredients[]" value="' + ingred + '" /></li>');
    $('#ingredient').val('');
    var data = $("#ing").serializeArray();
    var dataString = JSON.stringify(data);
    //console.log(dataString);
    var ingredientsMap = $.map(data, function(u) {
      return u.value;
    });
    var joinMap = ingredientsMap.join(',');
    //console.log(joinMap);

  });

  $("#delete").on("click", function() {
    $("input:checked").closest(".list-group-item").remove();
    var data = $("#ing").serializeArray();
    var dataString = JSON.stringify(data);
    //console.log(deletedDataString);
    var ingredientsMap = $.map(data, function(u) {
      return u.value;
    });
    var joinMap = ingredientsMap.join(',');
    //console.log(joinMap);
  });

  var searchRecipes = function() {
    var data = $("#ing").serializeArray();
    var dataString = JSON.stringify(data);
    var ingredientsMap = $.map(data, function(u) {
      return u.value;
    });
    var joinMap = ingredientsMap.join(',');
    //console.log(joinMap);

    var request = $.ajax({
      url: "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?ingredients=" + joinMap + "&number=8&ranking=1",
      type: "GET",
      dataType: "json",
      headers: {
        "X-Mashape-Key": "FpwFL1xHGUmshSg3BCsL4xQxsDrzp1SNzyTjsnqDwPVsW7Hk89"
      }
    });

    request.done(function(data) {
      // $("#results").text(JSON.stringify(data));
      $.each(data, function (index, value) {
        $("#results").append(value.title + "<br /><img src='" + value.image + "' alt='' width='100' height='100' />");
      });
    });

    request.fail(function(jqXHR, textStatus) {
      alert("Request failed: " + textStatus);
    });
  };
  $('#submit').on('click', function(e) {
    e.preventDefault();
    console.log("Hey");
    searchRecipes();
  });
});