// controllers/userController.js
import { User, Employee } from "../../models/users/user.model";

// //get all customers
// export async function getAllCustomer(req, res) {
//     const userId = req.params.id;
//     const data = await User.findAllUser();
//     if (!data) {
//         return res.status(404).json({ message: 'Không tìm thấy người dùng' });
//     }
//     return res.send(data);
// }

// //get customer by id
// export async function getCustomerById(req, res) {
//     const userId = req.params.id;
//     const data = await User.findUserById(userId);
//     if (!data) {
//         return res.status(404).json({ message: 'Không tìm thấy người dùng' });
//     }
//     return res.send(data);
// }

export async function createUser(req, res) {
    const userData = req.body;
    const user = new User(userData);
    const newUser = await user.save();
    res.json(newUser);
}



// export async function updateUserById(req, res) {
//     const userId = req.params.id;
//     const userData = req.body;
//     const updatedUser = await update(userId, userData);
//     res.json(updatedUser);
// }

// export async function deleteUserById(req, res) {
//     const userId = req.params.id;
//     const success = await deleteUserById(userId);
//     if (!success) {
//         return res.status(404).json({ message: 'Không tìm thấy người dùng' });
//     }
//     res.json({ message: 'Xóa người dùng thành công' });
// }








