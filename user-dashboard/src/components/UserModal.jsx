const UserModal = ({ user, onClose }) => {

  if (!user) return null;

  return (
    

    <div className="
      fixed
      inset-0
      bg-black/50
      flex
      items-center
      justify-center
      z-50
      p-4
    ">

      <div className="
        bg-white
        rounded-2xl
        shadow-2xl
        w-full
        max-w-2xl
        p-6
        relative
      ">

        
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            text-gray-500
            hover:text-red-500
            text-2xl
          "
        >
          ✕
        </button>

        
        <div className="flex flex-col items-center">

          <img
            src={`https://i.pravatar.cc/150?img=${user.id}`}
            alt="avatar"
            className="w-32 h-32 rounded-full mb-4"
          />

          <h2 className="text-3xl font-bold text-gray-800">
            {user.name}
          </h2>

          <p className="text-gray-600 mt-2">
            {user.email}
          </p>

        </div>

        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="font-semibold text-lg">Username</h3>
            <p>{user.username}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="font-semibold text-lg">Phone</h3>
            <p>{user.phone}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="font-semibold text-lg">Website</h3>
            <p>{user.website}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl">
            <h3 className="font-semibold text-lg">Company</h3>
            <p>{user.company?.name}</p>
          </div>

          <div className="bg-gray-100 p-4 rounded-xl md:col-span-2">
            <h3 className="font-semibold text-lg">Address</h3>

            <p>
              {user.address?.street},
              {" "}
              {user.address?.city}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default UserModal;