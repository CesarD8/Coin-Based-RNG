// Code goes here
function flip() {
    return Math.random() >= 0.5;
  }
  
  function GenerateNumber()
  {
    var value = parseInt(document.getElementById("maxvalue").value);
  
    if(typeof(value) == undefined)
    {
      alert("Please input a number");
    }
    else if(value > 1000000)
    {
      alert("Max Value must be less than 1,000,000");
    }
    else if(value <= 0)
    {
      alert("Max Value must be greater than 0");
    }
    else
    {
      var stringValue = RandomNumber(value);
      document.getElementById("result").innerHTML = stringValue;
    }
  }
  
  function RandomNumber(maxValue)
  {
    var binaryNumber = maxValue.toString(2);
    var numberOfFlipsNeeded = binaryNumber.length; 
    var randomBinaryNumber = "";
    var randomNumber = 0;
    
    if(maxValue == 1)
    {
      return 1;
    }
    else
    {
      do
      {
        for(var i = 0; i < numberOfFlipsNeeded; i++)
        {
          if(flip())
            randomBinaryNumber += "1";
          else
            randomBinaryNumber += "0";
        }
      
        randomNumber = parseInt(randomBinaryNumber,2);
        randomBinaryNumber= "";
      }
      while(randomNumber < 1 || randomNumber > maxValue);
      
      return randomNumber;
    }
  }