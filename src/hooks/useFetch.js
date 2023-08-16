import { useState, useEffect } from "react";

function useFetch(url) {
    const [data, setData] = useState();
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setIsPending(true);

            try {
                const resp = await fetch(url);
                if (!resp.ok) {
                    throw new Error(resp.statusText);
                }
                const json = await resp.json();
                setIsPending(false);
                setData(json);
                setError(null);
            } catch (err) {
                isPending(false);
                setError("Could not fetch the data");
                console.log(err.message);
            }
        };

        fetchData();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;
