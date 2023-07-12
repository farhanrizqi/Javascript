// ! nomor 1
const cekHariKerja = (day) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
      let cek = dataDay.find((item) => {
        return item === day;
      });
      if (cek) {
        resolve(cek);
      } else {
        reject(new Error("Hari ini bukan hari kerja"));
      }
    }, 3000);
  });
};

// then catch
cekHariKerja("kamis")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

// try catch
const cekHariAsync = async (day) => {
  try {
    const res = await cekHariKerja(day);
    console.log(res);
  } catch (err) {
    console.log(err.message);
  }
};
cekHariAsync("sabtu");
