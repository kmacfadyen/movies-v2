import React from "react";

const MovieCard = ({ movie1 }) => {
    return (
        <div className='movie'>
          <div>
            <p>Place</p>
          </div>

          <div>
            <img src={Poster !== 'N/A' ? '' : 'https://via.placeholder.com/400'}
              alt={''}
            />
            
          </div>

          <div>
            <span>{}</span>
            <h3>''</h3>
          </div>

        </div>
    )
}

export default MovieCard;