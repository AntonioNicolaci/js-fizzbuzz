let text_div, text_for, text_table = "";

    for (let i = 1; i <= 100; i++) {
        if ([i % 15] == 0){
            text_div = "FizzBuzz";
            text_for = `<div class="casella ${text_div}">${text_div}</div>`;
            text_table = text_table + text_for;
            text_div = "";
            text_for = "";
            console.log(i)
        }
        else if([i % 3] == 0){
            text_div = "Fizz";
            text_for = `<div class="casella ${text_div}">${text_div}</div>`;
            text_table = text_table + text_for;
            text_div = "";
            text_for = "";
            console.log(i)
        }
        else if ([i % 5] == 0){
            text_div = "Buzz";
            text_for = `<div class="casella ${text_div}">${text_div}</div>`;
            text_table = text_table + text_for;
            text_div = "";
            text_for = "";
            console.log(i);
        }
        else{
            text_div = i;
            text_for = `<div class="casella number">${text_div}</div>`;
            text_table = text_table + text_for;
            text_div = "";
            text_for = "";
            console.log(i);
        }
    }

    document.getElementById('table').innerHTML = text_table;