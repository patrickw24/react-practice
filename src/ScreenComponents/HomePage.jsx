import { useEffect, useState } from "react";
import { Input } from "../Components/Input";
import { Over } from "../Components/Over";
import { Under } from "../Components/Under";

let url = import.meta.env.VITE_URL;
let token = import.meta.env.VITE_TOKEN;

console.log(url)

export const HomePage = () => {
  const [age, setAge] = useState(0);
  const [data, setData] = useState([]);

  const getData = async () => {
    let response = await fetch(url, {
      method: "GET",
      headers: {
        apikey: token,
        Authorization: token,
        "Content-Type": 'application/json',
      },
    });

  

    if (response.ok) {
      let jsonData = await response.json();
      setData(jsonData);
    } else {
      let responsestatus = await response.json();
      console.log(responsestatus);
    }
  };

  let messagePost =
    age >= 18 ? "You are Over the Age limit!" : "You are Under the Age Limit!";

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1> Home Page</h1>
      <Input type="number" label="Enter Your Age" setVal={setAge} />
      {age >= 18 ? (
        <Over message={messagePost} />
      ) : (
        <Under message={messagePost} />
      )}

      <table className="table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Completion Status </th>
          </tr>
        </thead>
        <tbody>
          {data.map(() => (
            <tr key={item.id}>
              <td>{item.task}</td>
              <td>{item.completed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
