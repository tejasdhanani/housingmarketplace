import { useDispatch } from "react-redux";
import { deleteHouse } from "../features/houses/houseSlice";

function HouseItem({ house, canDelete }) {
  const dispatch = useDispatch();

  return (
    <div className="house">
      <div>{new Date(house.createdAt).toLocaleString("en-US")}</div>
      <h2>{house.text}</h2>
      {canDelete ? (
        <button
          onClick={() => dispatch(deleteHouse(house._id))}
          className="close"
        >
          X
        </button>
      ) : null}
    </div>
  );
}

export default HouseItem;
