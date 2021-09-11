const functions = require("firebase-functions");
const express = require('express');
const cors = require("cors");
const stripe =  require("stripe")('sk_test_51JYOCAEkdtYExPfeNpuLzHW2vo2HzRT2LtjidgEWEYKJUl5mppsSCxbiGbOwAu23O05mXVuqYzhaBrdJ4rDsLX1T001iMGjNvK')


//App config 
const app = express();

//Middlewares
app.use(cors({origin:true}));
app.use(express.json());

//API Routes
app.get('/', (request,response)=> response.status(200).send("Hello World"))

app.post('/payments/create',async (request, response)=>{
    const total = request.query.total;
    console.log('Payment request receivedfor this amount ', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency:"usd",
    });

    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})
//Listeners 
exports.api= functions.https.onRequest(app);
