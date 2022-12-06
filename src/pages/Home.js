import React from 'react';
import '../css/Home.css'
import articlesIndex from '../articlesIndex.json';
import GalleryElement from '../components/GalleryElement';

const Home = () =>{

  return (
    <div>
    {/* {articlesIndex.map((el, index) => {
      return <GalleryElement title={el['title']} source={el['featuredImg']} id={el['id']} index={index} key={el['id']} />
    })} */}
      <div class="inline-div">
        <div id="right-column">
          <GalleryElement title={articlesIndex[0]['title']} source={articlesIndex[0]['featuredImg']} id={articlesIndex[0]['id']} key={articlesIndex[0]['id']} index='0' />
          <GalleryElement title={articlesIndex[1]['title']} source={articlesIndex[1]['featuredImg']} id={articlesIndex[1]['id']} key={articlesIndex[1]['id']} index='1' />
        </div>
        <div id="intro">
          <p>This site  presents a small collection of papers and presentations that mostly deal with ophthalmic history.</p>
          <p>They decribe little know figures or with little known activites of well known figures. I hope you find them as interesting to read as I did researching and writing them.</p>
          <p style={{textAlign: 'right'}}>Click on image to access story.</p>
        </div>
        <div id="left-column">
          <GalleryElement title={articlesIndex[2]['title']} source={articlesIndex[2]['featuredImg']} id={articlesIndex[2]['id']} key={articlesIndex[2]['id']} index='2' />
          <GalleryElement title={articlesIndex[3]['title']} source={articlesIndex[3]['featuredImg']} id={articlesIndex[3]['id']} key={articlesIndex[3]['id']} index='3' />
        </div>
      </div>
      <div id="bottom-line">
        <div className='side'>
          <GalleryElement title={articlesIndex[4]['title']} source={articlesIndex[4]['featuredImg']} id={articlesIndex[4]['id']} key={articlesIndex[4]['id']} index='4' />
        </div>
        <div className='middle'>
          <GalleryElement title={articlesIndex[5]['title']} source={articlesIndex[5]['featuredImg']} id={articlesIndex[5]['id']} key={articlesIndex[5]['id']} index='5' />
        </div>
        <div className='side'>
          <GalleryElement title={articlesIndex[6]['title']} source={articlesIndex[6]['featuredImg']} id={articlesIndex[6]['id']} key={articlesIndex[6]['id']} index='6' />
        </div>
      </div>
    </div>
);
}
export default Home;