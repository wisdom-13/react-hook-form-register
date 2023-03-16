import React, { useState } from 'react';
import { useForm, Controller, FormProvider, useFormContext } from 'react-hook-form'

function NestedInput() {
  const { register } = useFormContext();
  return (
    <input placeholder='User Name' {...register('name')} />
  )
}

interface Form {
  name: string;
}

function App() {
  const methods = useForm();
  const [result, setResult] = useState('');

  const onSubmit = (data: Form) => {
    setResult(JSON.stringify(data));
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit as any)}>
        <NestedInput />
        <input type="submit" />
        <p>{result}</p>
      </form>
    </FormProvider>
  );
}

export default App;
