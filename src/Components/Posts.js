import React from 'react'
import { Link } from 'react-router-dom'
const Posts = ({ posts, showAuthor = true, colSize = 3, deletePostHandler, editable = false }) => {
  return <div className="row">

    {
      posts.map((post) => {
        return <div className={`col-md-${colSize} p-2`} key={`post-${post._id}`}>
          <div className="card p-2" style={{ height: '100%' }}>
            <div className="card-body">
              <Link to={`/posts/${post._id}`}>
                <img className="img-card-top" src={post.image.url} alt="" style={{ height: '100px', width: '300px' }} />
                <h5 className="card-title">
                  {post.title}
                </h5>
              </Link>
              <div className="card-text">
                {/* {post.content} */}
                {
                  showAuthor
                    ? <div>

                      <Link className="text-secondary strong" to={`/users/${post.postedBy.username}`}>
                        Author: {post.postedBy.name ? post.postedBy.name : post.postedBy.username}
                      </Link>
                    </div>
                    : ''
                }
              </div>
              <div>

                {
                  deletePostHandler
                    ? <button onClick={() => deletePostHandler(post._id)} className="float-left btn btn-raised btn-danger">Delete</button>
                    : ''
                }
                {
                  editable
                    ? <Link to={`/edit-post/${post._id}`} className="float-right btn btn-raised btn-info">Edit</Link>
                    : ''
                }
              </div>
            </div>
          </div>
        </div>
      })
    }
  </div>
}

export default Posts
