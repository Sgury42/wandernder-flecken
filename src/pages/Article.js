import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import articlesIndex from '../articlesIndex.json';
import { GalleryElement } from '../components';
import '../css/Article.css';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';


const Article = () =>{

  const navigate = useNavigate();
  const params = useParams();

  const data = articlesIndex[params.index];

  const [articleIndex, setArticleIndex] = useState(0);
  const [prevDisabled, setPrevDisabled] = useState(true);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [source, setSource] = useState(`../../../${data.src}${data.images[0]}`)

  console.log(source);
  console.log(articleIndex);
  console.log(data.images[articleIndex]);
  console.log(params);

  useEffect(() => {
    if (data['id'] !== params.id) {
      navigate('/404')
    }
  })

  useEffect(() => {
    if (params.page === '0') {
      setArticleIndex(0);
    }
  }, [params])

  useEffect(() => {
    if (articleIndex === 0) {
      setPrevDisabled(true);
    } else {
      setPrevDisabled(false);
    }
    if (articleIndex === data.images.length - 1) {
      setNextDisabled(true);
    } else if (articleIndex < data.images.length - 1) {
      setNextDisabled(false);
    }
    setSource(`../../../${data.src}${data.images[articleIndex]}`)
  }, [articleIndex, data.images, data.src]);


  const handleClick = (navTo) => {
    if (navTo === 'prev') {
      setArticleIndex(articleIndex - 1);
    } else if (navTo === 'next') {
      setArticleIndex(articleIndex + 1);
    }
  }

  return (
    <div className="page">
      <div className="article-space">
        <h3 className="title">{data.title}</h3>
        <button className="arrow-prev nav-button" disabled={prevDisabled} onClick={e => handleClick('prev')}>
          <FaCaretLeft />
        </button>
          <img className="image" src={source} alt='article'/>
        <button className="arrow-next nav-button" disabled={nextDisabled} onClick={e => handleClick('next')}>
          <FaCaretRight />
        </button>
      </div>
      <div className="suggestions">
        {articlesIndex.map((el, index) => {
          if (el['id'] !== data.id) {
          return <GalleryElement title={el['title']} source={'../../../'+el['featuredImg']} id={el['id']} index={index} key={el['id']} />
          } else {return null;}
          
        })}
      </div>
    </div>
  );
}
export default Article;