import { useQuery } from "@apollo/client"
import { GET_FESTIVAL } from "../queries/festivalQueries"

function Festival() {

  const {loading,error,data} = useQuery(GET_FESTIVAL)

  return (
    <div className="festival">
      <main className="festival">
        {loading && <p>Loading...</p>}
        {error && <p>Error...</p>}
        
      </main>
    </div>
  )
}

export default Festival