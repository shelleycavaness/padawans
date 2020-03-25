import projectQueries from "./query";
const ProjectService = {
  allProjects: (req, callback) => {
      projectQueries.getAll(req.body, response=>{
          return callback({success:true, message:response})

      }, error=>{
              return callback({ success: false, message: error});

      })
  }
};
export default ProjectService;
