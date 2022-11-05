const { MongoClient } = require( "mongodb" );

module.exports = {
    selectedDb: {},
    async connect(){
        try {
            const client = await MongoClient.connect( process.env.CONNECTION_STRING )
            this.selectedDb = client.db("practice")
            console.log("connected")
        } catch ( error ) {
            console.error( error );
        }
    }
}