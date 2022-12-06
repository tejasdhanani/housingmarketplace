import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HouseItem from "../../components/HouseItem";
import Spinner from "../../components/Spinner";
import { reset } from "../../features/auth/authSlice";
import { getHouses } from "../../features/houses/houseSlice";

function ViewHouses() {
  const dispatch = useDispatch();

  const { houses, isLoading, isError, message } = useSelector(
    (state) => state.houses
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getHouses());

    return () => {
      dispatch(reset());
    };
  }, [message, dispatch, isError]);

  if (isLoading) return <Spinner />;
  return (
    <section className="content">
      {houses.length > 0 ? (
        <div className="houses">
          {houses.map((house) => (
            <HouseItem key={house._id} house={house} canDelete={true} />
          ))}
        </div>
      ) : (
        <h3> You have not set any houses </h3>
      )}
    </section>
  );
}

export default ViewHouses;
