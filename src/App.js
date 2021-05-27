import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as data from "./data/berlin.json"
import IdCard from "./IdCard"
import Greeting from "./Greetings"
import CreditCard from "./CreditCard"
import BoxColor from "./BoxColor"
import Random from "./Random"
import Rating from "./Rating"
import DriverCard from "./DriverCard"
import LikeButon from './components/LikeButon';
import ClickablePicture from "./components/ClickablePicture"
import Dice from "./components/Dice"
import Carousel from "./components/Carousel"
import NumbersTable from "./components/NumbersTable"
import FaceBook from "./components/Facebook"

function App() {
 const cardData = data.default

/*   cardData.map(e=>{
    return(
    (<IdCard lastName=e.lastName >)
  }) */

  return (
<div>
<div>
<IdCard
  lastName='Doe'
  firstName='John'
  gender='male'
  height={178}
  birth={new Date("1992-07-14")}
  picture="https://randomuser.me/api/portraits/men/44.jpg"
/>
</div>
<div>
<IdCard
  lastName='Delores '
  firstName='Obrien'
  gender='female'
  height={172}
  birth={new Date("1988-05-11")}
  picture="https://randomuser.me/api/portraits/women/44.jpg"
/>
      </div>
<div class = "border border-dark m-4 p-2">      <Greeting language="de" children="Hans"></Greeting> </div>

<div class = "border border-dark m-4 p-2">   <Greeting language="fr" children = "Pierre"></Greeting> </div>
      <Random min={1} max={6} />
      <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white"
      />
      <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />
      <CreditCard
        type="Visa"
        number="0123456789016984"
        expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white"
      />
         <Rating>0</Rating>
      <Rating>1.49</Rating>
      <Rating>1.5</Rating>
      <Rating>3</Rating>
      <Rating>4</Rating>
      <Rating>5</Rating>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: 'Toyota Corolla Altis',
          licensePlate: 'CO42DE',
        }}
      />
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: 'Audi A3',
          licensePlate: 'BE33ER',
        }}
      />
      <LikeButon></LikeButon>
      <ClickablePicture
  img='/img/persons/maxence.png'
  imgClicked='/img/persons/maxence-glasses.png'
/>
<Dice/>
<Carousel
  imgs={[
    'https://randomuser.me/api/portraits/women/1.jpg',
    'https://randomuser.me/api/portraits/men/1.jpg',
    'https://randomuser.me/api/portraits/women/2.jpg',
    'https://randomuser.me/api/portraits/men/2.jpg'
  ]}
/>
<NumbersTable limit={12} />
<FaceBook />
      </div>
  );
}

export default App;
