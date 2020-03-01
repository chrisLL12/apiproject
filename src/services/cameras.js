import knex from '../database';

// Define function
const filterById = id => {
    return (query) => query.where('id', id);
};

// Create base query
const cameraBaseQuery = knex('cameras');

// Create and apply query builders using function to the base query
export const getCameraById = async id =>
    filterById(await cameraBaseQuery.where({ 'cameras.id' : id }))[0];


