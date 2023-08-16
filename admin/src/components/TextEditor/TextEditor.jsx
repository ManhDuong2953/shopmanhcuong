import { useCallback, useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import CSS styles
import "./TextEditor.scss"

const TextEditor = ({ parentComponent, placeholder,valueOld }) => {
  // Tạo cấu hình tùy chỉnh cho các module
  const modules = {
    toolbar: [
      // Các công cụ bạn muốn hiển thị trong thanh công cụ
      ['bold', 'italic', 'underline', 'strike'], // Định nghĩa các nút định dạng chữ
      [{ header: 1 }, { header: 2 }], // Định nghĩa các tiêu đề đơn giản
      [{ list: 'ordered' }, { list: 'bullet' }], // Định nghĩa các danh sách đánh dấu và số
      [{ indent: '-1' }, { indent: '+1' }], // Định nghĩa các nút tăng/giảm thụt lề
      [{ align: [] }], // Định nghĩa các nút canh lề
      ['link', 'image'], // Định nghĩa các nút chèn liên kết và hình ảnh
    ],
  };

 const [valuePrev, setValuePrev] = useState("") 
 useEffect(() => {
  console.log(valueOld);
  setValuePrev(valueOld)
 }, []);

  // Hàm xử lý khi nội dung trình soạn thảo thay đổi
  const handleSucc = useCallback((e) => {
      parentComponent(e);
  }, [parentComponent]);

  return (<div className='text-editor--main'>
    <ReactQuill
      onChange={handleSucc}
      modules={modules}
      defaultValue={valuePrev}
      theme="snow" // Chọn chủ đề giao diện
      placeholder={placeholder || "Viết mô tả vào đây"}
    />
  </div>
  );
};

export default TextEditor;
