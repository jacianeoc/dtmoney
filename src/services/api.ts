/**
 * a pasta services, aqui tem como intuito, ser serviços de dados 
 * (buscar dados, servidas dados)
 * 
 */
import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3000/api/'
})