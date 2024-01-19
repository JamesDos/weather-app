
const fetchData = (search) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=777dad6b095b47f8b5d42049241801&q=${search}`;
  return fetch(url, {mode: 'cors'})
    .then(res => res.json())
    .catch(err => console.log(err));

}

