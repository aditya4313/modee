"use client"
import './styles.css'; // Ensure your styles are imported
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Service {
  id: number;
  detail1: string;
  team1: string;
  detail2: string;
  team2: string;
  detail3: string;
  team3: string;
  detail4: string;
  team4: string;
  detail5: string;
  team5: string;
}

const ServicesList: React.FC = () => {
  const [services, setServices] = useState<Service | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // State to track active box

  useEffect(() => {
    async function fetchServices() {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}`, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
          },
        });
        console.log('API Response:', response.data);
        setServices(response.data.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchServices();
  }, []);

  if (loading) {
    return <p>Loading services...</p>;
  }

  if (!services) {
    return <p>No services found.</p>;
  }

  // Array of service teams and their corresponding details
  const serviceBoxes = [
    { name: services.team1, detail: services.detail1 },
    { name: services.team2, detail: services.detail2 },
    { name: services.team3, detail: services.detail3 },
    { name: services.team4, detail: services.detail4 },
    { name: services.team5, detail: services.detail5 },
  ];

  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', height: '100vh', padding: '20px' }}>
      {/* Container for the options */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginRight: '50px', gap: '15px' , marginBottom: '400px' }}>
        {/* Title section moved to the bottom right */}
        <h2 style={{ fontSize: '24px', textAlign: 'center', marginBottom: '20px' }}></h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {serviceBoxes.map((service, index) => (
            <button
              key={index}
              className={`service-box ${activeIndex === index ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              style={{
                width: '250px',
                padding: '15px',
                borderRadius: '30px 0 0 30px',
                textAlign: 'right',
                fontSize: '18px',
                backgroundColor: activeIndex === index ? '#cb4163' : 'white', // Active background color
                color: activeIndex === index ? 'white' : 'black', // Active text color
                transition: 'background-color 0.3s ease, color 0.3s ease',
              }}
            >
              {service.name}
            </button>
          ))}
        </div>
      </div>

     
      {/* Information Section positioned to the left with a gap */}
      <div style={{ textAlign: 'center', padding: '20px', position: 'absolute', left: '20%', top: '55%', transform: 'translateY(-50%)', zIndex: 0 }}>
        <div
          style={{
            border: '1px solid #ccc',
            padding: '10px',
            backgroundColor: '#cb4163',
            borderRadius: '50%',
            width: '350px',
            height: '350px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1,
            opacity: 0.8,
          }}
        >
          <p style={{ color: 'black', margin: 0, textAlign: 'center', fontSize: '16px' }}>
            {activeIndex !== null ? serviceBoxes[activeIndex].detail : 'Click a team to see the information'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
