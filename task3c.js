// ! nomor 3
// program 1
const order = (qty) => {
  return new Promise((resolve, reject) => {
    const total = qty * 10000;
    setTimeout(() => {
      if (total > 0) {
        resolve(`Order Placed, total for the order Rp.${total}`);
      } else {
        reject("Order Cancelled");
      }
    }, 1000);
  });
};

order(1)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("Checking Order..");

// const orderAsync = async (qty) => {
//   try {
//     const result = await order(qty);
//     console.log(result);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// console.log("Checking Order..");
// orderAsync(2);

// program 2
// const data = [
//   {
//     item: "Juara Jambu",
//     stock: 100,
//   },
//   {
//     item: "Dallil",
//     stock: "Out of Stock",
//   },
//   {
//     item: "Edge Punch",
//     stock: 35,
//   },
// ];

// const checkStock = (itemName) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const items = data.find(
//         (a) => a.item.toLowerCase() === itemName.toLowerCase()
//       );
//       if (items) {
//         resolve(`stock yang tersedia : ${items.stock}`);
//       } else {
//         reject(new Error("Item not found"));
//       }
//     }, 2000);
//   });
// };

// checkStock("Dallil")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// const checkStockAsync = async (stock) => {
//   try {
//     const items = await checkStock(stock);
//     console.log(items);
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// checkStockAsync("Juara Jambu");
