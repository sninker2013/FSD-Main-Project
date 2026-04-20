import { UserForm } from "../../user/user-form";
import * as userService from "../../../services/userService";

function CreateUserPage() {
  const handleCreateUser = async (userName: string) => {
    await userService.addUser({ userName });
  };

  return (
    <main>
      <h2>CreateUser</h2>
      <UserForm onSubmit={handleCreateUser} />
    </main>
  );
}

export default CreateUserPage;