import { getDatabase, ref, onValue, remove, set, push } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const FriendRequest = () => {
  // getting data from redux 
  const sliceUser = useSelector((state) => state.counter.value);

console.log(sliceUser)
  // state declarations
  const [friendRequest, setFriendRequest] = useState([])

  // firebase declarations
  const db = getDatabase();


  // firebase functions
 useEffect(() => {
  const starCountRef = ref(db, 'friendRequest/');
  onValue(starCountRef, (snapshot) => {
    let arr = [];
    snapshot.forEach((item) => {
      if (item.val().senderId === sliceUser.uid) {
        arr.push({ ...item.val(), key: item.key });
      }
    });
    setFriendRequest(arr);
  });
}, [db]);


// confirm button funnction

const handleConfirm = (data) =>{
   // add data to the friend list
    const db = getDatabase();
    set(push(ref(db, 'friends/')), {
     currentUserId: sliceUser.uid,
     currentUserName: sliceUser.displayName,
     currentUserPhoto: sliceUser.photoURL,
     friendId: data.senderId,
     friendName: data.senderName,
     friendPhoto: data.senderPhoto,
    });

  // remove data from the friend request
  remove(ref(db, 'friendRequest/' + data.key));
}


// remove buttonn function

  return (
    <div>
      <div className="w-[450px] h-screen bg-gradient-to-b from-[#C0DFF8] to-[#CDDBF9] p-4 rounded-lg shadow-lg">
        <h2 className="text-[#5C7BE0] font-semibold text-[20px] mb-4 text-center">Friend Request</h2>
        {
          friendRequest.map((item)=>(
            <div key={item.key} className="flex items-center space-x-8 mb-4">
              <img
                src={item.reciverPhoto}
                alt="photo"
                className="w-16 h-16 rounded-full shadow-md"
              />
              <div className="flex-1">
                {/* Flex container for name and buttons */}
                <div className="flex items-center gap-7">
                  <h3 className="text-[#5C7BE0] font-semibold text-[18px]">{item.reciverName}</h3>
                  <button 
                  onClick={()=>handleConfirm(item)}
                  className="bg-[#5C7BE0] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#4A6ECD] transition-colors duration-300 ease-in-out">
                    Accept
                  </button>
                  <button className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300 ease-in-out">
                    Decline
                  </button>
                </div>
              </div>
            </div>

          ))
        }
      </div>
    </div>
  );
};

export default FriendRequest;
