import React from 'react';
import { MDBDataTable } from 'mdbreact';
const MessDetailsdata = () => {
    const data = {
        columns: [
            {
                label: 'Manager Name',
                field: 'name',
                sort: 'asc',
                width: 150
            },
            {
                label: 'Mess Name',
                field: 'messname',
                sort: 'asc',
                width: 80
            },
            {
                label: 'Food Type',
                field: 'ftype',
                sort: 'asc',
                width: 100
            },
            {
                label: 'Gender Allowed',
                field: 'gender',
                sort: 'asc',
                width: 80
            },
            {
                label: 'Limit',
                field: 'lim',
                sort: 'asc',
                width: 70
            },
            {
                label: 'Email',
                field: 'email',
                sort: 'asc',
                width: 210
            },
            {
                label: 'Phone Number',
                field: 'phnumber',
                sort: 'asc',
                width: 120
            },
            {
                label: 'Actions',
                field: 'act',
                width: 100
            }
        ],
        rows: [
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            },
            {
                name: 'Tiger Nixon',
                messname: 'A',
                ftype: 'Veg',
                gender: 'Male',
                lim: '350',
                email: 'hanuman.abinash@gmail.com',
                phnumber:'7077563854',
                
            }
        ]
    };

    return (
        <>
            {/* <Sidebar /> */}
            <MDBDataTable
                scrollY
                maxHeight="400px"
                // width="50%"
                striped
                bordered
                small
                data={data}
            />
        </>
    );
}

export default MessDetailsdata