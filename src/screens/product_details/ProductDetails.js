import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FA from 'react-native-vector-icons/FontAwesome';
import {useSelector, useDispatch} from 'react-redux';

import {
  CommentButton,
  PrimaryButton,
  ProductCounter,
  SmallProductCard,
} from '@app/commons';
import {GetImage} from '@app/utils';
import {Colors} from '@app/constants';
import {addProduct} from '@app/redux/slices';
import {AdCarouselPagination} from '../dashboard/components';
import {ProductDetailsStyles as Styles} from '@app/assets/styles';
import {AddToCartMenu} from './components';

export default function ProductDetails({route, navigation}) {
  const dispatch = useDispatch();

  const dynamicProductData = route.params;

  const {allProducts} = useSelector(state => state?.product || []);

  const [showAddToCartMenu, setShowAddToCartMenu] = useState(false);

  const [productCount, setProductCount] = useState(1);

  const counterIncrement = () => {
    const remainingCount = 10 - dynamicProductData?.count;

    if (productCount + dynamicProductData?.count < 10) {
      setProductCount(productCount + 1);
    } else {
      Alert.alert(
        'Limit Reached | 10 Max',
        dynamicProductData?.count >= 10
          ? `You already have ${dynamicProductData?.count} of this item. You can not add any more.`
          : remainingCount < 0
          ? `You have added the maximum number per item. Please continue to checkout.`
          : `You already have ${dynamicProductData?.count} of this item. You can only add ${remainingCount} more.`,
        [{text: 'Got It'}],
        {
          cancelable: true,
        },
      );
    }
  };

  const counterDecrement = () => {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  };

  const productImages = dynamicProductData?.images?.map(item => {
    return {
      image: GetImage(item),
    };
  });

  const carouselImageItem = ({item}) => (
    <item.image height="100%" width="100%" />
  );

  const smallProductCard = ({item}) => (
    <SmallProductCard
      data={{...item, images: item.images[0]}}
      onPressHandler={() => {}}
    />
  );

  const ListSeparator = () => <View style={{width: wp('5%')}} />;

  const addToCartHandler = () => {
    const productData = {
      id: dynamicProductData?.id || 0,
      title: dynamicProductData?.title || 'Title',
      subtitle: dynamicProductData?.subtitle || 'Subtitle',
      price: dynamicProductData?.price || 0,
      discountedPrice: dynamicProductData?.discountedPrice || null,
      image: dynamicProductData?.images[0] || 'No Image',
      count: productCount,
    };

    dispatch(addProduct(productData));

    setShowAddToCartMenu(true);
  };

  return (
    <View style={Styles.mainContainer}>
      <AddToCartMenu
        modalState={showAddToCartMenu}
        modalChange={setShowAddToCartMenu}
        navigation={navigation}
      />

      <LinearGradient
        start={{x: 0.5, y: 0.2}}
        colors={['#FFF', '#EDEDED']}
        locations={[0.1, 1]}
        style={Styles.topContainer}>
        <View style={Styles.carouselContainer}>
          <AdCarouselPagination
            data={Array.isArray(productImages) && productImages}
            renderItem={carouselImageItem}
            customStyles={CustomStyles.paginationContainer}
          />
        </View>
      </LinearGradient>

      <View style={Styles.bottomContainer}>
        <View style={Styles.infoContainer}>
          <View style={Styles.titleContainer}>
            <View style={Styles.titleLeftContainer}>
              <Text style={Styles.subtitle} numberOfLines={1}>
                {dynamicProductData?.subtitle || 'Subtitle'}
              </Text>
              <Text style={Styles.title} numberOfLines={1}>
                {dynamicProductData?.title || 'Title'}
              </Text>
            </View>

            <View style={Styles.titleRightContainer}>
              <View style={Styles.starContainer}>
                <FA
                  name="star"
                  color={Colors.promotionCardText}
                  size={18}
                  style={Styles.starIcon}
                />

                <Text style={Styles.subtitle} numberOfLines={1}>
                  ({dynamicProductData?.rating || 0.0})
                </Text>
              </View>

              <Text style={Styles.title} numberOfLines={1}>
                {`Rs. ${dynamicProductData?.price || 0}`}
              </Text>
            </View>
          </View>

          <View style={Styles.descriptionContainer}>
            <Text style={Styles.subtitle} numberOfLines={2}>
              {dynamicProductData?.description || 'Description'}
            </Text>
          </View>

          <View style={Styles.buttonsContainer}>
            <ProductCounter
              value={productCount}
              setValue={setProductCount}
              customStyles={CustomStyles.productCounter}
              iconSize={28}
              counterPlusHandler={counterIncrement}
              counterMinusHandler={counterDecrement}
            />

            <View style={Styles.buttonsRightContainer}>
              <CommentButton
                customStyles={CustomStyles.commentButton}
                onPressHandler={() => {}}
              />

              <PrimaryButton
                buttonLabel="Add to Cart"
                buttonRadius={8}
                buttonHeight={hp('6%')}
                buttonWidth={wp('40%')}
                buttonIconName="cart-outline"
                buttonIconSize={22}
                buttonIconColor={Colors.white}
                onPressHandler={addToCartHandler}
              />
            </View>
          </View>

          <View style={Styles.horizontalLine} />
        </View>

        <View style={Styles.moreProductsContainer}>
          <Text style={Styles.moreProductsTitle}>Similar to this</Text>

          <View style={Styles.similarProductsContainer}>
            <FlatList
              horizontal
              data={allProducts}
              renderItem={smallProductCard}
              keyExtractor={data => data?.id}
              contentContainerStyle={Styles.listContainer}
              ItemSeparatorComponent={ListSeparator}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const CustomStyles = StyleSheet.create({
  paginationContainer: {
    paddingTop: hp('5%'),
  },
  commentButton: {
    borderRadius: 10,
  },
  productCounter: {
    height: hp('4.6%'),
    width: wp('24%'),
  },
});
