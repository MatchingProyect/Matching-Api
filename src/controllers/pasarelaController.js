const mercadopago = require('mercadopago');

const createOrder = async (req, res) => {
    try {
        const client = new mercadopago.MercadoPagoConfig({ accessToken: 'TEST-3024201806170040-121720-bb9f491cb8ac28cb6deeed0f84e480df-1596808595'});

        const preference = new mercadopago.Preference(client);

        const response = await preference.create({
            body: {
                back_urls:{
                    success: 'http://localhost:3000/success'
                },
                items: [
                    {
                        id: '56',
                        title: 'reserva_cancha',
                        quantity: 1,
                        unit_price: 100,
                        currency_id: 'CLP'
                    }
                ],
                notification_url: 'http://localhost:3000/notificacion'
            }
        })
        
        //*Visualizar la info
        // const {body, query} = req;
        // console.log({body, query});

        return res.status(200).json(response);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const notificacion = async(req, res) => {
    try {
        const {body, query} = req;
        console.log(body, query);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const success = async(req, res) => {
    try {
        return res.send('Pago Exitoso!');
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    createOrder,
    success,
    notificacion
}