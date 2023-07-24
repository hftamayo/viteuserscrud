import { FaRegTrashAlt, FaEdit } from "react-icons/fa";

const UserList = () => {
  const users = [
    { id: "1", name: "Sebastian Fernandez", email: "sebastic@chivo.com" },
    { id: "2", name: "Lupita Fernandez", email: "lupita@chivo.com" },
    { id: "3", name: "Milu Martinez", email: "milu@chivo.com" },
    { id: "4", name: "Herbert Fernandez", email: "herbert@chivo.com" },
  ];

  const renderCard = () =>
    users.map((user) => (
      <div className="bg-gray-300 p-5 flex items-center justify-between">
        <div>
          <h3 className="font-bold text-lg text-gray-700">{user.name}</h3>
          <span className="font-normal text-gray-600">{user.email}</span>
        </div>
        <div className="flex gap-4">
          <button>
            <FaEdit />
          </button>
          <button>
            <FaRegTrashAlt />
          </button>
        </div>
      </div>
    ));

  return (
    <div>
      <Button>Add User</Button>
      <div className="grid gap-5 md:grid-cols-2">
        {users.length ? (
          renderCard()
        ) : (
          <p className="text-center col-span-2 text-gray-700 font-semibold">
            No data found
          </p>
        )}
      </div>
    </div>
  );
};

export default UserList;
