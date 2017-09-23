/**
* Obviously, for the rest calls
*/

const currencyUrl = 'http://api.fixer.io/latest';
//TODO apikeys
const taxRatesUrl = 'https://developer.avalara.com/api-reference/avatax/rest/v1/';

const taxRatesCanada = 'http://api.salestaxapi.ca';

/** Exhanges REST API ***/ 
 const getExchangesUrl = 'https://api.fixer.io/latest';
 const getSpecificExchanges = 'https://api.fixer.io/latest?symbols=USD,GBP';//base = EURO
 const getExchangesAgainst = 'https://api.fixer.io/latest?base=USD'; //change base



 export default class RestClient{

    static getCurrencyRates(success, failure, currencies){
        ajaxGet(currencyUrl, currencies, success, failure);
    }

    static getSalesTaxPercentage(success, failure, state){
        ajaxGet(taxRatesUrl,state, success, failure);
    }
 }

 export function ajaxGet(url, data, successcb, failurecb){
     //cache?true
     return $.ajax({
        type:'GET',
        url: url,
        data: data,
        success: function(response){
            successcb(response);
        },
        failure: function(err){
            failurecb(err);
        }
     });
 }