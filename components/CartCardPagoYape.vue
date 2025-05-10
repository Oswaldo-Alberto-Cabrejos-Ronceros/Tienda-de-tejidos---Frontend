<template>
<form id="form-checkout">
  <div>
    <label for="payerPhone">Phone Number</label>
    <input id="form-checkout__payerPhone" name="payerPhone" type="text" />
  </div>
  <div>
    <label for="payerOTP">OTP</label>
    <input id="form-checkout__payerOTP" name="payerOTP" type="text" />
  </div>
  <div>
    <button onclick="handleYape()">Create YAPE</button>
  </div>
</form>
</template>

<script lang="ts" setup>
const mp = new window.MercadoPago("YOUR_PUBLIC_KEY");
(async function handleYape () {
  const otp = (document.getElementById("form-checkout__payerOTP") as HTMLInputElement)?.value;
  const phoneNumber = (document.getElementById("form-checkout__payerPhone") as HTMLInputElement)?.value;
  const yapeOptions = {
    otp,
    phoneNumber
  };
  const yape = mp.yape(yapeOptions);
  const yapeToken = await yape.create();
  return yapeToken;
});
</script>

<style>

</style>