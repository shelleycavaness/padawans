import pageQueries from "./query";
const PageService = {
  allPages: (req, callback) => {
      pageQueries.getAll(req.body, response=>{
          return callback({success:true, message:response})

      }, error=>{
              return callback({ success: false, message: error});

      })
  },
  getById: (id, callback) => {
    pageQueries.getById(id, response => {
      return callback({ success: true, message: response })

    }, error => {
      return callback({ success: false, message: error });

    })
  }
};
export default PageService;
