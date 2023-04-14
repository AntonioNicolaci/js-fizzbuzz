let text_div;

    for (let i = 1; i <= 100; i++) {
        if ([i % 15] == 0){
            text_div = "FizzBuzz";
            document.getElementById(i).innerHTML = `<div class="casella ${text_div}">${text_div}</div>`;
            text_div = "";
            console.log(i)
        }
        else if([i % 3] == 0){
            text_div = "Fizz";
            document.getElementById(i).innerHTML = `<div class="casella ${text_div}">${text_div}</div>`;
            text_div = "";
            console.log(i)
        }
        else if ([i % 5] == 0){
            text_div = "Buzz";
            document.getElementById(i).innerHTML = `<div class="casella ${text_div}">${text_div}</div>`;
            text_div = "";
            console.log(i);
        }
        else{
            text_div = i;
            document.getElementById(i).innerHTML = `<div class="casella number">${text_div}</div>`;
            text_div = "";
            console.log(i);
        }
    }