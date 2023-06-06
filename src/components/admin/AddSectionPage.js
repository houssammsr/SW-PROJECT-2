import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './AddArticlePage.css';
import back_img from './images/back.svg';

const AddArticlePage = () => {
  const { chapterId } = useParams();
  const navigate = useNavigate();

  const [articleName, setArticleName] = useState('');
  const [articleDescription, setArticleDescription] = useState('');

  const handleArticleNameChange = (event) => {
    setArticleName(event.target.value);
  };

  const handleArticleDescriptionChange = (event) => {
    setArticleDescription(event.target.value);
  };

  const handleCancel = () => {
    navigate(`/chapter/${chapterId}/articles`);
  };

  const handleValidate = async () => {
    try {
      const response = await fetch(`/api/chapters/${chapterId}/articles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: articleName,
          description: articleDescription,
        }),
      });

      if (response.ok) {
        navigate(`/chapter/${chapterId}/articles`);
      } else {
        console.error('Error saving article data:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving article data:', error);
    }
  };

  return (
    <div className="add-article-page-container">
      <div className="add-article-header">
        <Link to={`/chapter/${chapterId}/articles`} className="back-button">
          <img src={back_img} alt="Back" />
        </Link>
        <h2>{/* Chapter Name */}</h2>
        <h3>Add New Article</h3>
      </div>

      <div className="article-details">
        <label htmlFor="article-name">Article Name:</label>
        <input
          type="text"
          id="article-name"
          value={articleName}
          onChange={handleArticleNameChange}
        />

        <label htmlFor="article-description">Article Description:</label>
        <textarea
          id="article-description"
          value={articleDescription}
          onChange={handleArticleDescriptionChange}
        ></textarea>
      </div>

      <div className="article-buttons">
        <button className="cancel-button" onClick={handleCancel}>
          Cancel
        </button>
        <button className="validate-button" onClick={handleValidate}>
          Validate
        </button>
      </div>
    </div>
  );
};

export default AddArticlePage;
