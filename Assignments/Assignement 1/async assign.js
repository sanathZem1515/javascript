function getData(uId) {
    setTimeout(() => {
    console.log("Fetched the data!");
    return "skc@gmail.com";
    }, 4000);
    }
    
    console.log("start");
    var email = getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");