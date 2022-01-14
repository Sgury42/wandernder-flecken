import React from 'react';
import articlesIndex from '../articlesIndex.json';
import GalleryElement from '../components/GalleryElement';

const Home = () =>{

  return (
    <div>
    {articlesIndex.map((el, index) => {
      return <GalleryElement title={el['title']} source={el['featuredImg']} id={el['id']} index={index} key={el['id']} />
    })}
    </div>
);
}
export default Home;