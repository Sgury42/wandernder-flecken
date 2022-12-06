import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/GalleryElement.css';



const GalleryElement = (props) => {

  const navigate = useNavigate();

  const source = props.source;
  const title = props.title;
  const id  = props.id;
  const index = props.index;

  const handleClick = async (e, title) => {
    navigate(`/read/${id}/${index}/0`)
  }

  return (
    <section className="galleryElement" >
        <img src={source} alt='img' onClick={e => handleClick(e, {id})}/>
        <p>{title}</p>
    </section>
  )
}

export default GalleryElement;