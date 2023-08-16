const getDataForm = (parentElement) => {
    let data = {};
    const dataSubmit = document.querySelectorAll(`${parentElement} :is(input:not([type="submit"],[type="radio"]) , select)`);
    const dataRadio = document.querySelectorAll(`${parentElement} input[type="radio"]:checked`)[0];
    
    dataRadio && (data[dataRadio.name] = dataRadio.value);
    dataSubmit.forEach((element) => {
        let name = element.name;
        let value = element.value;
        data[name] = value;
        if (element.attributes.type === "radio") {
            let name = element.name;
            let value = document.querySelector('input[name="gender"]:checked').value;
            data[name] = value;
        }
    })
    return data;
}
export default getDataForm