import { useEffect, useState } from "react";

function usecurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data);
  return data;
}
export default usecurrencyInfo;