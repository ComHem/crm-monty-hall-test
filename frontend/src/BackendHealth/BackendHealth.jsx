import React, {Component, useEffect, useState} from "react";
import axios from 'axios';

import './BackendHealth.css';
import useBackendHealth from "./useBackendHealth";

function BackendHealth() {
    const backendHealth = useBackendHealth()

    return (
        <div className="BackendHealth">
            <p>Backend is: <a className={backendHealth}>{backendHealth}</a></p>
        </div>
    )
}

export default BackendHealth;
