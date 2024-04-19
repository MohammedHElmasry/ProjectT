import dotenv from 'dotenv'
dotenv.config()
import mongoose from "mongoose";
// pC5jc0G9u9njYOSe pass
export const connect = async ()=>{
   await mongoose.connect(`mongodb+srv://01140775155mm:pC5jc0G9u9njYOSe@cluster0.sqgpd92.mongodb.net/`).then(res=>{
    console.log(`connect db`);
   }).catch(err=>{
    console.log(err);
   });
}


export default connect