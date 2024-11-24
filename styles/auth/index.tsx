import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
  },
  sectionHorizontal: {paddingHorizontal: 22, gap: 8},
  pairActionButtons: {
    padding: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionLogoHero: {
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 22,
    paddingTop: 44,
  },
  logoHero: {
    width: 160,
  },
});
