const mercadopago = require('mercadopago');
const { addReservationInDb } = require("../../controllers/addInDB");

const createReservation = async (req, res) => {
    try {
        const { dateTimeStart, dateTimeEnd, totalCost, UserId, CourtId, MatchTypeId, ReservationTypeId } = req.body;
        const reservationCreated = await addReservationInDb(dateTimeStart, dateTimeEnd, totalCost, UserId, CourtId, MatchTypeId, ReservationTypeId);

        const client = new mercadopago.MercadoPagoConfig({ accessToken: 'TEST-3024201806170040-121720-bb9f491cb8ac28cb6deeed0f84e480df-1596808595' });

        const preference = new mercadopago.Preference(client);

        
        const response = await preference.create({
            body: {
                back_urls: {
                    success: 'https://a54b-2800-300-6a12-30d0-38a8-195d-fac6-57d9.ngrok-free.app/success',
                    pending: '',
                    failure: ''
                },
                items: [
                    {
                        title: 'Reserva_Cancha',
                        unit_price: totalCost,
                        currency_id: 'ARS',
                        quantity: 1
                    }
                ]
            }
        });
        
        // console.log(response)
        const urlPago = response.init_point;

        const paymentStatus = () => {
            if(response.back_urls.success) return 'success';
            else if(response.back_urls.pending) return 'pending';
            else return 'failure';
        } 
        console.log(paymentStatus())
        
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