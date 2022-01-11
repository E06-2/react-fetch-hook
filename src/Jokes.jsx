import React from 'react';
import useFetch from './hooks/useFetch';

const Jokes = () => {
  const url = 'https://geek-jokes.sameerkumar.website/api?format=json';

  const { data, reFetch } = useFetch(url);
  const { results, loading, error } = data;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <h1>Jokes Component</h1>
      <h2>{results.joke}</h2>
      <button onClick={reFetch}>Another Joke</button>
    </main>
  );
};

export default Jokes;
