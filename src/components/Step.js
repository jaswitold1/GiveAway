const Step = ({ icon, header, desc }) => {
  return (
    <div className="stepElement">
      <div>
        <img src={icon} />
      </div>
      <span>{header}</span>
      <p>_______</p>
      <span>{desc}</span>
    </div>
  );
};

export default Step;
