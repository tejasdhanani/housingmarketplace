import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HouseItem from "../components/HouseItem";
import Spinner from "../components/Spinner";
import { getAllHouses } from "../features/houses/houseSlice";
import { reset } from "../features/auth/authSlice";

function Homepage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { houses, isLoading, isError, message } = useSelector(
    (state) => state.houses
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getAllHouses());

    return () => {
      dispatch(reset());
    };
  }, [navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <h1>Welcome Houseseaker</h1>
        <p>Houses Homepage</p>
      </section>

      <section className="content">
        {houses.length > 0 ? (
          <div className="houses">
            {houses.map((house) => (
              <HouseItem key={house._id} house={house} canDelete={false} />
            ))}
          </div>
        ) : (
          <h3> No houses in your area. </h3>
        )}
      </section>
    </>
  );
}

export default Homepage;
