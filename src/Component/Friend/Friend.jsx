import { getDatabase, ref, onValue, remove } from "firebase/database";
import { useEffect, useState } from "react";

const Friend = () => {
  // state declarations
  const [friends, setFriends] = useState([]);

  // firebase declarations
  const db = getDatabase();

  // firebase functions
  useEffect(() => {
    const starCountRef = ref(db, 'friends/');
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        arr.push({ ...item.val(), key: item.key });
      });
      setFriends(arr);
    });
  }, [db]);

  // remove button function
  const handleremove = (data) => {
    // remove data from the friends list
    remove(ref(db, 'friends/' + data.key));
  };

  return (
    <div>
      <div className="w-[450px] h-screen bg-gradient-to-b from-[#C0DFF8] to-[#CDDBF9] p-4 rounded-lg shadow-lg">
        <h2 className="text-[#5C7BE0] font-semibold text-[20px] mb-4 text-center">Friends</h2>
        {friends.map((item) => (
          <div key={item.key} className="flex items-center space-x-8 mb-4">
            <img
              src={item.friendPhoto}
              alt="photo"
              className="w-16 h-16 rounded-full shadow-md"
            />
            <div className="flex-1">
              {/* Flex container for name and Remove button */}
              <div className="flex items-center justify-between">
                <h3 className="text-[#5C7BE0] font-semibold text-[18px]">{item.friendName}</h3>
                <button
                  onClick={() => handleremove(item)}
                  className="bg-[#5C7BE0] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#4A6ECD] transition-colors duration-300 ease-in-out">
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Friend;
