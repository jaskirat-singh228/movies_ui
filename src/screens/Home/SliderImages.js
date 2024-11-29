import { FlatList, Image, StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { CONTINUE_WATCH1, CONTINUE_WATCH2, LATEST_RELEASES1, LATEST_RELEASES2, NEXT_ARROW, PLAY, PLUS, SLIDER_IMAGE1, SLIDER_IMAGE2, SLIDER_IMAGE3, SLIDER_IMAGE4, SLIDER_IMAGE5, SLIDER_IMAGE6, SLIDER_IMAGE7, SLIDER_IMAGE8 } from '../../asset/Images'
import LinearGradient from 'react-native-linear-gradient';

const SliderImages = () => {

  const sliderImages = [
    {
      id: 1,
      image: SLIDER_IMAGE1,
      name: ''
    },
    {
      id: 2,
      image: CONTINUE_WATCH1,
      name: ''
    },
    {
      id: 3,
      image: CONTINUE_WATCH2,
      name: ''
    },
    {
      id: 4,
      image: SLIDER_IMAGE1,
      name: ''
    },
    {
      id: 5,
      image: LATEST_RELEASES1,
      name: ''
    },
    {
      id: 6,
      image: LATEST_RELEASES2,
      name: ''
    },
    {
      id: 7,
      image: SLIDER_IMAGE1,
      name: ''
    },
    {
      id: 8,
      image: CONTINUE_WATCH2,
      name: ''
    }
  ]

  const WIDTH = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState(0);

  const flatListRef = useRef(null);

  const totalIndex = sliderImages.length - 1;

  const scrollToIndex = useCallback((index) => {
    //for Auto Slide
    if (flatListRef.current && index >= 0 && index <= totalIndex) {
      flatListRef.current.scrollToIndex({ animated: true, index });
      //for Button clicks
      setCurrentIndex(index);
    } else {
      flatListRef.current.scrollToIndex({ animated: true, index: 0 })
    }
  }, [totalIndex]);

  const onPressPrevButton = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      console.log(prevIndex);

      scrollToIndex(prevIndex);
    }
  }

  const onPressNextButton = () => {
    if (currentIndex < totalIndex) {
      const nextIndex = currentIndex + 1;
      scrollToIndex(nextIndex);
    }
  };

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentIndex(prevIndex => {
  //       const nextIndex = (prevIndex < totalIndex) ? prevIndex + 1 : 0;
  //       scrollToIndex(nextIndex);
  //       return nextIndex;
  //     });
  //   }, 2500);

  //   return () => clearInterval(intervalId);
  // }, [totalIndex, scrollToIndex]);
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient
        style={{ height: 75, width: WIDTH, position: 'absolute', zIndex: 100, }}
        colors={['rgba(0,0,0,0.5)', 'rgba(0,0,0,0.23)', 'rgba(0,0,0,0.18)', 'transparent']} />
      <View style={styles.buttonView}>
        {
          currentIndex != 0 ?
            <TouchableOpacity
              onPress={onPressPrevButton}
              style={styles.buttonStyle}>
              <Image
                source={NEXT_ARROW}
                style={{ transform: [{ rotate: '180deg' }], height: 20 }}
              />
            </TouchableOpacity>
            : null
        }
        {
          currentIndex < totalIndex ?
            <TouchableOpacity
              onPress={onPressNextButton}
              style={[styles.buttonStyle, { left: currentIndex == 0 ? 335 : null }]}>
              <Image
                style={{ height: 20 }}
                source={NEXT_ARROW}
              />
            </TouchableOpacity>
            : null
        }


      </View>
      <FlatList
        ref={flatListRef}
        data={sliderImages}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={{ alignItems: 'center' }}>
              <Image
                source={item.image}
                style={{ height: 430, width: WIDTH }}
              />
            </View>
          )
        }}
      />
      <LinearGradient
        style={{ height: 100, position: 'absolute', zIndex: 100, width: WIDTH, top: 340 }}
        colors={['transparent', 'rgba(0,0,0,0.6)', 'rgba(0,0,0,0.75)', 'rgba(0,0,0,0.88)', 'rgba(0,0,0,1)']} />
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginVertical: 20, marginTop: 50 }}>
        <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }}>Hindi</Text>
        <View style={{ height: 5, width: 5, backgroundColor: 'white', borderRadius: 20, marginHorizontal: 5 }} />
        <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }}>Drama</Text>
        <View style={{ height: 5, width: 5, backgroundColor: 'white', borderRadius: 20, marginHorizontal: 5 }} />
        <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }}>Thriller</Text>
        <View style={{ height: 5, width: 5, backgroundColor: 'white', borderRadius: 20, marginHorizontal: 5 }} />
        <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }}>Revenge</Text>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity style={{
          height: 50,
          width: 230,
          backgroundColor: "#373A40",
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Image
              source={PLAY}
              style={{ tintColor: 'white', height: 15, width: 15 }}
            />
            <Text style={{ color: 'white', fontWeight: '600', fontSize: 16, marginLeft: 5 }}>Watch Now</Text>
          </View>

        </TouchableOpacity>
        <TouchableOpacity style={{
          height: 50,
          width: 50,
          backgroundColor: "#373A40",
          borderRadius: 10,
          marginLeft: 15,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image
            style={{ tintColor: 'white', height: 25, width: 25 }}
            source={PLUS}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 15 }}>
        {
          sliderImages.map((item, index) => {
            return (
              <View style={{
                backgroundColor: currentIndex == index ? 'white' : 'gray',
                height: 8,
                width: 8,
                borderRadius: 20,
                marginLeft: 5
              }}></View>
            )
          })
        }
      </View>
    </View>
  )
}

export default SliderImages

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 11,
    borderRadius: 200,
    backgroundColor: 'gray',
    paddingVertical: 16
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 390,
    position: 'absolute',
    zIndex: 100,
    top: 250,
    alignSelf: 'center'
  }
})