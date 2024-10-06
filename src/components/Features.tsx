import { PropertyCard } from "./PropertyCard";

export const propertiesList = [
    {
      id: "pro__1",
      name: "123 Main St, Anytown, USA",
      price: 1500,
      rating: 4,
      sqft: 300,
      beds: 3,
      baths: 2,
      image: "/image-1.jpg",
    },
    {
      id: "pro__2",
      name: "456 Oak St, Another City, USA",
      price: 1800,
      rating: 4,
      sqft: 500,
      beds: 2,
      baths: 2,
      image: "/image-2.jpg",
    },
    {
      id: "pro__3",
      name: "789 Pine St, Smalltown, USA",
      price: 1200,
      rating: 3.5,
      sqft: 400,
      beds: 2,
      baths: 1,
      image: "/image-3.jpg",
    },
    {
      id: "pro__4",
      name: "321 Maple Ave, Bigcity, USA",
      price: 2000,
      rating: 4.5,
      sqft: 600,
      beds: 4,
      baths: 3,
      image: "/image-4.jpg",
    },
   
    {
      id: "pro__6",
      name: "987 Cedar Rd, Uptown, USA",
      price: 1600,
      rating: 3.8,
      sqft: 350,
      beds: 2,
      baths: 2,
      image: "/image-6.jpg",
    },
    {
      id: "pro__7",
      name: "246 Birch Ln, Downtown, USA",
      price: 1900,
      rating: 4.3,
      sqft: 550,
      beds: 3,
      baths: 2,
      image: "/image-7.jpg",
    },
    {
      id: "pro__8",
      name: "135 Spruce St, Suburbia, USA",
      price: 1400,
      rating: 3.7,
      sqft: 320,
      beds: 2,
      baths: 1,
      image: "/image-8.jpg",
    },
    {
      id: "pro__9",
      name: "753 Ash Ave, Greenfield, USA",
      price: 2100,
      rating: 4.5,
      sqft: 650,
      beds: 4,
      baths: 3,
      image: "/image-9.jpg",
    },
    {
      id: "pro__10",
      name: "369 Willow Blvd, Cityville, USA",
      price: 1300,
      rating: 3.9,
      sqft: 400,
      beds: 2,
      baths: 2,
      image: "/image-10.jpg",
    }
  ];
  

export function Features(){
    return <div className="container mx-auto pb-20">
        <h3 className="text-4xl text-center mb-2">Featured Properties</h3>
        <p className="text-center text-muted-foreground">Explore our exquisite featured properties showcasing unparalleled charm, luxurious amenities, and prime locations </p>
        <div className=" grid sm:grid-cols-2 lg:grid-cols-3 gap-6  mt-20" >
        {propertiesList.map((property)=>
            
           <PropertyCard key={property.id} {...property} />
        ) }
        </div>
    </div>
}