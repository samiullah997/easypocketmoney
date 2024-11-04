import { SignUp } from "@clerk/nextjs";
const NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL = process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL;

export default function Page() {
  return (
    <div className="flex items-center justify-center h-full">
      <SignUp afterSignOutUrl={NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL}/>
    </div>
  );
}
