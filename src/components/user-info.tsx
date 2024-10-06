import { auth } from "../auth";

export default async function UserInfo() {
  const session = await auth();

  if (!session?.user) return null;

  return <div>Hello {session.user.name}</div>;
}
