function getData(uId) 
{
    return new Promise((resolve)=>
    {
        setTimeout(() => 
        {
        console.log("Fetched the data!");
        resolve("skc@gmail.com")
        }, 4000);
    });
}
    
getData("skc").then((emailId)=>{

    console.log("start");
    console.log("Email id of the user id is: " + emailId);
    console.log("end");
});

