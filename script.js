cals = (buttonValue)=>
        {
        if (buttonValue == 'C')
        {
           document.getElementById('result').value = '';
        }
        else
          {
            if(document.getElementById('result').value == '0')
         {
           document.getElementById('result').value = buttonValue;
        }
          else
           {
            document.getElementById('result').value += buttonValue;
           }
          }
         }
          function cal(equation)
          {
          let answer = eval(equation);
        document.getElementById('result').value = answer;
         }
        
