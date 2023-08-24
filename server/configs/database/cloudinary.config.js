import { v2 as cloudinary } from 'cloudinary';


function UploadCloudinary(file,folder) {
    cloudinary.config({
        cloud_name: 'der2ygna3',
        api_key: '268779123315888',
        api_secret: 'doWpglhaxPBkH76oq2Klk7ylE6k'
    });
    console.log("Uploading cloudinary...", file, folder);
    // Tải lên tệp MP3
    cloudinary.uploader.upload(file, {
        resource_type: 'auto',  // Loại tệp tự định dạng
        folder: folder,        // Thư mục trên Cloudinary
        overwrite: true         // Ghi đè nếu tên tệp đã tồn tại
    }, function (error, result) {
        if (error) {
            console.error(error);
        } else {
            console.log(result);
        }
    });
}

export default UploadCloudinary;