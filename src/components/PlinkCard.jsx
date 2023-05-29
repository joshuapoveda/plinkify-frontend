const PlinkCard = ({plink}) => {
  return (
    <div>
        <h4>{plink.title}</h4>
        <p><strong>{plink.description}</strong></p>
        <h4>Links:</h4>
        <ul>
            <li>{plink.url1}</li>
            <li>{plink.url2}</li>
        </ul>
        <p>{plink.createdAt}</p>
    </div>
  )
}

export default PlinkCard