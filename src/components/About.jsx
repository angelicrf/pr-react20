import { use, Suspense, useState } from "react";
import { useFormStatus } from "react-dom";

export default function About() {
  const [thisEmail, setThisEmail] = useState();
  const [thisText, setThisText] = useState();

  const promiseCall = async (formValue) => {
    const textEmail = String(formValue.get("emailId"));
    const userNameValue = String(formValue.get("userNameId"));

    await createDelay();
    setThisEmail(textEmail);
    setThisText(userNameValue);

    return { textEmail, userNameValue };
  };
  const createDelay = () => new Promise((resolve) => setTimeout(resolve, 3000));
  const formData = async (formValue) => {
    try {
      await promiseCall(formValue);
    } catch (error) {
      console.log(error);
    }
  };
  const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
      <>
        <p style={{ color: pending ? "blue" : "red" }}>
          Test Text{thisEmail}
          {thisText}
        </p>
        <button
          className="text-400-blue font-bold"
          disabled={pending}
          type="submit"
        >
          Submit
        </button>
      </>
    );
  };

  return (
    <>
      <form action={formData}>
        <input type="email" name="emailId" />
        <input type="text" name="userNameId" />

        <SubmitButton />
      </form>
    </>
  );
}
