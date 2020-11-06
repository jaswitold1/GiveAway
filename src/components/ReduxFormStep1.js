import React from "react";

export default function ReduxFormStep1() {
  return (
    <div className="reduxForm">
      <h1>Zaznacz co chcesz oddać</h1>
      <form>
        <div>
          <input type="checkbox" />
          <p>Ubrania, które nadają się jeszcze do noszenia</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Ubrania do wyrzucenia</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Zabawki</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Ksiązki</p>
        </div>
        <div>
          <input type="checkbox" />
          <p>Inne</p>
        </div>
      </form>
    </div>
  );
}
