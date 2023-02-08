const koa = require("koa");
const {koaBody} = require("koa-body");
const cors = require("koa2-cors");


const router = require("./routes");


const app = new koa();

app.use(koaBody());
app.use(cors("*"));
app.use(router.routes());
app.use(router.allowedMethods());



app.listen(8085, ()=> {
    console.log("Server is listenig");
})