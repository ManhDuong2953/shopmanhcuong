import express from 'express';
const router = express.Router();
import AdminRouter from './Adminstrator/Admin/admin.router';
import UserRouter from './Login/user.router';
import EmployeeRouter from './Adminstrator/Employee/employee.router';
const RouterMains = (app) => {
    return app.use(EmployeeRouter(router))
}

export default RouterMains;