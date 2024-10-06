import { handleSignOut } from "@/app/actions/authActions";
import { auth } from "../auth";
import { Button } from "./ui/button";

export default async function UserInfo() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div className="flex w-full flex-col gap-2">
      <div>Hello {session.user.name}</div>
      <form className="w-full" action={handleSignOut}>
        <Button variant="outline" className="w-full" type="submit">
          {/* <Google className="h-4 w-4 mr-2" /> */}
          Logout
        </Button>
      </form>
    </div>
  );
}
