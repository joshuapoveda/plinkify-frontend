import { useState } from "react";
import { usePlinksContext } from "../hooks/usePlinksContext";
import { useAuthContext } from "../hooks/useAuthContext";

const CreatePlinkForm = () => {
  const { dispatch } = usePlinksContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url1, setUrl1] = useState("");
  const [url2, setUrl2] = useState("");
  const [url3, setUrl3] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You need to login");
      return;
    }

    const plink = { title, description, url1 };
    const response = await fetch("https://plinkify-backend.onrender.com/api/plinks", {
      method: "POST",
      body: JSON.stringify(plink),
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setTitle("");
      setDescription("");
      setUrl1("");
      setUrl2("");
      setUrl3("");
      setError(null);
      setEmptyFields([]);
      console.log("New plink created", json);
      dispatch({ type: "CREATE_PLINK", payload: json });
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
        <label>Link 1:</label>
        <input
          type="text"
          onChange={(e) => setUrl1(e.target.value)}
          value={url1}
        />
        <label>Link 2:</label>
        <input
          type="text"
          onChange={(e) => setUrl2(e.target.value)}
          value={url2}
        />
        <label>Link 3:</label>
        <input
          type="text"
          onChange={(e) => setUrl3(e.target.value)}
          value={url3}
        />

        <button>Create Plink</button>
        {error && <div className="err">{error}</div>}
      </form>
    </div>
  );
};

export default CreatePlinkForm;
