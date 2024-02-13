import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import { UserIcon, ChevronDownIcon, AdjustmentsVerticalIcon, ShareIcon } from "react-native-heroicons/outline"
import Categories from '../components/Categories';
import FeatureRow from '../components/FeatureRow';
import sanityClient from '../sanity';
import client from '../sanity';
// import sanityClient from "../sanity"

export default function HomeScreen() {
  const navigation = useNavigation();

  const [featuredCategory, setFeaturedCategory] = useState()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  });
  const query = `*[_type == "featured"]{
    ...,
    restaurants[]->{
    ...,
       dishes[]->
    }
  }`


  // useEffect(() => {
  //   client.fetch(`
  //   *[_type == "featured"] {
  //     ....
  //     restaurants[]->{
  //       ....
  //       dishes[]->
  //     }
  //   }   
  //   `).then(data => {
  //     setFeaturedCategory(data)
  //     // console.log(data)
  //   })
  // }, []);

  useEffect(() => {
    client.fetch(query).then(data => {
      // console.log(person)
      setFeaturedCategory(data)
    })
  }, [])
  // .log(featuredCategory)

  return (
    <SafeAreaView className="bg-white pt-7" >
      {/* <Text > */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image source={{
          uri: "https://cdn.dribbble.com/userupload/10816684/file/original-5c570283785e5cfcf18fd1014b551172.png?resize=400x300&vertical=center"
        }}
          className="h-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">
            Delivery Now!
          </Text>
          <Text className='font-bold text-xl'>Currect Location
            <ChevronDownIcon size={20} color="#00cc88" className="mt-5" />
          </Text>
        </View>

        <UserIcon size={30} color="#00cc88" onPress={() => navigation.navigate("Test")} />
      </View>

      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 ">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3 rounded-2xl" >
          <ShareIcon color="gray" size={20} />
          <TextInput placeholder='Restaurants and cuisiones' keyboardType='default' />
        </View>

        <AdjustmentsVerticalIcon color="#00cc88" />
      </View>

      {/* Body */}
      <ScrollView className="bg-gray-100 " contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Component */}
        <Categories />

        {/* Feature row */}
        {
          featuredCategory?.map(cat => (
            <FeatureRow id={cat?._id} key={cat?._id} title={cat?.name} description={cat?.short_description} />
          ))
        }

        {/* <FeatureRow id="123" title="Featured" description="Paid placements from our partners" featureCategory="Featured" />
        <FeatureRow id="1234" title="Tasty Discount" description="Paid placements from our partners" featureCategory="Featured" />
        <FeatureRow id="12345" title="Offers near you!" description="Paid placements from our partners" featureCategory="Featured" /> */}
      </ScrollView>

      {/* </Text> */}
    </SafeAreaView >
  )
}
