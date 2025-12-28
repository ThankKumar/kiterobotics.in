// app/api/razorpay/route.js
import Razorpay from "razorpay";

export async function POST(request) {
  try {
    const { amount, notes } = await request.json(); // amount in INR (e.g. 499)
    if (!amount) {
      return new Response(JSON.stringify({ error: "Amount is required" }), { status: 400 });
    }

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpay.orders.create({
      amount: Math.round(Number(amount) * 100), // convert to paise
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
      notes: notes || {},
    });

    return Response.json(order);
  } catch (err) {
    console.error("Razorpay order error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
