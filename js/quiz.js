function calculate() { 
    var arg1 = document.getElementById('arg1').value;
    var arg2 = document.getElementById('arg2').value;
    var arg3 = document.getElementById('arg3').value;
    var arg4 = document.getElementById('arg4').value;
    var result = parseFloat(arg1)  * parseFloat(arg2) * parseFloat(arg3)  * parseFloat(arg4);
    document.getElementById('result').innerText = "Result: " + result ;
    return false;
  }
