const express = require ("express");
const cors = require ("cors");


const app = express();
const PORT= 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
    res.json({
        mensaje: "Backend de mi tienda funcionando"
    });

});

app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});


