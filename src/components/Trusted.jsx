import React from 'react'

const Trusted = () => {
    return (
        <div className='container-fluid   mb-5 p-5' style={{background:"#f4f7fc"}}>

            <h3 className='text-center'>Trusted By 1000+ Companies</h3>
            <div className="row mt-3 g-1 mx-5" >
                <div className="col-md-3 col-12 ">
                    <div className="d-flex justify-content-center img-container ">
                        <img className='img-fluid' src="images/ad1.png" alt="trusterimage" />
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <div className="d-flex justify-content-center img-container ">
                        <img className='img-fluid' src="images/ad3.png" alt="trusterimage" />
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <div className="d-flex justify-content-center img-container ">
                        <img className='img-fluid' src="images/ad2.png" alt="trusterimage" />
                    </div>
                </div>
                <div className="col-md-3 col-12">
                    <div className="d-flex justify-content-center img-container ">
                        <img className='img-fluid' src="images/ad4.png" alt="trusterimage" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trusted
