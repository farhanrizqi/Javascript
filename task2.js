// ! nomor 1
// concat()
// menggabungkan array dengan satu array atau lebih
// let month = ["januari", "maret", "april"];
// let year = [2019, 2018, [2017.1, 2017.2], 2016];
// let tryConcat = month.concat(year);
// console.log(tryConcat);

// pop()
// mengeluarkan value terakhir pada array
let year = [2019, 2018, [2017.1, 2017.2], 2016];
console.log(year);
let tryPop = year.pop();
console.log(tryPop);

// push()
// memasukkan nilai pada array
let month = ["januari", "februari", "maret"];
console.log(month);
let tryPush = month.push("april");
console.log(month);

// shift()
// menghapus index awal array
let tryShift = month.shift();
console.log(month);

// unshift()
// memasukkan value pada index awal array
let tryUnshift = month.unshift("januari");
console.log(month);

// splice()
// digunakan untuk mengubah, menghapus, menambahkan value kedalam array pada index yang diinginkan
month.splice(1, 2);
console.log(month);
month.splice(1, 0, "februari", "maret");
console.log(month);

// slice()
// mengestrak array
let names = ["larry", "barry", "harry"];
console.log(names.slice(0, 2));

//reverse()
// untuk merubah urutan value pada array
console.log(names.reverse());

//every()
//melakukan sesuatu pada setiap value pada array
let ages = [65, 23, 64, 87, 90, 23];
const checkEvery = (age) => {
  return age > 25;
};

const runCheck = ages.every(checkEvery);
console.log(runCheck);

// reduce()
const numbers = [175, 50, 25];

const myFunc = (total, num) => {
  return total + num;
};

let checkReduce = numbers.reduce(myFunc);
console.log(checkReduce);

// ! nomor 2

// const names = [
//   "Abigail",
//   "Alexandra",
//   "Alison",
//   "Amanda",
//   "Angela",
//   "Bella",
//   "Carol",
//   "Caroline",
//   "Carolyn",
//   "Deirdre",
//   "Diana",
//   "Elizabeth",
//   "Ella",
//   "Faith",
//   "Olivia",
//   "Penelope",
// ];

// function searchName(keyword, limit, callback) {
//   const filteredNames = names
//     .filter((name) => name.toLowerCase().includes(keyword.toLowerCase()))
//     .slice(0, limit);
//   callback(filteredNames);
// }

// function hasil(result) {
//   console.log(result);
// }

// searchName("an", 3, hasil);

// ! nomor 3
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (nilaiAwal < nilaiAkhir && dataArray.length >= 5) {
    const hasilSeleksi = dataArray.filter(
      (data) => data > nilaiAwal && data < nilaiAkhir
    );

    if (hasilSeleksi.length === 0) {
      return "Nilai tidak ditemukan";
    }

    return hasilSeleksi.sort((a, b) => a - b);
  }
};

const hasil = seleksiNilai(2, 15, [2, 5, 1, 2, 3, 4]);
console.log(hasil);
