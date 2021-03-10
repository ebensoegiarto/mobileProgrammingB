console.log("pertemuan 11 webpro");

//callback
//function greetings(fullName) 
//{
//    console.log(`hi ${fullName}`);
//}

//function introduction(firstName, lastName, callback)
//{
//    fullName = `${firstName} ${lastName}`;
//    callback(fullName);
//}

//introduction("john", "doe", (fullName) =>
//{
//    console.log(`Hi ${fullName}`);
//});

//console.log("satu");
//setTimeout(() => 
//{
//   console.log("dua");
//}, 2000);
//console.log("tiga");

function proses1(){
    console.log("proses 1 dijalankan");
}
function proses2(callback){
    setTimeout(() => {
        console.log("proses 2 dijalankan");
        callback();
    },3000);
}
function proses3(){
    console.log("proses 3 dijalankan");
}
proses1();
proses2(proses3);


let condition = true;
function newPromise() {
return newPromise = new Promise((resolve, reject) =>
{
    if(condition)
    {
        resolve("berhasil");
    }
    else 
    {
        reject("gagal");
    }
});
}
//newPromise()
//.then((result) =>
//{
 //   console.log(result);
//})
//.catch((error) =>
//{
 //   console.log(error);
//});

newPromise()
.then((result) =>
{
    return result;
})
.then((result2) =>
{
    console.log(`${result2} !!!`);
})
.catch((error) =>
{
    console.log(error);
});

function getIdStudent() 
{
    return new Promise((resolve, reject) => {
        resolve("12345");
});
}

function getNameById(id)
{
    return new Promise((resolve, reject) => {
        if(id == "12345")
        {
            resolve("john doe");
        }
        else
        {
            reject("gagal");
        }
});
}

/*getIdStudent()
.then((id) => {
    return getNameById(id);
})
.then((name) => {
    console.log(name);
})
.catch((error) => {
    console.log(error);
});*/

/*getIdStudent().then((id) => {
    getNameById(id)
    .then((name) => {
        console.log(name);
    })
    .catch((error) => {
        console.log(error);
    });
});*/

let getIdAsync = async () => {
    try{
    const id = await getIdStudent();
    const name = await getNameById(id);
    console.log(name);
    }catch(error)
    {
        console.log(error);
    }
};

getIdAsync();