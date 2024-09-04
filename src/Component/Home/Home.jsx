import { useSelector } from "react-redux";


const Home = () => {
//  taking data from redux
 const data = useSelector((state)=> state.counter.value)


 console.log(data)
  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
        <div className="flex items-center p-6">
          <img
            className="w-24 h-24 rounded-full object-cover border-2 border-purple-500"
            src={data?.photoURL}
            alt="profile"
          />
          <div className="ml-6">
            <h2 className="text-2xl font-bold text-gray-900">{data?.displayName}</h2>
            <p className="text-lg text-gray-700">{data?.email}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
