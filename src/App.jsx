import React from 'react';

import Home from './views/Home';

function App() {

  return (
    <div className="bg-zinc-900 text-zinc-300 p-4">
      <Home />

      <div className='absolute left-0 text-center font-semibold w-full mt-4 py-2 bg-zinc-800'>
        <p>Copyright © 2022 All rights reserved.</p>
      </div>
    </div>
  )
}

export default App
