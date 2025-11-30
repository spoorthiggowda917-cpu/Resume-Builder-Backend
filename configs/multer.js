//It helps you upload:Images,PDFs,Videos,Documents
import multer from "multer";

const storage=multer.diskStorage({});
//“Store the uploaded files on my computer (local disk).”

const upload=multer({storage})

export default upload