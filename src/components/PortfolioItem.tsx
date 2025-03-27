import React from 'react';

interface PortfolioItemProps {
  title: string;
  description: string;
  image: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ title, description, image }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
          <p className="text-gray-200">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;