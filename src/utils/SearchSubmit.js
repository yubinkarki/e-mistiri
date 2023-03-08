import {Alert, Keyboard} from 'react-native';

import ShowToast from './ShowToast';
import WaitTimeout from './WaitTimeout';

export default (data, setSearching, shop) => {
  if (data.search) {
    setSearching(true);

    WaitTimeout(1000).then(() => {
      setSearching(false);

      shop
        ? Alert.alert(
            "Here's your search data",
            `You searched for ${data.search}`,
            [{text: 'Got It'}],
            {
              cancelable: true,
            },
          )
        : ShowToast({
            type: 'success',
            title: "Here's your search data",
            subtitle: `You searched for ${data.search}`,
          });
    });
  } else {
    Keyboard.dismiss();

    Alert.alert(
      'Empty Search',
      'Please enter something in the search bar and try again.',
      [{text: 'Got It'}],
      {
        cancelable: true,
      },
    );
  }
};
