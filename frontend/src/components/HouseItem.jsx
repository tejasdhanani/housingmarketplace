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

  return (
    <div className="house">
      <div>{new Date(house.createdAt).toLocaleString("en-US")}</div>
      <h2>{house.text}</h2>
      <img
        src={
          "data:image/jpeg;base64," + arrayBufferToBase64(house.file.data.data)
        }
        width={"350px"}
        alt="sdfsdf"
      />
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
