/**
* Obviously, for the rest calls
*/

 const currencyUrl = 'http://api.fixer.io/latest';
 const taxRatesUrl = 'https://developer.avalara.com/api-reference/avatax/rest/v1/';

 export default class RestClient{

    static getCurrencyRates(success, failure, currencies){
        //TODO
    }

    static getSalesTaxPercentage(success, failure, state){
        //TODO
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