import React, { Fragment, useState } from 'react'
import FileResizer from 'react-image-file-resizer'
import { useAuthHttp } from '../../util/http';
import { toast } from 'react-toastify';

const CreateUpdatePostForm = ({ title, content, image, setTitle, setContent, setImage, handleSubmit, loading}) => {
  const [processingImage, setProcessingImage] = useState(false)
  const http = useAuthHttp()
  const handleImageUpload = (event) => {
    setProcessingImage(true)
    var fileInput = false
    if (event.target.files[0]) {
      fileInput = true
    }
    if (fileInput) {
      FileResizer.imageFileResizer(
        event.target.files[0],
        300,
        200,
        'JPEG',
        100,
        0,
        async (output) => {
          try {
            const { data } = await http.post(`${process.env.REACT_APP_SERVER_URL}/uploadImages`,
              { image: output })
            setImage(data)
            toast.info('Uploaded')
            setProcessingImage(false)
          } catch (error) {
            toast.error(error.message)
            setProcessingImage(false)
          }
        },
        'base64'
      );
    }
  }
  const deleteImageHandler = async (id) => {
    setProcessingImage(true)
    try {
      const { data } = await http.post(`${process.env.REACT_APP_SERVER_URL}/removeImage`,
        { public_id: id })
      if (data.success) {
        console.log('setting image to null')
        setImage(null)
        toast.info('Deleted')
      } else {
        // toast.error(data.error.message)
        // even if we are unable to delete it from cloudinary we can unlink it from our db
        setImage(null)
      }
      setProcessingImage(false)
    } catch (error) {
      toast.error(error.message)
      setProcessingImage(false)
    }
  }
  return (
    <Fragment>
      {processingImage
        ? "Please Wait..."
        : image
          ? <div className="row">
            <div className="col-md-4">
              <div className="overlay-container">
                <img style={{ height: '300px', width: '100%' }} src={image.url} alt={image.public_id} className="img-thumbnail float-right"></img>
                <div className="overlay">
                  <div className="overlay-contents">
                    <button onClick={() => deleteImageHandler(image.public_id)} type="button" className="btn btn-raised btn-success">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          : <label htmlFor="upload">
            <span className="btn btn-default btn-raised">Upload Image</span>
            <input type="file" hidden onChange={handleImageUpload} id="upload" />
          </label>
      }
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" placeholder="Enter Title" className="form-control" id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content</label>
          <textarea rows="3" placeholder="Write Something Here" className="form-control" id="content"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        <button disabled={!title || !content || loading || processingImage} className="btn btn-raised btn-success">Submit</button>
      </form>
    </Fragment>
  )
}

export default CreateUpdatePostForm
