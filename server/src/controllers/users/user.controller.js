// controllers/userController.js
import { User, Employee } from "../../models/users/user.model";


export async function createUser(req, res) {
    const userData = req.body;
    const user = new User(userData);
    const newUser = await user.save();
    res.json(newUser);
}







