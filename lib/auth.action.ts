import { authOptions } from "./auth.options";
import { getServerSession } from "next-auth";

export async function getSession() {
  return await getServerSession(authOptions);
}
