import React from "react";
import Back from "../../components/Back";
import { Title } from "../../components/Titles";
import Input from "../../components/Input";
import PrimaryButton from "../../components/PrimaryButton";
import Weekdays from "../../components/Weekdays";
import addIllustration from "../../assets/images/addIllustration.svg";
import AddImageWatch from "../../assets/images/add-img-watch.svg";
import "./AddScreen.css";

const AddScreen = () => {
  return (
    <>
      <div className='flex add-screen-navbar'>
        <Back /> <Title className='navbar-title fw-500' text='Add Schedule' />
      </div>
      <form className='flex column add-form'>
        <Input label='Name' />
        <Input label='URL' />
        <Input label='Hour' type='time' />
        <Weekdays />
        <PrimaryButton className='add-btn-spacing' text='ADD' />
      </form>
      <img
        className='center'
        src={AddImageWatch}
        alt='Two persons on their laptops'
      />
    </>
  );
};

export default AddScreen;
