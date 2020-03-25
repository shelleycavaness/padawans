import ProjectService from "./service";
const ProjectController = {
  allProjects: (req, res) => {
    ProjectService.allProjects(req, result => {
      console.log(result.success);
      result.success
        ? res.status(200).send(result)
        : res.status(404).send(result);
    });
  }
};
export default ProjectController;
