import React from 'react'
import Messcard from './Messcard';
import Sidebar from './Sidebar';


const Messenroll = () => {


    return (
        <>
            <Sidebar />
            <div style={{ marginLeft: '308px' }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Messcard Title='abinash' FoodCategory='veg' Gender='Male' LiveCount='120/250' />
                    <Messcard Title='abinash' FoodCategory='veg' Gender='Male' LiveCount='120/250' />
                    <Messcard Title='abinash' FoodCategory='veg' Gender='Male' LiveCount='120/250' />
                    <Messcard Title='abinash' FoodCategory='veg' Gender='Male' LiveCount='120/250' />
                    <Messcard Title='abinash' FoodCategory='veg' Gender='Male' LiveCount='120/250' />
                    <Messcard Title='abinash' FoodCategory='veg' Gender='Male' LiveCount='120/250' />
                    <Messcard Title='abinash' FoodCategory='veg' Gender='Male' LiveCount='120/250' />
                    <Messcard Title='abinash' FoodCategory='veg' Gender='Male' LiveCount='120/250' />
                </div>
            </div>
        </>
    )
}

export default Messenroll