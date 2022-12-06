import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import HouseForm from "../../components/HouseForm";
import HouseItem from "../../components/HouseItem";
import Spinner from "../../components/Spinner";
import { getHouses } from "../../features/houses/houseSlice";
import { reset } from "../../features/auth/authSlice";

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
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "row",
        }}
      >
        <Link to="/dashboard/addhouse" className="btn btn-half">
          Add a house
        </Link>
        <Link to="/dashboard/viewhouses" className="btn btn-half">
          View your houses
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Dashboard;
