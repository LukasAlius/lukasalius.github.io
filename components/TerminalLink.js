import React from 'react';

const TerminalLink = ({data, isLast}) => (
    <>
        <a className="no-underline hover:underline focus:underline" href={data.href}>{data.text}</a>
        {isLast ? ', ' : ''}
    </>
);

export default TerminalLink;