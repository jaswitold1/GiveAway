import React, { useState, useEffect } from "react";
import firebase from "firebase";

export default function Foundations() {
  const [data, setData] = useState({
    currentPage: 1,
    rowsPerPage: 3,
  });
  const [sliced, setSliced] = useState();
  const [pages, setPages] = useState([]);
  const [len, setLen] = useState();
  const handleClick = (event) => {
    setData({
      ...data,
      currentPage: event.target.id,
    });
  };
  useEffect(() => {
    firebase
      .database()
      .ref()
      .child("/")
      .on("value", (snap) =>
        setData({
          ...data,
          rows: snap.val(),
        })
      );
    return () => setData({});
  }, []);

  let indexOfLastRow = data.currentPage * data.rowsPerPage;
  let indexOfFirstRow = indexOfLastRow - data.rowsPerPage;

  useEffect(() => {
    data.rows
      ? setLen(Object.entries(data.rows.fundacje).length)
      : console.log("");
  }, [data]);

  useEffect(() => {
    for (let i = 1; i <= Math.ceil(len / data.rowsPerPage); i++) {
      setPages([...pages, pages.push(i)]);
    }
  }, [len]);

  useEffect(() => {
    data.rows
      ? setSliced(
          Object.entries(data.rows.fundacje).slice(
            indexOfFirstRow,
            indexOfLastRow
          )
        )
      : console.log("");
  }, [data]);

  return (
    <div>
      {sliced ? (
        <ul>
          {sliced.map((el, i) => {
            return <li key={i}>{el[0]}</li>;
          })}
        </ul>
      ) : (
        "ladowanie"
      )}
      <div>
        {pages
          ? pages.map((el, i) => {
              return (
                <li onClick={handleClick} id={el} key={i}>
                  {el}
                </li>
              );
            })
          : "ladowanie"}
      </div>
    </div>
  );
}
