import React from 'react'
import './HomeItem.scss'

import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const HomeItem = ({ props }) => {



    return (
        <div className="home__item">
            <div className="home__top">
                <div className="home__img">
                    <LazyLoadImage

                        // effect="blur"

                        className='home__preview'
                        src={props.preview}
                        alt="img"
                        wrapperProps={{
                            style: { transitionDelay: "3s" },
                        }}
                    />
                </div>
                <svg className='home__svg' xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 22 22" data-no-icon="true" role="presentation"><g fill="none" fill-rule="evenodd" transform="translate(1 1)"><circle cx="10" cy="10" r="10" fill="#000" fill-opacity="0.5" stroke="#FFF"></circle><path fill="#FFF" d="M13.387 10.028l-5 2.97v-5.94z"></path></g></svg>
                <p className="home__duration">{props.duration}</p>
            </div>
            <h3 className="home__title">{props.title}</h3>
        </div>
    )
}

export default HomeItem