import React from 'react';

function Media({imgUrl, imgFormat}) {
    if (!imgUrl) {
        return null;
    }
    return (
        <div className={`hw-card__media hw-card__media-${imgFormat}`}>
            <div className="hw-card__media-inner " style={{backgroundImage: `url(${imgUrl})`}}></div>
        </div>
    )
}

function Overline({overline}) {
    if (!overline) {
        return null;
    }
    return <h5 className="hw-card__overline">{overline}</h5>
}

function Subtitle({subtitle}) {
    if (!subtitle) {
        return null;
    }
    return <h5 className="hw-card__subtitle">{subtitle}</h5>
}

function Description({description}) {
    if (!description) {
        return null;
    }
    return <p className="hw-card__description">{description}</p>
}

export default function Card({url, title, overline, subtitle, description, compressed, imgUrl, imgFormat, target }) {
    return (
        <a className={`hw-card ${compressed ? "hw-card--compressed" : ""}`} href={url} target={target}>
            <Media imgUrl={imgUrl} imgFormat={imgFormat} />
            <div className="hw-card__body">
                <Overline overline={overline} />
                <h3 className="hw-card__title">{title}</h3>
                <Subtitle subtitle={subtitle} />
                <Description description={description} />
            </div>
        </a>
    )
};

Card.defaultProps = {
    imgFormat: "16-9",
    target: false
}
