import "./ThumbnailInfor.scss"
function ThumbnailInfor({ data }) {
    return (<>
        <div className="info_simple">
            <img src="https://haycafe.vn/wp-content/uploads/2022/03/Hinh-anh-chan-dung-nam-dep-400x600.jpg" alt="avatar" />
            <h3 className="name_employee">{data && data.name_account}</h3>
            <div className="position">Nhân viên bán hàng</div>
            <div className="local-work"><small>tại</small> Mạnh Cường Shop</div>
            <div className="analyst">
                <span>
                    Tổng số đơn: <strong>2312</strong> <p className="text-primary">đơn</p>
                </span>
                <span>
                    BPM: <strong>654</strong><p className="text-primary">đơn/tháng</p>
                </span>
            </div>

        </div>



    </>);
}

export default ThumbnailInfor;