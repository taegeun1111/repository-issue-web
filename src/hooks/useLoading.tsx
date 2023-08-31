import React, { useEffect, useState } from 'react';

export const useLoading = () => {
    const [loading, setLoading] = useState(true);

    const startLoading = () => {
        setLoading(true);
    }

    const finishLoading = () =>{
        setLoading(false);
    }

    useEffect(()=>{
        setLoading(true)
    },[])

    return {loading, startLoading, finishLoading}
};

