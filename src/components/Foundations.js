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
    <div className='rows'>
      {sliced ? (
        <ul>
          {sliced.map((el, i) => {
            return <div className='row' key={i}>
              <h1>Fundacja :{el[0]}</h1>
              <span>{el[1].cel}</span>
              <span className='spanBold'>Artykuły:</span><span>{el[1].co}</span>
            </div>;
          })}
        </ul>
      ) : (
        "ladowanie"
      )}
      <div className='pages'>
        {pages
          ? pages.map((el, i) => {
              return (
                <div >
                  <span  onClick={handleClick} id={el} key={i}>
                  {el}
                </span>
                </div>
              );
            })
          : "ladowanie"}
      </div>
    </div>
  );
}
