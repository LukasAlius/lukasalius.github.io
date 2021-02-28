import React, {useMemo} from 'react';
import terminalMessage from '../config/terminalMessage';
import TerminalLine from './TerminalLine';


const Terminal = ({showGameViewport = false}) => {

    const terminalPrintOut = useMemo(() => terminalMessage.map(line => (
        <TerminalLine key={line.key} data={line} />
    )), []);

    return (
        <div className="bg-terminal-900 rounded-3xl min-h-screen md:min-h-full mt-20 md:mt-0 p-5 z-10 max-w-4xl shadow-lg">
            <div className="flex pb-6 items-center">
                <div className="flex space-x-2">
                    <div className="rounded-full h-5 w-5 bg-red-500 hover:bg-red-400 cursor-pointer"></div>
                    <div className="rounded-full h-5 w-5 bg-yellow-500 hover:bg-yellow-400 cursor-pointer"></div>
                    <div className="rounded-full h-5 w-5 bg-green-500 hover:bg-green-400 cursor-pointer"></div>
                </div>
                <p className="font-sans text-lg text-terminal-400 ml-8 select-none">index.js</p>
            </div>
            <div className="flex-1 mt-10 mb-20">
                {!showGameViewport && terminalPrintOut}
            </div>
        </div>
    );
};

export default Terminal;