import React, { useState, useEffect } from 'react';

// Sample fetch function (replace with your actual API endpoint)
const fetchElectronicsData = async () => {
  const response = await fetch('https://api.example.com/electronics');
  const data = await response.json();
  return data;
};

const Electronics = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchElectronicsData();

      // Adding promo based on conditions
      const updatedData = data.map(item => {
        // Example condition: if the item is in a certain category, add a promo
        if (item.category === 'laptop') {
          return { ...item, promo: 'Great Indian Festival' };
        }
        return { ...item, promo: '' }; // No promo for other items
      });

      setItems(updatedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Electronics</h1>
      <div className="electronics-list">
        {items.map(item => (
          <div key={item.id} className="electronics-item">
            <h2>{item.name}</h2>
            {item.promo && <span className="promo">{item.promo}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;

=================================================================================================
import React, { useState, useEffect } from 'react';

const Electronics = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/electronics');
        const data = await response.json();

        // Process the data to add promo
        const updatedItems = data.map(item => ({
          ...item,
          promo: item.price < 500 ? 'Great Indian Festival' : '' // Example condition
        }));

        setItems(updatedItems);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Electronics</h1>
      <div className="electronics-list">
        {items.map(item => (
          <div key={item.id} className="electronics-item">
            <h2>{item.name}</h2>
            {item.promo && <span className="promo">{item.promo}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Electronics;

