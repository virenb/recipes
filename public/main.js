$(function() {

    $('#submit').on('click', function(e) {
        e.preventDefault();
        var ingred = $('#ingredient').val();
        $('ul').append('<li>' + ingred + ' <input type="checkbox"></li>');
        $('#ingredient').val('');
    });

    $("#delete").on("click", function() {
        $("input:checked").parent().remove();
    });
});