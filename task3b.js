// ! nomor 2
const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "september",
      "october",
      "november",
      "december",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found"), []);
    }
  }, 4000);
};

const listMonth = (err, months) => {
  if (err) {
    console.log(err.message);
  } else {
    months.map((month) => {
      console.log(month);
    });
  }
};

getMonth(listMonth);
