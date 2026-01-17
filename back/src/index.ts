import { appDataSource } from "./config/data.source";
import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata"

appDataSource.initialize()
.then(() => {
    server.listen(PORT, () => {
    console.log(`Server listen on port ${PORT}`)
})
})
.catch(err => console.log(err))
