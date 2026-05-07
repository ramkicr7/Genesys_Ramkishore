const UserCard = ({ user, onClick }) => {

  return (

    <div
      onClick={() => onClick(user.id)}
      className="
        bg-white
        rounded-xl
        shadow-md
        p-5
        hover:shadow-2xl
        transition
        duration-300
        cursor-pointer
        hover:scale-105
      "
    >

      <div className="flex flex-col items-center">

        <img
          src={`https://i.pravatar.cc/150?img=${user.id}`}
          alt="avatar"
          className="w-24 h-24 rounded-full mb-4"
        />

        <h2 className="text-xl font-semibold text-gray-800">
          {user.name}
        </h2>

        <p className="text-gray-600">
          {user.email}
        </p>

      </div>

    </div>
    
  );
};

export default UserCard;