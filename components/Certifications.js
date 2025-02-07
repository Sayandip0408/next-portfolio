import { db } from '@/firebase_config';
import { collection, getDocs, query } from 'firebase/firestore';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Certifications = () => {
    const [certificateData, setCertificateData] = useState([]);

    const getData = async () => {
        const certificates = [];
        const q = query(collection(db, "certificates"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            certificates.push(doc.data());
        });
        setCertificateData(certificates);
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <div className='mt-2 p-2'>
            <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] text-2xl text-center font-bold'>
                : Certifications :
            </h3>
            <div className='w-full lg:w-[80vw] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-2 my-5'>
                {certificateData.map((data) => (
                    <div key={data.docID} className='p-1'>
                        <Image src={data.image} alt={data.name} height={5000} width={5000} className='h-full w-full rounded-md' />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Certifications