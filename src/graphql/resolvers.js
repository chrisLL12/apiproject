import { getCameras } from "../services/cameras";
import { addCamera } from "../services/cameras";

// const wrapSubmitter = camera => {
//     camera.submitter = { id: camera.cameras.id };
//     delete camera.cameras.id;
//     return camera;
// };

const resolvers = {
    //addDrink
    addNewCamera: async ({ camera }) => await addCamera(camera),

    //getDrink
    cameras: async({ id }) => getCameras(id)


};



export default resolvers;