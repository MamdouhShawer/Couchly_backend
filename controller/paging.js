import prod from "../models/products.js";
const paging = async (req, res) => {
    console.log("myStore.js: GET /myStore");
    const page = req.query.page || 1;
    const limit = 10;
  
    prod.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .then((result) => {
        prod.estimatedDocumentCount().then((count) => {
          res.render("pages/myStore", {
            prod: result,
            title: "Couchly | myStore",
            currentPage: parseInt(page),
            totalPages: Math.ceil(count / limit),
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
      /*try {
        const [result, count] = await Promise.all([
          prod.find().skip((page - 1) * limit).limit(limit),
          prod.estimatedDocumentCount(),
        ]);
    
        res.render("pages/myStore", {
          product: result,
          title: "Couchly | myStore",
          currentPage: parseInt(page),
          totalPages: Math.ceil(count / limit),
        });
      } catch (err) {
        console.log(err);
        res.status(500).send("Internal Server Error");
      }*/
  };
  export default paging