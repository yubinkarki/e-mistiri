import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useForm} from 'react-hook-form';
import {TextInput} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {FilterButton, InputField, ProductCard} from '@app/commons';
import {Colors, Images} from '@app/constants';

export default function Shop() {
  const {
    control,
    formState: {errors},
  } = useForm();

  const {allProducts} = useSelector(state => state?.product || {});

  const productListItem = ({item}) => (
    <ProductCard
      key={item.id}
      data={{...item, images: item.images[0]}}
      onPress={() => {}}
    />
  );

  return (
    <View style={Styles.mainContainer}>
      <View style={Styles.searchContainer}>
        <InputField
          control={control}
          errors={errors}
          inputName="search"
          labelText="Search for products"
          customStyles={{width: wp('76%')}}
          left={<TextInput.Icon icon={Images.searchIcon} />}
        />

        <View style={Styles.filterButtonContainer}>
          <FilterButton />
        </View>
      </View>

      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={Styles.listColumnWrapper}
          contentContainerStyle={Styles.listContentContainer}
          data={allProducts}
          keyExtractor={data => data.id}
          renderItem={productListItem}
        />
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: wp('4%'),
    backgroundColor: Colors.white,
  },
  searchContainer: {
    flexDirection: 'row',
    marginVertical: hp('1%'),
    justifyContent: 'space-between',
  },
  filterButtonContainer: {
    marginTop: hp('0.8%'),
  },
  listColumnWrapper: {
    justifyContent: 'space-around',
  },
  listContentContainer: {
    paddingTop: hp('4%'),
    paddingBottom: hp('16%'),
  },
});
