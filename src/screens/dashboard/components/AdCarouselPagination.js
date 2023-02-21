import React, {useRef, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel-v4';
import {Colors} from '@app/constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function AdCarouselPagination({data, renderItem, customStyles}) {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const isCarousel = useRef(null);

  return (
    <View>
      <Carousel
        ref={isCarousel}
        data={data}
        renderItem={renderItem}
        onSnapToItem={index => setCarouselIndex(index)}
        sliderWidth={wp('100%')}
        itemWidth={wp('85%')}
        disableIntervalMomentum={true} // One slide only.
        inactiveSlideOpacity={0.8}
        inactiveSlideScale={0.6}
      />

      <Pagination
        dotsLength={data?.length || 0}
        activeDotIndex={carouselIndex}
        carouselRef={isCarousel}
        containerStyle={{...Styles.paginationContainer, ...customStyles}}
        dotStyle={Styles.dot}
        dotContainerStyle={Styles.dotContainer}
        tappableDots={true}
        inactiveDotStyle={Styles.inactiveDot}
        inactiveDotOpacity={0.2}
        inactiveDotScale={1}
      />
    </View>
  );
}

const Styles = StyleSheet.create({
  paginationContainer: {
    paddingTop: hp('2%'),
  },
  dot: {
    width: wp('7%'),
    height: hp('1%'),
    backgroundColor: Colors.textLink,
    borderRadius: 6,
  },
  dotContainer: {
    marginHorizontal: wp('1%'),
  },
  inactiveDot: {
    width: wp('2%'),
    backgroundColor: Colors.productCardSubtitle,
  },
});
