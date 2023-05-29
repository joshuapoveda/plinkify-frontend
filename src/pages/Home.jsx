import { useEffect, useState } from "react";
import PlinkCard from "../components/PlinkCard";
import CreatePlinkForm from "../components/CreatePlinkForm";

const Home = () => {
  const [plinks, setPlinks] = useState(null);

  useEffect(() => {
    const getPlinks = async () => {
      //before launch, fetch should point to direct endpoint (may need cors package)
      const response = await fetch("/api/plinks");
      const json = await response.json();

      if (response.ok) {
        setPlinks(json);
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
