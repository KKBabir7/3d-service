'use client'

import React, { useEffect, useState } from 'react';
const ContentLimit = ({ data, limit, className, readmore=false }) => {
    const [isReadMore, setIsReadMore] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const strWithoutHtmlTags = data.replace(/(<([^>]+)>)/gi, '');

    const toggleReadMore = () => {
        setIsReadMore(false);
        setShowButton(false);
    };

    useEffect(() => {
        data && data.length > limit && setIsReadMore(true)
        data && data.length > limit && setShowButton(true)
    }, [])
    return (
        <p className={className}>
            {isReadMore ? strWithoutHtmlTags.substring(0, limit) + ' ... ' : strWithoutHtmlTags}
            {readmore && showButton && isReadMore && (
                <button className='text-swid-violet text-sm' onClick={toggleReadMore}>Read More</button>
            )}
        </p>
    );
};

export default ContentLimit;