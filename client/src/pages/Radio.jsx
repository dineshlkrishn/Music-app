export default function Radio(){

    return(
  
      <div className="p-6 pb-32 bg-[#121212] min-h-screen">
  
        <h1 className="text-2xl font-bold mb-6">Radio</h1>
  
        <div className="grid grid-cols-2 gap-4">
  
          <div className="bg-red-600 p-6 rounded-xl">
            Top Hits Radio
          </div>
  
          <div className="bg-gray-800 p-6 rounded-xl">
            Indie Radio
          </div>
  
        </div>
  
      </div>
    )
  }