import React from 'react';
import queryString from 'query-string';

// url: /about
const About = ({location, match}) => {
    const query = queryString.parse(location.search);
    const isDetail = query.detail === 'true';

    return (
        <div>
            <h2>About {match.params.name}</h2>
            { isDetail && 'detail: blahblah...' }
        </div>
    );
};

export default About