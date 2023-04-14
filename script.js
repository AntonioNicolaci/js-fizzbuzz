let text_table = "";

for (let i = 1; i <= 100; i++) {
    if ([i % 15] == 0){
        text_table = text_table + `<div class="casella FizzBuzz">FizzBuzz</div>`;
    }
    else if([i % 3] == 0){
        text_table = text_table + `<div class="casella Fizz">Fizz</div>`;
    }
    else if ([i % 5] == 0){
        text_table = text_table + `<div class="casella Buzz">Buzz</div>`;
    }
    else{
        text_table = text_table + `<div class="casella number">${i}</div>`;
    }
}

document.getElementById('table').innerHTML = text_table;