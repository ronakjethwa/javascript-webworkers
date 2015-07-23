/**
 * Created by Ronak on 7/22/2015.
 */

self.addEventListener('message', function(event){
    var n = event.data;
    //self.postMessage(str.toUpperCase());

    function isPrime(num){
        for(var i = 2; i < Math.sqrt(num); i++) {
            if(num % i === 0) {
                return false;
            }
        }
        return true;
    }

    function generatePrimes(number_of_primes) {
        var primes = [];
        var num = 2;
        while(primes.length < number_of_primes){
            if(isPrime(num)) primes.push(num);
            num++;
        }
        return primes;
    }

    //var n = 100000;
    var arr = generatePrimes(n);
    //console.log(arr);
    self.postMessage(JSON.stringify(arr));


});