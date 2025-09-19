import { ReactNode } from 'react'
import { PageTemplate } from './PageTemplate'
import { BrandLogoLeft } from '@/components/BrandLogoLeft'
import { SocialLinks } from '@/components/SocialLinks'
import { FloatingCart } from '@/components/FloatingCart'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ShoppingCart, ChefHat, Phone, Mail, MapPin } from 'lucide-react'
import { useCartUI } from '@/components/CartProvider'
import { useCart } from '@/contexts/CartContext'

/**
 * EDITABLE TEMPLATE - EcommerceTemplate
 * 
 * Template específico para páginas de ecommerce con header, footer y cart.
 * El agente IA puede modificar completamente el diseño, colores, layout.
 */

interface EcommerceTemplateProps {
  children: ReactNode
  pageTitle?: string
  showCart?: boolean
  className?: string
  headerClassName?: string
  footerClassName?: string
  layout?: 'default' | 'full-width' | 'centered'
}

export const EcommerceTemplate = ({
  children,
  pageTitle,
  showCart = true,
  className,
  headerClassName,
  footerClassName,
  layout = 'default'
}: EcommerceTemplateProps) => {
  const { openCart } = useCartUI()
  const { getTotalItems } = useCart()
  const totalItems = getTotalItems()

  const header = (
    <div className={`bg-white shadow-sm border-b border-gray-100 ${headerClassName}`}>
      <div className="bg-gradient-to-r from-culinary-600 to-warm-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-sm">
            <span className="font-medium">🚚 Envío gratis en pedidos superiores a 50€</span>
          </div>
        </div>
      </div>
      
      <div className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-culinary-500 to-warm-500 p-2 rounded-xl">
                  <ChefHat className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-culinary-600 to-warm-600 bg-clip-text text-transparent">
                    CocinaShop
                  </h1>
                  <p className="text-xs text-gray-500 -mt-1">Utensilios Profesionales</p>
                </div>
              </Link>
            </div>

            {/* Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <nav className="flex space-x-6">
                <Link 
                  to="/" 
                  className="text-gray-700 hover:text-culinary-600 transition-colors font-medium"
                >
                  Inicio
                </Link>
                <Link 
                  to="/blog" 
                  className="text-gray-700 hover:text-culinary-600 transition-colors font-medium"
                >
                  Blog
                </Link>
                <a 
                  href="#contacto" 
                  className="text-gray-700 hover:text-culinary-600 transition-colors font-medium"
                >
                  Contacto
                </a>
              </nav>
            </div>

            {/* Cart */}
            {showCart && (
              <Button
                variant="ghost"
                size="icon"
                onClick={openCart}
                className="relative hover:bg-culinary-50 transition-colors"
              >
                <ShoppingCart className="h-6 w-6 text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-culinary-500 to-warm-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-lg">
                    {totalItems > 99 ? '99+' : totalItems}
                  </span>
                )}
              </Button>
            )}
          </div>

          {/* Page Title */}
          {pageTitle && (
            <div className="mt-6">
              <h1 className="text-3xl font-bold text-gray-900">
                {pageTitle}
              </h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  const footer = (
    <div className={`bg-gray-900 text-white ${footerClassName}`}>
      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-culinary-500 to-warm-500 p-2 rounded-xl">
                  <ChefHat className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">CocinaShop</h3>
                  <p className="text-gray-400 text-sm">Utensilios Profesionales</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Tu tienda de confianza para utensilios de cocina profesionales. 
                Más de 10 años equipando las mejores cocinas de España.
              </p>
              <SocialLinks />
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Navegación</h4>
              <div className="space-y-3">
                <Link 
                  to="/" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Inicio
                </Link>
                <Link 
                  to="/blog" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Blog de Cocina
                </Link>
                <a 
                  href="#" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Sobre Nosotros
                </a>
                <a 
                  href="#" 
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  Política de Devoluciones
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-6 text-white text-lg">Contacto</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-culinary-400" />
                  <span className="text-gray-300">+34 900 123 456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-culinary-400" />
                  <span className="text-gray-300">info@cocinashop.es</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-culinary-400 mt-1" />
                  <span className="text-gray-300">
                    Calle de la Cocina, 123<br />
                    28001 Madrid, España
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              &copy; 2024 CocinaShop. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <PageTemplate 
        header={header}
        footer={footer}
        className={className}
        layout={layout}
      >
        {children}
      </PageTemplate>
      
      {showCart && <FloatingCart />}
    </>
  )
}