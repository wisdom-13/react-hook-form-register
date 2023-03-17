import React from 'react';
import { useForm } from 'react-hook-form'

function Register() {
  const { register, watch } = useForm();

  const watchNickname = watch('nickname', 'Easton');

  return (
    <form>
      <input type="text" placeholder='Nick Name' {...register('nickname')} />
      <p>{watchNickname}</p>
    </form>
  );
}

export default Register;
