import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChefHat, Utensils, Award, Truck } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz completamente editable para la página principal.
 * El agente IA puede modificar colores, textos, layout, etc.
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    blogs,
    loading,
    loadingCollections,
    loadingBlogs,
    searchTerm,
    selectedCollectionId,
    filteredProducts,
    setSearchTerm,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-culinary-50 via-warm-50 to-culinary-100 py-20 overflow-hidden hero-pattern">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f59e0b" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg">
                <ChefHat className="h-12 w-12 text-culinary-600" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-culinary-600 to-warm-600 bg-clip-text text-transparent">
                Cocina Profesional
              </span>
              <br />
              <span className="text-gray-800">en Casa</span>
            </h1>
            
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Descubre nuestra selección premium de utensilios de cocina profesionales. 
              Desde cuchillos artesanales hasta electrodomésticos de última generación.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
              <Input 
                type="text" 
                placeholder="Buscar utensilios de cocina..." 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                className="pl-12 py-4 text-lg border-2 border-white/50 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg focus:border-culinary-400 focus:ring-culinary-400"
              />
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg animate-slide-in">
                <Award className="h-8 w-8 text-culinary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Calidad Premium</h3>
                <p className="text-gray-700 text-sm">Productos seleccionados de las mejores marcas</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg animate-slide-in" style={{animationDelay: '0.2s'}}>
                <Truck className="h-8 w-8 text-culinary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Envío Rápido</h3>
                <p className="text-gray-700 text-sm">Entrega en 24-48h en toda España</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg animate-slide-in" style={{animationDelay: '0.4s'}}>
                <Utensils className="h-8 w-8 text-culinary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-2">Asesoramiento</h3>
                <p className="text-gray-700 text-sm">Expertos culinarios a tu disposición</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Nuestras Categorías
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explora nuestra amplia gama de utensilios organizados por categorías
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collections.map((collection, index) => (
                <div 
                  key={collection.id} 
                  className="animate-fade-in"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <CollectionCard 
                    collection={collection} 
                    onViewProducts={handleViewCollectionProducts} 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedCollectionId 
                  ? `${collections.find(c => c.id === selectedCollectionId)?.name || 'Productos'}` 
                  : 'Productos Destacados'
                }
              </h2>
              <p className="text-gray-600">
                {selectedCollectionId 
                  ? 'Productos seleccionados de esta categoría'
                  : 'Los mejores utensilios de cocina para profesionales y aficionados'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
                className="border-culinary-300 text-culinary-700 hover:bg-culinary-50"
              >
                Ver Todos los Productos
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-100 rounded-xl h-96 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div 
                  key={product.id} 
                  className="animate-fade-in"
                  style={{animationDelay: `${index * 0.05}s`}}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="bg-gray-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                <Utensils className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {searchTerm 
                  ? 'No encontramos productos' 
                  : 'No hay productos disponibles'
                }
              </h3>
              <p className="text-gray-600">
                {searchTerm 
                  ? 'Intenta con otros términos de búsqueda' 
                  : 'Pronto tendremos nuevos productos disponibles'
                }
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-culinary-600 to-warm-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Recetas y Consejos Exclusivos
            </h2>
            <p className="text-white/90 mb-6 text-lg">
              Suscríbete y recibe las mejores recetas y consejos de cocina profesional
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Tu email" 
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
              />
              <Button className="bg-white text-culinary-600 hover:bg-white/90 font-semibold px-8">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FloatingCart />
    </EcommerceTemplate>
  );
};