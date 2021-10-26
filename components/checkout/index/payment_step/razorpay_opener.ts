export function openRazorpayPaymentPortal(orderId: string, amount: number): Promise<any> {
  const r: Promise<any> = new Promise<any>(
    (resolve, reject) => {
      console.log(`CustomLog: Opening Razorpay Portal for orderId ${orderId} and amount of ${amount}`);

    const options = {
      "key" : "rzp_test_ddgNiSMbXwgI4F",
      "order_id" : orderId,
      "amount" : amount,
      "currency" : "INR",
      "name" : "Yamin and Co.",
      "description" : "Test Transcation",
      "image" : "https://images.fastcompany.net/image/upload/fc/3034007-inline-i-applelogo.jpg",
      handler: (response: any) => {
        resolve(response);
      }
    };

    // @ts-ignore
    const razorpayOverlay = new Razorpay(options);
    razorpayOverlay.on(
      "payment.failed", 
      (response: any) => {
        reject(new Error("Razorpay payment failed"))
      }
    );
    razorpayOverlay.open();
    }
  )
  
  return r;
}