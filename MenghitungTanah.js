let panjang = 20.5;
let lebar = 30;
let hargaPerMeter = 1500000;
let ppn = 0.15; 

let luasTanah = panjang * lebar;

let hargaTanah = luasTanah * hargaPerMeter;

let totalPPN = hargaTanah * ppn;

let totalBiaya = hargaTanah + totalPPN;

console.log("Luas Tanah: " + luasTanah + " meter persegi");
console.log("Harga Tanah: Rp " + hargaTanah);
console.log("Total PPN: Rp " + totalPPN);
console.log("Total Biaya yang Harus Dibayarkan: Rp " + totalBiaya);
