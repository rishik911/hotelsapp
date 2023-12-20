export interface LandingPageProps {}

export interface LocationListProps {
  area: string;
  cityState: string;
}

export interface ComponentCardProps {
  title: string;
  onPressHandler: () => {};
  type: 'date-picker' | 'input';
}
