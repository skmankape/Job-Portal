import mutler from "multer";

const Storage=mutler.memoryStorage();
export const singleUpload=mutler({Storage}).single("file")