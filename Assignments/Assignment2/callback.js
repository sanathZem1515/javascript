function getData(uId,callback) 
{
    
    setTimeout(() => 
    {
        console.log("Fetched the data!");
        callback("skc@gmail.com");
    }, 4000);
    console.log("get Data is finished");

}

var email = getData("skc",print);

function print(email)
{
    console.log("start");
    console.log("Email id of the user id is: " + email);
    console.log("end");
}