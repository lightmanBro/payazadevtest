const axios = require('axios');

// First POST request configuration
let data1 = JSON.stringify({
  "service_type": "Account",
  "service_payload": {
    "request_application": "Payaza",
    "application_module": "USER_MODULE",
    "application_version": "1.0.0",
    "request_class": "MerchantCreateVirtualAccount",
    "customer_first_name": "David",
    "customer_last_name": "Omotoso",
    "customer_email": "okikiolaomotola@gmail.com",
    "customer_phone": "09012345673",
    "virtual_account_provider": "Premiumtrust",
    "payment_amount": 200,
    "payment_reference": "RCO13DAVID"
  }
});

let config1 = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://router-live.78financials.com/api/request/secure/payloadhandler',
  headers: { 
    'Authorization': 'Payaza UFo3OC1QS0xJVkUtMEUzRUVCRjYtQjU4Qi00REQyLTlDNzgtOTlEMUU2MTk0NUY4', 
    'X-TenantID': 'live', 
    'Content-Type': 'application/json'
  },
  data : data1
};

// axios.request(config1)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });

// Second POST request configuration
let data2 = JSON.stringify({
  "transaction_type": "nuban",
  "service_type":"Payout",
  "service_payload": {
    "payout_amount": 180,
    "transaction_pin": 1429,
    "account_reference": "1010000009",
    "currency": "NGN",
    "payout_beneficiaries": [
      {
        "credit_amount": 180,
        "account_number": "4030058433",
        "account_name": "Payaza(David Omotoso)",
        "bank_code": "000031",
        "narration": "dev Test",
        "transaction_reference": "TD93001234",
        "sender": {
          "sender_name": "omotoso david",
          "sender_id": "",
          "sender_phone_number": "09012345673",
          "sender_address": "123, Ace Street"
        }
      }
    ]
  }
});

let config2 = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://router-live.78financials.com/api/request/secure/payloadhandler',
  headers: { 
    'Authorization': 'Payaza UFo3OC1QS0xJVkUtMEUzRUVCRjYtQjU4Qi00REQyLTlDNzgtOTlEMUU2MTk0NUY4', 
    'X-TenantID': 'live', 
    'Content-Type': 'application/json'
  },
  data : data2
};

// axios.request(config2)
// .then((response) => {
//   console.log(JSON.stringify(response.data));
// })
// .catch((error) => {
//   console.log(error);
// });

// Response:{"response_code":201,"response_message":"Something went wrong doing request message integrity check. Please contact customersupport@78financials.com"}


let data = JSON.stringify({
  "service_payload": {
    "currency": "NGN",
    "bank_code": "000031",
    "account_number": "4030058433"
  }
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.payaza.africa/live/payaza-account/api/v1/mainaccounts/merchant/provider/enquiry',
  headers: { 
    'X-TenantID': 'live', 
    'Authorization': 'Payaza UFo3OC1QS0xJVkUtMEUzRUVCRjYtQjU4Qi00REQyLTlDNzgtOTlEMUU2MTk0NUY4', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
  