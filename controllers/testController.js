var StellarSdk = require('stellar-sdk');
var server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
var receiveSecretKey = 'SDB6UAMLDLDTI3DLNK4X74EV72CHCJZAWOD4OZDEIX4XYPN2RBLQTKS5';
var receivePublicKey = 'GALNYTHVO4ZQLSLZGHSCIHYSMXPVOKCTMWNLHVYCB6637ZFVL7Z663O5';
var sourcePublicKey = 'GAMLQH24GRHZTRCURNJUTMR24HMLDIW45K3MHBCSG3J3U5E3CW6X4Q72';
var sourceSecretKey = 'SAWOSLK7F4GRXFLXHBZ2P2I5PH3WA3RADBSNKJL2C76GT2SALXRL63CT';
var sourceKeyPair = StellarSdk.Keypair.fromSecret(sourceSecretKey);

exports.show_alert = function() {
    StellarSdk.Network.useTestNetwork();
    server.loadAccount(sourcePublicKey)
    .then(function(account) {
        var transaction = new StellarSdk.TransactionBuilder(account)
        .addOperation(StellarSdk.Operation.payment({
            destination: receivePublicKey,
            asset: new StellarSdk.Asset("SOME", "GDFOUS6SKLEOACZY7KBLW7AXQZJSPRAHKUYFK2TAL6HY2YWL3TFC3T2O"),
            amount: '100'
        })).build();
        transaction.sign(sourceKeyPair);
        server.submitTransaction(transaction)
        .then(function(transactionResult) {
            console.log(JSON.stringify(transactionResult, null, 2));
            console.log('\Success! View the transaction at: ');
            console.log(transactionResult._links.transaction.href);
        })
        .catch(function(err){
            console.log('An error has occured:');
            console.log(err);
        });
    })
    .catch(function(e){
        console.error(e);
    });
}

exports.register_get = function(req, res, next) {
    res.render('test', {title: "Trung Tien"});
}

exports.register_post = function(req, res, next) {
    res.render('test', {title: "Tien", xlm: 10});
}

exports.transaction_detail = function(req, res, next) {
    res.render('Detail', {title: 'Detail', xlm: 200});
}
