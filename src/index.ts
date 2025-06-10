import * as express from "express";
import livroRoutes from "./routes/livroRoutes";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", livroRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}.`);
});