import { useSelector } from "react-redux";

const Home = () => {
  // Taking data from Redux
  const data = useSelector((state) => state.counter.value);


  return (
    <>
     <div className="mt-60 ml-[300px]">
      <div className="max-w-md mx-auto bg-gradient-to-b from-[#C0DFF8] to-[#CDDBF9] shadow-lg rounded-lg overflow-hidden">
          <div className="flex items-center p-6">
            <img
              className="w-24 h-24 rounded-full object-cover border-4 border-[#5C7BE0] shadow-md"
              src={data?.photoURL}
              alt="profile"
            />
            <div className="ml-6">
              <h2 className="text-[24px] font-semibold text-[#5C7BE0]">{data?.displayName}</h2>
              <p className="text-[20px] text-[#291e9f]">{data?.email}</p>
            </div>
          </div>
        </div>
     </div>
    </>
  );
};

export default Home;
