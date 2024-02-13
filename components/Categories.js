import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity';

const Categories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "category"]
        `).then(data => {
            setCategories(data)
        })
    }, []);
    return (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }} horizontal showsHorizontalScrollIndicator={false}>
            {
                categories?.map((category) => (
                    <CategoryCard key={category?._id} imgUrl={urlFor(category?.image).url()} title={category?.name} />
                ))
            }
            {/* <CategoryCard imgUrl="https://i.pinimg.com/236x/e0/9c/81/e09c81344c1c817742a665662b17db45.jpg" title="Testing1" />
            <CategoryCard imgUrl="https://i.pinimg.com/originals/da/f8/5e/daf85ef37b4a9766768cb77a429dd9bc.jpg" title="Testing2" />
            <CategoryCard imgUrl="https://i.pinimg.com/236x/e5/89/1d/e5891d1910479adf7940cf9b21b528af.jpg" title="Testing3" />
            <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPxSmlWCvuE2kAkhvf6cGtU2abV3P2wjJow97OIZYB-lGlt1DGblSB-F0UsKvACbrj1Y&usqp=CAU" title="Testing4" />
            <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSPxSmlWCvuE2kAkhvf6cGtU2abV3P2wjJow97OIZYB-lGlt1DGblSB-F0UsKvACbrj1Y&usqp=CAU" title="Testing5" /> */}
        </ScrollView>
    )
}

export default Categories