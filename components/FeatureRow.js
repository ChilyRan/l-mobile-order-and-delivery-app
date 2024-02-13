import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import sanityClient from '../sanity'

const FeatureRow = ({ description, title, id }) => {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        sanityClient.fetch(`
        *[_type == "featured"  && _id == $id]{
            ...,
            restaurants[]->{
            ...,
               dishes[]->,
                 type-> {
                   name
                 }
            }
          }[0]
        `, { id }).then((data) => {
            setRestaurants(data?.restaurants)
        })
    }, []);

    return (
        <View>
            <View className="mt-4 flex-row items-center justify-between px-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00cc88" />
            </View>
            <Text className="text-xs text-gray-500 px-4" > {description}</Text>
            <ScrollView horizontal contentContainerStyle={{ paddingHorizontal: 15 }} showsHorizontalScrollIndicator={false} className="pt-4">
                {/* Restaurant card */}
                {
                    restaurants?.map(rest => (
                        <RestaurantCard
                            key={rest?._id}
                            id={rest?._id}
                            imgUrl={rest?.image}
                            title={rest?.name}
                            rating={rest?.rating}
                            genre={rest?.type?.name}
                            address={rest?.address}
                            short_description={rest?.short_description}
                            dishes={rest?.dishes}
                            long={rest?.long}
                            lat={rest?.lat} />
                    ))
                }
                {/* <RestaurantCard
                    id={123}
                    imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2rkRVPT1qwJl-EgJZEmm4MULp3z1FMd-sXPzq0P1cNKrOfH7Sa_k0FsxV3DEwlVj9sc&usqp=CAU"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0} />
                <RestaurantCard
                    id={123}
                    imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2rkRVPT1qwJl-EgJZEmm4MULp3z1FMd-sXPzq0P1cNKrOfH7Sa_k0FsxV3DEwlVj9sc&usqp=CAU"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0} />
                <RestaurantCard
                    id={123}
                    imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2rkRVPT1qwJl-EgJZEmm4MULp3z1FMd-sXPzq0P1cNKrOfH7Sa_k0FsxV3DEwlVj9sc&usqp=CAU"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0} />
                <RestaurantCard
                    id={123}
                    imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2rkRVPT1qwJl-EgJZEmm4MULp3z1FMd-sXPzq0P1cNKrOfH7Sa_k0FsxV3DEwlVj9sc&usqp=CAU"
                    title="Yo! Sushi"
                    rating={4.5}
                    genre="Japanese"
                    address="123 Main St"
                    short_description="This is a Test description"
                    dishes={[]}
                    long={20}
                    lat={0} /> */}
            </ScrollView>
        </View>
    )
}

export default FeatureRow
