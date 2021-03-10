console.log("Penggunaan Class");

// const mobil1 = {
//     merek: "Toyota",
//     warna: "Putih",
//     nyalakanMobil : function() {
//         console.log(`Mobil merek ${this.merek} telah dinyalakan`);
//     },
// };

// mobil1.nyalakanMobil();

// const mobil2 = {
//     merek: "Honda",
//     warna: "Hitam",
//     nyalakanMobil : function() {
//         console.log(`Mobil merek ${this.merek} telah dinyalakan`);
//     },
// };

// mobil2.nyalakanMobil();

//class
class mobil {
    constructor (merek, warna) {
        this.merek = merek;
        this.warna = warna;
    }
    nyalakanMobil() {
        console.log(`Mobil merek ${this.merek} telah dinyalakan`);
    }
}

const mobil1 = new mobil("honda, hitam");
const mobil2 = new mobil("toyota, putih");
console.log(mobil1);
console.log(mobil2);
mobil1.nyalakanMobil();
mobil2.nyalakanMobil();

//inheritence
class toyota extends mobil {
    constructor(merek, warna, mesin) {
        super(merek, warna)
        this.mesin = mesin;
    }
    //overridding
    nyalakanMobil() {
        console.log(`Mobil merek ${this.mesin} telah dinyalakan`);
    }
    matikanMobil() {
        console.log(`Mobil merek ${this.merek} telah dimatikan`);
    }
}
const supra = new toyota ("Supra", "Hitam", "350HP");
supra.nyalakanMobil(); 
supra.matikanMobil();