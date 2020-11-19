import React from "react"
import {Link} from  "react-router-dom" 


const PajarosCard = ({ Title, Media, _id }) => (
<div>
    <Link to={`/pajaros/${_id}`}>
    <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{Title}</h4>
        </div>
        <div>
          <figure className="image">
            <img src={Media} alt={Title} width="250" height="250" />
          </figure>
        </div>
      </div>
    </Link>
  </div> 
)
export default PajarosCard
