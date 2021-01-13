import React from "react";
import { useSelector } from "react-redux";

export default function ReduxFormStep5() {
  const what = useSelector((state) => state.form.what.values);
  const howManyBags = useSelector((state) => state.form.howManyBags.values);
  const whereAndWhom = useSelector((state) => state.form.whereAndWhom.values);
  const contact = useSelector((state) => state.form.contact.values);

  return (
    <div>
      <div className='important'>Donation Summary</div>
      {what && howManyBags && whereAndWhom && contact ? (
        <form className='form5 reduxForm'>
          <h1>Summary</h1>

          <div>
            <p>What do You want to donate?</p>
            <ul>
              {Object.entries(what).map((el, i) => {
                return <li key={i}>{el}</li>;
              })}
            </ul>
          </div>
          <div>
            <ul>
              {Object.entries(howManyBags).map((el, i) => {
                return <li key={i}>{el}</li>;
              })}
            </ul>
          </div>
          <div>
            <p>Who do You want to help?</p>
            <ul>
              {Object.entries(whereAndWhom).map((el, i) => {
                return <li key={i}>{el}</li>;
              })}
            </ul>
          </div>
          <div>
            <p>Address for the courier</p>
            <ul>
              {Object.entries(contact).map((el, i) => {
                return <li key={i}>{el}</li>;
              })}
            </ul>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </form>
      ) : (
        <div className='reduxForm'>
          <h1>
            Aparently You have not filled every field. Please review information
            You provided.
          </h1>
        </div>
      )}
    </div>
  );
}
