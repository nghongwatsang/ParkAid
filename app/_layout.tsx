import { Stack } from 'expo-router';
import SpotProvider from '~/provider/spotProvider';

export default function Layout() {
  return (
      <SpotProvider>

      <Stack />
      </SpotProvider>
  );
}
