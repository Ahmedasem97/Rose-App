export const baseUrl = 'https://flower.elevateegy.com/api/v1/';

// Forms Pattern
export const PASSWORD_PATTERN = '^(?=.*[A-Z])(?=.*d).{6,}$';
export const USERNAME_PATTERN = '^[A-Za-z]{4,25}$';
export const NAME_PATTERN = '^[a-zA-Z]{2,}$';
export const PHONE_PATTERN = '^\\+20(1[0-9]{9})$';

// Default Values
export const Default_Pass = 'P@ssw0rd';
export const Default_Phone = '01272040125';

// Animation

export const AnimationConfig = {
  scale: {
    hide: 'scale(0)',
    show: 'scale(1)',
  },
  animationTime: {
    speed: '0.3s',
    normal: '0.5s',
    slow: '1s',
  },
  transitionEffect: {
    easeIn: 'ease-in',
    easeOut: 'ease-out',
  },
};
