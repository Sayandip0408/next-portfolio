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

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index) => {
        setSelectedImage(certificateData[index].image);
        setCurrentIndex(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const prevImage = () => {
        const newIndex = (currentIndex - 1 + certificateData.length) % certificateData.length;
        setSelectedImage(certificateData[newIndex].image);
        setCurrentIndex(newIndex);
    };

    const nextImage = () => {
        const newIndex = (currentIndex + 1) % certificateData.length;
        setSelectedImage(certificateData[newIndex].image);
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        getData();
    }, [])

    return (
        // <div className='mt-2 p-2'>
        //     <h3 className='text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] text-2xl text-center font-bold'>
        //         : Certifications :
        //     </h3>
        //     <div className='w-full lg:w-[80vw] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 my-5'>
        //         {certificateData.map((data) => (
        //             <div key={data.docID} className='p-1 cursor-pointer hover:brightness-90'>
        //                 <Image src={data.image} alt={data.name} height={5000} width={5000} className='h-full w-full rounded-sm' />
        //             </div>
        //         ))}
        //     </div>
        // </div>
        <div className="mt-2 p-2">
            <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#4AA4FF] to-[#B575F7] text-2xl text-center font-bold">
                : Certifications :
            </h3>
            <div className="w-full lg:w-[80vw] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 my-5">
                {certificateData.map((data, index) => (
                    <div key={data.docID} className="p-1 cursor-pointer hover:brightness-90" onClick={() => openModal(index)}>
                        <Image src={data.image} alt={data.name} height={5000} width={5000} className="h-full w-full rounded-sm" />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={closeModal}>
                    {/* Navigation buttons for larger screens */}
                    <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="hidden md:block absolute left-5 text-white text-3xl">
                        ❮
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="hidden md:block absolute right-5 text-white text-3xl">
                        ❯
                    </button>

                    <div className="relative max-w-[90vw] max-h-[90vh] p-2" onClick={(e) => e.stopPropagation()}>
                        <Image src={selectedImage} alt="Selected Certificate" height={800} width={800} className="max-w-full max-h-full rounded-md" />
                    </div>

                    {/* Navigation buttons for mobile (bottom center) */}
                    <div className="md:hidden absolute bottom-5 flex justify-between w-full px-5">
                        <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="text-white text-3xl">
                            ❮
                        </button>
                        <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="text-white text-3xl">
                            ❯
                        </button>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Certifications