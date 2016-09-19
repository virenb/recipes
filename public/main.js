$(document).ready(function () {
    var addItem = $('#addItem');
    var removeItem = $('#remove');
    addItem.click(function () {
        var toAdd = $('input#text').val();
        $('#ingredientList').append('<li><input type="checkbox"/>' + toAdd + '</li>');
    });
    removeItem.click(function () {
        var toRemove = $('input#text').val();
        $('li:contains('+toRemove+')').remove();
    });
});