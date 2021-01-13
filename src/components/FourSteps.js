import decoration from "../assets/Decoration.svg";
const FourSteps = () => {
  return (
    <div className={"fourStepsHeader"}>
      <h1>It's only 4 simple steps</h1>
      <img className='decorationSteps' src={decoration} />
    </div>
  );
};

export default FourSteps;
