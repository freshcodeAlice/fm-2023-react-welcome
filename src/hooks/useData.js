import React, {useState, useEffect} from "react";


function useData(callback) {
    const [data, setData] = useState([]);
    const [isFetching, setFetching] = useState(true);
    const [error, setError] = useState( null);
   
    useEffect(() => {
        callback()
        .then(data => {
            setData(data);
        })
        .catch((error) => {
            setError(error)
        })
        .finally(() => {
            setFetching(false)
        })
    }, []);

    return {data, isFetching, error};
}

export default useData;