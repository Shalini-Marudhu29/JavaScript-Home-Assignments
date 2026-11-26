const browserVersion = "Chrome"; //Global variable

function getBrowserVersionVar() //Function Block 
{
if(browserVersion === "Chrome") //Conditional Block
{
        var browserVersion = "Firefox"; //Using var keyword
}
    console.log(browserVersion); //Output: undefined because var is function scoped and it is hoisted to the top of the function, so it is undefined at the time of console.log
}
getBrowserVersionVar();


//using let keyword

function getBrowserVersionLet() //Function Block
{
    if(browserVersion === "Chrome") //Conditional Block
    {
        let browserVersion = "Firefox"; //Using let keyword, it is block scoped and not hoisted, so it will not affect the global variable
    }
    console.log(browserVersion); //Output: Chrome because let is block scoped and it is not hoisted, so it will not affect the global variable
}
getBrowserVersionLet();
