import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Eye } from 'lucide-react';

const PriceComparison = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: "Fiji Water 1L", image: "/placeholder.svg", prices: { "Shop A": 2.50, "Shop B": 2.30, "Shop C": 2.40 } },
    { id: 2, name: "Tuna Can 185g", image: "/placeholder.svg", prices: { "Shop A": 3.00, "Shop B": 2.80, "Shop C": 3.20 } },
    { id: 3, name: "Local Bananas 1kg", image: "/placeholder.svg", prices: { "Shop A": 4.00, "Shop B": 3.80, "Shop C": 3.90 } },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient">
      <div className="palm-leaf palm-leaf-top-left"></div>
      <div className="palm-leaf palm-leaf-top-right"></div>
      <div className="palm-leaf palm-leaf-bottom-left"></div>
      <div className="palm-leaf palm-leaf-bottom-right"></div>

      <header className="bg-white bg-opacity-80 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary accent-text">PriceFiji</div>
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
        <h1 className="text-3xl font-bold mb-8 text-white">Price Comparison</h1>
        <div className="mb-8 flex">
          <Input
            type="text"
            placeholder="Search for a product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mr-4"
          />
          <Button className="pill-button bg-secondary text-white hover:bg-opacity-90">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>

        <div className="bg-white bg-opacity-90 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Shop A</TableHead>
                <TableHead>Shop B</TableHead>
                <TableHead>Shop C</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center">
                      <img src={product.image} alt={product.name} className="w-12 h-12 object-cover mr-4 rounded-full" />
                      {product.name}
                    </div>
                  </TableCell>
                  <TableCell>${product.prices["Shop A"].toFixed(2)}</TableCell>
                  <TableCell>${product.prices["Shop B"].toFixed(2)}</TableCell>
                  <TableCell>${product.prices["Shop C"].toFixed(2)}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="pill-button">
                      <Eye className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
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

export default PriceComparison;