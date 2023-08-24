import moment from "moment";

export async function checkMissingInputs(req, res, next) {
    const body = await req.body;
    console.log("req file: ", body);
    const datePattern = /(\d{4})-(\d{2})-(\d{2})/; // Định dạng YYYY-MM-DD
    // Chuyển các giá trị "null", "undefined", "" thành null
    for (const key in body) {
        const value = body[key];
        if (value === "null" || value === "undefined" || value === "" || value === undefined) {
            body[key] = null;
        }
        if (value.match(datePattern)) {
            const formattedDate = moment(value).format('YYYY-MM-DD HH:mm:ss');
            console.log(formattedDate);
            body[key] = formattedDate;
        }
    }
    req.body = body;

    next();
}
