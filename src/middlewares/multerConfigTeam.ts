import multer from 'multer';
import path from 'path';

export const multerConfigTeam = {
  storage: multer.diskStorage({
    destination: (req: any, file: any, callback: any) => {
      callback(null, path.join(__dirname, '../../teamUploads'));
    },
    filename: (req: any, file: any, callback: any) => {
      callback(null, `${Date.now()}-${file.originalname}`);
    }
  })
}