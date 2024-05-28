import { DeliveryFormData, DeliveryFormField } from "@/app/interfaces/interfaces";
import Form from "./form";
import { SubmitHandler } from "react-hook-form";
import { useSession } from "next-auth/react";

const DeliveryForm: React.FC = () => {
    const session = useSession()

    const fields: DeliveryFormField[] = [
      {
        name: 'firstName',
        label: 'Имя',
        type: 'text',
        validation: { required: 'Имя обязательно' },
      },
      {
        name: 'lastName',
        label: 'Фамилия',
        type: 'text',
        validation: { required: 'Фамилия обязательна' },
      },
      {
        name: 'phone',
        label: 'Телефон',
        type: 'text',
        validation: {
          required: 'Телефон обязателен',
          pattern: {
            value: /^\+\d{3}[-\s]?(\d{2})[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}$/,
            message: 'Введен неверный телефонный номер',
          },
        },
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        validation: {
          required: 'Email обязателен',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: 'Введен неверный email адрес',
          },
        },
      },
      {
        name: 'city',
        label: 'Город',
        type: 'text',
        validation: { required: 'Город обязателен' },
      },
      {
        name: 'address',
        label: 'Улица и номер дома',
        type: 'text',
        validation: { required: 'Улица и номер дома обязательны' },
      },
    ];
  
    const onSubmit: SubmitHandler<DeliveryFormData> = (data) => {
      console.log(data);
    };
  
    return (
      <div className="delivery__info">
        {session?.data?(
        <div className="delivery__form"> 
        <Form fields={fields} onSubmit={onSubmit} submitButtonLabel="Отправить" />
        <p>Оплата производится курьеру при получении заказа.</p>
        </div>
        ):(
          <p>Войдите в аккаунт для оформления доставки</p> 
        )}
      </div>
    );
  };
  
  export default DeliveryForm;