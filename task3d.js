// ! nomor 4
const url = "https://jsonplaceholder.typicode.com/users";

const getData = async () => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    const names = data.map((users) => users.name);
    console.log(names);
  } catch (err) {
    console.log(err.message);
  }
};
getData();
