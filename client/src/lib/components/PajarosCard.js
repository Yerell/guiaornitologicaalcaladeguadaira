import React from "react"

const PajarosCard = ({ Title, Media, _id }) => (
  <div>
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
  </div> 
)
export default PajarosCard
