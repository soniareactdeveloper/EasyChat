import { getDatabase, ref, onValue, set, push, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UserCard = () => {
  // =============== state
  const [allUsers, setAllUsers] = useState([]);
  const [sentRequests, setSentRequests] = useState([]); // To track sent friend requests

  // getting data from redux 
  const sliceUser = useSelector((state) => state.counter.value);

  // =============== firebase
  const db = getDatabase();

  // =============== realtime database
  useEffect(() => {
    const starCountRef = ref(db, 'Allusers/');
    onValue(starCountRef, (snapshot) => {
      let arr = [];
      snapshot.forEach((item) => {
        if (item.val().userId !== sliceUser.uid) {
          arr.push({ ...item.val(), key: item.key });
        }
      });
      setAllUsers(arr);
    });

    // Fetch sent requests and set them in state
    const requestRef = ref(db, 'friendRequest/');
    onValue(requestRef, (snapshot) => {
      let requests = [];
      snapshot.forEach((item) => {
        if (item.val().reciverId === sliceUser.uid) {
          requests.push(item.val().senderId);
        }
      });
      setSentRequests(requests); // Store sent requests in state
    });
  }, [db, sliceUser.uid]);

  // function to handle friend request
  const handleUser = (friendData) => {
    const friendRequestRef = push(ref(db, 'friendRequest/'));
    
    // Send friend request
    set(friendRequestRef, {
      reciverId: sliceUser.uid,
      reciverName: sliceUser.displayName,
      reciverPhoto: sliceUser.photoURL,
      senderId: friendData.userId,
      senderName: friendData.userName,
      senderPhoto: friendData.userPhoto,
    })
    .then(() => {
      // After adding friend, remove request from database if needed
      remove(ref(db, 'friendRequest/' + friendData.key));
    })
    .catch((error) => {
      console.error("Error sending friend request:", error);
    });
  };

  return (
    <div className="w-[450px] h-screen bg-gradient-to-b from-[#C0DFF8] to-[#CDDBF9] p-4 rounded-lg shadow-lg">
      <h2 className="text-[#5C7BE0] font-semibold text-[20px] mb-4 text-center">All Users</h2>
      {allUsers.map((item) => (
        <div key={item.key} className="flex items-center space-x-8 mb-4">
          <img
            src={item.userPhoto}
            alt="photo"
            className="w-16 h-16 rounded-full shadow-md"
          />
          <div className="flex-1">
            {/* Flex container for name and Add button */}
            <div className="flex items-center justify-between">
              <h3 className="text-[#5C7BE0] font-semibold text-[18px]">{item.userName}</h3>
              <button
                onClick={() => handleUser(item)}
                className={`${
                  sentRequests.includes(item.userId)
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-[#5C7BE0] hover:bg-[#4A6ECD] transition-colors duration-300 ease-in-out'
                } text-white font-semibold px-4 py-2 rounded-md`}
                disabled={sentRequests.includes(item.userId)} // Disable button if request is sent
              >
                {sentRequests.includes(item.userId) ? 'Request Sent' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
