import { useDispatch } from "react-redux";
import { deleteHouse } from "../features/houses/houseSlice";

function HouseItem({ house, canDelete }) {
  const dispatch = useDispatch();

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const {
    title,
    image,
    city,
    postalCode,
    description,
    rent,
    sqFt,
    type,
    laundry,
    bedroom,
    bathroom,
    petsAllowed,
    canSmoke,
    isFurnished,
    lease,
    walkthroughVideo,
  } = house;

  return (
    <div className="house">
      <div>{new Date(house.createdAt).toLocaleString("en-US")}</div>
      <h2>{title}</h2>
      {image && (
        <img
          src={"data:image/jpeg;base64," + arrayBufferToBase64(image.data.data)}
          width={"350px"}
          alt="sdfsdf"
        />
      )}
      {city && <h2>{city}</h2>}
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
