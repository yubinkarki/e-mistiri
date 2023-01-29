import React, {useState} from 'react';
import {View, Text, Image, ScrollView, Share} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  RewardPointCard,
  MenuItemData,
  MenuCard,
  BottomPopModal,
  LogoutCard,
} from './components';
import {Images} from '@app/constants';
import {AccountStyles as Styles} from '@app/assets/styles';

export default function Account({navigation}) {
  const menuNavigationHandler = menuId => {
    switch (menuId) {
      case 1:
        navigation.navigate('Profile');
        break;

      case 3:
        shareHandler();
        break;

      default:
        break;
    }
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const shareHandler = async () => {
    try {
      await Share.share(
        {
          title: 'Title',
          message: 'This is the message to be shared.',
        },
        {
          dialogTitle: 'Title of the dialog box.',
        },
      );
    } catch (error) {
      alert(error.message);
    }
  };

  const logoutHandler = () => {};

  return (
    <View style={Styles.mainContainer}>
      <LinearGradient
        start={{x: 0.5, y: 0.1}}
        colors={['#FFF', '#A9ACD3']}
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
              onPress={() => menuNavigationHandler(item.id)}
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
            onPress={toggleModal}
          />
        </View>

        <BottomPopModal
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
          closeModal={closeModal}>
          <LogoutCard
            closeModalHandler={closeModal}
            logoutHandler={logoutHandler}
          />
        </BottomPopModal>
      </ScrollView>
    </View>
  );
}
