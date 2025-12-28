// app/components/BuyNowButton.jsx
"use client";

export default function BuyNowButton({ label = "Buy Now", amount = 499, itemName = "Item" }) {
  const handleBuyNow = async () => {
    // 1) Create order on our server
    const res = await fetch("/api/razorpay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount, notes: { itemName } }),
    });
    const order = await res.json();
    if (!order?.id) {
      alert("Failed to create order");
      return;
    }

    // 2) Open Razorpay popup
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "KITE ROBOTICS",
      description: itemName,
      order_id: order.id,
      handler: function (response) {
        // 🔔 Success callback (you can redirect to a success page here)
        alert(`Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: "Customer",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: { color: "#2563eb" }, // Tailwind's blue-600
    };

    // Ensure script is loaded
    if (typeof window !== "undefined" && window.Razorpay) {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      alert("Razorpay script not loaded yet. Try again in a second.");
    }
  };

  return (
    <button
      onClick={handleBuyNow}
      className="px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
    >
      {label} ₹{amount}
    </button>
  );
}
