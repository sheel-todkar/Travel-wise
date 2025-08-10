import PlaceCard from '@/view-trip/components/PlaceCard';

function Itinerary({trip}) {
  // Handle different data structures for itinerary
  const itineraryData = trip.tripData?.itinerary;
  
  // Ensure itinerary is an array
  const itineraryArray = Array.isArray(itineraryData) 
    ? itineraryData 
    : (typeof itineraryData === 'object' ? Object.values(itineraryData) : []);

  if (!itineraryArray || itineraryArray.length === 0) {
    return (
      <div>
        <h2 className="text-2xl mt-10 text-[#271a14]" style={{fontWeight: 500}}><i>Daily Itinerary</i></h2>
        <p className="mt-6 text-gray-500">No itinerary data available.</p>
      </div>
    );
  }

  return (
    <div>
        <h2 className="text-2xl mt-10 text-[#271a14]" style={{fontWeight: 500}}><i>Daily Itinerary</i></h2>

        <div className="mt-6"> 
            {itineraryArray.map((item, index) => (
                <div key={index} className="mt-3"> 
                    <h2 className="font-medium text-xl text-[#271a14] mt-8" style={{fontWeight: 600}}>{item.day || `Day ${index + 1}`}</h2>
                    <div className="grid md:grid-cols-2 gap-5">
                    {Array.isArray(item.plan) && item.plan.map((place, placeIndex) =>(
                       <div key={placeIndex} className="my-3">
                          <h2 className='font-medium text-sm text-[#4F5A2D]' style={{fontWeight: 600}}>{place.time}</h2>
                           <PlaceCard place={place}/>
                       </div>
                    ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Itinerary
