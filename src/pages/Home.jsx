import { useEffect, useState } from "react";

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
      <div>
        {plinks &&
          plinks.map((plink, index) => (
            <div key={plink._id}>
              <h2>{index}</h2>
              <p>{plink.title}</p>
              <p>{plink.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
