import { getUsers } from "@/actions/users";

export default async function UserList() {
  const users = await getUsers();

  return (
    <div className="box-2">
      <h3 className="text-gray-800">User List</h3>
      {!users?.length > 0 ? (
        <div className="p-3 box-3">No user found</div>
      ) : (
        <div>
          {users.map((user, index) => (
            <p key={user._id} className="p-3 rounded box-3">
              {index + 1}: {user.name} - {user.email}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
