function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launching Chrome...");
    } else {
        console.log("Launching other browser...");
    }
}

launchBrowser("chrome");
launchBrowser("firefox");

function runTests(testType) 
{
    
 switch (testType)
 {
    case "Smoke": 
    console.log("Smoke Tests are running...");
    break;
    case "Sanity": 
    console.log("Sanity Tests are running...");
    break;
    case "Regression":
    console.log("Regression Tests are running...");
    break;
    default:
    console.log("Smoke Tests are running...");
 }
}
runTests("Smoke");
runTests("Sanity");
runTests("Regression");
runTests("Performance");    
