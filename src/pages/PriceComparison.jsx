import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Eye, Percent, ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

const PriceComparison = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { 
      id: 1, 
      name: "Fiji Water 1L", 
      image: "/placeholder.svg", 
      prices: { 
        "Shop A": { price: 2.50, discount: 10 }, 
        "Shop B": { price: 2.30, discount: 0 }, 
        "Shop C": { price: 2.40, discount: 5 } 
      } 
    },
    { 
      id: 2, 
      name: "Tuna Can 185g", 
      image: "/placeholder.svg", 
      prices: { 
        "Shop A": { price: 3.00, discount: 0 }, 
        "Shop B": { price: 2.80, discount: 15 }, 
        "Shop C": { price: 3.20, discount: 0 } 
      } 
    },
    { 
      id: 3, 
      name: "Local Bananas 1kg", 
      image: "/placeholder.svg", 
      prices: { 
        "Shop A": { price: 4.00, discount: 5 }, 
        "Shop B": { price: 3.80, discount: 0 }, 
        "Shop C": { price: 3.90, discount: 10 } 
      } 
    },
  ];

  const getBestDeal = (prices) => {
    let bestDeal = { shop: '', price: Infinity };
    Object.entries(prices).forEach(([shop, { price, discount }]) => {
      const discountedPrice = price * (1 - discount / 100);
      if (discountedPrice < bestDeal.price) {
        bestDeal = { shop, price: discountedPrice };
      }
    });
    return bestDeal;
  };

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
        <h1 className="text-3xl font-bold mb-8 text-white">Price Comparison</h1>
        <div className="mb-8 flex flex-col md:flex-row">
          <Input
            type="text"
            placeholder="Search for a product..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-md mb-4 md:mb-0 md:mr-4"
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
                <TableHead>Best Deal</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => {
                const bestDeal = getBestDeal(product.prices);
                return (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <img src={product.image} alt={product.name} className="w-12 h-12 object-cover mr-4 rounded-full" />
                        {product.name}
                      </div>
                    </TableCell>
                    {Object.entries(product.prices).map(([shop, { price, discount }]) => (
                      <TableCell key={shop}>
                        <div className="flex flex-col">
                          <span className={discount > 0 ? "line-through text-gray-500" : ""}>${price.toFixed(2)}</span>
                          {discount > 0 && (
                            <span className="text-accent font-bold">
                              ${(price * (1 - discount / 100)).toFixed(2)}
                              <Badge className="ml-2 bg-accent text-white">
                                <Percent className="mr-1 h-3 w-3" />
                                {discount}% OFF
                              </Badge>
                            </span>
                          )}
                        </div>
                      </TableCell>
                    ))}
                    <TableCell>
                      <Badge className="bg-primary text-white">
                        {bestDeal.shop}: ${bestDeal.price.toFixed(2)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm" className="pill-button">
                        <Eye className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Shop A', 'Shop B', 'Shop C'].map((shop) => (
            <Card key={shop}>
              <CardHeader>
                <CardTitle>{shop} Deals</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {products.map((product) => {
                    const { price, discount } = product.prices[shop];
                    const discountedPrice = price * (1 - discount / 100);
                    return (
                      <li key={product.id} className="flex justify-between items-center">
                        <span>{product.name}</span>
                        <div className="flex items-center">
                          <span className={discount > 0 ? "line-through text-gray-500 mr-2" : "mr-2"}>
                            ${price.toFixed(2)}
                          </span>
                          {discount > 0 && (
                            <span className="text-accent font-bold">
                              ${discountedPrice.toFixed(2)}
                            </span>
                          )}
                          {discount > 0 ? (
                            <ArrowDownIcon className="h-4 w-4 text-green-500 ml-1" />
                          ) : (
                            <ArrowUpIcon className="h-4 w-4 text-red-500 ml-1" />
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
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

export default PriceComparison;