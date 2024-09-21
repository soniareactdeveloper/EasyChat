

const Friend = () => {
  return (
    <div>
      <div className="w-[450px] h-screen bg-gradient-to-b from-[#C0DFF8] to-[#CDDBF9] p-4 rounded-lg shadow-lg">
          <h2 className="text-[#5C7BE0] font-semibold text-[20px] mb-4 text-center">Friend Request</h2>
              <div className="flex items-center space-x-8 mb-4">
                <img
                  src=""
                  alt="photo"
                  className="w-16 h-16 rounded-full shadow-md"
                />
                <div className="flex-1">
                  {/* Flex container for name and Add button */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-[#5C7BE0] font-semibold text-[18px]">Lorem, ipsum.</h3>
                    <button className="bg-[#5C7BE0] text-white font-semibold px-4 py-2 rounded-md hover:bg-[#4A6ECD] transition-colors duration-300 ease-in-out">
                      Add
                    </button>
                  </div>
                </div>
            </div>
      </div>
</div>
  )
}

export default Friend