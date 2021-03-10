console.log("pertemuan 5");
//object
console.log("OBJECT");
const eben = {
    nama : "eben",
    umur : 21,
    status : "pelajar",
    nilai : [70,80,90],
};
console.log(eben.nilai);

//Array Object
console.log("Object dalam Array");
let number = [
    {
        nama : "eben",
        umur : 21,
        status : "menikah",
    },
    {
        nama : "haezar",
        umur : 22,
        status : "belum menikah",
    },
    {
        nama : "ekoputra",
        umur : 21,
        status : "bekerja",
    },
];
console.log(number);

//Array for
console.log("Array for");
let numbers = [1,2,3,4,5];
let output = [];

for(let i=0;i<=numbers.length-1;i++)
{
    console.log(numbers[i]);
}
//forEach
/*
console.log("forEach ARRAY");
numbers.forEach(function(item,index)
{
    //item = item + 1;
    output.push(item + 2); // value menjadi variabel item !!!
    console.log("value : " + item + " index : " + index);
});
console.log("Array numbers : ", numbers);
console.log("Array output : ", output);
*/
//map
console.log("MAP ARRAY");
output = numbers.map(function(item, index) //isi array numbers ditaruh di array baru (output)
{
    return item * 2; //item berisi nilai dari array
});
console.log("index array : ", numbers);
console.log("array output : ", output); //perubahan terjadi di output

//menggunakan array map didalam object 

// menggunakan forEach
/*number.forEach(function(item) 
{
    console.log(item.nama); // value menjadi variabel item
});
*/ 

let nama = number.map(function(item) // menggunakan map
{
    return item.nama;
});
console.log(nama);

//filter
console.log("FILTER");
let filternumbers = numbers.filter(function(item)
{
    return item >= 3;
});
console.log(filternumbers);

let filterstatus = number.filter(function(item)
{
    return item.status == "bekerja"; //kalau ada object pakai .(dot) contoh item.umur
});
console.log(filterstatus);

//find
console.log("FIND");
let findumur = number.find(function(item)
{
    return item.umur == 21;
});
console.log(findumur);