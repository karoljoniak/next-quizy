import {useState, useEffect} from "react";

export const useLocalStorage = (key) => {
    // initialize the value from localStorage

    const [currentValue, setCurrentValue] = useState(() =>
            JSON.parse(localStorage.getItem(key))
    );

    // on every render, re-subscribe to the storage event
    useEffect(() => {
        const handler = (e) => {
            if (e.storageArea === localStorage && e.key === key) {
                setCurrentValue(e.newValue);
            }
        };
        window.addEventListener('storage', handler);
        return () => {
            window.removeEventListener('storage', handler);
        };
    });

    // update localStorage when the currentValue changes via setCurrentValue
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(currentValue));
    }, [key, currentValue]);

    // use as const to tell TypeScript this is a tuple
    return [currentValue, setCurrentValue];
};