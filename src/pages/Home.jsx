import { useEffect} from "react";
import { usePlinksContext } from "../hooks/usePlinksContext";
//components
import PlinkCard from "../components/PlinkCard";
import CreatePlinkForm from "../components/CreatePlinkForm";

const Home = () => {
  const {plinks, dispatch} = usePlinksContext()

  useEffect(() => {
    const getPlinks = async () => {
      //before launch, fetch should point to direct endpoint (may need cors package)
      const response = await fetch("/api/plinks");
      const json = await response.json();

      if (response.ok) {
        dispatch({type: 'SET_PLINKS', payload: json})
      }
    };

    getPlinks();
  }, []);

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
