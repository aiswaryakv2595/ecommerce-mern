import React from 'react'
import Meta from '../components/Meta'
import BreadCrumb from '../components/BreadCrumb'
import Color from '../components/Color'

const CompareProduct = () => {
  return (
    <>
    <Meta title={"Compare Products"} />
      <BreadCrumb title="Compare Products" />
      <div className="compare-product-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">Fire-Boltt Ninja Call Pro Plus 1.83" Smart Watch </h5>
                            <h6 className="price mb-3">$100</h6>
                        </div>
                        <div>
                            <div className="product-detail">
                                <h5>Brand</h5>
                                <p>Fire-Boltt</p>
                            </div>
                            <div className="product-detail">
                                <h5>Type</h5>
                                <p>Watch</p>
                            </div>
                            <div className="product-detail">
                                <h5>Availability</h5>
                                <p>In Stock</p>
                            </div>
                            <div className="product-detail">
                                <h5>Color</h5>
                                <Color/>
                            </div>
                            <div className="product-detail">
                                <h5>Size</h5>
                               <div className="d-flex gap-10">
                                <p>S</p>
                                <p>M</p>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/watch.jpg" alt="watch" />
                        </div>
                        <div className="compare-product-details">
                            <h5 className="title">Fire-Boltt Ninja Call Pro Plus 1.83" Smart Watch </h5>
                            <h6 className="price mb-3">$100</h6>
                        </div>
                        <div>
                            <div className="product-detail">
                                <h5>Brand</h5>
                                <p>Fire-Boltt</p>
                            </div>
                            <div className="product-detail">
                                <h5>Type</h5>
                                <p>Watch</p>
                            </div>
                            <div className="product-detail">
                                <h5>Availability</h5>
                                <p>In Stock</p>
                            </div>
                            <div className="product-detail">
                                <h5>Color</h5>
                                <Color/>
                            </div>
                            <div className="product-detail">
                                <h5>Size</h5>
                               <div className="d-flex gap-10">
                                <p>S</p>
                                <p>M</p>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default CompareProduct