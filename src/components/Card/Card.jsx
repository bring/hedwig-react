import React from 'react';

export default function Card({title, imgUrl, children}) {
    return (
        <div className="hw-card">
            <div className="hw-card__media">
                <div className="hw-card__media-inner" style={{backgroundImage: `url(${imgUrl})`}}/>
            </div>
            <div className="hw-card__body">
                <h3 className="hw-card__title">
                    {title}
                </h3>
                <hr className="hw-hr"/>
                <div className="hw-card__text">
                    {children}
                </div>
            </div>
        </div>
    )
};


