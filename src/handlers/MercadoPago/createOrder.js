const mercadopago = require('mercadopago');
const { getOneReservationInDb } = require('../../controllers/getInDB');
const { putPaymentStatusInDb, putPaymentTypeInDb, putPayment } = require('../../controllers/putInDB');

const client = new mercadopago.MercadoPagoConfig({ accessToken: 'TEST-4709112992835701-123015-5120ca87916dd20b33ad177adf129588-1615194691' });
const preference = new mercadopago.Preference(client);
const paymentClient = new mercadopago.Payment(client);
const merchantOrderClient = new mercadopago.MerchantOrder(client);

const createOrder = async (req, res) => {
    try {
        const { id } = req.body;
        const { Payment } = await getOneReservationInDb(id);


        const response = await preference.create({
            body: {
                back_urls: {
                    // success: 'https://matching-qdob.onrender.com/home',
                    pending: '',
                    failure: '',
                },
                items: [
                    {
                        title: Payment.name,
                        unit_price: Payment.amount,
                        quantity: 1,
                        id: id
                    }
                ],
                notification_url: 'https://matching-qdob.onrender.com/notify',
                // auto_return: 'approved'
            }
        });

        const urlPago = response.init_point;
        console.log(response)

        if (response) return res.status(200).json({
            status: true,
            urlPago,
            id: response.id
        })

    } catch (error) {
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

const notify = async (req, res) => {
    try {
        const { query } = req;
        const topic = query.topic || query.type;

        switch (topic) {
            case 'payment':
                console.log('Query Data', query['data.id']);
                const paymentId = query['data.id'];
                const payment = await paymentClient.get({id: paymentId});
                // console.log('PAYMENT --->', payment)
                merchantOrder = await merchantOrderClient.get({merchantOrderId: payment.order.id});
                
                const {id} = merchantOrder.items[0];
                const { Payment } = await getOneReservationInDb(id);
                const updatePaymentStatusInDb = await putPaymentStatusInDb(Payment.PaymentStatus.dataValues.id, payment.status);
                const updatePaymentTypeInDb = await putPaymentTypeInDb(Payment.PaymentType.dataValues.id, payment.payment_type_id);
                console.log(Payment.PaymentStatus)
                console.log(Payment.PaymentType)

                break;
            case 'merchant_order':
                const orderId = query.id;
                merchantOrder = await merchantOrderClient.get({merchantOrderId: orderId});
                // console.log('MERCHANT_ORDER --->', merchantOrder);
                break;

        }
    } catch (error) {
        console.log('status 500')
        res.status(500).json({
            status: false,
            message: error.message
        })
    }
}

module.exports = {
    createOrder,
    notify
};