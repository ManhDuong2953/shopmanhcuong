import pool from "../../../configs/database/database.config";
export async function checkLogin({ name_account, passwords }) {
    try {
        const query = "SELECT * FROM users WHERE name_account = ? AND passwords = ?";
        const [result] = await pool.execute(query, [name_account, passwords]);
        if (result) {
            return result[0];
        }
        return "Tên tài khoản hoặc mật khẩu không đúng.";
    } catch (error) {
        console.log(error.message);
        return null;
    }
};

export async function checkToken(token) {
    try {
        const query = "SELECT * FROM token_login WHERE access_token = ?";
        const [result] = await pool.execute(query, token);
        return result;
    }
    catch (error) {
        console.log(error.message);
        return null;
    }
}


export async function postToken(token) {
    try {
        const query = "SELECT * FROM token_login WHERE access_token = ?";
        const [result] = await pool.execute(query, token);
        return result;
    }
    catch (error) {
        console.log(error.message);
        return null;
    }
}


