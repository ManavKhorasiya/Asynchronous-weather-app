var getUser = (id,callback) => {
    var user = {
        id,
        name:'Manav'
    };

    setTimeout( () => {
        callback(user);
    },3000);
    
}

getUser(31, (userobject) => {
    console.log(userobject);
});

