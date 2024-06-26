import user from "./src/modules/user/user.roter.js"
import auth from "./src/modules/auth/auth.router.js"
import { handelerror } from "./src/utils/errorhandling.js"
import cors from 'cors'

const bootstrap= (app,express)=>{
    app.use(express.json())
    app.use('/user',user)
    app.use('/auth',auth)
    app.use(handelerror)
    app.use(cors)
}


export default bootstrap