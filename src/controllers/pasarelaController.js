const mercadopago = require('mercadopago');

const createOrder = async (req, res) => {
    try {
        const client = new mercadopago.MercadoPagoConfig({ accessToken: 'TEST-349491880927502-121716-e6344ee9c611370d4105ad340a86b3cc-1598350680'});

        const preference = new mercadopago.Preference(client);

        const response = await preference.create({
            body: {
                back_urls:{
                    success: 'http://localhost:3000/success'
                },
                items: [
                    {
                        id: '<ID>',
                        title: '<title>',
                        quantity: 1,
                        unit_price: 100,
                        currency_id: 'CLP'
                    }
                ],
                // notification_url: 'http://misitio/server/ID_DE_LA_RESERVA_QUE_PAGAMOS'
            }
        })

        return res.status(200).json(response);

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = createOrder;