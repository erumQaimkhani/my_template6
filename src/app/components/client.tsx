'use client'; 

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
const Client = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded shadow-md text-center">
      <h2 className="text-xl font-semibold">Welcome to our Web site</h2>
      <p className="mt-2 text-gray-600">This Web site is  for evryone</p>
      <div className="mt-4">
        <Button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setCount(count + 1)}
        >
          Like
        </Button>
        <Button
          className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => setCount(count - 1)}
        >
          Dislike
        </Button>
      </div>
      <p className="mt-4 text-lg font-bold">Count: {count}</p>
    </div>
  );
};

export default Client;
