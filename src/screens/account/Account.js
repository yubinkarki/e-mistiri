import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {RewardPointCard, MenuItemData, MenuCard} from './components';
import {Images} from '@app/constants';
import {AccountStyles as Styles} from '@app/assets/styles';

export default function Account() {
  return (
    <View style={Styles.mainContainer}>
      <LinearGradient
        start={{x: 0.5, y: 0.1}}
        colors={['#FFF', '#B2AEEA']}
        style={Styles.topContainer}>
        <View style={Styles.imageContainer}>
          <Image
            source={Images.defaultProfile}
            style={Styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={Styles.nameContainer}>
          <Text style={Styles.name}>Chris Brown</Text>
        </View>

        <View style={Styles.emailContainer}>
          <Text style={Styles.email}>chris@brown.com</Text>
        </View>

        <View>
          <RewardPointCard />
        </View>
      </LinearGradient>

      <ScrollView contentContainerStyle={Styles.scrollContainer}>
        <View>
          {MenuItemData.map(item => (
            <MenuCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              leftIcon={item.leftIcon}
              rightIcon={item.rightIcon}
            />
          ))}
        </View>

        <View style={Styles.logoutCardContainer}>
          <View opacity={0.3} style={Styles.horizontalLine} />

          <MenuCard
            title="Logout"
            subtitle="Tap here to logout"
            leftIcon={<Images.logout />}
            rightIcon={<Images.rightArrow />}
          />
        </View>
      </ScrollView>
    </View>
  );
}
