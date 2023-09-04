import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./form"; // Assuming Form is in a separate file

// ... (other imports)

export default function Donation() {
  const [donationData, setDonationData] = useState<any>(null); // You should define a type for your data

  useEffect(() => {
    axios
      .get("https://donation-server-production.up.railway.app/donation")
      .then((response) => {
        setDonationData(response.data); // Assuming your API returns an object with the data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    // ... (rest of the component)
    <Form
      firstName={donationData?.firstName || ""}
      lastName={donationData?.lastName || ""}
      email={donationData?.email || ""}
      donationAmount={donationData?.donationAmount || ""}
    />
  );
}
