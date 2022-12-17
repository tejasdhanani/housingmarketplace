import { useDispatch } from "react-redux";
import { deleteHouse } from "../features/houses/houseSlice";
import { arrayBufferToBase64 } from "../functions/arrayBufferToBase64";

function HouseItem({ house, canDelete }) {
  const dispatch = useDispatch();

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

  console.log(house);

  return (
    <div className="house">
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
