import React from 'react'

const FamousCard = ({images,heading5,heading6,paragraph,theme}) => {
  return (
    <div className="col-3">
              <div className="famous-card position-relative">
               <img src={images} className="img-fluid" alt="card" />
               <div className="famous-content position-absolute ">
               <h5 className={`${theme !== 'dark' ? 'text-dark' : ''}`}>{heading5}</h5>
                <h6 className={`${theme !== 'dark' ? 'text-dark' : ''}`}>{heading6}</h6>
                <p className={`${theme !== 'dark' ? 'text-dark' : ''}`}>{paragraph}</p>
               </div>
              </div>
            </div>
  )
}

export default FamousCard