var getUser = (uid, callback) => {
    
    setTimeout(() => {
        
        var user = { id : uid, name : "User 1" };
        callback(user);

    }, 3000);

}

console.log("start !");

getUser(1, (abc) => {
    console.log(abc);
});

getUser(2, (obj) => {
    console.log("My Name is " + obj.name);
});

console.log("finish !");