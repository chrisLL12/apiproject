import { getCameras } from "../services/cameras";

// const wrapSubmitter = camera => {
//     camera.submitter = { id: camera.cameras.id };
//     delete camera.cameras.id;
//     return camera;
// };

const resolvers = {
    //addDrink
    //getDrink
    cameras: async({ id }) => [{id: 'fake camera'}]
    //cameras: async ({ id }) => await getCameras(id)


};



export default resolvers;