import { useDispatch } from "react-redux";
import { deleteHouse } from "../features/houses/houseSlice";

function HouseItem({ house }) {
  const dispatch = useDispatch();

  return (
    <div className="house">
      <div>{new Date(house.createdAt).toLocaleString("en-US")}</div>
      <h2>{house.text}</h2>
      <button
        onClick={() => dispatch(deleteHouse(house._id))}
        className="close"
      >
        X
      </button>
    </div>
  );
}

export default HouseItem;
