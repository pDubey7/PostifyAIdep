export const plansMap = [
    {
      id: "basic",
      name: "Basic",
      description: "Get started with PostifyAI!",
      price: "10",
      items: ["3 Blog Posts", "3 Transcription"],
      paymentLink: "https://buy.stripe.com/test_3cs7upe6fcZq2pqdQQ",
      priceId:
        process.env.NODE_ENV === "development"
          ? "price_1Q0ykN2NynOvlrl46OIZXISw"
          : "",
    },
    {
      id: "pro",
      name: "Pro",
      description: "All Blog Posts, let's go!",
      price: "19.99",
      items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
      paymentLink: "https://buy.stripe.com/test_fZe01X4vFe3ufcc145",
      priceId:
        process.env.NODE_ENV === "development"
          ? "price_1Q0ykN2NynOvlrl454gkThHd"
          : "",
    },
  ];

export const ORIGIN_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://PostifyAI.vercel.app";