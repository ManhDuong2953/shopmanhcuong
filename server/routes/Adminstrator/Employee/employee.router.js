import { getAllEmployee, getEmployeeById, getEmployeeByKeyword, updateEmployeeById , deleteEmployeeById  } from "../../../src/controllers/users/employee.controller"
import { createUser} from "../../../src/controllers/users/user.controller"

const EmployeeRouter = (router) => {
    router.get('/', (req, res) => {
        res.send("Quyền truy cập nhân viên")
    })
    router.get('/employee', getAllEmployee)
    router.get('/employee/profile/:id', getEmployeeById)
    router.post('/employee/register', createUser)
    router.get('/employee/search/:keyword', getEmployeeByKeyword)
    router.put('/employee/update/:id', updateEmployeeById)
    router.delete('/employee/delete/:id', deleteEmployeeById)

    return router;
}
export default EmployeeRouter