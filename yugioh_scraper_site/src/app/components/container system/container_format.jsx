import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Search from "./components/hero/HeroSection";

export default function Container_format() {
const [searchResults, setSearchResults] = useState([]);
const [searchCompleted, setSearchCompleted] = useState(false);

const handleSearchResults = (results) => {
    setSearchResults(results);
    setSearchCompleted(true);
};

return (
    <div className="flex flex-col items-center justify-center h-screen">
    <Search onSearch={handleSearchResults} />
    {searchCompleted && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {searchResults.map((result, index) => (
            <Card key={index} className="p-6 bg-white dark:bg-gray-950 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">{result.split(':')[0]}</h2>
                <div className="flex items-center gap-2">
                    <span className="text-lg font-semibold">{result.split(':')[1]}</span>
                    {result.split(':')[2] > 0? (
                    <span className="text-sm text-green-500 dark:text-green-400">In Stock: {result.split(':')[2]}</span>
                    ) : (
                    <span className="text-sm text-red-500 dark:text-red-400">Out of Stock</span>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Rarity: {result.split(':')[3]}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Last Updated: {result.split(':')[4]}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Vendor: {result.split(':')[5]}</span>
                </div>
                </div>
                <div className="flex items-center justify-end">
                <Button as="a" href="#" className="px-6 py-3 rounded-lg">
                    Visit Store
                </Button>
                </div>
            </div>
            </Card>
        ))}
        </div>
    )}
    </div>
    );
}