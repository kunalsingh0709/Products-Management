const mongoose=require("mongoose")


const isValidRequestBody = function (requestBody) {
    return Object.keys(requestBody).length > 0
}


const isValidName = (value) => {
    const regex =/^[a-zA-Z ]+(([',. -][a-zA-Z ])?[a-zA-Z ])$/.test(value)
    return regex
}



const validatePhone = function (phone) {
    var re = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
    if (typeof (phone) == 'string') {
        return re.test(phone.trim())
    } else {
        return re.test(phone)
    }
};

const isValidEmail = (email) => {
    const regex = /^([a-zA-Z0-9_.]+@[a-z]+\.[a-z]{2,3})?$/.test(email)
    return regex
}
const isValidPassword = function (password) {
    const passwordRegex =/^(?=.*[0-9])(?=.*[!.@#$%^&*])[a-zA-Z0-9!.@#$%^&*]{8,15}$/
    return passwordRegex.test(password);
  };


const isValidFile = (img) => {
  const regex = /(\/*\.(?:png|gif|webp|jpeg|jpg))/.test(img)
  return regex
}


const validPin = function(pincode){
    let re =/^[0-9]{6,6}$/
    return re.test(pincode)
}
const isValidStreet = function (street){
    let re = /^.*?\s[N]{0,1}([-a-zA-Z0-9]+)\s*\w*$/

    return re.test(street)

}

const isIdValid = function (value) {
    return mongoose.Types.ObjectId.isValid(value); 
  };

  
const isValidAvailableSizes = (sizes) => {
    return ["S", "XS","M","X", "L","XXL", "XL"].includes(sizes)}


module.exports = {isValidRequestBody,isValidName,validatePhone,isValidEmail,isValidPassword,isValidFile,validPin,isValidStreet,isIdValid,isValidAvailableSizes}
