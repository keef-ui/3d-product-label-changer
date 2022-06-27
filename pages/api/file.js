import formidable from "formidable";
import fs from "fs";

export const config = {
  api: {
    bodyParser: false,
  },
};

const post = async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files) {
    await saveFile(files.file);
    return res.status(201).send(files.file);
  });
};

const saveFile = async (file) => {
  //TODO: rename file as as :
  //muscle-m-choclate-p-Butter-2kgpng&muscle-m-choclate-p-Butter-2kgpng_alpha.png
  //folder ./public/model/

  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(
    `./public/models/bottle/muscle-m-choclate-p-Butter-2kgpng&muscle-m-choclate-p-Butter-2kgpng_alpha.png`,
    data
  );
  await fs.unlinkSync(file.filepath);
  return;
};

export default (req, res) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
    ? console.log("PUT")
    : req.method === "DELETE"
    ? console.log("DELETE")
    : req.method === "GET"
    ? console.log("GET")
    : res.status(404).send("");
};



//
//  changed file.path to file.filepath ---- this line --->  const data = fs.readFileSync(file.filepath);
//   ... and this line--->   await fs.unlinkSync(file.filepath);
// Next trouble shoot sending response
// blog ref: https://betterprogramming.pub/upload-files-to-next-js-with-api-routes-839ce9f28430
//
//  File details object after parsing
// {
//     "size":594269,
//   "filepath":"FILENAMEOESHERE",
//   "newFilename":"Random name->9057d979c43196f7381c3b718",
//   "mimetype":"image/jpeg",
//   "mtime":"2022-06-14T08:04:40.588Z",
//   "originalFilename":"can.jpg"
// }
// Testing https://medium.com/@linuk/unit-testign-rest-api-file-upload-with-jest-supertest-and-mz-in-node-ecbab9814aef
// Rest call stack overflow solution: https://stackoverflow.com/questions/33279153/rest-api-file-ie-images-processing-best-practices
// snapshot example https://jsfiddle.net/2pha/art388yv/