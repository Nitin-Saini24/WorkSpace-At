// ReadMore.js
import React, { useState } from 'react';

const ReadMore = ({ children, maxCharacterCount = 100 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };

    if (children.length <= maxCharacterCount) {
        return <p>{children}</p>;
    }

    const textToShow = isExpanded ? children : children.substring(0, maxCharacterCount) + '...';

    return (
        <p>
            {textToShow}
            <span
                onClick={toggleReadMore}
                style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
            >
                {isExpanded ? 'Read less' : 'Read more'}
            </span>
        </p>
    );
};

export default ReadMore;
