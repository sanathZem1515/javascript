let welcomeString = function getString()
{
     return "Hello"; 
}


function welcome(name)
{
    console.log(name);
    return welcomeString()+" "+name;
}


console.log(welcome("sanath"))