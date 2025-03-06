// src/components/sphSpaces/SpacesLayout.tsx
import React from 'react';
import AmphitheatreSpace from './AmphitheatreSpace';
import CommunitySpace from './CommunitySpace';
import MazuruiSpace from './MazuruiSpace';
import MekatililiSpace from './MekatililiSpace';
import MwanaKuponaSpace from './MwanaKuponaSpace';
import SpacesCard from './SpacesCard';

const SpacesLayout = () => {
  return (
    <div className="spaces-layout py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Available Spaces</h2>

      <div className="spaces-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Individual Space Components */}
        <AmphitheatreSpace />
        <CommunitySpace />
        <MazuruiSpace />
        <MekatililiSpace />
        <MwanaKuponaSpace />
      </div>

      {/* Optionally, you can map through an array of spaces to display them dynamically if the space data is dynamic */}
      <div className="other-spaces mt-12">
        <SpacesCard
          title={''}
          description={''}
          image={''}
          features={[]}
          capacity={''}
          link={''}
        />
      </div>
    </div>
  );
};

export default SpacesLayout;
