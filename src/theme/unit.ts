import {Dimensions} from 'react-native';

const MAX_PERCENT = 1.5;

const DESIGN_WIDTH = 390;

export const SCREEN_WIDTH = Dimensions.get('screen').width;

const WIDTH_PERCENTAGE = SCREEN_WIDTH / DESIGN_WIDTH;

const UNIT = WIDTH_PERCENTAGE > MAX_PERCENT ? MAX_PERCENT : WIDTH_PERCENTAGE;

export default UNIT;
