const chalk = require("chalk");

const pijarFood = (harga, voucher, jarak, pajak) => {
  let diskon = 0;
  let deliv = 0;
  let tax = 0;

  if (voucher === "PIJARFOOD5" && harga >= 50000) {
    diskon = Math.min(0.5 * harga, 50000);
  } else if (voucher === "DITRAKTIRPIJAR" && harga >= 25000) {
    diskon = Math.min(0.6 * harga, 25000);
  }

  if (jarak > 2 ? (deliv = 3000 * (jarak - 2) + 5000) : (deliv = 5000))
    if (pajak === true) {
      tax = 0.05 * harga;
    }

  const total = harga - diskon + deliv + tax;
  return `
  Harga = ${harga}
  Potongan = ${diskon}
  Biaya Antar = ${deliv}
  Pajak = ${tax}
  ----------------------+
  Total yang harus dibayar = Rp.${chalk.green.underline(total)}
  `;
};

console.log(pijarFood(75000, "PIJARFOOD5", 5, true));
