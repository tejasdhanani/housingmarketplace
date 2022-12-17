import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteHouse } from "../features/houses/houseSlice";
import { arrayBufferToBase64 } from "../functions/arrayBufferToBase64";

function HouseItem({ house, canDelete }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { title, image, city, rent } = house;

  return (
    <div
      className="house"
      style={{ cursor: "pointer" }}
      onClick={() => navigate(`/houses/${house._id}`, { state: { house } })}
    >
      {/* <div>{new Date(house.createdAt).toLocaleString("en-US")}</div> */}
      <h2>{title}</h2>
      {image && (
        <img
          src={"data:image/jpeg;base64," + arrayBufferToBase64(image.data.data)}
          width={"350px"}
          alt="sdfsdf"
        />
      )}
      <h1>Rent: ${rent}</h1>
      <h3>{city}</h3>
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
