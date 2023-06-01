import { usePlinksContext } from "../hooks/usePlinksContext";
import formatDistancetToNow from "date-fns/formatDistanceToNow";
import { useAuthContext } from "../hooks/useAuthContext";

const PlinkCard = ({ plink }) => {
  const { dispatch } = usePlinksContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }
    //https://plinkify-backend.onrender.com/api/plinks/
    const response = await fetch("/api/plinks/" + plink._id, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_PLINK", payload: json });
    }
  };

  return (
    <div>
      <h4>{plink.title}</h4>
      <p>
        <strong>{plink.description}</strong>
      </p>
      <h4>Links:</h4>
      <ul>
        <li>{plink.url1}</li>
        <li>{plink.url2}</li>
      </ul>
      <p>
        {formatDistancetToNow(new Date(plink.createdAt), { addSuffix: true })}
      </p>
      <div>
        <button onClick={handleClick}>DELETE</button>
      </div>
    </div>
  );
};

export default PlinkCard;
