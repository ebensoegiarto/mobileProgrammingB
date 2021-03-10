console.log("Exercise 1");
console.log("Array");

console.log("nomor 1 : ");

let array = ["Greg", "Mary", "Devon", "James"];
for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
}
let newArray = array.map(function(item)
{
    return item;
});

console.log(newArray);
console.log("nomor 2 : ");

array.forEach(function(item)
{
    console.log(item);
});

console.log("nomor 3 : ");

array.shift(); 
console.log(array);

console.log("nomor 4 : ");

array.pop();
console.log(array);

console.log("nomor 5 : ");

array.unshift("Matt");
console.log(array);

console.log("nomor 6 : ");

array.push("Eben");
console.log(array);

console.log("nomor 7 : ");

for(let i=0;i<array.length;i++)
{
    console.log(array[i]);
    if(array[i]==="Mary")
    {
        break;
    }
}

console.log("nomor 8 : ");

console.log(array.slice(2));

console.log("nomor 9 : ");

newArray = ["Greg", "Mary","Devon", "James"];
newArray.splice(2,1,"Elizabeth","Artie");
console.log(newArray);

console.log("nomor 10 : ");

let withbob = array.concat("bob");
console.log(withbob);

console.log("Object");

let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};
console.log(programming);

console.log("nomor 1 :");
programming.languages.push("Go");
console.log(programming);

console.log("nomor 2 : ");

programming['difficulty'] = 7;
console.log(programming);

console.log("nomor 3 : ");

delete programming.jokes;
console.log(programming);

console.log("nomor 4 : ");

programming.isFun = true;
console.log(programming);

console.log("nomor 5 : ");

let newProgramming = programming.languages.map(function(item, index)
{
    return index + "-" + item;
});
console.log(newProgramming);

/*programming.languages = programming.languages.map(function(item, index)
{
    return index + "-" + item;
});
console.log(programming);*/