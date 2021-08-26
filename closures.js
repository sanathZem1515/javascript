function outerFunction(outerVariable)
{
    const outer2 = "Hi";
    console.log("welcome");
    return function innerFunction(innerVariable)
    {
        console.log("Outer variable "+outerVariable);
        console.log("Inner Varibale "+innerVariable);
        console.log(outer2);
    }
}

const newFunction = outerFunction('outside')
// newFunction('inside')