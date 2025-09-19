import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Package } from 'lucide-react'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="bg-white border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden relative">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <Package className="h-16 w-16" />
            </div>
          )}
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Featured badge */}
          {collection.featured && (
            <div className="absolute top-3 right-3">
              <span className="bg-gradient-to-r from-culinary-500 to-warm-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">
                Destacado
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-gray-900 font-bold text-xl line-clamp-1 group-hover:text-culinary-600 transition-colors">
              {collection.name}
            </h3>
          </div>
          
          {collection.description && (
            <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
              {collection.description}
            </p>
          )}
          
          <Button 
            className="w-full bg-gradient-to-r from-culinary-500 to-warm-500 hover:from-culinary-600 hover:to-warm-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200 group"
            onClick={() => onViewProducts(collection.id)}
          >
            <span>Ver Productos</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}