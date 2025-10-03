const Shimmer = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 my-6">
      {/* Restaurant Info Shimmer */}
      <div className="border-b pb-4 mb-6">
        <div className="h-8 w-3/4 bg-gray-200 rounded-md animate-pulse mb-2"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded-md animate-pulse"></div>
      </div>
      
      {/* Menu Items Shimmer */}
      <div className="h-6 w-1/3 bg-gray-200 rounded-md animate-pulse mb-6"></div>
      
      <div className="space-y-4">
        {[...Array(8)].map((_, index) => (
          <div key={index} className="flex justify-between items-center p-4 border-b rounded-lg">
            <div className="flex-grow pr-4">
              <div className="h-5 w-3/4 bg-gray-200 rounded-md animate-pulse mb-2"></div>
              <div className="h-4 w-1/4 bg-gray-200 rounded-md animate-pulse mb-2"></div>
              <div className="h-3 w-5/6 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
            <div className="min-w-[118px] h-24 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shimmer;