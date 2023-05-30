import { useState } from "react";
import { usePlinksContext } from "../hooks/usePlinksContext"

const CreatePlinkForm = () => {
  //const dispatch = usePlinksContext().dispatch
  const {dispatch} = usePlinksContext()
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url1, setUrl1] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const plink = { title, description, url1 };

    const response = await fetch("/api/plinks", {
      method: "POST",
      body: JSON.stringify(plink),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setDescription("");
      setUrl1("");
      setError(null);
      console.log("New plink created", json);
      dispatch({type: 'CREATE_PLINK', payload: json})
    }
  };

  return (
    <div>
      <form className="create-plink-form" onSubmit={handleSubmit}>
        <h3>Create a plink</h3>
        <label>Title:</label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <label>Describe it:</label>
        <input
          type="text"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label>Link:</label>
        <input
          type="text"
          onChange={(e) => setUrl1(e.target.value)}
          value={url1}
        />

        <button>Create Plink</button>
        {error && <div className="err">{error}</div>}
      </form>
    </div>
  );
};

export default CreatePlinkForm;
