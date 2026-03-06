export default function Search(){

    const genres = [
      "Top 50 Hits",
      "Indie Tracks",
      "Workout Mix",
      "Jazz Classics"
    ];
  
    return(
  
      <div className="p-6 pb-32">
  
        <input
          placeholder="Search"
          className="w-full p-3 rounded-lg border mb-6"
        />
  
        <h3 className="font-semibold mb-4">
          Popular Searches
        </h3>
  
        {genres.map((g,i)=>(
          <div key={i}
               className="flex justify-between p-3 border-b">
            {g}
          </div>
        ))}
  
      </div>
    )
  }