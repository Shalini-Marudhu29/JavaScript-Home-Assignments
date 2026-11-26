
function PrimeNumbers() {

    console.log("Prime numbers from 1 to 100:");

    // Outer loop: Select each number from 1 to 100
    for (let i = 1; i <= 100; i++) {

        let isPrime = true;

        // Numbers less than 2 are not prime
        if (i < 2) {
            isPrime = false;
        }

        // Inner loop: Check whether the number has other factors
        for (let j = 2; j < i; j++) {

            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }

        // Print only prime numbers
        if (isPrime) {
            console.log(i);
        }
    }
}

PrimeNumbers();
