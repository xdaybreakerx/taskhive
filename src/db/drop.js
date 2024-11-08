const { dbConnect, dbDisconnect, dbDrop } = require("./dbFunctions");

async function drop() {
    await dbDrop();

    console.log("dropping complete, disconnecting from db");

    await dbDisconnect();
}

dbConnect().then(() => {
    console.log("connected to DB");
    drop();
});
