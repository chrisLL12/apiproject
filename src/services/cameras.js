import knex from '../database';

export const getCameras = async id => {
        await knex('cameras')
            .select('cameras.title',
            'users.display_name')
            .join('categories', 'categories.cameras_id', 'cameras.id')
            .join('users', 'categories.users_id', 'users.id')
            .where({ 'cameras.id': id });
};


