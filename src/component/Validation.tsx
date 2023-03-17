import React, { useState } from 'react';
import { appendErrors, useForm } from 'react-hook-form'

interface Form {
  age: number;
}

function Vaildation() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [result, setResult] = useState('');

  const onSubmit = (data: Form) => {
    setResult(JSON.stringify(data));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit as any)}>
      <input type="number" placeholder='Age' {...register('age', { required: true, min: 17, max: 40 })} />
      {
        errors.age?.type === 'required' && (
          <span>Age is required</span>
        )
      }
      {
        errors.age?.type === 'min' && (
          <span>Mininum age is 17</span>
        )
      }
      {
        errors.age?.type === 'max' && (
          <span>Maximum age is 40</span>
        )
      }
      <input type="submit" />
      <p>{result}</p>
    </form>
  );
}

export default Vaildation;
