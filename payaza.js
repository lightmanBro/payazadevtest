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
    'X-TenantID': 'test', 
    'Content-Type': 'application/json'
  },
  data : data1
};

axios.request(config1)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

// Second POST request configuration
let data2 = JSON.stringify({
  "transaction_type": "nuban",
  "service_payload": {
    "payout_amount": 200,
    "transaction_pin": 1429,
    "account_reference": "1010000009",
    "currency": "NGN",
    "payout_beneficiaries": [
      {
        "credit_amount": 100,
        "account_number": "4030058433",
        "account_name": "omotoso david",
        "bank_code": "000031",
        "narration": "dev Test",
        "transaction_reference": "TD93001234",
        "sender": {
          "sender_name": "David Doe",
          "sender_id": "LightmanBro",
          "sender_phone_number": "01234595",
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
    'X-TenantID': 'test', 
    'Content-Type': 'application/json'
  },
  data : data2
};

axios.request(config2)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

// GET request configuration
let config3 = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.payaza.africa/live/payaza-account/api/v1/mainaccounts/merchant/enquiry/main',
  headers: { 
    'Authorization': 'Payaza UFo3OC1QS0xJVkUtMEUzRUVCRjYtQjU4Qi00REQyLTlDNzgtOTlEMUU2MTk0NUY4', 
    'X-TenantID': 'test', 
  }
};

axios.request(config3)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
