import React from 'react';
import TerminalLink from './TerminalLink';

const TerminalLine = ({data}) => (
    <div className={`flex flex-row justify-start items-center px-1 md:px-8 ${data.highlight ? 'bg-terminal-800 rounded' : ''}`}>
        <p className={`text-lg md:text-xl font-mono mr-5 select-none ${data.highlight ? 'text-terminal-400' : 'text-terminal-600'}`}>{data.lineNumber}</p>
        {data.tagName && (
            <p className="text-lg md:text-xl text-terminal-200 font-mono">
                {data.closeTag ? '</' : '<'}
                <span className="text-indigo-400">{data.tagName}</span>
                {'>'}
            </p>
        )}
        {data.text && (
            <>
                <p className="font-mono text-lg md:text-xl text-terminal-50 ml-2 md:ml-5">{data.text}</p>
                {data.highlight && <div className="flex h-5 w-2 rounded-sm bg-terminal-50 animate-blink" />}
            </>
        )}
        {data.links && (
            <p className="font-mono text-lg md:text-xl text-green-200 ml-2 md:ml-5 flex space-x-2">
                {data.links.map((link, index) => (
                    <TerminalLink key={link.key} data={link} isLast={index < data.links.length - 1} />
                ))}
            </p>
        )}
    </div>
);

export default TerminalLine;