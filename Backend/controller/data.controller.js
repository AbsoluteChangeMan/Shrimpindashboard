// const Harvest = require("../models/harvest.model");
// const dataQueries = require("../queries/data.queries");

// module.exports = {
//     uploadNewData: async (req, res) => {
//       try {
//         console.log("received product data", req.body);
//         const product = await productQueries.createOneProduct({
//           name: req.body.name,
//           desc: req.body.desc,
//           price: req.body.price,
//           image: req.body.image,
//         });
//         console.log("product successfully created", product);
//         res.status(200).json(product);
//       } catch (error) {
//         console.error("Error creating product", product);
//         res.status(500).json({ message: error.message });
//       }
//     }
//   };