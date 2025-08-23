import jwt from "jsonwebtoken";


// Function to  generate a token for a user
export const generateToken = ()=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET );
    return token;
}