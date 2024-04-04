import {test,expect} from '@playwright/test'
test("should be able to log in using API",async({request})=>{
const response =await request.post("https://qacart-todo.herokuapp.com/api/v1/users/login",{
    data: {
        email : "mosaab.test@gmail.com",
        password:"mosaab123"
    }
})
  const body= await response.json();
  const token= await body.access_token;
    console.log(token);
})
