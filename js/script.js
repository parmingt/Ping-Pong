// UI Logic
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();

    $("#outputList").empty(); //clear display list

    var input = $("#inputNumber").val()

    //check for non-numeric input (should have been filtered out by input type but this double-checks)
    if(isNaN(input)){
      $("#outputList").append("Please a positive integer");
      return;
    } else {
      input = parseInt(input);
    }

    //check for negative numbers
    if(input <= 0){
      $("#outputList").append("Please enter a positive integer");
      return;
    }

    var outputArray = getPingPongArray(input);

    //display array on webpage
    listSequence(0, outputArray);
  });
});

function listSequence(index, sequence){ //lists the sequence with a time delay
  if(index < sequence.length){
    var value = sequence[index];
    $("#outputList").append("<div><li>" + value + "</li></div>");
    setTimeout(function() {listSequence(index + 1, sequence);}, 300) //recursively calls listSequence after a 0.3s delay
  }
}


//Back end
function getPingPongArray(input){
  //function takes a number as input and returns an array
  var outputArray = [];

  //build array
  for(var i = 1; i <= input; i++){
    var value;
    if(i % 15 === 0){
      value = "ping-pong";
    } else if(i % 5 === 0){
      value = "pong";
    } else if(i % 3 === 0){
      value = "ping";
    } else {
      value = i
    }
    outputArray.push(value);
  }

  return outputArray;
}
