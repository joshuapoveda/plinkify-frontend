import { useEffect } from "react";
import { usePlinksContext } from "../hooks/usePlinksContext";
import { useAuthContext } from "../hooks/useAuthContext";

//components
import PlinkCard from "../components/PlinkCard";
import CreatePlinkForm from "../components/CreatePlinkForm";

const Home = () => {
  const { plinks, dispatch } = usePlinksContext();
  const { user } = useAuthContext();

  useEffect(() => {
    const getPlinks = async () => {
      const response = await fetch(
        "https://plinkify-backend.onrender.com/api/plinks",
        {
          headers: {
            'Authorization': `Bearer ${user.token}`,
          },
        }
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_PLINKS", payload: json });
      }
    };

    if (user) {
      getPlinks();
    }
  }, [dispatch, user]);

  return (
    <div>
      <CreatePlinkForm />
      <div>
        {plinks &&
          plinks.map((plink) => <PlinkCard key={plink._id} plink={plink} />)}
      </div>
    </div>
  );
};

export default Home;
