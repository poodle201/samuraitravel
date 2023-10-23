 const stripe = Stripe('pk_test_51O2K7AEsh7r1evaWNWsknCC8wTZAFA7EpTFRrawsBf9d8atYsbf1aF1PNtMBiE1KW4pS6gpisLMHZQY86PsYdCA000rg2QmYOf');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });