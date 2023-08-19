import { getAllEmployee, getEmployeeById, getEmployeeByKeyword, updateEmployeeById, deleteEmployeeById } from "../../../src/controllers/users/employee.controller"
import { createUser } from "../../../src/controllers/users/user.controller"
import MediaRouter from "../../Media/media.router"

const storage = multer.diskStorage({
    destination: "uploads/",
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
const EmployeeRouter = (router) => {
    router.get('/', (req, res) => {
        res.send("Quyền truy cập nhân viên")
    })
    router.get('/employee', getAllEmployee)
    router.get('/employee/:id', getEmployeeById)
    router.post('/employee/register', createUser)
    router.get('/employee/search/:keyword', getEmployeeByKeyword)
    router.post('/employee/update/:id', upload.single('mediaAdmin'), updateEmployeeById)
    router.delete('/employee/delete/:id', deleteEmployeeById)
    // router.use('/employee/', MediaRouter(router))

    return router;
}
export default EmployeeRouter