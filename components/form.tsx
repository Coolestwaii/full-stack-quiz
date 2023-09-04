import React, { useState } from "react";
import { Input, Button, Card, Title, Stack } from "@mantine/core";

interface FormProps {
  firstName: string;
  lastName: string;
  email: string;
  donationAmount: string;
}

export default function Form({
  firstName: initialFirstName,
  lastName: initialLastName,
  email: initialEmail,
  donationAmount: initialDonationAmount,
}: FormProps) {
  const [firstName, setFirstName] = useState(initialFirstName);
  const [lastName, setLastName] = useState(initialLastName);
  const [email, setEmail] = useState(initialEmail);
  const [donationAmount, setDonationAmount] = useState(initialDonationAmount);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Prevent multiple submissions while the form is being processed
    if (isSubmitting) {
      return;
    }

    // Start the submission process
    setIsSubmitting(true);

    try {
      // Your form submission logic here

      // Simulate a delay (remove this in your actual code)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reset form fields to empty
      setFirstName("");
      setLastName("");
      setEmail("");
      setDonationAmount("");
    } catch (error) {
      // Handle any submission errors here
    } finally {
      // Complete the submission process
      setIsSubmitting(false);
    }
  };

  return (
    <Card withBorder shadow="xs" p="xl" bg="cyan.2" className="text-center">
      <Title order={1} color="blue">
        Donate
      </Title>

      <form onSubmit={handleSubmit}>
        <Stack spacing={"xs"}>
          <Input.Wrapper>
            <Input
              value={firstName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setFirstName(e.target.value)
              }
              disabled={isSubmitting} // Disable the input during submission
            />
            <Input.Error>{/* Error goes here */}</Input.Error>
          </Input.Wrapper>

          {/* ... (similar changes for other input fields) */}

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </Stack>
      </form>
    </Card>
  );
}
