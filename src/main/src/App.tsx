import { useMemo } from 'react';
import { greeting } from '../../common/whatever';

export default function App() {
  const content = useMemo(greeting, []);
  return (
    <div className="App">
      <h1>{content}</h1>
    </div>
  );
};
