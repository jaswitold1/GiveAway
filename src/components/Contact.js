import decorationAboutUs from "../assets/Decoration.svg";

const Contact = () => {
  return (
    <>
      <div className='contact'>
        <div className='contactContainer'>
          <h1>Contact Us</h1>
          <img src={decorationAboutUs} />
          <form>
            <div className='credentials'>
              <div className='formElement'>
                <label for='name'>Name</label>
                <input name='name' />
              </div>
              <div className='formElement'>
                <label for='email'>E-mail</label>
                <input name='email' />
              </div>
            </div>
            <div className='formElement'>
              <label for='text'>Your text</label>
              <input className='textarea' />
              <button type='button'>Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
