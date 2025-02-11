import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import Loading from './components/LoadingScrean';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? <Loading /> : <TodoList />}
    </>
  );
}

export default App;
