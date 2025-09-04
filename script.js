 function enter(event) {
              event.preventDefault();

              const number1 = parseFloat(document.getElementById("num1").value);
              const number2 = parseFloat(document.getElementById("num2").value);
              const number3 = parseFloat(document.getElementById("num3").value);
              const option = document.getElementById("option").value;

              let output = [num1,num2,num3];

              if (opt === "Asc") {
                output .opt((x , y)=> x - y);
              } else if (opt === "Des"){
                output.opt((x , y) => y - x);
              } else{
                return;
              }

            document.getElementById("output").innerText = `Sorted Numbers: ${output}`;
             console.log(output);
           
        }