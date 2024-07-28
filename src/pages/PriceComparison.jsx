import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const PriceComparison = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: "Fiji Water 1L", image: "/placeholder.svg", prices: { "Shop A": 2.50, "Shop B": 2.30, "Shop C": 2.40 } },
    { id: 2, name: "Tuna Can 185g", image: "/placeholder.svg", prices: { "Shop A": 3.00, "Shop B": 2.80, "Shop C": 3.20 } },
    { id: 3, name: "Local Bananas 1kg", image: "/placeholder.svg", prices: { "Shop A": 4.00, "Shop B": 3.80, "Shop C": 3.90 } },
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
        <h1 className="text-3xl font-bold mb-8">Price Comparison</h1>
        <div className="mb-8">
          <Input
            type="text"
            placeholder="Search for a product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mb-4"
          />
          <Button>Search</Button>
        </div>

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
                    <img src={product.image} alt={product.name} className="w-12 h-12 object-cover mr-4" />
                    {product.name}
                  </div>
                </TableCell>
                <TableCell>${product.prices["Shop A"].toFixed(2)}</TableCell>
                <TableCell>${product.prices["Shop B"].toFixed(2)}</TableCell>
                <TableCell>${product.prices["Shop C"].toFixed(2)}</TableCell>
                <TableCell>
                  <Button variant="outline" size="sm">View Details</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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

export default PriceComparison;