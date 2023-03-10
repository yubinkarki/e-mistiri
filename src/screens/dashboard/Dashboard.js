import React, {useState} from 'react';
import {View, StatusBar, ScrollView, FlatList, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import {useForm} from 'react-hook-form';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import {Colors, Images} from '@app/constants';
import {InputField, FilterButton, ProductCard} from '@app/commons';
import {
  AdCarouselItem,
  AdCarouselPagination,
  AdData,
  VehicleCategoryCard,
  VehicleCategoryData,
  SegmentedProductCategory,
} from './components';
import {SearchSubmit} from '@app/utils';
import {DashboardStyles as Styles} from '@app/assets/styles';

export default function Dashboard({navigation}) {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const {allProducts} = useSelector(state => state?.product || []);
  const {cartProducts} = useSelector(state => state?.cart || []);

  const [searching, setSearching] = useState(false);
  const [vehicleCategory, setVehicleCategory] = useState(VehicleCategoryData);

  const searchSubmitHandler = data => {
    SearchSubmit(data, setSearching);
  };

  const renderCarouselItem = ({item}) => (
    <View>
      <AdCarouselItem
        key={item.id}
        title={item.title}
        subtitle={item.subtitle}
        image={item.image}
      />
    </View>
  );

  const changeSelectedVehicle = itemId =>
    setVehicleCategory(
      vehicleCategory.map(item =>
        item.id === itemId
          ? {...item, isActive: true}
          : {...item, isActive: false},
      ),
    );

  const vehicleCategoryItem = ({item}) => (
    <VehicleCategoryCard
      title={item.title}
      image={item.image}
      isActive={item.isActive}
      onPress={() => changeSelectedVehicle(item.id)}
    />
  );

  const productCardPressHandler = item => {
    let modifiedItem = {...item, count: 0};

    if (Array.isArray(cartProducts) && cartProducts.length) {
      const doesItemAlreadyExist = cartProducts.some(
        product => product.id === item.id,
      );

      if (doesItemAlreadyExist) {
        cartProducts.find(product => {
          if (product.id === item.id) {
            modifiedItem = {...modifiedItem, count: product.count};
          }
        });
      }
    }

    navigation.navigate('ProductDetails', modifiedItem);
  };

  return (
    <View style={Styles.mainContainer}>
      <StatusBar backgroundColor={Colors.white} barStyle="dark-content" />

      <Spinner
        visible={searching}
        color={Colors.white}
        overlayColor={Colors.overlaySpinnerBackground}
        animation="fade"
      />

      <View style={Styles.searchContainer}>
        <InputField
          control={control}
          errors={errors}
          inputName="search"
          labelText="Search for products"
          customStyles={{width: wp('70%')}}
          left={<TextInput.Icon icon={Images.searchIcon} />}
          onSubmitEditing={handleSubmit(searchSubmitHandler)}
        />

        <View style={Styles.filterButtonContainer}>
          <FilterButton onPress={handleSubmit(searchSubmitHandler)} />
        </View>
      </View>

      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={Styles.carouselContainer}>
          <AdCarouselPagination data={AdData} renderItem={renderCarouselItem} />
        </View>

        <View style={Styles.vehicleCategoryContainer}>
          <FlatList
            horizontal
            data={vehicleCategory}
            renderItem={vehicleCategoryItem}
            keyExtractor={data => data.id}
            ItemSeparatorComponent={() => <View style={{width: wp('4%')}} />}
          />
        </View>

        <View style={Styles.segmentedButtonContainer}>
          <SegmentedProductCategory />
        </View>

        <View style={Styles.productListContainer}>
          {Array.isArray(allProducts) && allProducts.length
            ? allProducts.map(item => (
                <ProductCard
                  key={item.id}
                  data={{...item, images: item.images[0]}}
                  onPress={() => productCardPressHandler(item)}
                />
              ))
            : []}
        </View>
      </ScrollView>
    </View>
  );
}
