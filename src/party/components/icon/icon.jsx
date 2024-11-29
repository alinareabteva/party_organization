import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {PencilIcon as EditIcon} from "./icons/PencilIcon";
import {AtomIcon} from "./icons/AtomIcon";
import {DeleteIcon} from "./icons/DeleteIcon";
import {HomeIcon} from "./icons/HomeIcon";
import {SpinnerIcon} from "./icons/SpinnerIcon";
import {AvatarIcon} from "./icons/AvatarIcon";
import {CloseIcon} from "./icons/CloseIcon";
import {LetterIcon} from "./icons/LetterIcon";
import {MessageIcon} from "./icons/MessageIcon";
import {PhoneIcon} from "./icons/PhoneIcon";
import {NotificationIcon} from "./icons/NotificationIcon";
import {WifiIcon} from "./icons/WifiIcon";
import {WarningIcon} from "./icons/WarningIcon";
import {AlertIcon} from "./icons/AlertIcon";
import {SuccessIcon} from "./icons/SuccessIcon";
import {InfoIcon} from "./icons/InfoIcon";
import {DatabaseIcon} from "./icons/DatabaseIcon";



import './icon.css';

export const IconNames = Object.freeze({
  Edit: 'edit',
  Atom: 'atom',
  Delete: 'delete',
  Home: 'home',
  Spinner: 'spinner',
  Avatar: 'avatar',
  Close: 'close',
  Letter: 'letter',
  Message: 'message',
  Phone: 'phone',
  Notification: 'notification',
  Wifi: 'wifi',
  Warning: 'warning',
  Alert: 'alert',
  Success: 'success',
  Info: 'info',
  DataBase: 'database'
})

export const IconSizes = {
  small: '1em',
  badgeIcon: '2em',
  medium: "3em",
  large: '5em',
  huge: '8em',
  presentation: '50%'
}

const IconByName = {
  [IconNames.Edit]: EditIcon,
  [IconNames.Atom]: AtomIcon,
  [IconNames.Delete]: DeleteIcon,
  [IconNames.Home]: HomeIcon,
  [IconNames.Spinner]: SpinnerIcon,
  [IconNames.Avatar]: AvatarIcon,
  [IconNames.Close]: CloseIcon,
  [IconNames.Letter]: LetterIcon,
  [IconNames.Message]: MessageIcon,
  [IconNames.Phone]: PhoneIcon,
  [IconNames.Notification]: NotificationIcon,
  [IconNames.Wifi]: WifiIcon,
  [IconNames.Warning]: WarningIcon,
  [IconNames.Alert]: AlertIcon,
  [IconNames.Success]: SuccessIcon,
  [IconNames.Info]: InfoIcon,
  [IconNames.DataBase]: DatabaseIcon
}

const Icon = ({
  name = '', 
  className = '', 
  size = null, 
  onClick = null, 
  disabled = false,
  ...attrs
}) => {
  const classes = classNames({
    'icon-wrapper': true,
    [className]: !className,
    disabled,
    action: !!onClick
  });
  const IconToRender = IconByName[name];
  if (!IconToRender) {
    return null;
  }

  return (
    <span style={{width: size}}className={classes} onClick={disabled ? undefined : onClick}>
      <IconToRender {...attrs}/>
    </span>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf(Object.values(IconNames)),
  className: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default Icon;