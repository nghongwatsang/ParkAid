import { Stack } from 'expo-router';
import SpotProvider from '~/provider/SpotProvider';

export default function Layout() {
  return (
      <SpotProvider>

      <Stack />
      </SpotProvider>
  );
}
