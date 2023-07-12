// ! nomor 1
// const cekHariKerja = (day) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
//       let cek = dataDay.find((item) => {
//         return item === day;
//       });
//       if (cek) {
//         resolve(cek);
//       } else {
//         reject(new Error("Hari ini bukan hari kerja"));
//       }
//     }, 3000);
//   });
// };

// then catch
// cekHariKerja("kamis")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// try catch
// const cekHariAsync = async (day) => {
//   try {
//     const res = await cekHariKerja(day);
//     console.log(res);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// cekHariAsync("sabtu");

// ! nomor 2
// const getMonth = (callback) => {
//   setTimeout(() => {
//     let error = false;
//     let month = [
//       "january",
//       "february",
//       "march",
//       "april",
//       "may",
//       "june",
//       "september",
//       "october",
//       "november",
//       "december",
//     ];
//     if (!error) {
//       callback(null, month);
//     } else {
//       callback(new Error("Sorry Data Not Found"), []);
//     }
//   }, 4000);
// };

// const listMonth = (err, months) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     months.map((month) => {
//       console.log(month);
//     });
//   }
// };

// getMonth(listMonth);

// ! nomor 3
// program 1
// const order = (qty) => {
//   return new Promise((resolve, reject) => {
//     const total = qty * 10000;
//     setTimeout(() => {
//       if (total > 0) {
//         resolve(`Order Placed, total for the order Rp.${total}`);
//       } else {
//         reject("Order Cancelled");
//       }
//     }, 2000);
//   });
// };

// order(1)
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log("Checking Order..");

// const orderAsync = async (qty) => {
//   try {
//     const result = await order(qty);
//     console.log(result);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// orderAsync(2);

// program 2
const data = [
  {
    item: "Juara Jambu",
    stock: 100,
  },
  {
    item: "Dallil",
    stock: "Out of Stock",
  },
  {
    item: "Edge Punch",
    stock: 35,
  },
];

const checkStock = (itemName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const items = data.find(
        (a) => a.item.toLowerCase() === itemName.toLowerCase()
      );
      if (items) {
        resolve(`stock yang tersedia : ${items.stock}`);
      } else {
        reject(new Error("Item not found"));
      }
    }, 2000);
  });
};

checkStock("Dallil")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

const checkStockAsync = async (stock) => {
  try {
    const items = await checkStock(stock);
    console.log(items);
  } catch (err) {
    console.log(err.message);
  }
};

checkStockAsync("Juara Jambu");

// ! nomor 4
// const url = "https://jsonplaceholder.typicode.com/users";

// const getData = async () => {
//   try {
//     const res = await fetch(url);
//     const data = await res.json();
//     const names = data.map((users) => users.name);
//     console.log(names);
//   } catch (err) {
//     console.log(err.message);
//   }
// };
// getData();
