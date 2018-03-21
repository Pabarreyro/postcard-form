$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var inputName = $("input#name").val();
    var inputStreet = $("input#street").val();
    var inputCity = $("input#city").val();
    var inputState = $("input#state").val();
    var inputZip = $("input#zip").val();
    var inputMessage = $("input#message").val();

    $(".message").text(inputMessage);
    $(".name").text(inputName);
    $(".street").text(inputStreet);
    $(".city").text(inputCity);
    $(".state").text(inputState);
    $(".zip").text(inputZip);

    $(".postcard").show();

    event.preventDefault();
  });
});
