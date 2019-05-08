import axios from 'axios';

const validateSimulations = (simulations) => {const num = Math.max(1, simulations); return isNaN(num) ? 1 : num};
const getHealth = () => axios.get(`health`);
const getDraws = (simulations = 1, reselect = 0) => axios.get(`/game/draws?simulations=${validateSimulations(simulations)}&reselect=${reselect}`);

export const Api = {
    getHealth: getHealth,
    getDraws: getDraws
};
