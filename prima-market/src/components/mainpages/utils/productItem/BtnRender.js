import React from 'react'
import {Link} from 'react-router-dom'

function BtnRender({product}) {
    
    return (
        <div className="row btn">
        <Link id="btn_buy" to="#!">
          Buy Now
        </Link>

        <Link id="btn_view" to={`/detail/${product._id}`}>
          View Details
        </Link>
      </div>
    )
}

export default BtnRender
