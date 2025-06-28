import notiIcon from '@assets/icons/notification.svg';
import notiActiveIcon from '@assets/icons/notification-active.svg';

function NotiIcon() {
  return <img src={notiIcon} />;
}

function NotiActiveIcon() {
  return <img src={notiActiveIcon} />;
}

export { NotiIcon, NotiActiveIcon };
