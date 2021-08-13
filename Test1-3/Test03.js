function convertObject(object){
    let result = {}
    if(object.length===0){
        return result
    }else{
        for(let i = 0; i < object.length;i++){
            let street = object[i].street
            let province = object[i].province
            let city = object[i].city
            let name = object[i].name
            let email = object[i].email
            let userType = object[i].userType
            let accessLevel = object[i].accessLevel
            if(!result.address){
                result.address = {
                    street : street,
                    province: province,
                    city:city
                }
            }
            if(!result.person){
                result.person = {
                    name:name,
                    email:email
                }
            }
            result.userType = userType
            result.accessLevel = accessLevel
        }
        return result
    }
}

console.log(
    convertObject([
        {street:'jalan sakura',
        province:'banten',
        city:'tanggerang',
        name:'john',
        email:'john@doe.com',
        userType:'admin',
        accessLevel:"QA"}
    ]))


    // console.log(convertObject([]))