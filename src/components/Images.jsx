import React, { useState } from 'react'

const Images = ({ image }) => {
    const [mainImage, setMainImage] = useState(image[0])
    return (
        <>



            <div className="container-fluid  my-auto">
                <div className="row d-flex align-items-center">
                    <div className='col-12 col-md-4 g-1'>
                        <div className="row row-cols-4 row-cols-md-1">
                            {image.map((curr, ind) => (
                                <div  key={ind}>
                                    <img src={curr.url} alt="imageurl" className='img-thumbnail my-1 btn' onClick={() => setMainImage(curr)} />
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* second section */}
                    <div className=" col-12 col-md-8 d-flex align-items-center">
                        {mainImage &&
                            <img src={mainImage.url} alt="productimage" style={{ width: "100%" }} />
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Images
