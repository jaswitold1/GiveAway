import React, { useEffect, useState } from "react";

const Foundations = ({ data }) => {
  const [dataSliced, setdataSliced] = useState();
  console.log(data[0].fundacje);
  useEffect(() => {
    setdataSliced({
      ...data[0].fundacje,
      currentPage: 1,
      rowsPerPage: 3,
    });
  }, []);

  return (
    <ul>
      {data[0].fundacje.map((el, i) => {
        return <li key={i}>{el.nazwa}</li>;
      })}
    </ul>
  );
};
export default Foundations;
