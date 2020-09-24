import React from 'react';
import SlotMachine from './SlotMachine';

function App() {
  return (
    <div>
      <h1>Slot Machine Exercise</h1>
      <SlotMachine s1="🥮" s2="🥮" s3="🥮" />
      <SlotMachine s1="🥮" s2="🥘" s3="🧆" />
      <SlotMachine s1="🥘" s2="🥘" s3="🧆" />
      <SlotMachine s1="🥮" s2="🧆" s3="🧆" />
    </div>
  );
}

export default App;
