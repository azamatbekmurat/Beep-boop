//Business Logic
function generateRange(number, person) {
  var range = [];
  var main = "";
  for (var i=0; i<=number; i++) {
    if (i===0) {
      range.push("'Beep!'");
    } else if (i%3===0 && i!==0) {
      range.push("'I'm sorry," + person + ". I'm afraid I can't do that'");
    } else {
      var numberToStr = "";
      numberToStr = i.toString();
      if (numberToStr.includes("1")) {
        range.push("'Boop!'");
      } else if (numberToStr.includes("0")) {
        range.push("'Beep!'");
      } else {
        range.push(i);
      }
    }
  }
  main = range.join(", ")
  return main;
}

//User Interface Logic
$(document).ready(function() {
  $("form#beep").submit(function(event) {

    main = "";
    event.preventDefault();

    var inputNum = parseInt($("input#number").val());
    var inputName = $("input#person").val();
    var capitalizeFirst = inputName.charAt(0).toUpperCase() + inputName.slice(1);

    var output = generateRange(inputNum, capitalizeFirst);
    var reversedOutput = output.split(", ").reverse().join(", ");

    $(".output").text(output);
    $(".outputReversed").text(reversedOutput);
    $("#result").show();
    $("#resultReversed").hide();

  });

  $("#fadeReverse").click(function() {
    $("#resultReversed").fadeIn();
  });

});
