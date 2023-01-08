import express from "express"
import routes from "./routes/routes"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "./swagger.json"

const app = express()

app.use(express.json())

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use("/", routes)

app.listen(3333, () => console.log("Server running on port 3333"))