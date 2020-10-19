import {useEffect, useState} from "react";
import axios from "axios";

export default function useBackendHealth() {
    const [backendHealth, setBackendHealth] = useState();

    function getHealth() {
        axios.get(`actuator/health`)
            .then(res => {
                if (res.status === 200) {
                    setBackendHealth(res.data.status);
                } else {
                    setBackendHealth("DOWN");
                }
            })
            .catch(res => {
                console.log(res);
                setBackendHealth("DOWN");
            });
    }

    useEffect(() => {
        setBackendHealth("UNKNOWN")
        const interval = setInterval(getHealth, 3000);

        return () => {
            clearInterval(interval);
        }
    }, [])

    return backendHealth
}
