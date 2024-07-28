import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const featuredDeals = [
    { id: 1, name: "Fiji Water 1L", oldPrice: 2.50, newPrice: 2.00, image: "/placeholder.svg" },
    { id: 2, name: "Tuna Can 185g", oldPrice: 3.00, newPrice: 2.50, image: "/placeholder.svg" },
    { id: 3, name: "Local Bananas 1kg", oldPrice: 4.00, newPrice: 3.50, image: "/placeholder.svg" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-purple-600">PriceFiji</div>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/" className="text-gray-600 hover:text-purple-600">Home</a></li>
              <li><a href="/compare" className="text-gray-600 hover:text-purple-600">Price Comparison</a></li>
              <li><a href="/deals" className="text-gray-600 hover:text-purple-600">Weekly Deals</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Compare Prices Across Fiji</h1>
          <p className="text-xl text-gray-600 mb-8">Find the best deals on groceries and household items.</p>
          <div className="max-w-md mx-auto">
            <Input
              type="text"
              placeholder="Search for a product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mb-4"
            />
            <Button className="w-full">Search</Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Featured Weekly Deals</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDeals.map((deal) => (
              <Card key={deal.id}>
                <CardContent className="p-4">
                  <img src={deal.image} alt={deal.name} className="w-full h-48 object-cover mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{deal.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 line-through">${deal.oldPrice.toFixed(2)}</span>
                    <span className="text-green-600 font-bold">${deal.newPrice.toFixed(2)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Badge className="bg-green-100 text-green-800">
                    Save {(((deal.oldPrice - deal.newPrice) / deal.oldPrice) * 100).toFixed(0)}%
                  </Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center space-x-4">
            <a href="/about" className="text-gray-600 hover:text-purple-600">About Us</a>
            <a href="/contact" className="text-gray-600 hover:text-purple-600">Contact</a>
            <a href="/privacy" className="text-gray-600 hover:text-purple-600">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;