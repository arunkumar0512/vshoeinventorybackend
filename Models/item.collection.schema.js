// import mongoose from "mongoose";

// const user= new mongoose.Schema({

//         name: String,
//         size: String,
//         price: String,
//         quantity: String
        

// })

// const itemcollection = mongoose.model(' itemcollection ', user)

// export default  itemcollection ;     

import mongoose from "mongoose";

const user= new mongoose.Schema({

        name: String,
        image: String,
        description: String,
        price: String,
        quantity: String
        

})

const itemcollection = mongoose.model(' itemcollection ', user)

export default  itemcollection ;