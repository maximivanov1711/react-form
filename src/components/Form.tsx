import { FieldValues, useForm } from 'react-hook-form';

type FormData = {
  name: string;
  age: number;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mb-3'>
        <label htmlFor='name' className='form-label'>
          Name
        </label>
        <input
          {...register('name', { required: true, minLength: 3 })}
          type='text'
          id='name'
          className='form-control'
        />
        {errors.name?.type === 'required' && (
          <p className='text-danger'>Please enter your name.</p>
        )}
        {errors.name?.type === 'minLength' && (
          <p className='text-danger'>Name must be at leat 3 characters.</p>
        )}
      </div>
      <div className='mb-3'>
        <label htmlFor='age' className='form-label'>
          Age
        </label>
        <input
          {...register('age', { required: true, min: 14 })}
          type='number'
          id='age'
          className='form-control'
        />
        {errors.age?.type === 'min' && (
          <p className='text-danger'>You must be over 14 years old.</p>
        )}
      </div>
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
};

export default Form;
