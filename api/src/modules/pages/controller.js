import PageService from "./service";
const PageController = {
  allPages: (req, res) => {
    PageService.allPages(req, result => {
      console.log(result.success)
      result.success
        ? res.status(200).send(result)
        : res.status(404).send(result);
    });
  },
  getById:(req, res) => {
    PageService.getById(req.params.id, result => {
      
      result.success
        ? res.status(200).send(result)
        : res.status(404).send(result);
    });
  }
};
export default PageController;
