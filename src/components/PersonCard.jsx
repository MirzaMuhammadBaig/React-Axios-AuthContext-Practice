import React from 'react'

function PersonCard({ item }) {
  return (
    <>
      <div className='col col-md-2 col-lg-3 col-xxl-4'>
        <div className='container'>
          <div className='card-group mt-5'>
            <div className="card">
              <img src={item.avatar_url} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.login}</h5>
                <p className="card-text">You can reach to this user from press the button</p>
                <a href={item.html_url} className="btn btn-primary">Github Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PersonCard