import getAllProducts from "@/services/products/get-all-products";
import getAllUsers from "@/services/users/get-all-users";
// import getUser from "@/services/users/get-user";
import type { ApiContext } from "@/types";
import UserDetail from "@/components/templates/User";

interface UserProps {
  params: {
    id: string;
  };
}

const context: ApiContext = {
  apiRootUrl: process.env.API_BASE_URL || "http://localhost:5000",
};

const user = {
  id: 1,
  username: "hana",
  displayName: "Hana Kim",
  email: "hana.kim@example.com",
  profileImageUrl: "/users/1.png",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
};

const UserPage = async ({ params: { id } }: UserProps) => {
  const [products] = await Promise.all([
    // getUser(context, { id: Number(id) }),
    getAllProducts(context, { userId: Number(id) }),
  ]);

  return <UserDetail id={Number(id)} user={user} products={products} />;
};

export async function generateStaticParams() {
  const users = await getAllUsers(context);

  return users.map((user) => ({
    id: user.id.toString(),
  }));
}

export default UserPage;
export const revalidate = 10;
