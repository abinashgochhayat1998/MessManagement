import React from 'react';
import { MDBDataTable } from 'mdbreact';
const StudentDetailsdata = () => {
    const data = {
        columns: [
            {
                label: 'Name',
                field: 'name',
                sort: 'asc',
                width: '150',
            },
            {
                label: 'Room',
                field: 'room',
                sort: 'asc',
                width: '75'
            },
            {
                label: 'Hostel',
                field: 'hostel',
                sort: 'asc',
                width: '75',
            },
            {
                label: 'Batch',
                field: 'batch',
                sort: 'asc',
                width: '75',
            },
            {
                label: 'Year',
                field: 'yr',
                sort: 'asc',
                width: '75',
            },
            {
                label: 'Roll Number',
                field: 'roll',
                sort: 'asc',
                width: '75',
            },
            {
                label: 'Email',
                field: 'email',
                sort: 'asc',
                width: '200',
            },
            {
                label: 'Phone Number',
                field: 'pnum',
                sort: 'asc',
                width: '100',
            },
            {
                label: 'Actions',
                field: 'act',
                width: '70',
            }

        ],
        rows: [
            {
                name: 'Abinash Gochhayat',
                room:'509',
                hostel:'OLD MHB',
                batch:'MCA',
                yr:'2020',
                roll:'M200674CA',
                email:'abinash_m200674ca@nitc.ac.in',
                pnum:'7077563854',
                act:'',
            },
        ]
    };

    return (
        <>
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

export default StudentDetailsdata