import './App.css';
import AutoGrid from './component/Grid';
import CustomizedInputBase from './component/SearchBar';
import Container from '@material-ui/core/Container';


function App() {
  return (
    <Container maxWidth="lg">
      <CustomizedInputBase />
      <AutoGrid />
    </Container>
  );
}

export default App;
