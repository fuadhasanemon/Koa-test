
const koaRouter = require("koa-router");


const router = new koaRouter();

router.get("/", ()=>{
    console.log("func");
})

module.exports = router;