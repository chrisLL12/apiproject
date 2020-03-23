import knex from '../database';

export const getCameras = async id =>
    (await knex('cameras')
        .select()
        .where({ id }))
        [0];

export const addCamera = async ({ id, title, rating, review }) => {
        const [camera] = await knex('cameras').insert({
                id,
                title,
                rating,
                review
        }).returning(['id', 'title', 'rating', 'review']);
        return camera;
};
