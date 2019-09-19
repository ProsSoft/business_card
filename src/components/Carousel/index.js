import React from 'react';
import '../../scss/pages/carousel.scss';
import { imagesUrl } from '../../constants';
import AliceCarousel from 'react-alice-carousel';

const a = `${imagesUrl}imcar/a.png`;
const b = `${imagesUrl}imcar/b.png`;
const c = `${imagesUrl}imcar/c.png`;
const d = `${imagesUrl}imcar/d.png`;
const e = `${imagesUrl}imcar/e.png`;
const f = `${imagesUrl}imcar/f.png`;
const g = `${imagesUrl}imcar/g.png`;
const h = `${imagesUrl}imcar/h.png`;
const i = `${imagesUrl}imcar/i.png`;
const j = `${imagesUrl}imcar/j.png`;
const k = `${imagesUrl}imcar/k.png`;
const l = `${imagesUrl}imcar/l.png`;
const m = `${imagesUrl}imcar/m.png`;
const n = `${imagesUrl}imcar/n.png`;
const o = `${imagesUrl}imcar/o.png`;
const r = `${imagesUrl}imcar/r.png`;
const s = `${imagesUrl}imcar/s.png`;
const t = `${imagesUrl}imcar/t.png`;
const y = `${imagesUrl}imcar/y.png`;
const z = `${imagesUrl}imcar/z.png`;

class Carousel extends React.Component {  
    state = {
        galleryItems: [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, r, s, t, y ,z].map((i) => (<img key = {i}  src = {i}/>))
      }
      responsive = {
        0: { items: 2 },
        320: { items: 2},
        375: { items: 2 },
        425: { items: 2 },
        768: { items: 3 },        
        1024: { items: 5 },
      }  
      onSlideChange(e) {
        console.debug('Item`s position during a change: ', e.item)
        console.debug('Slide`s position during a change: ', e.slide)
      }    
      onSlideChanged(e) {
        console.debug('Item`s position after changes: ', e.item)
        console.debug('Slide`s position after changes: ', e.slide)
      }

    render () {     
        return (
            <div className='carousel-container'>              
                <AliceCarousel
                    items = {this.state.galleryItems}
                    responsive = {this.responsive}
                    buttonsDisabled = {true} 
                    dotsDisabled = {true}
                    autoPlayInterval = {4000}
                    autoPlayDirection = "ltl"
                    autoPlay = {true}
                    fadeOutAnimation = {true}
                    mouseDragEnabled = {true}
                    playButtonEnabled = {false}
                    onSlideChange = {this.onSlideChange}
                    onSlideChanged = {this.onSlideChanged}
                   />
            </div>
        )
    }
}

export default Carousel;