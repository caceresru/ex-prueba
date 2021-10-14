import {config} from 'dotenv'
config()
export default{
    port:process.env.PORT || 3000,
    dbuser: process.env.DB_USER || '',
    dbpassword: process.env.DB_PWD || '',
    dbdatabase: process.env.DB_NAME || '',
    dbserver: process.env.DB_SERVER || ''
}