/**
* Obviously, for the rest calls
*/

//TODO apikeys
 const currencyUrl = 'http://api.fixer.io/latest';
 const taxRatesUrl = 'https://developer.avalara.com/api-reference/avatax/rest/v1/';

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