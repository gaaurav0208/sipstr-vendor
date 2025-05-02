// pages/api/onboarding.js

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // Save to DB or process data here
    return res.status(200).json({ message: 'Data received', data });
  }

  if (req.method === 'GET') {
    // Example: return mock pre-filled data
    return res.status(200).json(
      {
        "storeName": "Sip & Savor Liquor",
        "corporationName": "Sip Savor Inc.",
        "ein": 123456789,
        "licenseNumber": "LIC-987654321",
        "description": "Premium liquor store offering a wide selection of spirits, wines, and beers.",
        "storeEmail": "contact@sipsavor.com",
        "storeContactNumber": "+1-555-987-1234",
        "address1": "123 Bourbon Street",
        "address2": "Suite 200",
        "city": "New Orleans",
        "state": "LA",
        "zipcode": "70130",
        "country": "USA",
        "liquorLicenseUrl": "https://example.com/uploads/license.pdf",
        "weekendOpenTime": "2025-05-03T10:00:00.000Z",
        "weekendCloseTime": "2025-05-03T22:00:00.000Z",
        "weekDaysOpenTime": "2025-05-01T09:00:00.000Z",
        "weekDaysCloseTime": "2025-05-01T21:00:00.000Z",
        "holidayDates": [
          "2025-07-04",
          "2025-12-25",
          "2025-11-28"
        ]
      }
      );
  }

  return res.status(405).end(); // Method Not Allowed
}
