const divideAndSort = (deret) => {
  const splitDeret = deret.toString().split("0");
  const sortDeret = splitDeret.map((a) => a.split("").sort().join(""));
  const convertDeret = Number(sortDeret.join(""));
  return convertDeret;
};

const deret = 10293810283;
console.log(divideAndSort(deret));
