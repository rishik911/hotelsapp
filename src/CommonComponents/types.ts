export interface HeaderComponentProps {
  headerTitle: string;
  showBackButton: boolean;
  handleBackPress?: () => void;
  type: 'landing' | 'hotel-list';
  subTitle?: string;
}

export interface ButtonProps {
  buttonTitle: string;
  handleOnPress: () => void;
  isDisabled?: boolean;
}
