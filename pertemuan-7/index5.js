console.log("Pertemuan 6");

//operator
const john =
{
    nama : "john",
    umur : 15,
};
console.log("Hello my name's " + john.nama + " and i'm " + john.umur + " years old");

if(john.umur >= 17)
{
    console.log("saya bisa ikut pemilu");
}
else
{
    console.log("saya tidak bisa ikut pemilu");
}

//ArrowFunction
const ucapkanSalam = (salam) => salam;
let penjumlahan = (a,b) => a + b;
console.log(ucapkanSalam("selamat sore"));
console.log(penjumlahan(2,5));


//spreadArray
let nomor = [1,2,3,4,5];
console.log(...nomor);

let a = [1,2,3,4,5];
let b = [6,7,8,9,10];

const output = [...a, ...b];
console.log(output);

//spreadobjek
let orang =
{
    nama : "eben",
    umur : 21,
};

orang = {
    ...orang,
    pekerjaan : "nganggur",
};
console.log(orang);

let orang1 = 
{
    status : "duda",
    alamat : "bitung",
};

let identitas = {...orang, ...orang1}
console.log(identitas); 
