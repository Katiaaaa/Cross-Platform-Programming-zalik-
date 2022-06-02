import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText } from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import './Home.css';
import header from '../../components/header/header';
import { fractions, InputData } from '../../components/fractions/fractions';
import { useEffect, useState } from 'react';
import Form from '../../components/Form/Form';

const Home: React.FC = () => {
  const [data, setForm] = useState<InputData>(
    {
      x1_numerator: 0, 
      x1_denominator: 0, 
      x2_numerator: 0, 
      x2_denominator: 0, 
  })
  const [resultSum, setResultSum] = useState<string>('');
  const [resultDifference, setResultDifference] = useState<string>('');
  const [resultProduct, setResultProduct] = useState<string>('');
  const [resultDivision, setResultDivision] = useState<string>('');

  useEffect(()=>{
    setResultSum(fractions.sum(data));
    setResultDifference(fractions.difference(data));
    setResultProduct(fractions.product(data));
    setResultDivision(fractions.division(data));
  }, [data])

  return (
    <IonPage>
      <header />
      <IonContent fullscreen>
        <Form setForm={setForm}/>
        {resultSum && <IonText>Результат суми дробів: {resultSum}</IonText>} <br/>
        {resultDifference && <IonText>Результат різниці дробів: {resultDifference}</IonText>} <br/>
        {resultProduct && <IonText>Результат добутку дробів: {resultProduct}</IonText>} <br/>
        {resultDivision && <IonText>Результат ділення дробів: {resultDivision}</IonText>} <br/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
