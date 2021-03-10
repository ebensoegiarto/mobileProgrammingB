console.log("Pertemuan 10");
console.log("MODUL");

//import { fullName ,person , display} from "./person.js";
//import { namaLengkap ,orang , tampil} from "./person.js";
import { fullName as namaLengkap,person as orang, display as tampil } from "./person.js";
console.log(namaLengkap, orang); 
tampil(orang);

import input, {game} from "./textInput/textInput.js";
input();
console.log(game);