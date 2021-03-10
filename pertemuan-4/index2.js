console.log("henry");
// Array

let number = [1,2,3,4,5];

console.log(number);
console.log(number.length);
console.log(number[number.length - 1]);

let ben = ['eben','haezar',21,true];
ben[1]='ekoputra';
console.log(ben);
console.log(ben[2]);

//object

//#1
const eben = {
    nama : "eben",
    umur : 21,
    status : "pelajar",
    perasaan : function()
    {
        console.log("galau");
    },
    kekayaan : function()
    {
        return "banyak";
    },
};

console.log(eben);
console.log(eben.nama);
eben.perasaan();
console.log(eben.kekayaan());

//#2
const haezar = new Object();
haezar.nama = "abu";
haezar.alamat = "bitung";
haezar.umur = 22;
haezar.kekayaan = function()
{
    return"sedikit";
}

console.log(haezar);
console.log(haezar["nama"]);
console.log(haezar.kekayaan());

haezar.negara = "indonesia";
console.log(haezar.negara);
