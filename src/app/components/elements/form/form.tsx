import { DeliveryFormData, DeliveryFormProps } from '@/app/interfaces/interfaces';
import { useForm } from 'react-hook-form';
import { validateForm, validatePhone, validateEmail } from '../../../../../utils/functions';
import './form.css';

const Form: React.FC<DeliveryFormProps> = ({ fields, onSubmit, submitButtonLabel }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<DeliveryFormData>();
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {fields.map((field) => (
          <div className='form__field-container' key={field.name}>
            <p className='form__label'>{field.label}</p>
            <input
              className='form__input'
              type={field.type}
              {...register(field.name, {
                ...field.validation,
                validate: field.name === 'phone' ? validatePhone : field.name === 'email' ? validateEmail : validateForm
              })}
            />
            {errors[field.name] && <p className='form__warning'>{errors[field.name]?.message}</p>}
          </div>
        ))}
        <button className='btn form__submit' type="submit">{submitButtonLabel}</button>
      </form>
    );
  };
  
  export default Form;