import React, { useState } from 'react';
import { useForm } from 'react-hook-form'

interface Form {
  name: string;
  password: string;
}

function App() {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState('');

  const onSubmit = (data: Form) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit as any)}>
      <input type="text" {...register('name')} placeholder="User Name" />
      <input type="password" {...register('password')} placeholder="Password" />
      <input type="submit" />
      <p>{result}</p>
    </form>
  );
}

export default App;
