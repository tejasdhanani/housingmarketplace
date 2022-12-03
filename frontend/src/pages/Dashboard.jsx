import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HouseForm from "../components/HouseForm";
import HouseItem from "../components/HouseItem";
import Spinner from "../components/Spinner";
import { getHouses } from "../features/houses/houseSlice";
import { reset } from "../features/auth/authSlice";

function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { houses, isLoading, isError, message } = useSelector(
    (state) => state.houses
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
      // dispatch(reset());
    }

    if (!user) {
      navigate("/");
    }

    dispatch(getHouses());

    return () => {
      dispatch(reset());
    };
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <section className="heading">
        <h1>Welcome {user && user.name}</h1>
        <p>Houses Dashboard</p>
      </section>
      <HouseForm />

      <section className="content">
        {houses.length > 0 ? (
          <div className="houses">
            {houses.map((house) => (
              <HouseItem key={house._id} house={house} />
            ))}
          </div>
        ) : (
          <h3> You have not set any houses </h3>
        )}
      </section>
    </>
  );
}

export default Dashboard;
