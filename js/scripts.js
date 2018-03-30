//
//
// function replaceNum(number) {
//   alert("Sorry!");
// }
//
// function replaceText(text) {
//   if (text.includes("1")) {
//     alert("Boop!")
//   } else if (text.includes("0")) {
//     alert("Beep!")
//   } else {
//     alert("Not applicable!")
//   }
// }

function generateRange(number) {
  var range = [];
  var main = "";
  for (var i=0; i<=number; i++) {
    if (i===0) {
      range.push("'Beep!'");
    } else if (i%3===0 && i!==0) {
      range.push("'I'm sorry, '");
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


//
$(document).ready(function() {
  $("form#beep").submit(function(event) {
    main = "";
    event.preventDefault();

    var inputNum = parseInt($("input#number").val());
    // var inputName = $("input#person").val();
    // var inputNumber = parseInt(inputNum);


    var list = generateRange(inputNum);


    $(".output").text(list);



    //
    // if (inputNumber%3===0) {
    //   replaceNum(inputNumber);
    // } else {
    //   replaceText(inputNum);
    // }



  });
});
