import React, {useEffect} from 'react';
import {useAutoCompleteLocationProps} from './types';
import {BASE_URL, ENDPOINTS, makeGetCall} from '../Utils';

const useAutoCompleteLocation: React.FC<useAutoCompleteLocationProps> = ({
  query,
}) => {
  useEffect(() => {
   
  }, [query]);

  return <></>;
};

export default useAutoCompleteLocation;
