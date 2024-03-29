import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  

  return (
    <div>
      <div className="flex flex-col font-bold lg:flex-row justify-between items-center my-4">
        <h2 className="text-2xl mb-2 lg:mb-0 lg:mr-4">All Users</h2>
        <h2 className="text-2xl">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-lg font-semibold">
              <th className="w-full lg:w-auto">No.</th>
              <th className="w-full lg:w-auto">Name</th>
              <th className="w-full lg:w-auto">Email</th>
              <th className="w-full lg:w-auto">Role</th>
              <th className="w-full lg:w-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td className="w-full lg:w-auto">{user.name}</td>
                <td className="w-full lg:w-auto">{user.email}</td>
                <td className="w-full lg:w-auto font-bold">
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn bg-green-600"
                    >
                      <FaUsers className="text-white text-xl"></FaUsers>
                    </button>
                  )}
                </td>
                <td className="w-full lg:w-auto">
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn bg-rose-500"
                  >
                    <FaTrashAlt className="text-white"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
