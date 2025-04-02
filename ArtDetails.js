import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ArtDetails.css'; 

function ArtDetails({ art }) {
  // Add a check for if art is undefined or null
  if (!art) {
    return <div className="loading">Loading art details...</div>;
  }

  const { _id, artType, description, price, artistName, gmail, image } = art;
  const navigate = useNavigate(); // Changed from history to navigate (current name in React Router v6)

  const deleteHandler = async () => {
    try {
      const response = await axios.delete(`http://localhost:5000/art/${_id}`);
      if (response.data.success) {
        // Navigate to the art collection page after successful deletion
        navigate('/mainart');
      } else {
        console.error("Delete operation returned error:", response.data);
      }
    } catch (error) {
      console.error("Error deleting artwork:", error);
      // You could add error handling UI here
    }
  };

  return (
    <div className="art-details-container">
      <div className="art-details-card">
        <div className="art-details-image">
          <img 
            src={image || "https://via.placeholder.com/300"} 
            alt={artType}
            className="detail-image" 
          />
        </div>
        
        <div className="art-details-content">
          <h1 className="art-detail-title">{artType}</h1>
          
          <div className="art-detail-info">
            <p className="art-detail-description">{description}</p>
            <p className="art-detail-price">Price: <span>Rs. {price}</span></p>
            <p className="art-detail-artist">Created by: <span>{artistName}</span></p>
            <p className="art-detail-contact">Contact: <span>{gmail}</span></p>
            <p className="art-detail-id">Art ID: <span>{_id}</span></p>
          </div>
          
          <div className="art-detail-actions">
            <Link to={`/mainaddart/${_id}`} className="update-btn">
              Edit Artwork
            </Link>
            <button onClick={deleteHandler} className="delete-btn">
              Delete Artwork
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default ArtDetails;