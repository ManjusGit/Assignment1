const inputNumber = 5; 

if (inputNumber <= 0) {
    console.log("Please enter a positive integer.");
} else {
    let sum = 0;
    let currentNumber = 1;

    do {
        sum += currentNumber;
        currentNumber++;
    } while (currentNumber <= inputNumber);

    console.log("The sum of numbers from 1 to 5 is "+sum );
}
