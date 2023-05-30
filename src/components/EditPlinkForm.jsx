import { useState } from "react"

const EditPlinkForm = ({plink}) => {
    const [title, setTitle] = useState(plink.title)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try{
            const response = await fetch(`api/plinks/${plink._id}`,{
                method: 'PATCH',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({title})
            })
            const data = await response.json()
            console.log(data)
        } catch (err){
            console.log.error(err)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}
            />
            <button type='submit'>update plink</button>
        </form>
    </div>
  )
}

export default EditPlinkForm