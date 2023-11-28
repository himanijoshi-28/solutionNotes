import "./bigcard.css";
const ProCard = (props) => {
  return (
      <div className="card">
        <p className="card-text">{props.subject}</p>
        <p className="card-price">(₹{props.price})</p>
      </div>
  );
};

export default ProCard;
