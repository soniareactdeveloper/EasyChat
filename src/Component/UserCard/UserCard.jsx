import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const UserCard = () => {
  // =============== state
  const [allUsers, setAllUsers] = useState([]);

  // =============== firebase
  const db = getDatabase();

  // =============== realtime database
  useEffect(() => {
    const starCountRef = ref(db, 'Allusers');
    onValue(starCountRef, (snapshot) => {
      const arr = [];
      snapshot.forEach((item) => {
        arr.push(item.val());
      });
      setAllUsers(arr);
    });
  }, [db]);

  console.log(allUsers);

  return (
    <div className="w-[400px] bg-gradient-to-b from-[#C0DFF8] to-[#CDDBF9] p-4 rounded-lg shadow-lg mt-4">
      <h2 className="text-[#5C7BE0] font-semibold text-[20px] mb-4 text-center">All Users</h2>
      {/*  map  */}
      {allUsers.map((item, index) => (
        <div key={index} className="flex items-center space-x-8 mb-4">
           {/* Image */}
          <img
            src={item.userPhoto}
            alt="photo"
            className="w-16 h-16 rounded-full shadow-md"
          />
          <div className="flex-1">
            {/* Name   */}
            <h3 className="text-[#5C7BE0] font-semibold text-[18px]">{item.userName}</h3>
            <div className="flex space-x-2 mt-2">
              <button className="bg-[#5C7BE0] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#4A6ECD] transition-colors duration-300 ease-in-out">
                Accept
              </button>
              <button className="bg-[#FA4D4C] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#E94444] transition-colors duration-300 ease-in-out">
                Decline
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
