import React from "react";

import './BackendHealth.css';
import useBackendHealth from "./useBackendHealth";

function BackendHealth() {
    const backendHealth = useBackendHealth();

    return (
        <div className="BackendHealth">
            <p>Backend is: <span className={backendHealth}>{backendHealth}</span></p>
        </div>
    );
}

export default BackendHealth;
