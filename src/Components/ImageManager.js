import React, { Fragment } from 'react'

const ImageManager = ({ images, processingImage, resizeAndUploadHandler, deleteImageHandler}) => {
  return (
    <Fragment>
      <div className="form-group">
        {
          processingImage
            ? "Please Wait..."
            : <label htmlFor="image">
              <span className="btn btn-default btn-raised">Upload Image</span>
              <input
                hidden
                type="file"
                id="image"
                accept="image/*"
                onChange={resizeAndUploadHandler}
                placeholder="upload new image"
                className="form-control" />
            </label>
        }
      </div>
      <div className="row">
        {
          images.map(
            image =>
              <div className="col-md-3" key={image.public_id}>
                <div className="overlay-container">
                  <img style={{ height: '100px' }} src={image.url} alt={image.public_id} className="img-thumbnail float-right"></img>
                  <div className="overlay">
                    <div className="overlay-contents">
                      <button style={{ cursor: image.url.includes('placeholder') ? 'not-allowed' : 'pointer' }} disabled={image.url.includes('placeholder')} onClick={() => deleteImageHandler(image.public_id)} type="button" className="btn btn-raised btn-success">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
          )
        }
      </div>
    </Fragment>
  )
}

export default ImageManager
