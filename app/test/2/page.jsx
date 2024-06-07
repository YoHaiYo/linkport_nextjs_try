// App.js\
import { ThemeProvider } from './ThemeContext';
import ThemedComponent from './ThemedComponent';

export default function Test() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}