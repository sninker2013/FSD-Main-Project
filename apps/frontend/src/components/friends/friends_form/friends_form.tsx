import useFriendsInput from "../../../hooks/useFriendsInput";
import "./friends-form.css";

type FriendFormProps = {
  currentUserName: string;
  checkUserExists: (userName: string) => Promise<boolean>;
};

export function FriendForm({ currentUserName, checkUserExists }: FriendFormProps) {
  const friendInput = useFriendsInput(currentUserName);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    friendInput.setErrors([]);

    if (!friendInput.validate()) return;

    const friendName = friendInput.value.trim();
    const exists = await checkUserExists(friendName);
    if (!exists) {
      friendInput.setErrors(["Friend username does not exist!"]);
      return;
    }

    try {
      await friendInput.addFriendByUserName();
    } catch {
      friendInput.setErrors(["Unexpected error occurred"]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="friendUserName" className="friendForm">
        Friend Username:
        <input
          type="text"
          id="friendUserName"
          value={friendInput.value}
          onChange={friendInput.valueChangeHandler}
        />
      </label>
      <input type="submit" value="Add Friend" />

      {friendInput.errors.map((error, i) => (
        <p key={i} style={{ color: "red" }}>{error}</p>
      ))}
    </form>
  );
}