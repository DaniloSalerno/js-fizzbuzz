const rowElement = document.querySelector('.row');

for (let i = 1; i <= 100; i++) {

    let colorStyle;
    let boxContent;
    if (!(i % 3) && !(i % 5)) {

        colorStyle = 'bg-success';
        console.log('FizzBuzz');
        boxContent = 'FizzBuzz';

    } else if (!(i % 3)) {

        colorStyle = 'bg-warning';
        console.log('Fizz');
        boxContent = 'Fizz';

    } else if (!(i % 5)) {

        colorStyle = 'bg-danger';
        console.log('Buzz');
        boxContent = 'Buzz';

    } else {
        
        colorStyle = 'bg-primary';
        console.log(i);
        boxContent = i;
        
    }

    rowElement.innerHTML += `<div class="square ${colorStyle}">${boxContent}</div>`;


 }