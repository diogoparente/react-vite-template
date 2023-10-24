import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchData = async () => {
  const response = await axios.get(process.env.VITE_API_URL!);
  return response.data;
};

const App = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["fetchData"],
    queryFn: fetchData,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>Data: {data.data}</div>;
};

export default App;
