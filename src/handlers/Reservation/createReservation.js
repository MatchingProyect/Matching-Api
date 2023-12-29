const mercadopago = require('mercadopago');
const { addReservationInDb } = require("../../controllers/addInDB");

const createReservation = async (req, res) => {
    try {
        const {id} = req.params
        const { dateTimeStart, dateTimeEnd, totalCost } = req.body;
        const reservationCreated = await addReservationInDb(id, dateTimeStart, dateTimeEnd, totalCost);

        const client = new mercadopago.MercadoPagoConfig({ accessToken: 'TEST-3024201806170040-121720-bb9f491cb8ac28cb6deeed0f84e480df-1596808595' });

        const preference = new mercadopago.Preference(client);

        const response = await preference.create({
            body: {
                back_urls: {
                    success: 'http://localhost:3000/success'
                },
                items: [
                    {
                        title: 'Reserva_Cancha',
                        unit_price: totalCost,
                        quantity: 1
                    }
                ]
            }
        })

        const urlPago = response.init_point;

        if (reservationCreated && response) return res.status(200).json({
            status: true,
            reservationCreated,
            urlPago
        })
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = createReservation;