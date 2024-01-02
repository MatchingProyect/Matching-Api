const mercadopago = require('mercadopago');
const { addReservationInDb } = require("../../controllers/addInDB");

const createReservation = async (req, res) => {
    try {
        const { dateTimeStart, dateTimeEnd, totalCost, UserId, CourtId, MatchTypeId, ReservationTypeId } = req.body;
        const reservationCreated = await addReservationInDb(dateTimeStart, dateTimeEnd, totalCost, UserId, CourtId, MatchTypeId, ReservationTypeId);

        const client = new mercadopago.MercadoPagoConfig({ accessToken: 'TEST-4709112992835701-123015-5120ca87916dd20b33ad177adf129588-1615194691' });

        const preference = new mercadopago.Preference(client);

        
        const response = await preference.create({
            body: {
                back_urls: {
                    success: '',
                    pending: '',
                    failure: ''
                },
                items: [
                    {
                        title: 'Reserva_Cancha',
                        unit_price: totalCost,
                        quantity: 1
                    }
                ]
            }
        });
        
        console.log(response)
        const urlPago = response.init_point;
        
        if (reservationCreated && response) return res.status(200).json({
            status: true,
            reservationCreated,
            urlPago
        });
    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = createReservation;