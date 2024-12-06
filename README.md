### Header

Home - Start with an overview to welcome users and set the context.
About Us - Follow with background information to build trust.
Services - Next, outline the specific services you offer.
Team - Introduce the team to add a personal touch and credibility.
Testimonials - Show proof of past successes to strengthen trust.
Careers - If hiring, list this option here for those interested in opportunities.
Contact - End with a way to reach out for inquiries or bookings.

# used in every page

      <div className="p-16 bg-customGray text-white flex justify-around items-center">
        <h1 className="text-2xl">ABOUT US</h1>
        <h2>
          <Link href="/">HOME</Link> /
          <strong className="text-yellow-600"> ABOUT US</strong>
        </h2>
      </div>

## Take inspiration

> https://poonasecurity.com/about/

##

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chat with Us</title>
</head>
<body>

  <!-- Button to start chat -->
  <button id="chatBtn">Chat with Us</button>

  <script>
    document.getElementById('chatBtn').addEventListener('click', function() {
      // WhatsApp number (must include country code, no "+" sign or spaces)
      const phoneNumber = "1234567890"; // Replace with your WhatsApp number
      const message = "Hello, I need assistance"; // Optional, default message
      const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

      // Open WhatsApp app directly (only works on mobile devices with WhatsApp installed)
      window.location.href = url;
    });
  </script>

</body>
</html>


```
