import { View, Text, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon, ChevronRightIcon, QuestionMarkCircleIcon, StarIcon, WalletIcon } from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import BasketIcon from '../components/BasketIcon';
import { useDispatch } from 'react-redux';
import { setRestaurant } from '../features/restaurantSlice';

const RestuarantScreen = () => {
    const navigatation = useNavigation();
    const dispatch = useDispatch()
    const { params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat
    } } = useRoute();



    useEffect(() => {
        dispatch(setRestaurant({
            id,
            imgUrl,
            title,
            rating,
            genre,
            address,
            short_description,
            dishes,
            long,
            lat
        }))
    }, []);



    useLayoutEffect(() => {
        navigatation.setOptions({
            headerShown: false,
        })
    }, []);


    return (
        <>
            <BasketIcon />
            <ScrollView>
                <View className="relative">
                    <Image source={{
                        uri: urlFor(imgUrl).url()
                    }} className="w-full h-56 bg-gray-300 p-4" />

                    <TouchableOpacity onPress={navigatation.goBack} className="absolute top-10 left-2 p-2 bg-gray-100 rounded-full">
                        <ArrowLeftIcon size={20} color="#00cc88" />
                    </TouchableOpacity>
                </View>

                <View className="bg-white">
                    <View className="px-4 pt-4">
                        <Text className="text-3xl font-bold">{title}</Text>
                        <View className="flex-row  space-x-2 my-1">
                            <View className="flex-row items-center space-x-1">
                                <StarIcon color="green" opacity={0.5} size={22} />
                                <Text className="text-xs text-gray-500">
                                    <Text className="text-green-500 ">{rating}</Text> . {genre}
                                </Text>
                            </View>

                            <View className="flex-row items-center space-x-1">
                                <WalletIcon color="gray" opacity={0.5} size={22} />
                                <Text className="text-xs text-gray-500">
                                    Nearby . {address}
                                </Text>
                            </View>
                        </View>
                        <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
                    </View>

                    <TouchableOpacity className="flex-row items-center space-x-2 p-2 border-y border-gray-300">
                        <QuestionMarkCircleIcon color="gray" opacity={0.5} size={20} />
                        <Text className="pl-2 flex-1 text-md font-bold"> Have a food allergy?</Text>
                        <ChevronRightIcon color="#00cc88" />
                    </TouchableOpacity>
                </View>

                <View className="pb-36">
                    <Text className="px-4 pt-5 mb-3 font-bold text-xl">Menu</Text>

                    {/* Dishrow */}
                    {dishes?.map((dish, index) => (
                        <>
                            <DishRow
                                key={dish._id}
                                id={dish._id}
                                name={dish.name}
                                description={dish.short_description}
                                price={dish.price}
                                image={dish.image}
                            />
                        </>
                    ))}
                </View>
            </ScrollView>
        </>
    )
}

export default RestuarantScreen