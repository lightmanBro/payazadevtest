const axios = require('axios');
// let data = JSON.stringify({
//   "service_type": "Account",
//   "service_payload": {
//     "request_application": "Payaza",
//     "application_module": "USER_MODULE",
//     "application_version": "1.0.0",
//     "request_class": "MerchantCreateVirtualAccount",
//     "customer_first_name": "David",
//     "customer_last_name": "Omotoso",
//     "customer_email": "okikiolaomotola@gmail.com",
//     "customer_phone": "09012345673",
//     "virtual_account_provider": "Premiumtrust",
//     "payment_amount": 200,
//     "payment_reference": "RCO13DAVID"
//   }
// });

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'https://router-live.78financials.com/api/request/secure/payloadhandler',
//   headers: { 
//     'Authorization': 'Payaza UFo3OC1QS0xJVkUtMEUzRUVCRjYtQjU4Qi00REQyLTlDNzgtOTlEMUU2MTk0NUY4', 
//     'X-TenantID': 'test', 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };

// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });      


// let data = JSON.stringify({
//   "transaction_type": "nuban",
//   "service_payload": {
//     "payout_amount": 200,
//     "transaction_pin": 1429,
//     "account_reference": "1010000009",
//     "currency": "NGN",
//     "payout_beneficiaries": [
//       {
//         "credit_amount": 100,
//         "account_number": "4030058433",
//         "account_name": "omotoso david",
//         "bank_code": "000031",
//         "narration": "dev Test",
//         "transaction_reference": "TD93001234",
//         "sender": {
//           "sender_name": "David Doe",
//           "sender_id": "LightmanBro",
//           "sender_phone_number": "01234595",
//           "sender_address": "123, Ace Street"
//         }
//       }
//     ]
//   }
// });

// let config = {
//   method: 'post',
//   maxBodyLength: Infinity,
//   url: 'https://router-live.78financials.com/api/request/secure/payloadhandler',
//   headers: { 
//     'Authorization': 'Payaza UFo3OC1QS0xJVkUtMEUzRUVCRjYtQjU4Qi00REQyLTlDNzgtOTlEMUU2MTk0NUY4', 
//     'X-TenantID': 'test', 
//     'Content-Type': 'application/json'
//   },
//   data : data
// };




// let config = {
//   method: 'get',
//   maxBodyLength: Infinity,
//   url: 'https://api.payaza.africa/live/payaza-account/api/v1/mainaccounts/merchant/enquiry/main',
//   headers: { 
//     'Authorization': 'Payaza UFo3OC1QS0xJVkUtMEUzRUVCRjYtQjU4Qi00REQyLTlDNzgtOTlEMUU2MTk0NUY4', 
//     'X-TenantID': 'test', 
//   }
// };



// axios.request(config)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });


// {"response_code":200,"response_message":"Dynamic account successfully generated",
//     "response_content":{"transaction_id":19012177,"transaction_amount_payable":200,"account_number":"4030058433",
//         "account_name":"Payaza(David Omotoso)","bank_name":"PREMIUM TRUST BANK","bank_code":"000031",
//         "currency":{"id":1,"name":"₦","code":"NGN","unicode":"₦","html_value":"&#8358;"},
// "account_type":"Dynamic","transaction_reference":"RCO13DAVID","account_status":"Active"},"status":"00"}
// // https://api.payaza.africa/live/payaza-account/api/v1/mainaccounts/merchant/provider/enquiry


