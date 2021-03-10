
function mandi(){
    console.log("mandi");
}
function sarapan(callback){
    setTimeout(() => {
        console.log("sarapan");
        callback();
    },3000);
    }
function berangkatSekolah(){
    console.log("berangkat sekolah");
}
mandi();
sarapan(berangkatSekolah);

function helloWorld() {
    return helloWorld = new Promise((resolve) => {
            resolve("Hello World");
    })
};

let messsages = async () => {
    try{
        const msg = await helloWorld();
        setTimeout(() => {
            console.log(msg);
        },2000);
    }
    catch(error)
    {
        console.log(error);
    }
    };
messsages()

