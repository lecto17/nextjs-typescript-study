import SignIn from "@/components/templates/Signin";
import { Suspense } from "react";

const Page = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <SignIn />
    </Suspense>
  );
};

export default Page;
