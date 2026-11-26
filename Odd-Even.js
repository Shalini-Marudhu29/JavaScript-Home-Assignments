function isOddOrEven(number) 
{
    let inputNumber = number;
    if (inputNumber % 2 === 0)
    {
        return "Even";
    }
    else
    {
        return "Odd";
    }
}
console.log(isOddOrEven(20));
console.log(isOddOrEven(51));