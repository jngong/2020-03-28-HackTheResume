import React from 'react';

const Footer = (props) => {
    const awards = props.awards.map(item =>
        <div className="award">
            <div>{item.title} | {item.awarder} | {item.date}</div>
            <div>{item.summary}</div>
        </div>
    )
    const publications = props.publications.map(item =>
        <div className="publication">
            <div><a href={item.website} alt={item.name}>{item.name}</a> | {item.publisher} | {item.releaseDate}</div>
            <div>{item.summary}</div>
        </div>
    )
    const languages = props.languages.map(item =>
        <span>{item.language}, {item.fluency} </span>
    )
    const interests = props.interests.map(item =>
        <span>{item.name}, </span>
    )

    const references = props.references.map(item =>
        <div>{item.name}, {item.reference}</div>
    )

    return (
        <div className="footer">
            {awards ? <div> <h3>Awards</h3> {awards} </div> : null}
            {publications ? <div> <h3>Publications</h3> {publications} </div> : null}
            {references ? <div> <h3>References</h3> {references} </div> : null}
            {languages ? <div> <h3>Languages:</h3> {languages} </div> : null}
            {interests ? <div> <h3>Interests:</h3> {interests} </div> : null}
        </div>
    )
}


export default Footer