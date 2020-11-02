import people from "../assets/People.jpg";
import decorationAboutUs from "../assets/Decoration.svg";
import signature from "../assets/Signature.svg";

const AboutUs = () => {
  return (
    <>
      <div>
        <h1>O nas</h1>
        <img src={decorationAboutUs} />
        <p>
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img src={signature} />
      </div>
      <img src={people} />
    </>
  );
};

export default AboutUs;
