import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Tag, Percent } from 'lucide-react';

const WeeklyDeals = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const deals = [
    { id: 1, name: "Fiji Water 1L", oldPrice: 2.50, newPrice: 2.00, image: "/placeholder.svg", store: "Shop A" },
    { id: 2, name: "Tuna Can 185g", oldPrice: 3.00, newPrice: 2.50, image: "/placeholder.svg", store: "Shop B" },
    { id: 3, name: "Local Bananas 1kg", oldPrice: 4.00, newPrice: 3.50, image: "/placeholder.svg", store: "Shop C" },
    { id: 4, name: "Rice 5kg", oldPrice: 10.00, newPrice: 8.50, image: "/placeholder.svg", store: "Shop A" },
    { id: 5, name: "Chicken Breast 1kg", oldPrice: 12.00, newPrice: 10.00, image: "/placeholder.svg", store: "Shop B" },
    { id: 6, name: "Toilet Paper 12 Pack", oldPrice: 8.00, newPrice: 7.00, image: "/placeholder.svg", store: "Shop C" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient">
      <div className="palm-leaf palm-leaf-top-left"></div>
      <div className="palm-leaf palm-leaf-top-right"></div>
      <div className="palm-leaf palm-leaf-bottom-left"></div>
      <div className="palm-leaf palm-leaf-bottom-right"></div>

      <header className="bg-white bg-opacity-80 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-primary accent-text mb-4 md:mb-0">PriceFiji</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="text-foreground hover:text-secondary">Home</a></li>
              <li><a href="/compare" className="text-foreground hover:text-secondary">Price Comparison</a></li>
              <li><a href="/deals" className="text-foreground hover:text-secondary">Weekly Deals</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-white">Weekly Deals</h1>
        <div className="mb-8 flex flex-col md:flex-row">
          <Input
            type="text"
            placeholder="Search for a deal..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mb-4 md:mb-0 md:mr-4"
          />
          <Button className="pill-button bg-secondary text-white hover:bg-opacity-90">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <Card key={deal.id} className="bg-white bg-opacity-90">
              <CardContent className="p-4">
                <img src={deal.image} alt={deal.name} className="w-full h-48 object-cover mb-4 rounded-md" />
                <h3 className="font-semibold text-lg mb-2">{deal.name}</h3>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-500 line-through">${deal.oldPrice.toFixed(2)}</span>
                  <span className="text-accent font-bold">${deal.newPrice.toFixed(2)}</span>
                </div>
                <p className="text-sm text-gray-600">Available at: {deal.store}</p>
              </CardContent>
              <CardFooter className="justify-between">
                <Badge className="bg-primary text-white">
                  <Tag className="mr-1 h-4 w-4" />
                  Weekly Deal
                </Badge>
                <Badge className="bg-secondary text-white">
                  <Percent className="mr-1 h-4 w-4" />
                  Save {(((deal.oldPrice - deal.newPrice) / deal.oldPrice) * 100).toFixed(0)}%
                </Badge>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-white bg-opacity-80 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center space-x-4">
            <a href="/about" className="text-foreground hover:text-secondary">About Us</a>
            <a href="/contact" className="text-foreground hover:text-secondary">Contact</a>
            <a href="/privacy" className="text-foreground hover:text-secondary">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WeeklyDeals;