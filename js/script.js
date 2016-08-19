// UI Logic
$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();

    var inputNumber = parseInt($("#inputNumber").val())
    var outputArray = getPingPongArray(inputNumber);

    //display array on webpage
    $("#outputList").empty();
    outputArray.forEach(function(value){
      $("#outputList").append("<li>" + value + "</li>");
    })
  });
});

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
