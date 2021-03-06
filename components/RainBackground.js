import React, {useMemo} from 'react';
// inspiration taken from https://codepen.io/arickle/pen/XKjMZY

const RAIN_DROP_COUNT =  200;
const RainBackground = () => {
    
    const rain = useMemo(() => {
        let increment = 0;
        let itemCount = 0;
        const rainObject = []
        
        while (increment < RAIN_DROP_COUNT) {
            const randomHundreds = (Math.floor(Math.random() * 98 + 1));
            const randomFiver = (Math.floor(Math.random() * 4 + 2));
            
            increment += randomFiver;
            itemCount++;
            rainObject.push({
                key: itemCount,
                left: increment,
                animationDelay: randomHundreds,
                animationDuration: randomHundreds,
            });
        }
        
        return rainObject;
    }, []);
    
    const rainDrops = useMemo(() => rain.map(item =>
        <div key={item.key} className="absolute bottom-full w-5 h-20 pointer-events-none animate-drop" style={{left: `${item.left}%`, top: '-10%', animationDelay: `0.${item.animationDelay}s`, animationDuration: `0.5${item.animationDuration}s`}}>
                <div className="w-0.5 h-3/5 bg-gradient-to-t from-indigo-500 dark:from-indigo-100 animate-stem" style={{animationDelay: `0.${item.animationDelay}s`, animationDuration: `0.5${item.animationDuration}s`}}></div>
            </div>
    ), []);
    
    return (
        <div className="hidden md:block absolute left-0 top-0 z-10 h-screen w-screen pointer-events-none">
            {rainDrops}
        </div>
    );
};

export default RainBackground;
