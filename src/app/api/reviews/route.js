export async function GET(request) {
  const apiKey = "AIzaSyA4R0sGv51KxRp-RXDVr9_fL2y8F8aVm-o";
  const placeId = null;

  // const placeId = "ChIJxS3rDPMZnlQR-2MpwpB3_ZQ";

  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;

  try {
    console.log("👉 Fetching Google reviews from:", url);

    const response = await fetch(url, {
      cache: "no-store",
    });

    console.log("🔍 Response status:", response.status);

    const data = await response.json();

    console.log("🧾 Raw Google response:", JSON.stringify(data, null, 2));

    if (!data.result || !data.result.reviews) {
      console.warn("⚠️ No reviews found in Google response.");
      return new Response("No reviews found", { status: 500 });
    }

    return new Response(JSON.stringify(data.result.reviews), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("🔥 API route error:", error);
    return new Response("Internal Server Error", {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
