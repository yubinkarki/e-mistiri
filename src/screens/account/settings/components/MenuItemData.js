import {Images} from '@app/constants';

export default MenuItemData = [
  {
    id: 1,
    text: 'Change Password',
    left: <Images.changePassword />,
    right: <Images.rightArrow />,
  },
  {
    id: 2,
    text: 'Change Language',
    left: <Images.changeLanguage />,
    right: <Images.rightArrow />,
  },
  {
    id: 3,
    text: 'Notification',
    left: <Images.notification />,
    right: '',
    toggleStatus: true,
  },
  {
    id: 4,
    text: 'Dark Mode',
    left: <Images.darkMode />,
    right: '',
    toggleStatus: false,
  },
  {
    id: 5,
    text: 'Privacy Policy',
    left: <Images.privacy />,
    right: <Images.rightArrow />,
  },
];
