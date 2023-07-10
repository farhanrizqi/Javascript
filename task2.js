// ! nomor 1
// push()
// memasukkan nilai pada array
// let month = ["januari", "februari", "maret"];
// console.log(month);
// let tryPush = month.push("april");
// console.log(month);

// shift()
// menghapus index awal array
// let tryShift = month.shift();
// console.log(month);

// unshift()
// memasukkan value pada index awal array
// let tryUnshift = month.unshift("januari");
// console.log(month);

// concat()
// menggabungkan array dengan satu array atau lebih
// let month = ["januari", "maret", "april"];
// let year = [2019, 2018, [2017.1, 2017.2], 2016];
// let tryConcat = month.concat(year);
// console.log(tryConcat);

// pop()
// mengambil value terakhir pada array
// let year = [2019, 2018, [2017.1, 2017.2], 2016];
// console.log(year);
// let tryPop = year.pop();
// console.log(tryPop);

// slice()
// mengestrak array
// let names = ["larry", "barry", "harry"];
// console.log(names.slice(0, 2));

// splice()
// digunakan untuk mengubah, menghapus, menambahkan value kedalam array pada index yang diinginkan
// month.splice(1, 2);
// console.log(month);
// month.splice(1, 0, "februari", "maret");
// console.log(month);

// find()
//u ntuk menemukan deretan array sesuai dengan kondisi
// let angka = [1, 4, 5, 15, 30, 9, 56, 5, 4];
// let tryFind = angka.find((a) => {
//   return a >= 40;
// });
// console.log(tryFind);

//every()
//melakukan sesuatu pada setiap value pada array
// let ages = [65, 23, 64, 87, 90, 23];
// const checkEvery = (age) => {
//   return age > 25;
// };

// const runCheck = ages.every(checkEvery);
// console.log(runCheck);

// reduce()
// const numbers = [175, 50, 25];

// const myFunc = (total, num) => {
//   return total + num;
// };

// let checkReduce = numbers.reduce(myFunc);
// console.log(checkReduce);

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
  if (nilaiAwal < nilaiAkhir) {
    if (dataArray.length < 5) {
      return "Jumlah angka dalam dataArray harus lebih dari 5";
    }
    const hasilSeleksi = dataArray.filter(
      (data) => data > nilaiAwal && data < nilaiAkhir
    );
    if (hasilSeleksi.length === 0) {
      return "nilai tidak ditemukan";
    }

    return hasilSeleksi.sort((a, b) => a - b);
  } else if (nilaiAwal > nilaiAkhir) {
    return "nilai akhir harus lebih besar dari nilai awal";
  }
};

const hasil = seleksiNilai(2, 25, [2, 25, 20, 40, 30]);
console.log(hasil);
