import { yupResolver } from '@hookform/resolvers/yup';
import { IonButton, IonInput, IonItem, IonLabel, IonText } from '@ionic/react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { InputData } from '../fractions/fractions';

interface FormProps {
    setForm: (data: InputData) => void;
}

const validationSchema = yup.object({
    x1_numerator: yup.number()
    .required("Обов'язкове поле"),
    x1_denominator: yup.number()
    .min(1, 'Значення має бути додатнім')
    .required("Обов'язкове поле"),
    x2_numerator: yup.number()
    .required("Обов'язкове поле"),
    x2_denominator: yup.number()
    .min(1, 'Значення має бути додатнім')
    .required("Обов'язкове поле"),
    
})

const Form: React.FC<FormProps> = ({setForm}) => {
    const {register, handleSubmit, formState: {errors}} = useForm<InputData>({
        resolver: yupResolver(validationSchema)
    });

  const result = (data: InputData) => {
      setForm(data);
  }
  
  return (
    <form onSubmit={handleSubmit(result)}>
        <IonLabel style={{marginLeft: '10px'}}>А</IonLabel>
        <IonItem>
            <IonLabel position='floating'>Знаменик</IonLabel>
            <IonInput type='number' {...register('x1_numerator')}/>
        </IonItem>
        {errors && errors.x1_numerator && (
            <IonText color="danger" className="ion-padding-start">
                {errors.x1_numerator.message}
            </IonText>
        )}
        <IonItem>
            <IonLabel position='floating'>Чисельник</IonLabel>
            <IonInput type='number' {...register('x1_denominator')}/>
        </IonItem>
        {errors && errors.x1_denominator && (
            <IonText color="danger" className="ion-padding-start">
                {errors.x1_denominator.message}
            </IonText>
        )}
        <IonLabel style={{marginLeft: '10px'}}>В</IonLabel>
        <IonItem>
            <IonLabel position='floating'>Знаменик</IonLabel>
            <IonInput type='number' {...register('x2_numerator')}/>
        </IonItem>
        {errors && errors.x2_numerator && (
            <IonText color="danger" className="ion-padding-start">
                {errors.x2_numerator.message}
            </IonText>
        )}
        <IonItem>
            <IonLabel position='floating'>Чисельник</IonLabel>
            <IonInput type='number' {...register('x2_denominator')}/>
        </IonItem>
        {errors && errors.x2_denominator && (
            <IonText color="danger" className="ion-padding-start">
                {errors.x2_denominator.message}
            </IonText>
        )}
        <IonButton expand='block' type="submit">Result</IonButton>
    </form>
  )
}

export default Form