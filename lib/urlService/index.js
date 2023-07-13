"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlService = void 0;
let CustomerUrlJson = [
    {
        name: "login",
        method: "POST",
        url: "integration/customer/token"
    },
    {
        name: "getProfile",
        method: "GET",
        url: "customers/me"
    },
    {
        name: "register",
        method: "POST",
        url: "customers"
    },
    {
        name: "getAddress",
        method: "GET",
        url: "mstore/customers/me/address/"
    },
    {
        name: "addAddress",
        method: "PUT",
        url: "mstore/customers/me/address"
    },
    {
        name: "deleteAddress",
        method: "DELETE",
        url: "mstore/customers/me/address/"
    },
    {
        name: "getAllCustomerAddress",
        method: "GET",
        url: "mstore/customers/me/address/search?searchCriteria="
    },
    {
        name: "getAllCustomerOrders",
        method: "GET",
        url: "orders"
    },
    {
        name: "getCustomerOrders",
        method: "GET",
        url: "orders/"
    },
    {
        name: "changeEmail",
        method: "POST",
        url: "mstore/customers/me/changeEmail"
    },
    {
        name: "changePassword",
        method: "POST",
        url: "mstore/customers/me/changePassword"
    },
    {
        name: "changeName",
        method: "POST",
        url: "mstore/customers/me/changeName"
    }
];
let CategoryUrlJson = [
    {
        name: "filterable-Attributes",
        method: "GET",
        url: "v4tech/category/filterable-attributes/"
    },
    {
        name: "category",
        method: "GET",
        url: "v4tech/categories"
    }
];
let CartUrlJson = [
    {
        name: "createCartGuest",
        method: "POST",
        url: "guest-carts"
    },
    {
        name: "createCart",
        method: "POST",
        url: "carts/mine"
    },
    {
        name: "addToCart",
        method: "POST",
        url: "carts/mine/items"
    },
    {
        name: "addToCartGuest",
        method: "POST",
        url: `guest-carts/`
    },
    {
        name: "checkActiveQuote",
        method: "GET",
        url: `mstore/quote/is_active/`
    },
    {
        name: "updateCartGuest",
        method: "PUT",
        url: `guest-carts/`
    },
    {
        name: "updateCart",
        method: "PUT",
        url: `carts/mine/items/`
    },
    {
        name: "deleteCartGuest",
        method: "DELETE",
        url: `guest-carts/`
    },
    {
        name: "deleteCart",
        method: "DELETE",
        url: `carts/mine/items/`
    },
    {
        name: "getCartDetailsGuest",
        method: "GET",
        url: `guest-carts/`
    },
    {
        name: "getCartDetails",
        method: "GET",
        url: `carts/mine/totals`
    },
    {
        name: "applyCouponGuest",
        method: "PUT",
        url: `guest-carts/`
    },
    {
        name: "applyCoupon",
        method: "PUT",
        url: `carts/`
    },
    {
        name: "DeleteCouponGuest",
        method: "DELETE",
        url: `guest-carts/`
    },
    {
        name: "DeleteCoupon",
        method: "DELETE",
        url: `carts/`
    },
    {
        name: "SetBillingAddressGuest",
        method: "POST",
        url: `guest-carts/`
    },
    {
        name: "SetBillingAddress",
        method: "POST",
        url: `carts/mine/billing-address`
    },
    {
        name: "GetBillingAddressGuest",
        method: "GET",
        url: `guest-carts/`
    },
    {
        name: "GetBillingAddress",
        method: "GET",
        url: `carts/mine/billing-address`
    },
    {
        name: "SetShippingAddressGuest",
        method: "GET",
        url: `guest-carts/`
    },
    {
        name: "SetShippingAddress",
        method: "GET",
        url: `carts/mine/shipping-information`
    },
    {
        name: "GetShippingMethodGuest",
        method: "GET",
        url: `guest-carts/`
    },
    {
        name: "GetShippingMethodGuest",
        method: "GET",
        url: `carts/mine/shipping-methods`
    },
    {
        name: "PlaceOrderGuest",
        method: "POST",
        url: `guest-carts/`
    },
    {
        name: "PlaceOrder",
        method: "POST",
        url: `carts/mine/payment-information`
    },
    {
        name: "PayfortSettings",
        method: "GET",
        url: `payfort-order-settings/`
    },
    {
        name: "PayfortSetPaymentMethodByQuoteGuest",
        method: "POST",
        url: `guest-carts/`
    },
    {
        name: "PayfortSetPaymentMethodByQuote",
        method: "POST",
        url: `carts/mine/set-payment-information`
    },
    {
        name: "PayfortPaymentMethodByQuote",
        method: "GET",
        url: `payfort-order-settings-by-quote-id/`
    },
    {
        name: "TamaraBootstrap",
        method: "GET",
        url: `tamara/bootstrap`
    },
    {
        name: "IsCartTamaraEligible",
        method: "GET",
        url: `cart-tamara-eligible/`
    },
    {
        name: "TamaraSettings",
        method: "GET",
        url: `tamara-order-settings/`
    },
];
let paymentUrlJson = [
    {
        name: "getOtpStc",
        method: "POST",
        url: "mstore/stc-pay/get-otp"
    },
    {
        name: "verifyOtpStc",
        method: "POST",
        url: "mstore/stc-pay/verify-otp"
    },
    {
        name: "validateApple",
        method: "POST",
        url: "mstore/apple-pay/validate"
    }
];
let urljson = [
    ...CustomerUrlJson,
    ...CategoryUrlJson,
    ...CartUrlJson,
    ...paymentUrlJson
];
class UrlService {
    getUrl(name) {
        return urljson.filter(x => x.name == name)[0];
    }
}
exports.UrlService = UrlService;
