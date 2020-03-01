import { getCameraById } from "../services/cameras";

const wrapSubmitter = camera => {
    camera.submitter = { id: camera.submitter_id };
    delete camera.submitter_id;
    return camera;
};

const resolvers = {
    //addDrink
    //getDrink
    camera: async ({ id }) => wrapSubmitter(await getCameraById(id))
};



export default resolvers;